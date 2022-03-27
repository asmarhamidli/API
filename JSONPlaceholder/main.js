var btn = document.getElementById("btn").addEventListener("click", getPost);
var div = document.getElementById("cardDiv");
var con =0;

function getPost() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      for (let index = 0; index < 1; index++) {
        div.innerHTML+= `
        <div class="card col-3 mt-3 mr-2  mx-auto"> <img class="card-img-top" src="${post[con].thumbnailUrl}"> 
        <div class="card-body">
        <h5 class="card-title">${post[con].id}</h5>
        <p class="card-text">${post[con].title}</p>
        </div>
        </div>
        `
        


        con = con +1;
      }
    })
    .catch((error) =>{
          console.log("error")
    })
}
