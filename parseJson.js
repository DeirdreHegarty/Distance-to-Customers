function GetSortOrder(byAttr){
   return function(a,b){
      // cannot write a.byAttr > b.byAttr
      if(a[byAttr] > b[byAttr]){
          return 1;
      }else if(a[byAttr] < b[byAttr]){
          return -1;
      }
      return 0;
   }
}

// get customers from file
function loadCustomers(byAttr){
    $.ajax({
        type: "GET",
        url: "https://gist.githubusercontent.com/brianw/19896c50afa89ad4dec3/raw/6c11047887a03483c50017c1d451667fd62a53ca/gistfile1.txt", 
        success: function(data){

            // read in url and convert to array of json objs
            var clients =[];
            data = data.split("\n");
            for(i in data){
                clients.push(jQuery.parseJSON(data[i]));
            }

            var invitedCustomers = [];

            // calc distance to each customer and check if <=100km away from origin
            for (var i in clients){
                var checkDis = Haversine(llat, llong, clients[i].latitude, clients[i].longitude)
                if(checkDis <= 100){
                    var t = {"name" : clients[i].name , "user_id" : clients[i].user_id };
                    invitedCustomers.push(t); //array of objs
                }
            }

            // sort invitedCustomers by user_id
            // note - functionality to sort by another attribute if wish
            invitedCustomers.sort( GetSortOrder(byAttr) );
            for (var i in invitedCustomers) {
                document.write("ID: " + invitedCustomers[i].user_id + ", NAME: " + invitedCustomers[i].name + "<br/>");
            }
        }
    });
}

loadCustomers("user_id");

