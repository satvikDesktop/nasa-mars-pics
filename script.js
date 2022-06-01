
// CURIOSITY 

fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=q1V2QVlaaZj5MoW7qephfehBy6699kOXusAU6Mxk')
 .then(
    (response)=>
     response.json()
    )
    .then ((data) => {
        displayC(data)
    })
    .catch (err=>console.log(err))


function displayC(dataC) {

    for(i=0;i<26;i++){
    var pic= document.createElement("img");
    pic.src = dataC.photos[i].img_src;
    var cam= document.createElement("p");
    cam.textContent=dataC.photos[i].camera.full_name
    document.getElementById('container-curiosity').appendChild(pic);
    document.getElementById('container-curiosity').appendChild(cam);
    }

}

// SPIRIT

fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&page=1&api_key=q1V2QVlaaZj5MoW7qephfehBy6699kOXusAU6Mxk')
 .then(
    (response)=>
     response.json()
    )
    .then ((data) => {
        displayS(data)
    })
    .catch (err=>console.log(err))

function displayS(dataS) {

        for(i=0;i<6;i++){
        var pic= document.createElement("img");
        pic.src = dataS.photos[i].img_src;
        var cam= document.createElement("p");
        cam.textContent=dataS.photos[i].camera.full_name
        document.getElementById('container-spirit').appendChild(pic);
        document.getElementById('container-spirit').appendChild(cam);
        }
     
    }


// OPPORTUNITY


fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&page=1&api_key=q1V2QVlaaZj5MoW7qephfehBy6699kOXusAU6Mxk')
 .then(
    (response)=>
     response.json()
    )
    .then ((data) => {
        displayO(data)
    })
    .catch (err=>console.log(err))

function displayO(dataO) {

        for(i=0;i<26;i++){
        var pic= document.createElement("img");
        pic.src = dataO.photos[i].img_src;
        var cam= document.createElement("p");
        cam.textContent=dataO.photos[i].camera.full_name
        document.getElementById('container-opportunity').appendChild(pic);
        document.getElementById('container-opportunity').appendChild(cam);
        }
    
    }