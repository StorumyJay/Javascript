
document.getElementById('myButton').addEventListener('mouseleave', function() {
    variable_name = document.createElement('p');
    variable_name.innerHTML = "Hola como estas";
    document.body.appendChild(variable_name);
});