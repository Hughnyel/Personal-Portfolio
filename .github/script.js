// ==========================
// PROJECT BUTTONS (CLICK)
// ==========================
const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const url = this.getAttribute("data-link");

        // Glow click effect
        this.style.boxShadow = "0 0 20px #00ffff";

        setTimeout(() => {
            this.style.boxShadow = "";
        }, 300);

        // Open link in new tab
        window.open(url, "_blank");
    });
});


// ==========================
// EMAIL CLICK TO COPY
// ==========================
const email = document.getElementById("email");

if (email) {
    email.style.cursor = "pointer";

    email.addEventListener("click", () => {
        navigator.clipboard.writeText(email.textContent);

        alert("Email copied to clipboard!");
    });
}


// ==========================
// OPTIONAL: SMOOTH SCROLL
// ==========================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
