// ======== Global Variables =========>
const loader = document.querySelector(".loading");
// ======== Start =========>
getMeals();

// ======== functions  =========>
async function getMeals() {
  loader.classList.remove("d-none");
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  const res = await api.json();
  const { categories: response } = res;
  // console.log(response);
  displayData(response);
  loader.classList.add("d-none");
}


function displayData(mealsData) {
  let mealBox = ``;
  for (let i = 0; i < mealsData.length; i++) {
    mealBox += `<div class="col-md-3"  >
       <div  onclick="getMealsCatrgories('${mealsData[i].strCategory}')"  class="meal position-relative rounded-4" >
           <img
         src=${mealsData[i].strCategoryThumb}
         class="w-100  rounded-4"
         alt=""
       />
       <div class="imageLayer position-absolute d-flex justify-content-center align-items-center fs-4 ">${mealsData[i].strCategory}</div>
     
   </div>
   </div>`;
  }
  document.getElementById("mealsData").innerHTML = mealBox;
}

async function getMealsCatrgories(categories) {
  loader.classList.remove("d-none");
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categories}`
  );
  const res = await api.json();
  const { meals: response } = res;
  // console.log(response);
  displayDataCatrgories(response);
  loader.classList.add("d-none");
}
function displayDataCatrgories(mealsData) {
  let mealBox = ``;
  for (let i = 0; i < mealsData.length; i++) {
    mealBox += `<div class="col-md-3" onclick="showDetails(${mealsData[i].idMeal})" >
       <div class="meal position-relative rounded-4">
           <img
         src=${mealsData[i].strMealThumb}
         class="w-100  rounded-4"
         alt=""
       />
       <div class="imageLayer position-absolute  "></div>
     
   </div>
   </div>`;
  }
  document.getElementById("mealsData").innerHTML = mealBox;
}

function showDetails(id) {
  location.href = `../details.html?id=${id}`;
}
