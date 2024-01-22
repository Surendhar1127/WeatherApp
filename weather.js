const apiKey="49987f54f2db589bbec9665f8e2e9325";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-logo");

async function checkWeather(city){

    //JavaScript fetch() method is used to request data from a server.
const response=await fetch(apiUrl+ city + `&appid=${apiKey}`);
if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";  
}

else{
var data =await response.json();//json() converting the response data in json formate

document.querySelector(".city-name").innerHTML=data.name;
document.querySelector(".tempature").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";
console.log(data);
if(data.weather[0].main=="Clear"){
weatherIcon.src="./images/clear.png";
}
else if(data.weather[0].main=="Clouds"){
    weatherIcon.src="./images/clouds.png";
    }
else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./images/drizzle.png";
        }
else if(data.weather[0].main=="Humidity"){
            weatherIcon.src="./images/humidity.png";
            }
else if(data.weather[0].main=="Mist"){
                weatherIcon.src="./images/mist.png";
                }
else if(data.weather[0].main=="Rain"){
                    weatherIcon.src="./images/rain.png";
                    }
else if(data.weather[0].main=="Search"){
                        weatherIcon.src="./images/search.png";
                        }
else if(data.weather[0].main=="Snow"){
                            weatherIcon.src="./images/snow.png";
                            }
else if(data.weather[0].main=="Wind"){
                                weatherIcon.src="./images/wind.png";
                                }

  document.querySelector(".weather").style.display="block";
  document.querySelector(".error").style.display="none"; 
                            }                             
};

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
