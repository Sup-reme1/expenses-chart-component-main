//////////////// using import
// import users from './data.json' assert {type: 'json'};
// console.log(users);

// /////////////
// fetch('./data.json')
//   .then(response => response.json())
//   .then(data => {
//     const users = data;
//     console.log(users);
//   })
//   .catch(error => console.error('Error fetching JSON:', error));

///////////// Using ASYNC AND AWAIT
// async function getData() {      // Function to fetch the data
//   const response = await fetch('./data.json');
//   const users = await response.json();
//   return users;
// }
// // Function to use data outside fetch block
// async function useData() {
//   try{
//     const users = await getData();
//     console.log(users);

//   } catch (error){
//     console.error('Error fetching data: ', error);
//   }
// }
// // Call the function to initiate and fetch data
// useData();  

/////////////// Using PROMISE
function getData() {
    return fetch('./data.json')
      .then(response => response.json())
      .catch(error => console.error('error fetching: ', error));
  }
  getData().then(user =>{
    console.log(user[1]);
  })
  