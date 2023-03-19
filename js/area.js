// ======== Global variables =========>
// done
// ======== When Start =========>
getMeals();


// ======== functions  =========>
async function getMeals(){
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const res = await api.json();
    const{meals:response}= res;
    console.log(response);
    displayData(response);
};

function displayData(mealsData){ 
    let mealBox=``;
    for(let i=0;i<mealsData.length;i++){
       mealBox +=`<div class="col-md-3  ">
       <div class="meal  vstack text-center  ">
       <i class="fa-solid fa-house-laptop fa-5x "></i>
       <h3>${mealsData[i].strArea}</h3>
     
   </div>
   </div>`;
    }
    document.getElementById("mealsData").innerHTML=mealBox;
}
