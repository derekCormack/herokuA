
fetch('http://localhost:5000/loop/customer', {
    method: 'GET'
    //Request Type 
})
.then((response) => response.json())
//If response is in json then in success
.then((responseJson) => {
    //Success 
    console.log(responseJson);
})
//If response is not in json then in error
.catch((error) => {
    //Error 
    console.error(error);
});