// ======== Global variables =========>
 const searchName = document.getElementById("searchByName");
 const searchLetter = document.getElementById("searchByFirstLetter");
 import {navMove}from './index.js'
 // ======== Start =========>

// ======== Events =========>
searchLetter.addEventListener('input',function(e){
    console.log("hi")
    getMealsByLetter(searchLetter.value);
});
searchName.addEventListener('input',function(e){
    console.log("hi");
    getMealsByLetter(searchName.value);
});

// ======== functions  =========>
async function getMealsByName(mealsName){
    const apiName = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsName}`);
    const res = await apiName.json();
    const{meals:response}= res;
    console.log(response);
    displayData(response);
};
async function getMealsByLetter(mealLetter){
    const apiLetter = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealLetter}`);
    const res = await apiLetter.json();
    const{meals:response}= res;
    console.log(response);
    displayData(response);
};
function displayData(mealsData){ 
    let mealBox=``;
    for(let i=0;i<mealsData.length;i++){
       mealBox +=`<div class="col-md-3 ">
       <div class="meal position-relative rounded-4">
           <img
         src=${mealsData[i].strMealThumb}
         class="w-100  rounded-4"
         alt=""
       />
       <div class="imageLayer position-absolute d-flex justify-content-center align-items-center fs-4 ">${mealsData[i].strMeal}</div>
     
   </div>
   </div>`;
    }
    document.getElementById("mealsData").innerHTML=mealBox;
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
    
}); 
