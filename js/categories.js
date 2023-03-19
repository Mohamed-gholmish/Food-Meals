// ======== Global variables =========>
// done
// ======== When Start =========>
getMeals();


// ======== functions  =========>
async function getMeals(){
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const res = await api.json();
    const{categories:response}= res;
    console.log(response);
    displayData(response);
};

function displayData(mealsData){ 
    let mealBox=``;
    for(let i=0;i<mealsData.length;i++){
       mealBox +=`<div class="col-md-3 ">
       <div class="meal position-relative rounded-4">
           <img
         src=${mealsData[i].strCategoryThumb}
         class="w-100  rounded-4"
         alt=""
       />
       <div class="imageLayer position-absolute d-flex justify-content-center align-items-center fs-4 ">${mealsData[i].strCategory}</div>
     
   </div>
   </div>`;
    }
    document.getElementById("mealsData").innerHTML=mealBox;
}
