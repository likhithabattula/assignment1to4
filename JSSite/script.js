function changeText() {
    document.getElementById("textSection").innerHTML = "<p>This text has been changed.</p>";
}

function changeImage() {
    document.getElementById("imageSection").innerHTML = "<img style='width: 80px; height: 80px;' src='https://st3.depositphotos.com/1003352/16380/i/450/depositphotos_163808604-stock-photo-spring-bloom-1.jpg' alt='New Image'>";
}

function validateField() {
    var fieldValue = document.getElementById("validationField").value;
    if (fieldValue.trim() === "") {
        document.getElementById("errorMessage").style.display = "block";
    } else {
        document.getElementById("errorMessage").style.display = "none";
        // Proceed with further actions if needed
    }
}

var accordions = document.getElementsByClassName("accordion");
for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
