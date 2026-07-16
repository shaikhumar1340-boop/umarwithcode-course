var typed = new Typed("#typing", {
    strings: [
        "Frontend",
        "MERN Stack",
        "Web Designer",
        "backend","Software"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});