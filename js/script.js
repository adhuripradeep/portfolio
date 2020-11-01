

// Portfolio Item Filter

const FilterContainer = document.querySelector(".portfolio-filter"),
    filterBtns = FilterContainer.children,
    totalFilterBtn = filterBtns.length,
    porfolioItems = document.querySelectorAll(".porfolio-Item"),
    totalPortfolioItem = porfolioItems.length;


for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        FilterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalPortfolioItem; k++) {
            if (filterValue === porfolioItems[k].getAttribute("data-catergory")) {
                porfolioItems[k].classList.add("show");
            }
            else {
                porfolioItems[k].classList.add("hide");
            }
        }
    })
}