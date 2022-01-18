export default function platformNavigation() {
  const a__id = "hub-navigation";
  const navigationHTML = document.createElement("div");
  navigationHTML.classList.add("a__nav-container");
  navigationHTML.innerHTML = `
  <div class="a__desktop-header">
    <div class="a__mobile-settings-header">
      <a href="/">
        <i class="fal fa-angle-left"></i>
      </a>
      <h2 class="a__settings-text">Settings</h2>
    </div>
    <div class="a__logo-container">
      <a href="/"
        ><img
          class="a__desktop-logo"

          src="https://cdn.addapptation.com/addapptation/granite/addapptation_logo_light-svg.svg"
        />
        <img
          class="a__mobile-logo"
          src="https://cdn.addapptation.com/addapptation/granite/Addapptation_logo.svg"
        />
      </a>
    </div>
    <div class="a__menu-items">
      <h4 class="a__page-name">Dashboard</h4>
      <div class="a__item a__dropdown">
        <a class="a__link a__profile-logo">E</a>
        <div class="a__dropdown-container">
          <div class="a__dropdown-item">
            <a href="/profile.html" class="a__dropdown-link">Profile</a>
          </div>
          <div class="a__dropdown-item">
            <a href="/billing.html?tabs=2"  class="a__dropdown-link">Billing</a>
          </div>
          <div class="a__dropdown-item">
            <a href="#" class="a__dropdown-link">Permissions</a>
          </div>
          <div class="a__dropdown-item">
            <a href="/dataConnections.html?tabs=4" class="a__dropdown-link">Data Connections</a>
          </div>
          <div class="a__dropdown-item a__log-out">
            <a class="a__dropdown-link">Log Out</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="a__mobile-header">
    <div class="a__hamburger-container">
      <div class="a__bar1"></div>
      <div class="a__bar2"></div>
      <div class="a__bar3"></div>
    </div>
    <div class="a__logo-container-mobile">
      <a href="/"
        ><img
          src="https://cdn.addapptation.com/addapptation/granite/Addapptation_logo.svg"
      /></a>
    </div>
  </div>`;
  document.getElementById(a__id).appendChild(navigationHTML);
  /*------------------------
  Account Dropdown - Desktop
  -------------------------*/
  let dropdownMenus = document.querySelectorAll(".a__dropdown");
  dropdownMenus.forEach((menu) => {
    const dropdownContainer = menu.querySelector(".a__dropdown-container");
    menu.addEventListener("click", (e) => {
      dropdownContainer.classList.toggle("a__active-dropdown");
    });

    document.addEventListener("click", (e) => {
      let click = e.target;
      if (!click.classList.contains("a__profile-logo")) {
        dropdownMenus.forEach((menu) => {
          let dropdown = menu.querySelector(".a__dropdown-container");
          if (dropdown.classList.contains("a__active-dropdown")) {
            dropdown.classList.remove("a__active-dropdown");
          }
        });
      }
    });
  });

  const mobileMenu = document.querySelector(".a__hamburger-container");
  const sideMenu = document.querySelector(".a__desktop-header");

  mobileMenu.addEventListener("click", () => {
    sideMenu.classList.toggle("a__active-mobile-menu");
  });
}
