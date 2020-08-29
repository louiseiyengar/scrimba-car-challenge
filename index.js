//Calculate Cost for All Cars
function fareEstimator(rideTime, rideDistance, costPerMinute, costPerMile) {
  const timeCost = costPerMinute.map(perMinute => perMinute * rideTime);
  const distanceCost = costPerMile.map(perMile => perMile * rideDistance);
  const totalCost = timeCost.map((time, index) => time + distanceCost[index]); 

  return totalCost;
}

//Display total for car chosen
function displayCarTotal(whichCar, costAllCars) {

  const showTotalArea = document.querySelector(".cost-section");
  const showTotal = document.getElementsByClassName("total")[0];

  switch(whichCar) {
    case 'car1':
      showTotal.textContent = costAllCars[0].toFixed(2);
      break;
    case 'car2':
      showTotal.textContent = costAllCars[1].toFixed(2);
      break;
    case 'car3':
      showTotal.textContent = costAllCars[2].toFixed(2);
      break;
    case 'car4':
      showTotal.textContent = costAllCars[3].toFixed(2);
      break;
    default:
      showTotal.textContent = costAllCars[0].toFixed(2);
  }
  showTotalArea.style.display = 'block';

}

/* show the car image after radio button clicked */
function displayCarImage(imageArea, carImage) {
  imageArea.src = `images/${carImage}.png`;
  imageArea.classList.add("fade-in");
  setTimeout(() => {imageArea.classList.remove("fade-in")}, 1000);
}


const costPerMinute = [0.2, 0.35, 0.4, 0.5];
const costPerMile = [1.2, 2.0, 2.4, 3.5];

//Process Form Data Submitted
const infoForm = document.getElementById("cost-form");
infoForm.addEventListener("submit", event => {
  event.preventDefault();
  const carFormData = new FormData(event.target);
  const whichCar = carFormData.get("whichCar");
  const distance = carFormData.get("distance");
  const time = carFormData.get("time");

  costAllCars = fareEstimator(time, distance, costPerMinute, costPerMile);
  displayCarTotal(whichCar, costAllCars);
  
  //remove drop shadow from button
  document.querySelector('.btn-cost').blur();
});

//Show Pictures for Cars after choice clicked
const carChoice = document.querySelectorAll('[name="whichCar"]');
for (let i = 0; i < carChoice.length; i++) {
  carChoice[i].addEventListener("click", event => {
    const imageArea = document.getElementById('car-pic');
    switch(event.target.value) {
      case 'car1':
        displayCarImage(imageArea, 'car1');
        break;
      case 'car2':
        displayCarImage(imageArea, 'car2');
        break;
      case 'car3':
        displayCarImage(imageArea, 'car3');
        break;
      case 'car4':
        displayCarImage(imageArea, 'car4');
        break;
      default:
        displayCarImage(imageArea, 'car1');
    }
  })
}