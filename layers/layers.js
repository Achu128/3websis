var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_FIXEDKALADYPANCHAYAT_1 = new ol.format.GeoJSON();
var features_FIXEDKALADYPANCHAYAT_1 = format_FIXEDKALADYPANCHAYAT_1.readFeatures(json_FIXEDKALADYPANCHAYAT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FIXEDKALADYPANCHAYAT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FIXEDKALADYPANCHAYAT_1.addFeatures(features_FIXEDKALADYPANCHAYAT_1);
var lyr_FIXEDKALADYPANCHAYAT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FIXEDKALADYPANCHAYAT_1, 
                style: style_FIXEDKALADYPANCHAYAT_1,
                popuplayertitle: 'FIXED KALADY PANCHAYAT',
                interactive: true,
                title: '<img src="styles/legend/FIXEDKALADYPANCHAYAT_1.png" /> FIXED KALADY PANCHAYAT'
            });
var format_Clipped_2 = new ol.format.GeoJSON();
var features_Clipped_2 = format_Clipped_2.readFeatures(json_Clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_2.addFeatures(features_Clipped_2);
var lyr_Clipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_2, 
                style: style_Clipped_2,
                popuplayertitle: 'Clipped',
                interactive: false,
                title: '<img src="styles/legend/Clipped_2.png" /> Clipped'
            });
var format_Clipped_3 = new ol.format.GeoJSON();
var features_Clipped_3 = format_Clipped_3.readFeatures(json_Clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_3.addFeatures(features_Clipped_3);
var lyr_Clipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_3, 
                style: style_Clipped_3,
                popuplayertitle: 'Clipped',
                interactive: false,
                title: '<img src="styles/legend/Clipped_3.png" /> Clipped'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_FIXEDKALADYPANCHAYAT_1.setVisible(true);lyr_Clipped_2.setVisible(true);lyr_Clipped_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_FIXEDKALADYPANCHAYAT_1,lyr_Clipped_2,lyr_Clipped_3];
lyr_FIXEDKALADYPANCHAYAT_1.set('fieldAliases', {'id': 'id', 'polygonn': 'polygonn', });
lyr_Clipped_2.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_Clipped_3.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_FIXEDKALADYPANCHAYAT_1.set('fieldImages', {'id': '', 'polygonn': '', });
lyr_Clipped_2.set('fieldImages', {'ROCK_GROUP': '', 'NAME': '', });
lyr_Clipped_3.set('fieldImages', {'NAME': '', 'TYPE1': '', 'TYPE2': '', });
lyr_FIXEDKALADYPANCHAYAT_1.set('fieldLabels', {'id': 'no label', 'polygonn': 'no label', });
lyr_Clipped_2.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_Clipped_3.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Clipped_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});