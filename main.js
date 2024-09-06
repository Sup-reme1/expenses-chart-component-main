///////////// Using ASYNC AND AWAIT
async function getData() {      // Function to fetch the data
  const response = await fetch('./data.json');
  const users = await response.json();
  return users;
}

const myData = await getData(); // Save the data in a variable
console.log(myData[0].day);
const myChart = document.getElementById('myChart');

const xAxis = [];
const yAxis = [];


function xList (myData){
  for (let i = 0; i <= myData.length -1; i++ ){
    xAxis.push(myData[i].day);
  }
  return xAxis
}

function yList (myData){
  for (let i = 0; i <= myData.length -1; i++ ){
    yAxis.push(myData[i].amount);
  }
  return yAxis
}

console.log(yList(myData))


/////////// Using Chart.js
new Chart(myChart, {
  type: 'bar',
  data: {
    labels: xList(myData),
    datasets: [{
      label: '# of Votes',
      data: yList(myData),
      backgroundColor: 'hsl(10, 79%, 65%)',
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
