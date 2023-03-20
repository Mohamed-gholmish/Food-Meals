// ======== Global Variables =========>
const loader = document.querySelector(".loading");
// ======== Start =========>
getMeals();

// ======== functions  =========>
async function getMeals(){
    loader.classList.remove("d-none");
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const res = await api.json();
    const{meals:response}= res;
    displayData(response);
    loader.classList.add("d-none");
};


function displayData(mealsData){ 
    let mealBox=``;
    for(let i=0;i<mealsData.length;i++){
       mealBox +=`<div class="col-md-3  ">
       <div onclick="getMealsArea('${mealsData[i].strArea}')" class="meal  vstack text-center  ">
       <i class="fa-solid fa-house-laptop fa-5x "></i>
       <h3>${mealsData[i].strArea}</h3>
     
   </div>
   </div>`;
    }
    document.getElementById("mealsData").innerHTML=mealBox;
}

async function getMealsArea(area){
    loader.classList.remove("d-none");
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const res = await api.json();
    const{meals:response}= res;
    console.log(response);
    displayDataArea(response);
    loader.classList.add("d-none");
};


function displayDataArea(mealsData){ 
    let mealBox=``;
    for(let i=0;i<mealsData.length;i++){
       mealBox +=`<div class="col-md-3" onclick="showDetails(${mealsData[i].idMeal})">
       <div  class="meal position-relative rounded-4">
           <img
         src=${mealsData[i].strMealThumb}
         class="w-100  rounded-4"
         alt=""
       />
       <div class="imageLayer position-absolute d-flex justify-content-center align-items-center "><h3>${mealsData[i].strMeal}</h3></div>
     
   </div>
   </div>`;
    }
    document.getElementById("mealsData").innerHTML=mealBox;
}

function showDetails(id) {
    location.href = `../details.html?id=${id}`;
}


let x = $(".navHidden").innerWidth();
$("#nav").animate({left:-x},500) ;
$(".open-close-icon").click(function(){
    // console.log(x);
    if($("#nav").css("left")=='0px'){
      $("#nav").animate({left:-x},1000) 
      $(".navHidden").hide(1000)
    }
    else{
        $("#nav").animate({left:'0px'},1000) 
        $(".navHidden").show(1000)
    }
    
}) 
