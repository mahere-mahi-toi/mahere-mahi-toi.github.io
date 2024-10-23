document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Draggable)
    // gsap code here!
});

function goBack() {
    window.history.back();
}
