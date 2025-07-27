export function link() {
    document.querySelectorAll("Link[to^='#']").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("to");
            const targetElement = document.querySelector(targetId);

            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}