const root = document.documentElement;
const carouselElementsDisplayed = getComputedStyle(root).getPropertyValue("--carousel-elements-displayed");
const carouselContent = document.querySelector("ul.carousel-content");

root.style.setProperty("--carousel-elements", carouselContent.children.length);

for (let i = 0; i < carouselElementsDisplayed; i++) {
    carouselContent.appendChild(carouselContent.children[i].cloneNode(true));
}