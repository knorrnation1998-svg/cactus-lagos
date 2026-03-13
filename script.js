// ===============================
// Mobile Menu Toggle
// ===============================
const menuBtn = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===============================
// Smooth Scrolling for Anchor Links
// ===============================
const headerOffset = 70; // adjust if you have a fixed header height
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent default jump

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }

        // Close mobile menu on link click (if open)
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });
});