// All resources loaded
window.onload = () => {

// Helper functions
// Create the type of element you pass in the parameters
	let createNode = (element) => document.createElement(element)

// Append the second parameter(element) to the first one
	let append = (parent, el) => parent.appendChild(el)

// const named ul to getElementById('authors') for later use to build the markup
	const ul = document.getElementById('authors');
// url for fetching api.requests with parameter @https://randomuser.me
	const url = 'https://randomuser.me/api/?results=10';

// Call the fetch function passing the const url
	fetch(url)
// Transform the data into json
	.then((resp) => resp.json())
// Promise respond
	.then(function(data) {
// Get the results from response
		let authors = data.results;
		return authors.map(function(author) { // Map through the results and for each run the code below
			let li = createNode('li'),
					img = createNode('img'),
					span = createNode('span');
			// Add the source of the image to be the src of the img element
			img.src = author.picture.medium;
			// Make the HTML of our span to be the first and last name of our author
			span.innerHTML = `${author.name.first} ${author.name.last}`;
			// Append all our elements
			append(li, img);
			append(li, span);
			append(ul, li);
		})
	})
	.catch(function(error) {
		console.log(JSON.stringify(error));
	});
};
