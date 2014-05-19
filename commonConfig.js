define(
[],
function() {
  var config = {
    bingMapsKey:"",   
    units: "metric",
    helperServices: {
       geometry:{
        url: location.protocol + "//utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
       },
       printTask: {
        url: location.protocol + "//utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
       },
       elevationSync:{
         url: location.protocol + "//elevation.arcgis.com/arcgis/rest/services/Tools/ElevationSync/GPServer"
       },
       geocode: [{
        url: location.protocol + "//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
       }]
    },
    zoomToRegionOptions: [
        {
            name: "Barkly",
            extent: { "xmin": 14655997.1555, "ymin": -1595077.605, "xmax": 14771524.6649, "ymax": -1843454.8669 }
        }
        //,
        //{
        //    name: "Katherine",
        //    extent: 2
        //}
    ]
};
  
  // could use a has() test to optionally populate some global
  // property so that the stuff defined is in some global identifier
  //
  // instead, just populate a global, will need to remove the next line when
  // when we remove support for loading modules with dojo.require
  // which will be when we move to Dojo 2.0
  commonConfig = config;
  // instead of using a global, this should probably be added to some namespace...
  // do the templates have a common namespace that they use?

  return config;  
});
