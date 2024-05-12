First I filtered out Moulvibazar sadar upazila from administrative border shape file. Then from Sentinel-2 imagery I filtered by date('2023-01-01', '2023-12-31'), upazila boundary and cloud cover. After that called a function to calculate NDVI for every image in the filterd out Sentinel-2 imagery. Then we call a image from the new collection of image and visualize it in new layer.

[NDWI Moulvibazar Sadar Upazila Image](https://github.com/AtikulRahi/ndwiupazila/blob/main/NDWI%20Moulvibazar%20upazilla.JPG)

[NDWI Moulvibazar Sadar Upazila Code](https://github.com/AtikulRahi/ndwiupazila/blob/main/ndwiupazila.js)

[NDWI Moulvibazar Sadar Upazila GEE Code link](https://code.earthengine.google.com/5a3772c3ec0574aa692dfe824672f523)

