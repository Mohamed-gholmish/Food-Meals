// ======== Global variables =========>
import {navMove}from './index.js'
// ======== Start =========>
getMealsArea();


// ======== functions  =========>
// async function getMeals(){
//     const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
//     const res = await api.json();
//     const{meals:response}= res;
//     console.log(response);
//     displayData(response);
// };

// function displayData(mealsData){ 
//     let mealBox=``;
//     for(let i=0;i<mealsData.length;i++){
//        mealBox +=`<div class="col-md-3  ">
//        <div onclick="getMealsArea('${mealsData[i].strArea}')" class="meal  vstack text-center  ">
//        <i class="fa-solid fa-house-laptop fa-5x "></i>
//        <h3>${mealsData[i].strArea}</h3>
     
//    </div>
//    </div>`;
//     }
//     document.getElementById("mealsData").innerHTML=mealBox;
// }
async function getMealsArea(area){
    const api = await fetch(`www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`);
    const res = await api.json();
    const{meals:response}= res;
    console.log(response);
    displayDataArea(response);
};
function displayDataArea(mealsData){ 
    let mealBox=``;
    for(let i=0;i<mealsData.length;i++){
       mealBox +=`<div class="col-md-3 ">
       <div  class="meal position-relative rounded-4">
           <img
         src=${mealsData[i].strMealThumb}
         class="w-100  rounded-4"
         alt=""
       />
       <div class="imageLayer position-absolute  "></div>
     
   </div>
   </div>`;
    }
    document.getElementById("mealsData").innerHTML=mealBox;
}
