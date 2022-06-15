let liElements = document.querySelectorAll("li");

console.log(liElements);

let selectedElements = new Set();

function toggleContent(e) {
    let unselectedContent = e.querySelector(".unselected-content");
    let selectedContent = e.querySelector(".selected-content");
    unselectedContent.classList.toggle("invisible");
    selectedContent.classList.toggle("invisible");
}

Array.from(liElements).forEach(e => {
    e.addEventListener("click", ev => {

        toggleContent(e);

        if(e.classList.contains("selected")) {
            e.classList.remove("selected");
            selectedElements = new Set();
            return;
        }

        selectedElements.forEach(element => {
            element.classList.remove("selected");
            toggleContent(element);
        });

        selectedElements = new Set();

        e.classList.add("selected");
        selectedElements.add(e);
    });
});

let bgColors = ["#F0F9FF","#E0F2FE","#BAE6FD","#7DD3FC","#38BDF8","#0EA5E9","#0284C7","#0369A1","#075985","#0C4A6E"];

for(let i = bgColors.length - 2; i >= 0; --i) {
    bgColors.push(bgColors[i]);
}

for(let i = 0; i < liElements.length; ++i) {
    let color = bgColors[i % bgColors.length];
    let liChild = liElements[i];
    liChild.style["background-color"] = color;
}