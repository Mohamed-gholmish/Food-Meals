// ======== Global Variables =========>
const loader = document.querySelector(".loading");
 const searchParam = location.search;
 const params = new URLSearchParams(searchParam);
 const id = params.get("id");
 console.log(id);
// ======== Start =========>

// ======== functions  =========>
(async function getMeals(){
  loader.classList.remove("d-none");
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await api.json();
    // console.log(response);
    displayData(response.meals[0]);
    loader.classList.add("d-none");
})();


function displayData(mealsData){ 
    let ingredients = ``;
    for (let i = 1; i <= 20; i++) {
      if(mealsData[`strIngredient${i}`])
       ingredients += `<li class="alert alert-info m-2 p-1"> ${mealsData[`strIngredient${i}`]}${mealsData[`strMeasure${i}`]} </li>`
        }

        let tags=mealsData.strTags?.split(",");
        if(!tags){tags=[]};
        let tagStr= ``;
        for(let i=0;i<tags.length;i++){
            tagStr +=`<li class="alert alert-danger m-2 p-1"> ${tags[i]}</li>`
        }

    
    console.log(ingredients);
    let mealBox=``;
       mealBox =` <div class="col-md-5">
       <figure>
         <img
           src="${mealsData.strMealThumb}"
           class="w-100 bg-danger"
           alt=""
         />
       </figure>
       <figcaption class=" text-center"><h2>${mealsData.strMeal}"</h2></figcaption>
     </div>
     <div class="col-md-7">
       <div class="content">
         <h3>chiken</h3>
         <p class=" lead">
         ${mealsData.strInstructions}
         </p>
         <h3>Area :${mealsData.strArea} </h3>
         <h3>Category :${mealsData.strCategory} </h3>
      
         <h3>Recipes :</h3>
         <ul class=" list-unstyled d-flex flex-wrap" id="ingredients">
         ${ingredients}
         </ul>
         
         <ul class=" list-unstyled d-flex flex-wrap" id="ingredients">
         <h3>Tags:</h3>
         ${tagStr}
         </ul>

         
         <div class="tags"> <a href="${mealsData.strSource}" class=" btn btn-success mx-2"> Source</a><a href="${mealsData.strYoutube}" class=" btn btn-danger">Youtube</a></div>
        

       </div>
     </div>`;
      document.getElementById("mealsData").innerHTML=mealBox;
}

// ========== Nav Move =========>
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
      
}); 