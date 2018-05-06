let url = "https://s3-us-west-2.amazonaws.com/healthop-images/clinic_note_2.js"
fetch(url)
.then(response => response.json())
.then(function(data) {
    // Create and append the li's to the ul
    console.log(data)
    //location.href = "productpage2.html";
    let innerHtml ='';
    
    for(var k = 0;k <5 ;k++){ //data.length
        
        //innerHtml+='<div style="height:25px;"><div class="legend-color-box" style="background-color:'+legendTable['other'][0][k]+';"></div><span style="line-height: 23px;">'+legendTable['other'][1][k]+'</span></div>';
       //innerHtml += data[k].TermDt

       innerHtml += '<a href="#" class="list-group-item list-group-item-action flex-column align-items-start">' +
                        '<div class="d-flex w-100 justify-content-between">' +
                            '<h4 class="mb-1">'+data[k].TermDt+'</h4>' +
                            '<small>'+data[k].Distance+'</small>' +
                        '</div>' +
                        '<p class="mb-1" style="line-height: 0.8;"><small>'+data[k].Keywords+'</small></p>' +
                        //'<small>City:'+data[k].ProviderCity+' State:'+data[k].ProviderState+' Zipcode:'+data[k].ProviderZip+'</small>'+
                        '<small><ul class="list-inline">' +
                            '<li class="list-inline-item">City:'+data[k].ProviderCity+'</li>' +
                            '<li class="list-inline-item">State:'+data[k].ProviderState+'</li>' +
                            '<li class="list-inline-item">Zipcode:'+data[k].ProviderZip+'</li>' +
                            '<li class="list-inline-item">Compare &nbsp; <input id="compare-enabled" type="checkbox" /></li>' +
                        '</ul></small>' +
                    '</a>'


    }        
    //innerHtml+='</div></div>';
    $('#facility_list').html(innerHtml)
})
.catch(function(error) {
    // If there is any error you will catch them here
    console.log(error)
})


var map = L.map('map').setView([47.6062, -122.3321], 10);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(map);


var marker = L.marker([47.677069, -122.096424]).addTo(map);
var marker2 = L.marker([47.623586, -122.186803]).addTo(map);
var marker3 = L.marker([47.604029, -122.323446]).addTo(map);
var marker4 = L.marker([47.650074, -122.307567]).addTo(map);
