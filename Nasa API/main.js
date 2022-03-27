let searchButton = document.getElementById("search");


searchButton.addEventListener("click", ()=>{
    sendApiRequest()
})


async function sendApiRequest (){
    let apiKey = 'WguyRyoA8sxCzbwy7b9NsQmUR3G5nb9g5bQtLJh3';
    let response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    console.log(response)
    let data = response.json(); 
    console.log(data);
    useApiData(data);
}

function useApiData (data){
document.getElementById("content").innerHTML += data.status;
document.getElementById("content").innerHTML += `<img src="${data.url}">`
}