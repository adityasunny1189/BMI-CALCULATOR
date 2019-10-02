// document.querySelector(".button1").addEventListener("click" , function () {
//   alert("Buttton 1 clicked");
// });
//
// document.querySelector(".button2").addEventListener("click" , function () {
//   alert("Buttton 1 clicked");
// });
// alert("connected");


document.querySelector(".button1").addEventListener("click" , function () {
  var body_weight = document.querySelector(".body").value;
  var height = document.querySelector(".height").value;
  var BMI = body_weight / ( height * height );
  document.querySelector(".content").innerHTML = BMI;
  document.querySelector('.first').style.display = 'flex';
  document.querySelector('.close').addEventListener('click',
  function() {
      document.querySelector('.first').style.display = 'none';
});
});
