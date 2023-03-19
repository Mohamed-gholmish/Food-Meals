// ========= global variables=======>
const inputs = document.querySelectorAll("input");
const btnSubmit = document.querySelector("#btnSubmit");
const form = document.querySelector("form");
let isValid = false;

// ======== Start =========>

// ========== Events===========>
document.querySelector("form").addEventListener("input", function (e) {
  e.preventDefault();
  if ( validationName(inputs[0]) &&
  validationEmail(inputs[1]) &&
  validationNumber(inputs[2])&&
  validationAge(inputs[3])&&
  validationPassword(inputs[4])&&
  validationRePassword(inputs[5])){
    btnSubmit.classList.remove('disabled')
  }
  else{btnSubmit.classList.add("disabled")}
 
});

// ============= set form =========>


// =========== function======>

// ============ validation =====>
// form.addEventListener("input", function () {
//   if (
//     validationName(inputs[0]) &&
//     validationEmail(inputs[1])&&
  
//     validationPassword(inputs[3]) &&
//     validationAge(inputs[4])
//   ) {
//     console.log("tmm");
//     isValid = true;
//   } else {
//     isValid = false;
//   }
// });

// ============= name  =========>
function validationName(input) {
  const regex =
    /^[a-z]{1,}$/;
  if (regex.test(input.value)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}
// inputs[0].addEventListener("input",function (){
//   validationName(inputs[0]);
// })
// ========== email ========>

function validationEmail(input) {
  const regex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  if (regex.test(input.value)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}
// inputs[1].addEventListener("input",function (){
//   validationEmail(inputs[1]);
// })
// ============ number ===============>
function validationNumber(input) {
  const regex = /^010[0125][0-9]{7}$/;
  if (regex.test(input.value)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}
// inputs[2].addEventListener("input",function (){
//   validationNumber(inputs[2]);
// })
// ============ age ===============>
function validationAge(input) {
  const regex = /^([1-7][0-9]|80)$/;
  if (regex.test(input.value)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}
// inputs[3].addEventListener("input",function (){
//   validationAge(inputs[3]);
// })

// ========== password =========>
function validationPassword(input) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (regex.test(input.value)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}
// inputs[4].addEventListener("input",function (){
//   validationPassword(inputs[4]);
// })


function validationRePassword(input) {
  
  if (inputs[4].value===input.value) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}
// inputs[5].addEventListener("input",function (){
//   validationPassword(inputs[5]);
// })
