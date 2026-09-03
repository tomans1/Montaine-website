document.documentElement.classList.add("js");

const navLinks = document.querySelectorAll("header .main-nav a");
const currentFile = window.location.pathname.split("/").pop() || "index.html";
const articlePage = window.location.pathname.includes("/articles/");

navLinks.forEach((link) => {
    const targetFile = new URL(link.href, window.location.href).pathname.split("/").pop();
    const isCurrentPage = targetFile === currentFile;
    const isArticleIndex = articlePage && targetFile === "articles.html";

    if (isCurrentPage || isArticleIndex) {
        link.setAttribute("aria-current", "page");
    }
});

document.querySelectorAll("main img").forEach((image) => {
    image.decoding = "async";

    if (!image.hasAttribute("loading") && !image.closest(".hero, .article-hero")) {
        image.loading = "lazy";
    }
});

document.querySelectorAll(".meta-icon").forEach((icon) => {
    icon.setAttribute("aria-hidden", "true");
});

if (articlePage) {
    const progress = document.createElement("div");
    progress.className = "reading-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);
}
