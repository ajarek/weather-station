const name1 = document.querySelector('.name');
const rain1 = document.querySelector('.rain');
const temp1= document.querySelector('.temp');
const clouds1 = document.querySelector('.clouds');
const windDeg1 = document.querySelector('.windDeg');
const windSpeed1 = document.querySelector('.windSpeed');
const pressure1 = document.querySelector('.pressure');
const city1 =document.getElementById('city');


function choose(){
  city = city1.value;

const APIkey ='96d145cbc67ffa8619b24c37dd8a0cab'
const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
city1.value = "";
  async function getRandom() {
    fetch(ApiUrl)
      .then(function (response) {
        return response.json();

      }).then(function (json) {
       
       
        let name =json.name;
        let rain = Object.assign({}, json.rain);
        let temp =json.main.temp;
        let clouds =json.clouds.all;
        let windDeg =json.wind.deg;
        let windSpeed =json.wind.speed;
        let pressure= json.main.pressure;

        
        name1.innerHTML=`<i class="fas fa-city"></i>   ${name}`;
       rain1.innerHTML=`<i class="fas fa-umbrella"></i>  ${Object.values(rain)}mm/h`;
        temp1.innerHTML=`<i class="fas fa-thermometer-half"></i><span>  ${temp}<sup>o</sup>C</span>`;
        clouds1.innerHTML=`<i class="fas fa-cloud"></i>  ${clouds} %`;
        windDeg1.innerHTML=`<i class="far fa-compass   "></i>  ${windDeg}<sup>o</sup>`;
        windSpeed1.innerHTML=`<i class="fas fa-wind"></i>  ${windSpeed*3.6.toFixed()} km/h`;
        pressure1.innerHTML=`<i class="fas fa-long-arrow-alt-down"></i>  ${pressure} hPa`;

        })

      
      .catch(function (error) {
        // jeśli wystąpi jakikolwiek błąd, taki jak brak połączenia internetowego, zostanie wywołane to wywołanie zwrotne
        console.error(error)

      })
  }
  
  getRandom()
  
}