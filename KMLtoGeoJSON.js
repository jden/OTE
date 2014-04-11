// Put the JSON in this here array!
var json = [];

var geojson = {};

// This script only does point features.
function addGeometry(feature) {
  feature.geometry = {};
  feature.geometry.type = "Point";
  feature.geometry.coordinates = [feature.point.lat, feature.point.lng];
};

// Remove any properties you don't want.
function addProps(feature) {
  feature.properties = {};
  feature.properties.title = feature.title;
  feature.properties.url = feature.url;
  feature.properties.body = feature.body;
  feature.properties.address = feature.address;
  feature.properties.correctedAddress = feature.correctedAddress;
  feature.properties.iconid = feature.iconid;
};

function deleteKeys(feature) {
  delete feature.url;
  delete feature.body;
  delete feature.address;
  delete feature.correctedAddress;
  delete feature.iconid;
  delete feature.viewport;
  delete feature.user;
  delete feature.showPoiList;
  delete feature.poiListTemplate;
  delete feature.point;
  delete feature.title;
};

function makeGeoJSON(json) {
  geojson = {
    "type": "FeatureCollection",
    "features": json
  };
};

for (var i in json) {
  addGeometry(json[i]);
  addProps(json[i]);
  deleteKeys(json[i]);
};

makeGeoJSON(json);

console.log(JSON.stringify(geojson, null, '\t'));