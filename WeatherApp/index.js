const API_KEY = "75d21d58a3d2ae00d06e6a0f34a20e2f";
const url = `https://api.openweathermap.org/data/2.5/weather?q=chandigarh&appid=${API_KEY}`

showWeather();
async function showWeather()
{
    // let latitude = 15.3333;
    // let longitude = 74.0833;
    // console.log("Hritik Raushan");

    try{

        const response = await fetch(url);
        const data = await response.json();
    
        console.log(data);
    
        let nerapra = document.createElement('p');
        nerapra.textContent = `${data?.main?.temp.toFixed(2)} °C`;
        document.body.appendChild(nerapra);
    

    }
    catch(err)
    {
        console.log("Not found",err);
    }
   
}