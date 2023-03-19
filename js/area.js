

// ======== Start =========>
getMealsArea();


// ======== functions  =========>
async function getMeals(){
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const res = await api.json();
    const{meals:response}= res;
    console.log(response);
    displayData(response);
};
getMeals();
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
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const res = await api.json();
    const{meals:response}= res;
    console.log(response);
    displayDataArea(response);
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
       <div class="imageLayer position-absolute  "></div>
     
   </div>
   </div>`;
    }
    document.getElementById("mealsData").innerHTML=mealBox;
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
