let searchButton = document.getElementById("search");


searchButton.addEventListener("click", ()=>{
    console.log("button pressed")
    sendApiRequest()
})


async function sendApiRequest() {
    debugger
   let API_KEY = "WguyRyoA8sxCzbwy7b9NsQmUR3G5nb9g5bQtLJh3";
    debugger
    let response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    debugger
    let data = await response.json(); 
    debugger
    console.log(data);
    useApiData(data);
}

function useApiData (data){
document.getElementById("content").innerHTML += data.explanation;
document.getElementById("content").innerHTML += `<img class="img-fluid my-3" src="${data.url}">`
}