var roi = ee.FeatureCollection("projects/ee-learning-rahi/assets/BGD_adm3");
var upzla = roi.filter(ee.Filter.eq("NAME_3", "Maulvibazar S."))
Map.centerObject(upzla,10)
Map.addLayer(upzla,{},"Maulvibazar S.")

var s2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
          .filterBounds(upzla)
          .filterDate('2023-01-01', '2023-12-31')
          .filter(ee.Filter.lt("CLOUDY_PIXEL_PERCENTAGE",10))
          //.first()
print(s2)
function calNDWI(image){
  var ndwi = image.normalizedDifference(["B3","B8"]).rename("NDWI")
  return ndwi
}
var ndwiCollection = s2.map(calNDWI)
print(ndwiCollection)
/*var ndvi = s2.normalizedDifference(["SR_B5","SR_B4"]).rename("NDVI")
print("NDVI", ndvi)*/
var nd = ndwiCollection.size();
var ndwi2 = ee.Image(ndwiCollection.toList(nd).get(1))
var vizParam = {
  min: -1,
  max: 1,
  palette: ["blue","cyan","yellow","green",]
}
Map.addLayer(ndwi2.clip(upzla),vizParam,"NDWI")