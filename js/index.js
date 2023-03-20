// ======== Global Variables =========>
const loader = document.querySelector(".loading");
// ======== Start  =========>
getMeals('');
// ======== functions  =========>
async function getMeals(mealsName){
    loader.classList.remove("d-none");
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsName}`);
    const res = await api.json();
    const{meals:response}= res;
    // console.log(response);
    displayData(response);
    loader.classList.add("d-none");
}

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
       <div class="imageLayer position-absolute d-flex justify-content-center align-items-center "><h3>${mealsData[i].strMeal}</h3></div>
     
   </div>
   </div>`;
    }
    document.getElementById("mealsData").innerHTML=mealBox;
} ;


// ========== Nav Move =========>
let x = $(".navHidden").innerWidth();
$("#nav").animate({left:-x},500) ;
$(".open-close-icon").click(function(){
    // let x = $(".navHidden").innerWidth();
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





