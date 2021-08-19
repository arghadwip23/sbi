console.log('Hello World!');


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyClL7pE-1kTSr2ouTpFHnwdvhW36rLgX2s",
    authDomain: "jnvcob.firebaseapp.com",
    databaseURL: "https://jnvcob.firebaseio.com",
    projectId: "jnvcob",
    storageBucket: "jnvcob.appspot.com",
    messagingSenderId: "69566502508",
    appId: "1:69566502508:web:be3e4ad98d78924cb7aa49",
    measurementId: "G-BH23ZFD2KB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

var db = firebase.firestore(); 


let regx ;
let validation = true ;


//// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.ml2 .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i
  });
  
var v = /^\d{9,18}$/;  
  
  
var names = document.getElementById("Name");
var Mnumber = document.getElementById("Mnumber");
var Anumber = document.getElementById("Anumber");
var form = document.getElementById("form");
var modal = document.getElementById("modal");
var div = document.getElementById("hidden");

//validation for name
names.addEventListener("change", ()=>{
 regx = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/ ;
 if(regx.test(names.value)){
   names.classList.add("is-valid");
   names.classList.remove("is-invalid");
 }else{
   names.classList.add("is-invalid");
   names.classList.remove("is-valid");
 }
 
})


//validate mobile number
Mnumber.addEventListener("change", () => {
  regx =/^[6-9]\d{9}$/;
  if (regx.test(Mnumber.value)) {
    Mnumber.classList.add("is-valid");
    Mnumber.classList.remove("is-invalid");
  } else {
    Mnumber.classList.add("is-invalid");
    Mnumber.classList.remove("is-valid");
  }

})


//validate account number
Anumber.addEventListener("change", () => {
  regx = v;
  if (regx.test(Mnumber.value)) {
    Anumber.classList.add("is-valid");
    Anumber.classList.remove("is-invalid");
  } else {
    Anumber.classList.add("is-invalid");
    Anumber.classList.remove("is-valid");
  }

})

//control form submit
form.addEventListener("submit" , (event)=>{
 event.preventDefault();
 var inp = document.querySelectorAll("input");
 inp.forEach((ele)=>{
   if (ele.classList.contains("is-invalid")) {
     validation = false ;
   }
 })
 if(validation){
 modal.style.display="block";
 db.collection("user").add({
   name: names.value,
   mobile : Mnumber.value,
   account : Anumber.value
 }).then((docRef)=>{
   modal.style.display="none";
   form.style.display="none";
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'transection is successful',
    showConfirmButton: true
  });
   div.style.display="block";
 }).catch((err)=>{
   Swal.fire({
     position: 'center',
     icon: 'error',
     title: 'something went wrong! Please try again later.',
     showConfirmButton: true
   });
 })
 }else{
   Swal.fire({
     position: 'center',
     icon: 'warning',
     title: 'enter correct information',
     showConfirmButton: true
   });
   modal.style.display="none"
 }
})