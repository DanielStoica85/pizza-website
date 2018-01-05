// Scroll Reveal Animations
window.sr = ScrollReveal();

sr.reveal(".section-title", {
    duration: 1000,
    origin: 'top',
    distance: '50px',
    easing: 'ease-in-out',
    scale: 0.2,
    mobile: false
});

sr.reveal(".section-subtitle", {
    duration: 1000,
    delay: 1000,
    origin: 'top',
    distance: '50px',
    easing: 'ease-in-out',
    scale: 0.2,
    mobile: false
});

sr.reveal(".left", {
    duration: 2000,
    delay: 2000,
    origin: 'left',
    distance: '300px',
    easing: 'ease-in-out',
    scale: 0.5,
    mobile: false
});

sr.reveal(".right", {
    duration: 2000,
    delay: 2000,
    origin: 'right',
    distance: '300px',
    easing: 'ease-in-out',
    scale: 0.5,
    mobile: false
});

sr.reveal(".order", {
    duration: 2000,
    delay: 2000,
    scale: 0.2,
    easing: 'ease-in-out',
    mobile: false,
    rotate: { x: 0, y: 360, z: 180}
}, 300);

sr.reveal(".ingredient-box", {
    duration: 500,
    delay: 2000,
    scale: 0.1,
    easing: 'ease-in-out',
    mobile: false,
    rotate: {x: 0, y: 0, z: 180}
}, 100);

// Add smooth scrolling to all links
$("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            // window.location.hash = hash;
        });
    } // End if
});