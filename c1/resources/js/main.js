document.querySelector('#botonClick').addEventListener('click', obtenerCoor);	

function obtenerCoor(){
	var url_service = "http://serviciosgis.catastrobogota.gov.co/otrosservicios/rest/services/educacion/inversion/MapServer/0/query?where=COD_LOCA+%3D+15&text=&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=pjson";
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url_service);
	xhr.send();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var json = this.responseText;
			var obj = JSON.parse(json);
			var respuesta = document.querySelector('#respuesta');
			respuesta.innerHTML = '';
			for(var i in obj.features[0].geometry.rings[0]) {
				//console.log(i);
				//respuesta = respuesta+obj.features[0].geometry.rings[0][i];
				console.log(obj.features[0].geometry.rings[0][i][0]);
				console.log(obj.features[0].geometry.rings[0][i][1]);
				respuesta.innerHTML += `
					<tr>
						<td>${obj.features[0].geometry.rings[0][i][0]}</td>
						<td>${obj.features[0].geometry.rings[0][i][1]}</td>
					</tr>
				`
			}
			//document.getElementById("tabla1").innerHTML = respuesta;
		}
		else{
			alert("Error en la Conexión del Servicio REST");
			}
	}			
};