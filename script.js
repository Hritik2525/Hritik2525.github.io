// Simple fade-in animation for sections
const sections = document.querySelectorAll("section");

const options = {
    threshold: 0.1,
};

const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        }
    });
}, options);

sections.forEach((section) => {
    section.classList.add("hidden");
    reveal.observe(section);
});
