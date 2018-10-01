// All resources loaded
window.onload = () => {
// url for fetching api.requests @https://randomuser.me
const url = 'https://randomuser.me/api';
// The data we are going to send in our request
let data = {
    name: 'Sara'
}
// The parameters we are gonna pass to the fetch function
let fetchData = {
    method: 'POST',
    body: data,
    headers: new Headers()
}
fetch(url, fetchData)
.then(function() {
    // Handle response you get from the server
});

fetch(request)
.then(function() {
    // Handle response we get from the API
})
};
