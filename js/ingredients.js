// ======== Global variables =========>
//import {navMove}from './index.js'

// ======== Start =========>
getMeals("");

// ======== functions  =========>

function displayDataIng(mealsData) {
  let mealBox = ``;
  for (let i = 0; i < mealsData.length; i++) {
    mealBox += `<div class="col-md-3 ">
       <div class="meal position-relative rounded-4">
           <img  src=${mealsData[i].strMealThumb} class="w-100  rounded-4" alt=""/>

       <div class="imageLayer position-absolute  "></div>
     
   </div>
   </div>`;
  }
  document.getElementById("mealsData").innerHTML = mealBox;
}
async function getMeals(mealsName) {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  const res = await api.json();
  const { meals: response } = res;
  console.log(response);
  console.log(response.slice(0, 20));
  displayData(response.slice(0, 20));
}

async function getMealsIng(id) {
  console.log(id);
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`
  );
  const res = await api.json();
  const { meals: response } = res;
  console.log(response);
  displayDataIng(response);
}


function displayData(mealsData) {
  let mealBox = ``;
  for (let i = 0; i < mealsData.length; i++) {
    mealBox += `<div class="col-md-3" >
       <div  onclick= "getMealsIng('${mealsData[i].strIngredient}')"  onclick= "showDetails('${mealsData[i].idMeal}')" class="meal  vstack text-center">
       <i class="fa-solid fa-drumstick-bite fa-4x"></i>
       <h3>${mealsData[i].strIngredient}</h3>
       <p>${mealsData[i].strDescription.split(" ").slice(0, 20).join(" ")}</p>
   </div>
   </div>`;
  }
  document.getElementById("mealsData").innerHTML = mealBox;
}



function showDetails(id) {
    location.href = `../details.html?id=${id}`;
  }


$(".open-close-icon").click(function(){
    let x = $(".navHidden").innerWidth();
    console.log(x);
    if($("#nav").css("left")=='0px'){
      $("#nav").animate({left:-x},1000) 
      $(".navHidden").hide(1000)
    }
    else{
        $("#nav").animate({left:'0px'},1000) 
        $(".navHidden").show(1000)
    }
    
}) 

