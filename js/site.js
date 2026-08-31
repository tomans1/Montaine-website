document.documentElement.classList.add("js");

const header = document.querySelector("header");
const navLinks = document.querySelectorAll("header .main-nav a");
const currentFile = window.location.pathname.split("/").pop() || "index.html";
const articlePage = window.location.pathname.includes("/articles/");

navLinks.forEach((link) => {
    const targetFile = new URL(link.href, window.location.href).pathname.split("/").pop();
    if (targetFile === currentFile || (articlePage && targetFile === "articles.html")) {
        link.setAttribute("aria-current", "page");
    }
});

const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 18);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealTargets = document.querySelectorAll(
    "main > section:not(.hero), .featured-article, .article-card, .article-wide, .portfolio-project, .timeline-item, .related-article-card"
);

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach((element) => element.classList.add("reveal-ready"));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -5%" });
    revealTargets.forEach((element) => observer.observe(element));
}

if (articlePage) {
    const progress = document.createElement("div");
    progress.className = "reading-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);

    const updateProgress = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const value = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
        progress.style.width = `${value * 100}%`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
}
