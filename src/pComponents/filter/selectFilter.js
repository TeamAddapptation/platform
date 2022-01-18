export default function selectFilter(jsonBlock) {
  /*---------------------------------------------
    Global Variables
    ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);

  /*---------------------------------------------
    CSS Block
    ---------------------------------------------*/
  var imgCss = document.createElement("style");
  imgCss.id = "g__css_" + id;
  imgCss.innerHTML = `
  ${cssId} .g__filter-label{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: .8rem;
    color: #5d5d5d;
    cursor: pointer;
  }
  ${cssId} select{
    background: white;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    min-width: 150px;
    font-size: 0.8rem;
    border: 0;
    border-bottom: 2px solid #eaeaea;
    color: #5d5d5d;
    cursor: pointer;
    background: transparent;
    padding: 7px 5px;
    line-height: 1.1;
  }
    `;
  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(imgCss);

  /*---------------------------------------------
    Wrapper
  ---------------------------------------------*/
  const filterContainer = document.createElement("div");
  filterContainer.classList.add("g__filter_container");

  if (o.label) {
    const filterLabel = document.createElement("label");
    filterLabel.classList.add("g__filter-label");
    filterLabel.innerHTML = o.label;
    filterContainer.appendChild(filterLabel);
  }

  let filter = document.createElement("select");
  if (o.href_select) {
    filter.setAttribute("onChange", "location = this.value;");
  }
  filter.classList.add("g__elm_select");
  !!o.select_id ? (filter.id = o.select_id) : "";
  !!o.select_id ? (filter.name = o.select_id) : "";
  !!o.select_classes ? filter.classList.add(o.select_classes) : "";
  filterContainer.appendChild(filter);
  if (o.placeholder) {
    const placeholder = document.createElement("option");
    placeholder.selected = true;
    placeholder.disabled = true;
    placeholder.innerHTML = o.placeholder;
    filter.appendChild(placeholder);
  }
  if (o.select_options) {
    o.select_options.forEach((opt) => {
      const option = document.createElement("option");
      let formatValue = opt[0];
      option.setAttribute("value", formatValue);
      option.innerHTML = opt[1];
      filter.appendChild(option);
    });
  }

  /*---------------------------------------------
    Append micro to the DOM
  ---------------------------------------------*/
  granite_div.appendChild(filterContainer);
}
