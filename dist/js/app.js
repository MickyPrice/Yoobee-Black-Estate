// Nav toggle function
document.getElementById('nav__toggler').addEventListener('click', _ => {
    document.getElementById('nav__right').classList.toggle('nav__right--shown');
});



// Call function to resize aspect ratio divs
// On load & resize
window.onload = _ => {
    fix_aspect_ratios();
}
window.onresize = _ => {
    fix_aspect_ratios();
};

// Set .aspect divs to have the same height as their width
function fix_aspect_ratios () {
    var squares = document.getElementsByClassName("aspect");
    for (const key in squares) {
        if (squares.hasOwnProperty(key)) {
            const element = squares[key];
            if (window.innerWidth > 1000){
                element.style.height = element.clientWidth + "px";
            }else {
                element.style.height = null;
            }
        }
    }
}



// Booking Form Validation
if (document.getElementById("booking-form")) {
    document.getElementById("booking-form").addEventListener('submit', e => {
        
        var errors = [];

        var inputs = document.querySelectorAll("#booking-form input");


        for (var key in inputs) { 
            if (inputs.hasOwnProperty(key)) {
                const element = inputs[key];
                if (element.hasAttribute('required')) { // This block checks if all required fields are filled in
                    if (!element.value) {
                        if (!errors.includes("Missing Fields")) {
                            errors.push("Missing Fields")
                        }
                        errorElement(element);
                    }
                }

            }
        }
 

        if (errors.length > 0) { // Check for errors, print them in the erros field
            e.preventDefault(); // Stop form from submitting 

            document.getElementById('errors').innerText = "";
            errors.forEach(error => {
                if (error == errors[errors.length - 1]) {
                    document.getElementById('errors').append(error);
                }else{
                    document.getElementById('errors').append(error + ", ");
                }
            });
        }

    });
}


function errorElement(element) { // Mark an input red with error
    element.style.background = "rgb(255, 173, 173)";
    setTimeout(function () {
        element.style.background = "#FFF";
    }, 1000);
}


