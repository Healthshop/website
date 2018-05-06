/*
$("#upload_btn").on("click", function() {
    $("#upload_input").trigger("click");
    console.log("Click")
    let waitFiles = setInterval(function(){
        let x = document.getElementById("upload_input").files[0];
        if (x) {
            console.log(x.name);

            var d = new Date();
            console.log(d.toLocaleTimeString());
                //let url = "http://healthshopocr.azurewebsites.net/api/ocr?url=https://s3-us-west-2.amazonaws.com/healthop-images/clinic_note.png"
                
                let url = "https://s3-us-west-2.amazonaws.com/healthop-images/clinic_note.js";
                //let url = "https://jsonplaceholder.typicode.com/users"
                fetch(url)
                .then(response => response.json())
                .then(function(data) {
                    // Create and append the li's to the ul
                    console.log(data)
                })
                .catch(function(error) {
                    // If there is any error you will catch them here
                    console.log(error)
                }); 

            clearInterval(waitFiles);
            
        } else {
            console.log("waiting for file")
        }
    }, 1000)

});
*/


document.getElementById('input_file').addEventListener('click', openDialog);
function openDialog() {
    console.log("Click")
    let waitFiles = setInterval(function(){
        let x = document.getElementById("input_file").files[0];
        if (x) {
            console.log(x.name);

            var d = new Date();
            console.log(d.toLocaleTimeString());
            //let url = "https://s3-us-west-2.amazonaws.com/healthop-images/clinic_note.js";
            //let url = "http://healthshopocr.azurewebsites.net/api/ocr?url=https://s3-us-west-2.amazonaws.com/healthop-images/clinic_note.png";
            let url = "https://s3-us-west-2.amazonaws.com/healthop-images/clinic_note_2.js"
            fetch(url)
            .then(response => response.json())
            .then(function(data) {
                // Create and append the li's to the ul
                console.log(data)
                location.href = "productpage2.html";
            })
            .catch(function(error) {
                // If there is any error you will catch them here
                console.log(error)
            }); 

            clearInterval(waitFiles);
            
        } else {
            console.log("waiting for file")
        }
    }, 1000)    

}