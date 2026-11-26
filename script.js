const dashboardView = document.querySelector(".dashboard-view");
const accountTrigger = document.querySelector("#account-trigger");
const accountMenu = document.querySelector("#account-menu");
const accountMessage = document.querySelector("#account-message");

function setMenuOpen(isOpen) {
    accountTrigger.setAttribute("aria-expanded", String(isOpen));
    accountMenu.hidden = !isOpen;
}

accountTrigger.addEventListener("click", () => {
    setMenuOpen(accountMenu.hidden);
});

document.addEventListener("click", (event) => {
    if (dashboardView.contains(event.target) && !event.target.closest(".account")) {
        setMenuOpen(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !accountMenu.hidden) {
        setMenuOpen(false);
        accountTrigger.focus();
    }
});

accountMenu.addEventListener("click", (event) => {
    const menuButton = event.target.closest("[data-message]");
    if (menuButton) {
        accountMessage.textContent = menuButton.dataset.message;
        setMenuOpen(false);
    }
});

document.querySelector(".study-list").addEventListener("click", (event) => {
    const studyButton = event.target.closest("[data-message]");
    if (studyButton) {
        accountMessage.textContent = studyButton.dataset.message;
    }
});
