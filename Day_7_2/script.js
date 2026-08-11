const shape = document.getElementById("shape");
const inputs = document.getElementById("inputs");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");


// Display the correct inputs
function displayInputs() {

    if (shape.value === "rectangle") {

        inputs.innerHTML = `
            <input 
                type="number" 
                id="length" 
                placeholder="Enter length"
            >

            <input 
                type="number" 
                id="width" 
                placeholder="Enter width"
            >
        `;

    } else if (shape.value === "square") {

        inputs.innerHTML = `
            <input 
                type="number" 
                id="side" 
                placeholder="Enter side"
            >
        `;

    } else if (shape.value === "triangle") {

        inputs.innerHTML = `
            <input 
                type="number" 
                id="base" 
                placeholder="Enter base"
            >

            <input 
                type="number" 
                id="height" 
                placeholder="Enter height"
            >
        `;

    } else if (shape.value === "circle") {

        inputs.innerHTML = `
            <input 
                type="number" 
                id="radius" 
                placeholder="Enter radius"
            >
        `;
    }
}


// Calculate the area
calculateBtn.addEventListener("click", function () {

    let area;

    if (shape.value === "rectangle") {

        const length = Number(document.getElementById("length").value);
        const width = Number(document.getElementById("width").value);

        if (length <= 0 || width <= 0) {
            result.textContent = "Please enter valid values.";
            return;
        }

        area = length * width;

    } else if (shape.value === "square") {

        const side = Number(document.getElementById("side").value);

        if (side <= 0) {
            result.textContent = "Please enter a valid value.";
            return;
        }

        area = side * side;

    } else if (shape.value === "triangle") {

        const base = Number(document.getElementById("base").value);
        const height = Number(document.getElementById("height").value);

        if (base <= 0 || height <= 0) {
            result.textContent = "Please enter valid values.";
            return;
        }

        area = (base * height) / 2;

    } else if (shape.value === "circle") {

        const radius = Number(document.getElementById("radius").value);

        if (radius <= 0) {
            result.textContent = "Please enter a valid value.";
            return;
        }

        area = Math.PI * radius * radius;
    }

    result.textContent = `Area = ${area.toFixed(2)} square units`;
});


// Change inputs when shape changes
shape.addEventListener("change", displayInputs);


// Display rectangle inputs when page loads
displayInputs();