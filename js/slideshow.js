var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    if (n == -1 && slideIndex == 1) {
        blackSidebar(true);
        slideIndex = 16;
        showSlides(slideIndex);
    } else {
        blackSidebar(false);
        showSlides(slideIndex += n);
    }


}

// Thumbnail image controls
function currentSlide(n) {
    whiteIcons(n);
    showSlides(slideIndex = n);
}

function clickSlide(n) {
    whiteIcons(n);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n == 16) {
        blackSidebar(true);
    } else {
        blackSidebar(false);
    }
    whiteIcons(n);
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function whiteIcons(n) {
    if (n == 5 || n == 6 || n == 11 || n == 13 || n == 4 || n == 7 || n == 16) {
        document.getElementById("white-icon").style.color = "#ffffff";
        document.getElementById("white-icon-1").style.color = "#ffffff";
        document.getElementById("white-icon-2").style.color = "#ffffff";


    } else {
        document.getElementById("white-icon").style.color = "#000000";
        document.getElementById("white-icon-1").style.color = "#000000";
        document.getElementById("white-icon-2").style.color = "#000000";
    }
}

function blackSidebar(n) {
    if (n == true) {

        document.getElementById("navLinks").style.backgroundColor = "#000000";
    } else if (n == false) {
        document.getElementById("navLinks").style.backgroundColor = "#4169E1";
    }
}