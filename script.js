const typed = new Typed('.multiple-text', {
    strings: ["Perfect gift ideas for your special ones!", "Cool gift ideas at Zero cost!", "One stop solutions for all occasions!"],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
})

// const observer = new IntersectionObserver((entries) => {
// 	entries.forEach((entry)=>{
// 		console.log(entry);
// 		if (entry.isIntersecting) {
// 			entry.target.classList;.add('show');
// 		}
// 		else {
// 			entry.target.classList.remove('show');
// 		}
// 	});
// });
// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));
ScrollReveal({ 
    // reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.headline, .heading, ', { origin: 'top'});
ScrollReveal().reveal('.frm, .contact form', { origin: 'bottom'});
ScrollReveal().reveal(' .description, .menu', { origin: 'left'});
// ScrollReveal().reveal('.input-group' , { origin: 'right'});
// ScrollReveal().reveal('.msg',.contact-title' , { origin: 'right'});

function myFunction() {

    document.getElementById("solution").innetHTML = "Book"+" "+"Chocolate";
}
