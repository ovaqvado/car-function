const car = [
    {manufacturer: "Toyota", model: "Camry", year: 2020, averageSpeed: 60,},
    {manufacturer: "Mercedes", model: "GTR", year: 2020, averageSpeed: 120,},
    {manufacturer: "TESLA", model: "Model X", year: 2020, averageSpeed: 70,}
]

// // 1. Функция для вывода на экран информации об автомобиле.
function displayCarInfo(cars) {
    let carInfoDiv = document.getElementById('car_information');
    for (let i = 0; i < cars.length; i++) {
        let carinfo = document.createElement('p');
        carinfo.textContent = `Manufacturer: ${cars[i].manufacturer}; Model: ${cars[i].model}; Years: ${cars[i].year}; Speed: ${cars[i].averageSpeed};`;
        carInfoDiv.appendChild(carinfo);
    }
}
displayCarInfo(car);

// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

function calculateTravelTime(distance, averageSpeed) {
    const travelTime = distance / averageSpeed;
    const numberOfBreaks = Math.floor(travelTime / 4); 
    const totalTravelTime = travelTime + numberOfBreaks; 
    return Math.ceil(totalTravelTime);
  }
  
  const distance = 500; 
  const speed = 120; 
  
  const totalTime = calculateTravelTime(distance, speed);
  console.log(`Total travel time: ${totalTime} hours`);

  
