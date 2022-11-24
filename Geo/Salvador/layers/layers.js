var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_HD_MASSA_DAGUA_1 = new ol.format.GeoJSON();
var features_HD_MASSA_DAGUA_1 = format_HD_MASSA_DAGUA_1.readFeatures(json_HD_MASSA_DAGUA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HD_MASSA_DAGUA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HD_MASSA_DAGUA_1.addFeatures(features_HD_MASSA_DAGUA_1);
var lyr_HD_MASSA_DAGUA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HD_MASSA_DAGUA_1, 
                style: style_HD_MASSA_DAGUA_1,
                interactive: true,
                title: '<img src="styles/legend/HD_MASSA_DAGUA_1.png" /> HD_MASSA_DAGUA'
            });
var format_HD_MID_CURSO_DAGUA_2 = new ol.format.GeoJSON();
var features_HD_MID_CURSO_DAGUA_2 = format_HD_MID_CURSO_DAGUA_2.readFeatures(json_HD_MID_CURSO_DAGUA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HD_MID_CURSO_DAGUA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HD_MID_CURSO_DAGUA_2.addFeatures(features_HD_MID_CURSO_DAGUA_2);
var lyr_HD_MID_CURSO_DAGUA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HD_MID_CURSO_DAGUA_2, 
                style: style_HD_MID_CURSO_DAGUA_2,
                interactive: true,
                title: '<img src="styles/legend/HD_MID_CURSO_DAGUA_2.png" /> HD_MID_CURSO_DAGUA'
            });
var format_LM_UF_3 = new ol.format.GeoJSON();
var features_LM_UF_3 = format_LM_UF_3.readFeatures(json_LM_UF_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LM_UF_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LM_UF_3.addFeatures(features_LM_UF_3);
var lyr_LM_UF_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LM_UF_3, 
                style: style_LM_UF_3,
                interactive: true,
                title: '<img src="styles/legend/LM_UF_3.png" /> LM_UF'
            });
var format_LM_MUNICIPIO_2007_4 = new ol.format.GeoJSON();
var features_LM_MUNICIPIO_2007_4 = format_LM_MUNICIPIO_2007_4.readFeatures(json_LM_MUNICIPIO_2007_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LM_MUNICIPIO_2007_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LM_MUNICIPIO_2007_4.addFeatures(features_LM_MUNICIPIO_2007_4);
var lyr_LM_MUNICIPIO_2007_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LM_MUNICIPIO_2007_4, 
                style: style_LM_MUNICIPIO_2007_4,
                interactive: true,
                title: '<img src="styles/legend/LM_MUNICIPIO_2007_4.png" /> LM_MUNICIPIO_2007'
            });
var lyr_SD24XAVISalvador_modificadoatt_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "Salvador - SD-24-X-A-VI ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SD24XAVISalvador_modificadoatt_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4291100.594576, -1472359.876371, -4222452.512112, -1398609.380431]
                            })

                        });



lyr_GoogleSatellite_0.setVisible(true);lyr_HD_MASSA_DAGUA_1.setVisible(true);lyr_HD_MID_CURSO_DAGUA_2.setVisible(true);lyr_LM_UF_3.setVisible(true);lyr_LM_MUNICIPIO_2007_4.setVisible(true);lyr_SD24XAVISalvador_modificadoatt_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_HD_MASSA_DAGUA_1,lyr_HD_MID_CURSO_DAGUA_2,lyr_LM_UF_3,lyr_LM_MUNICIPIO_2007_4,lyr_SD24XAVISalvador_modificadoatt_5];
lyr_HD_MASSA_DAGUA_1.set('fieldAliases', {'PK': 'PK', 'nm_nng': 'nm_nng', 'cd_fluxo': 'cd_fluxo', 'PRIMARYIND': 'PRIMARYIND', });
lyr_HD_MID_CURSO_DAGUA_2.set('fieldAliases', {'nome': 'nome', 'fluxo': 'fluxo', 'ID': 'ID', 'PRIMARYIND': 'PRIMARYIND', });
lyr_LM_UF_3.set('fieldAliases', {'PK': 'PK', 'nome': 'nome', 'codigoUf': 'codigoUf', 'siglaUf': 'siglaUf', 'PRIMARYIND': 'PRIMARYIND', });
lyr_LM_MUNICIPIO_2007_4.set('fieldAliases', {'PK': 'PK', 'nm_nng': 'nm_nng', 'geocodigo': 'geocodigo', 'UF': 'UF', 'PRIMARYIND': 'PRIMARYIND', });
lyr_HD_MASSA_DAGUA_1.set('fieldImages', {'PK': '', 'nm_nng': '', 'cd_fluxo': '', 'PRIMARYIND': '', });
lyr_HD_MID_CURSO_DAGUA_2.set('fieldImages', {'nome': '', 'fluxo': '', 'ID': '', 'PRIMARYIND': '', });
lyr_LM_UF_3.set('fieldImages', {'PK': '', 'nome': '', 'codigoUf': '', 'siglaUf': '', 'PRIMARYIND': '', });
lyr_LM_MUNICIPIO_2007_4.set('fieldImages', {'PK': '', 'nm_nng': '', 'geocodigo': '', 'UF': '', 'PRIMARYIND': '', });
lyr_HD_MASSA_DAGUA_1.set('fieldLabels', {'PK': 'no label', 'nm_nng': 'no label', 'cd_fluxo': 'no label', 'PRIMARYIND': 'no label', });
lyr_HD_MID_CURSO_DAGUA_2.set('fieldLabels', {'nome': 'no label', 'fluxo': 'no label', 'ID': 'no label', 'PRIMARYIND': 'no label', });
lyr_LM_UF_3.set('fieldLabels', {'PK': 'no label', 'nome': 'no label', 'codigoUf': 'no label', 'siglaUf': 'no label', 'PRIMARYIND': 'no label', });
lyr_LM_MUNICIPIO_2007_4.set('fieldLabels', {'PK': 'no label', 'nm_nng': 'no label', 'geocodigo': 'no label', 'UF': 'no label', 'PRIMARYIND': 'no label', });
lyr_LM_MUNICIPIO_2007_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});