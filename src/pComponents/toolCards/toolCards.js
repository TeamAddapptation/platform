export default function toolCards(jsonBlock) {
  /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const cssId = "#" + id;

  /*---------------------------------------------
    Check Alignment & Set Mode
    ---------------------------------------------*/
  let granite_div = document.getElementById(id);
  if (granite_div === null) {
    console.error("Object ID and Granite Div ID Do Not Match");
  }

  /*---------------------------------------------
    CSS
    ---------------------------------------------*/
  var textCss = document.createElement("style");
  textCss.innerHTML = `
    /*---------------------------------------------
    No Records
    ---------------------------------------------*/
    ${cssId}{
      display: grid;
      grid-template-columns: 1fr;
  }
    ${cssId} .p__project-container{

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 20px;
        grid-column-gap: 1rem;
    }
    ${cssId} .p__project-cont{
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 400;
      display: flex;
      justify-content:center;
      align-items: center;
      padding: 15px;
      background: #FFFFFF;
      border: 1px solid #EAEAEA;
      box-sizing: border-box;
      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
    }
    ${cssId} .p__project-thumb{
      background: #FFFFFF;
      border: 1px solid #EAEAEA;
      box-sizing: border-box;
      box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
    }
    ${cssId} .p__project-img-cont{
      display: flex;
      justify-content: center;
      alight-items: center;
      width: auto;
      height: 160px;
      padding: 15px
    }
    ${cssId} .p__project-img-cont{
      max-height: 130px;
      width: auto;
    }
    ${cssId} .p__project-details{
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-top: 1px solid #eaeaea;
      padding: 15px
    }
    ${cssId} .p__details-right{
      display: grid;
      justify-items: end;
      align-items: center;
    }
    ${cssId} .p__details-right i{
      color: #a1a1a1;
    }
    ${cssId} .p__details-right i:hover{
      cursor: pointer;
      color: #eaeaea;
    }
    ${cssId} .p__name{
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      color: #5d5d5d;
      margin: 0;
    }
    ${cssId} .p__edit-date{
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 14px;
      color: #bcbcbc;
      margin: 0;
    }
    ${cssId} .p__img-cont img{
      width: 100%;
      height: auto;
    }
    ${cssId} a{
      text-decoration: none;
    }
    ${cssId} .p__action-container{
      position: relative;
    }
    ${cssId} .p__menu-container{
      position: absolute;
      display: none;
      bottom: 20px;
      right: 0;
      background: #ffffff;
      border: 1px solid #EAEAEA;
      box-sizing: border-box;
      box-shadow: 2px 2px 12px rgb(0 0 0 / 5%);
      border-radius: 10px;
      overflow: hidden;
    }
    ${cssId} .p__menu-container.active{
      display: block;
    }
    ${cssId} .p__menu-container ul.p__action-menu {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    ${cssId} .p__menu-container ul.p__action-menu li button {
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 400;
      width: 100px;
      padding-top: 5px;
      padding-bottom: 5px;
      border: 0;
      font-size: .7rem;
      text-align: left;
      padding-left: 10px;
      color: #5d5d5d;
      background: #ffffff;
      transition: all 0.5s ease;
    }
    ${cssId} .p__menu-container ul.p__action-menu li button:hover {
      cursor: pointer;
      color: #5D50E6;
      background: #F3F7FF
    }

    @media only screen and (max-width: 768px) {
      ${cssId} .p__project-container{
        grid-template-columns: 1fr;
      }
    }
    `;
  document.head.appendChild(textCss);

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("p__project-container");

  r.forEach((r) => {
    const project = document.createElement("a");
    if (r.project_link) {
      project.href = r.project_link || "#";
    }
    project.classList.add("p__project-thumb");

    const imgCont = document.createElement("div");
    imgCont.classList.add("p__project-img-cont");
    if (r.bkg_color) {
      imgCont.style.backgroundColor = r.bkg_color;
    }
    if (r.preview_img) {
      const thumbImg = document.createElement("img");
      thumbImg.classList.add("p__project-img");
      thumbImg.src = r.preview_img || "";
      imgCont.appendChild(thumbImg);
    }
    project.appendChild(imgCont);

    const detailsCont = document.createElement("div");
    detailsCont.classList.add("p__project-details");
    project.appendChild(detailsCont);

    const detailsLeft = document.createElement("div");
    detailsLeft.classList.add("p__details-left");
    detailsCont.appendChild(detailsLeft);

    const projectName = document.createElement("p");
    projectName.classList.add("p__name");
    projectName.innerHTML = r.desc;
    detailsLeft.appendChild(projectName);

    const lastEdited = document.createElement("p");
    lastEdited.classList.add("p__edit-date");
    lastEdited.innerHTML = r.edit_date;
    detailsLeft.appendChild(lastEdited);

    const detailsRight = document.createElement("div");
    detailsRight.classList.add("p__details-right");
    detailsCont.appendChild(detailsRight);

    const actionContainer = document.createElement("div");
    actionContainer.classList.add("p__action-container");
    detailsRight.appendChild(actionContainer);

    const actionMenuIcon = document.createElement("i");
    actionMenuIcon.id = "p__action-menu-icon";
    actionMenuIcon.setAttribute("class", "far fa-ellipsis-h");
    actionContainer.appendChild(actionMenuIcon);

    const actionMenu = document.createElement("div");
    actionMenu.classList.add("p__menu-container");
    actionContainer.appendChild(actionMenu);

    const menu = document.createElement("ul");
    menu.classList.add("p__action-menu");
    actionMenu.appendChild(menu);

    const duplicateAction = document.createElement("li");
    const duplicateLink = document.createElement("button");
    duplicateLink.type = "button";
    duplicateLink.id = "p__dupliate-tool";
    duplicateLink.innerText = "Duplicate";
    duplicateAction.appendChild(duplicateLink);
    menu.appendChild(duplicateAction);

    const deleteAction = document.createElement("li");
    const deleteLink = document.createElement("button");
    deleteLink.type = "button";
    deleteLink.id = "p__delete-tool";
    deleteLink.innerText = "Delete";
    deleteAction.appendChild(deleteLink);
    menu.appendChild(deleteAction);

    projectContainer.appendChild(project);
  });

  /*---------------------------------------------
    Append micro to the DOM
    ---------------------------------------------*/
  granite_div.appendChild(projectContainer);

  const actionBtnArr = document.querySelectorAll(".p__action-container");
  actionBtnArr.forEach((actionBtn) => {
    actionBtn.addEventListener("click", () => {
      const menuContainer = actionBtn.querySelector(".p__menu-container");
      menuContainer.classList.toggle("active");
    });
  });
}
