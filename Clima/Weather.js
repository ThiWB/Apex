// Chave API gerada no site OpenWeather, usada como uma ponte entre o site criado e as funcionalidades de previsão climáticas
const apiKey = "22f036c75d7b18b82bc8cd82184b47c1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// variáveis criadas para fazer a relação com os ID'S do documento HTML, mudando a forma como eles se comportarão dependendo da situação
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const searchBar = document.getElementById('search-bar');

// Função para realizar o evento da busca
function search(){
    const city = searchBar.value;
    checkWeather(city);
}

// Faz com que o evento da busca seja realizado a partir do clique no botão da "lupa"
searchBtn.addEventListener('click', search);

// Faz com que o evento da busca seja realizado ao pressionar a tecla "Enter" do teclado
searchBar.addEventListener('keypress', (event) =>{
    if(event.key === 'Enter'){
        search();
    }
});

// Função chave, resposável por realizar todo o script da previsão climática do mundo inteiro
async function checkWeather(city){

    // Variável que assimila a chave API e o link do OpenWeather
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // Evento "if" criado para aoresentar erro de busca caso o nome da cidade buscado seja considerado inválido 
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    
    // Se a cidade for encontrada o seguinte código irá rodar
    else{
        
        // JSON da API
        var data = await response.json();

        // Nomes de cidade, temperatura, umidade e vento do documento HTML estão sendo atribuídos a variáveis no JavaScript
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round( data.main.temp ) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Condicionais para allterar as imagens dos respectivos climas das cidades buscadas
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }

        // Esconde os blocos de erro e clima
        document.querySelector(".weather").style.display = "Block";
        document.querySelector(".error").style.display = "none";
    }

   
    
}

