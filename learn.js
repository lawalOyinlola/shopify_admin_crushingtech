function app() {
  const menuTrigger = document.querySelector("#menu-trigger");
  const menu = document.querySelector("#menu");
  const allMenuItems = menu.querySelectorAll(".menu-items"); // or use roles ('[role="menu-items"]')

  function openMenu() {
    menuTrigger.ariaExpanded = "true";
    allMenuItems.item(0).focus();

    menu.addEventListener("keyup", handleMenuEscapeKeypress);
  }

  function closeMenu() {
    menuTrigger.ariaExpanded = "false";
    menuTrigger.focus();
  }

  function handleMenuEscapeKeypress(event) {
    if (event.key === "Escape") {
      toggleMenu();
    }
  }

  function toggleMenu() {
    const isExpanded = menuTrigger.attributes["aria-expanded"].value === "true";

    menu.classList.toggle("menu-active");

    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  menuTrigger.addEventListener("click", toggleMenu);
}
app();
