// ======== Global variables =========>
import{navMove} from './index.js';


// ======== Start =========>
getMeals('');
navMove();


// ======== functions  =========>
async function getMeals(mealsName){
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const res = await api.json();
    const{meals:response}= res;
    console.log(response);
    console.log(response.slice(0, 20))
    displayData(response.slice(0, 20));
};

function displayData(mealsData){ 
    let mealBox=``;
    for(let i=0;i<mealsData.length;i++){
       mealBox +=`<div class="col-md-3  ">
       <div class="meal  vstack text-center  ">
       <i class="fa-solid fa-drumstick-bite fa-4x"></i>
       <h3>${mealsData[i].strIngredient}</h3>
       <p>${mealsData[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
   </div>
   </div>`;
    }
    document.getElementById("mealsData").innerHTML=mealBox;
}
