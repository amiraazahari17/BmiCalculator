//Calculate BMI
function calculateBMI() {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
 
  //validate input
  if (height === "" || weight == 0) {
    alert("Enter values..!!");
    return;
  }
  
 
 

  //Calculate BMI
  var total = weight/(height*height);
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the BMI after calculation
  document.getElementById("BMI").style.display = "block";
  document.getElementById("totalBMI").innerHTML = total;

}


//click to call function
document.getElementById("calculate").onclick = function() {
  calculateBMI();

};