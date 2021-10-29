// meals = ["sunday", "monday", "tuesday"];
// let images = ["lunch.jpg","dinner.jpg","brunch.jpg"];
// let prevmeal = "sunday";
//
//
// for(i=0; i<document.getElementsByClassName("meal").length; i++){
//   document.getElementsByClassName("meal")[i].innerHTML = "<h2>" + meals[i] + "<h2>";
//   document.getElementsByClassName("meal")[i].addEventListener("click", setActive,false);
//   document.getElementsByClassName("meal")[i].id = meals[i];
// }
//
// document.getElementById('sunday').classList.toggle('active');
// document.getElementById("image").innerHTML = "<img src= 'assets/" + images[0] + "'>"
//
// function setActive(e){
//
//   prevmeal = document.getElementsByClassName("active")[0].id;
//
//   if(prevmeal != undefined){
//     document.getElementById(prevmeal).classList.toggle("active");
//   }
//
//   // console.log(prevmeal);
//   // prevmeal.classList.toggle('active');
//   // console.log('clicked');
//   // e.target.classList.toggle('active');
//   console.log(e.target.innerHTML);
//
//
//   if(e.target.tagName == "H2"){
//     console.log("h2 clicked");
//     e.target.parentNode.classList.toggle("active")
//   }
//   else{
//     console.log("div clicked");
//     e.target.classList.toggle("active");
//   }
//
//   meal = document.getElementsByClassName('active')[0].id;
//   document.getElementById('image').innerHTML = "<img src='assets/" + meal + ".jpg'>"
//
// }

function openCity(cityName){
  var i;

  var x = document.getElementsByClassName("day");

  for (i=0; i < x.length; i++){
    x[i].style.display = "none";

  }

    document.getElementById(cityName).style.display = 'block';

}
