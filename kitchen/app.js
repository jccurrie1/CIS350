// how to add rows and accept input
const button = document.querySelector('button')

button.onclick = function () {
	console.log("you clicked me")
    const newRow = document.createElement('tr');
    const newTd = document.createElement("td");
    newRow.append('newTd');

}