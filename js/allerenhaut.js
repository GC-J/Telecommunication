monbtn = document.getElementById("AllerEnHaut");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100) {
        monbtn.style.display = "block";
    } else {
        monbtn.style.display = "none";

    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo({top: 0, behavior: 'smooth'});
}