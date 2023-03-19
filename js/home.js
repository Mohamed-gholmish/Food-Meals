// ========== Glaobal============>
const loading=document.querySelector(".loading");
import {navMove}from './index.js'
// ========== Events============>
// ========== When Start============>
getGames('mmorpg');
// ========== Function============>
document.querySelectorAll(".menu a").forEach(function(link){
    link.addEventListener("click",function(){
        document.querySelector(".menu .active").classList.remove("active");
        this.classList.add("active");

        const category=this.dataset.category;
        getGames(category);
        console.log(category);
    })
})




async function getGames(categoryName){
    loading.classList.remove("d-none");
    const options = {
	method: 'GET',
	headers: {
        'X-RapidAPI-Key': '620a167456mshdfb6e2440b7333ap12704cjsnf0a180a0a8a6',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
	}
    const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`, options);
    const response = await api.json();
    console.log(response);
    displayData(response);
    loading.classList.add("d-none");

};


function displayData(gamesData){
 
  
    let cardBox=``;
    for(let i=0;i<gamesData.length;i++){
        let videoPath=gamesData[i].thumbnail.replace('thumbnail.jpg','videoplayback.webm');
        cardBox +=` <div class="col"> <div onmouseleave = "endVideo(event)"  onmouseenter = "startVideo(event)" onclick="gotoDetails(${gamesData[i].id})"  class=" card">
        <figure class=" position-relative">
        <img src="${gamesData[i].thumbnail}" class="card-img-top" alt="...">
        <video  preload="none" muted="true" loop class="w-100 position-absolute h-100 top-0 start-0 z-3 d-none"> <source src="${videoPath}"></video>
    </figure>
        <div class="card-body">
        
          <div class=" d-flex justify-content-between"><h3 class="bg-info">${gamesData[i].title}</h3> <span class="badge bg-info fs-5 ">Free</span></div>  
          <p class="card-text text-bg-danger">${gamesData[i].short_description}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted justify-content-between d-flex"> <span class=" badge">${gamesData[i].platform}</span><span class=" badge">${gamesData[i].genre}</span></small>
        </div>
      </div></div>
        `;
    }
    document.getElementById("gameData").innerHTML=cardBox;
}
function startVideo(event){
    const video1=event.target.querySelector("video");
    video1.classList.remove("d-none");
    //  browser tell that it shouid muted
    video1.muted=true;
    video1.play();

}
function endVideo(event){
    const video1=event.target.querySelector("video");
    video1.classList.add("d-none");
    //  browser tell that it shouid muted
    video1.muted=true;
    video1.pause();
}
function gotoDetails(gameId){
    location.href=`./details.html?id=${gameId}`;
   
}


