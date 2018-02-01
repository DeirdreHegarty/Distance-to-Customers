// origin coordinates in degrees
llat = 53.339428;
llong = -6.257664;

// convert degrees to radians
function degToRad(deg) {
  return deg * (Math.PI/180)
}

// using Haversine to calc distance between lat long points
function Haversine(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km

  // convert to radians using function below
  var rad1 = degToRad(lat1);
  var rad2 = degToRad(lat2);
  var dLat = degToRad(lat2-lat1); 
  var dLon = degToRad(lon2-lon1); 

  // Haversine formula a,c values & return d
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad1) * Math.cos(rad2) * Math.sin(dLon/2) * Math.sin(dLon/2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  return R * c; // d (in km)
}

module.exports.Haversine = Haversine;
module.exports.degToRad = degToRad;