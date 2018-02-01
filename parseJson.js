function loadCustomers(){
	$.ajax({
	    type: "GET",
	    url: "customers.json", 

	    success: function(data){
	        var clients = jQuery.parseJSON(data);
	        var temp = [];
			for (var i = 0; i < clients.length; i++){
				var tlat = clients[i].latitude;
				var tlong = clients[i].longitude;
				var checkDis = getDistanceFromLatLonInKm(llat,llong,tlat, tlong)
				if(checkDis <= 100){
					var t = {"name" : clients[i].name , "user_id" : clients[i].user_id };
					temp.push(t); //array of objs
				}
			} 
			temp.sort( GetSortOrder("user_id") );
			for (var item in temp) {
			 document.write("ID: "+temp[item].user_id+", NAME: "+temp[item].name+"<br/>");
			}
	    }
	});
}

function GetSortOrder(prop){
   return function(a,b){
      if( a[prop] > b[prop]){
          return 1;
      }else if( a[prop] < b[prop] ){
          return -1;
      }
      return 0;
   }
}

function getOfficeDistance(ulat, ulong){
	llat = 53.339428;
	llong = -6.257664;

	radlat = llat - ulat;
	radlong = llong - ulong;
}

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

llat = 53.339428;
llong = -6.257664;
loadCustomers();