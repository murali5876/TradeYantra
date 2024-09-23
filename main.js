// $(document).ready(function () {
//     var silder = $(".owl-carousel");
//     silder.owlCarousel({
//         autoplay: true,
//         autoplayTimeout: 3000,
//         autoplayHoverPause: false,
//         items: 1,
//         stagePadding: 20,
//         center: true,
//         nav: false,
//         margin: 50,
//         dots: true,
//         loop: true,
//         responsive: {
//             0: { items: 1 },
//             480: { items: 2 },
//             575: { items: 2 },
//             768: { items: 2 },
//             991: { items: 3 },
//             1200: { items: 4 }
//         }
//     });
// });




// let big = document.getElementById('big');
// big.addEventListener('mouseover', function () { 
// let counts = setInterval(updated);
// let upto = 0;
// function updated() {
//     let count = document.getElementById("years");
//     count.innerHTML = ++upto;
//     if (upto === 30) {
// clearInterval(counts);
// }
// }
// })

// let bigger = document.getElementById('bigger');
// bigger.addEventListener('mouseover', function () { 
// let a = setInterval(updated);
// let b = 0;
// function updated() {
//     let count = document.getElementById("total");
//     count.innerHTML = ++b;
//     if (b === 7) {
// clearInterval(a);
// }
// }
// })

// let biggest = document.getElementById('biggest');
// biggest.addEventListener('mouseover', function () { 
// let c = setInterval(updated);
// let d = 0;
// function updated() {
//     let count = document.getElementById("customers");
//     count.innerHTML = ++d;
//     if (d === 872) {
// clearInterval(c);
// }
// }
// })




function startCounting(elementId, targetNumber) {
    let count = 0;
    let element = document.getElementById(elementId);
    let interval = setInterval(() => {
        element.innerHTML = ++count;
        if (count === targetNumber) {
            clearInterval(interval);
        }
    }, 50); // Adjust the speed of counting here if needed
}

document.getElementById('big').addEventListener('mouseover', function () { 
    startCounting('years', 30);
});

document.getElementById('bigger').addEventListener('mouseover', function () { 
    startCounting('total', 7);
});

document.getElementById('biggest').addEventListener('mouseover', function () { 
    startCounting('customers', 1090);
});







