const covidStats = 'https://corona-api.com/countries'
const listCountries = `https://restcountries.herokuapp.com/api/v1/region/`

async function fetchingCovidStats() {
  const response = await fetch(covidStats);
  const data = await response.json();
  return data
}
fetchingCovidStats();

async function fetchingRegions(region) {
  const response = await fetch(`${listCountries}${region}`);
  const dataRegion = await response.json();
  return dataRegion
}



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
      document.querySelector('.countries').appendChild(country)
      } 
      },);
    }
  }
    
displayCountries()

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },})


// async function getCovidStast(stats) {
//   const response = await fetch(stats);
//   const data = await response.json();
//   // console.log(data);
//   for (let i = 0; i < data.data.length; i++) {
//     let obj = {
//       name: data.data[i].name,
//       confirmed: data.data[i].latest_data.confirmed,
//       critical: data.data[i].latest_data.critical,
//       deathes: data.data[i].latest_data.deaths,
//       recovered: data.data[i].latest_data.recovered,
//       confirmedToday: data.data[i].today.confirmed,
//       deathsToday: data.data[i].today.deaths,
//     }
//     countiresInfo.push(obj)

//   }

// }
// getCovidStast(covidStats)


// let regions = [];
// async function getCountries(countiresAPI) {
//   const response = await fetch(countiresAPI);
//   const data = await response.json();
//   // console.log(data);
//   for (let j = 0; j < data.length; j++) {
//     let obj1 = {
//       name: data[j].name.common,
//       region: data[j].region,
//     }
//     regions.push(obj1)
//   }
// }
// getCountries(listCountries)




// console.log(countiresInfo);
// console.log(regions);
