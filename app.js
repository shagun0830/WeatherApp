const inp=document.querySelector("#inp");

let temp=document.querySelector('#temp');
let feelsLike;
let min=document.querySelector("#min");
let max;
let des=document.querySelector("#des");
let speed=document.querySelector("#speed");
const tempr=0;

let city=document.querySelector('#city');

$("#btn").click(function(){
    const val1=inp.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${val1}&appid=8ab18be7890e88e6660a676d8a207409`)
.then((res)=>{
    return res.json();
})
.then((data)=>{
    temp.innerHTML=Math.ceil((data.main.temp)-273)+"&#176C (Feels Like "+Math.ceil(data.main.feels_like-273)+"&#176C)";
    city.innerHTML=data.name+", "+data.sys.country;
    max=data.weather[0].main;
   des.innerHTML=(data.weather[0].description);
    
    min.innerHTML=Math.ceil(data.main.temp_min-273)+"&#176C(min) / "+Math.ceil(data.main.temp_max-273)+"&#176C(max)";
    
    speed.innerHTML=data.wind.speed+"Kms";
    if (max == "Mist" || max == "Fog") {
        console.log(des.innerHTML)
        
        document.body.style.backgroundImage = "url('./assets/mist.jpg')";
    } else if (max == "Clouds") {
        
        document.body.style.backgroundImage = "url('./assets/clouds.jpg')";
    } else if (max == "Clear"|| max=="clear sky") {

        document.body.style.backgroundImage = "url('./assets/clear.jpg')";
    } else if (max == "Snow") {
        
        document.body.style.backgroundImage = "url('./assets/snow.jpg')";;
    } else if (max == "Drizzle" || max == "Sand") {
        
        document.body.style.backgroundImage = "url('./assets/dizzle.jpg')";
    } else if (max == "Thunderstorm" || max == "Tornado") {
        
        document.body.style.backgroundImage = "url('./assets/thunderstorm.jpg')";
    } else if (max == "Haze" || max == "Smoke") {
        
        document.body.style.backgroundImage = "url('./assets/haze.jpg')";
    } 
    else{
        console.log(max);
        document.body.style.backgroundImage = "url('./assets/clear.jpg')";
    }
})
.catch((err)=>{
    console.log(err.message);
    alert("City does not exist")
})
    
})
fetch(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=8ab18be7890e88e6660a676d8a207409`)
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
    
    temp.innerHTML=Math.ceil((data.main.temp)-273)+"&#176C (Feels Like "+Math.ceil(data.main.feels_like-273)+"&#176C)";
    city.innerHTML=data.name+", "+data.sys.country;
   des.innerHTML=(data.weather[0].description);
    max=data.weather[0].main;
    min.innerHTML=Math.ceil(data.main.temp_min-273)+"&#176C(min) / "+Math.ceil(data.main.temp_max-273)+"&#176C(max)";
    
    speed.innerHTML=data.wind.speed+"Kms";
    if (max == "Mist" || max == "Fog") {
        console.log(des.innerHTML)
        
        document.body.style.backgroundImage = "url('./assets/mist.jpg')";
    } else if (max == "Clouds") {
        
        document.body.style.backgroundImage = "url('./assets/clouds.jpg')";
    } else if (max == "Clear"|| max=="clear sky") {

        document.body.style.backgroundImage = "url('./assets/clear.jpg')";
    } else if (max == "Snow") {
        
        document.body.style.backgroundImage = "url('./assets/snow.jpg')";;
    } else if (max == "Drizzle" || max == "Sand") {
        
        document.body.style.backgroundImage = "url('./assets/dizzle.jpg')";
    } else if (max == "Thunderstorm" || max == "Tornado") {
        
        document.body.style.backgroundImage = "url('./assets/thunderstorm.jpg')";
    } else if (max == "Haze" || max == "Smoke") {
        
        document.body.style.backgroundImage = "url('./assets/haze.jpg')";
    } 
    else{
        console.log(max);
        document.body.style.backgroundImage = "url('./assets/clear.jpg)";
    }
})
.catch((err)=>{
   console.log(err.message);
})



