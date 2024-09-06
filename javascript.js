// window.onscroll() = function() {
//     let about_appear = 20;
//     let projects_appear = 200;

//     if ((document.body.scrollTop >= about_appear) || (document.documentElement.scrollTop >= about_appear)) {
//         document.getElementByClass("about").style.opacity = '1';
//         document.getElementByClass("about").style.pointerEvents = 'all';
//     }
// }

document.addEventListener("scroll", (event) => { 
    let about_appear = 350;
    let projects_appear = 1250;
    let hand_appear = 100;

    if (window.scrollY >= about_appear) {
        document.querySelector(".about").style.opacity = 1;
        document.querySelector(".about").style.pointerEvents = 'all';
    }

    if (window.scrollY >= projects_appear) {
        document.querySelector(".projects").style.opacity = 1;
        document.querySelector(".projects").style.pointerEvents = 'all';
    }

    if (window.scrollY >= hand_appear) {
        document.querySelector(".footer").style.opacity = 1;
        document.querySelector(".footer").style.pointerEvents = 'all';
    } else {
        document.querySelector(".footer").style.opacity = 0;
        document.querySelector(".footer").style.pointerEvents = 'none';
    }
 });