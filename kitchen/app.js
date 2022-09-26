// how to add rows and accept input
const form = document.querySelector('form');
const button = document.querySelector('#addRow');

const tableEL = document.querySelector('tbody');


button.addEventListener('click', function () {
    const ingredient = document.getElementById('ingredient').value;
    const shelfLife = document.getElementById('shelfLife').value;
    alert(ingredient + shelfLife);
})
