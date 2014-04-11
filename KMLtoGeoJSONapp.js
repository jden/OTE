var json, geojson;

// This script only does point features.
function addGeometry(feature) {
  debugger;
  feature.geometry = {};
  feature.geometry.type = "Point";
  feature.geometry.coordinates = [feature.point.lat, feature.point.lng];
};

// Remove any properties you don't want.
function addProps(feature) {
  debugger;
  feature.properties = {};
  feature.properties.title = feature.title;
  feature.properties.url = feature.url;
  feature.properties.body = feature.body;
  feature.properties.address = feature.address;
  feature.properties.correctedAddress = feature.correctedAddress;
  feature.properties.iconid = feature.iconid;
};

function deleteKeys(feature) {
  debugger;
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
  debugger;
  geojson = {
    "type": "FeatureCollection",
    "features": json
  };
};

function displayGeoJSON(geojson) {
  debugger;
  formattedGeoJSON = JSON.stringify(geojson, null, '\t');
  $('#convertedGeoJSON').html('<code><pre>' + formattedGeoJSON + '</pre></code>');
};

function fullConvert(json) {
  debugger;
  for (var i in json) {
    debugger;
    addGeometry(json[i]);
    addProps(json[i]);
    deleteKeys(json[i]);
    makeGeoJSON(json);
    displayGeoJSON(geojson);
};

$('#pasteJSON').submit(function(e) {
  /*debugger;
  e.preventDefault;
  var submitted = $('#pastedJSON').val();
  json = submitted;
  fullConvert(json);*/
  e.preventDefault();
};
