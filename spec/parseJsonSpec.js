var H = require('../Haversine.js');

describe("Haversine", function() {
	it("should get the distance between a sample customer and the origin", function() {
		lat1 = 52.986375;
		long1 = -6.043701;

		lat2 = 53.339428;
		long2 = -6.257664;

		expect(H.Haversine(lat1, long1, lat2, long2)).toEqual(41.7687255008362);
	})
});