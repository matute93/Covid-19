const covidStats = 'https://corona-api.com/countries'
const listCountries = `https://restcountries.herokuapp.com/api/v1/region/`
let asia= []
let oceania= []
let europe= []
let africa= []
let america = []

async function fetchingCovidStats() {
  const response = await fetch(covidStats);
  const data = await response.json();
  return data
}


async function fetchingRegions(region) {
  const response = await fetch(`${listCountries}${region}`);
  const dataRegion = await response.json();
  
  return dataRegion
}
fetchingRegions('asia')


function displayCountries() {
  const regionBtn = document.querySelectorAll('.region-btn')
  for (let i = 0; i < regionBtn.length; i++) {
    regionBtn[i].addEventListener('click',async ()=>{
      document.querySelector('.countries').innerHTML=''
    let dataRegion= await fetchingRegions(regionBtn[i].value)
      for (let j = 0; j < dataRegion.length; j++) {
      let country=  document.createElement('button')
      
      country.classList.add('country-btn')
      country.setAttribute('value',dataRegion[j].name.common)
      country.textContent= dataRegion[j].name.common
      let result= await fetchingCovidStats(); 
      country.addEventListener('click',()=>{createChart(result,j)})
      document.querySelector('.countries').appendChild(country)
      } 
      },);
    }
  }
    
displayCountries()

 async function createChart(data,index){
let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['confirmed', 'Deaths', 'Recovered', 'Critical'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['grey', 'blue', 'yellow', 'green',],
            borderColor: 'rgb(255, 99, 132),',
            data: [data.data[index].latest_data.confirmed, data.data[index].latest_data.deaths, data.data[index].latest_data.recovered, data.data[index].latest_data.critical,]
        }]
    },

    // Configuration options go here
    options: {}
});
}




