import graniteTable from "../../graniteComponents/graniteTable";
import graniteTabs from "../../graniteComponents/graniteTabs";
import selectFilter from "../../pComponents/filter/selectFilter";

const theme = {
  mode: "standard",
};
const intentSignals = {
  id: "intent-signal-attribution",
  feature: "table",
  options: {
    type: "table",
    datatables: true,
    searching: false,
    paging: false,
    page_length: 10,
  },
  records: [
    {
      type: "header",
      background: "#FAFAFA",
      children: [
        { value: "" },
        { value: "Topic" },
        { value: "Accounts" },
        { value: "Contact" },
        { value: "Campaigns" },
        { value: "Marketing Score" },
        { value: "Sales Score" },
        { value: "Topic Score" },
      ],
    },
  ],
};

function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const accounts = [
  "Accounts Count",
  "6Sense",
  "Bombora",
  "Clearbit",
  "Demandbase",
  "Engagio",
  "Folloze",
  "Integrate",
  "Intent Data",
  "Kickfire",
];

accounts.forEach((account, index) => {
  let record = {
    type: "row",
    href: "",
    children: [
      {
        value: `<label class="p__checkbox-container"><input name="${account}" class="p__checkbox-row" type="checkbox"><span class="p__checkmark"></span></label>`,
      },
      { value: account },
      {
        value: getRandomNumberBetween(0, 10),
        text_align: "center",
      },
      { value: getRandomNumberBetween(0, 1000), text_align: "center" },
      {
        value: getRandomNumberBetween(0, 30),
        text_align: "center",
      },
      {
        value: getRandomNumberBetween(0, 100),
        strength: true,
        text_align: "center",
        tooltip: "<div class='g__tooltip-row'>Emails Sent 7</div>",
      },
      {
        value: getRandomNumberBetween(0, 100),
        strength: true,
        text_align: "center",
      },
      {
        value: getRandomNumberBetween(0, 100),
        score: true,
        text_align: "center",
      },
    ],
  };
  intentSignals.records.push(record);
});

graniteTable(intentSignals);

const mainTabs = {
  id: "tabs-menu",
  options: {
    g_style: "line",
    g_align_tabs: "left",
    g_font_size: "16",
    g_font_color: "#a1a1a1",
    g_font_hover_color: "",
    g_icon_size: "",
    g_step_number_color: "",
    g_title_size: "20px",
    g_title_color: "",
    g_description_size: "12px",
    g_description_color: "",
    g_highlight_color: "",
    g_background_color: "",
    g_background_active_color: "#ffffff",
    g_background_hover_color: "",
    g_align: "center",
    g_align_icon: "",
    g_direction: false,
    g_padding: "10px 40px",
    g_margin: "0",
    g_border_width: "",
    g_border_color: "red",
    g_border_radius: "",
    g_full_width: true,
    padding_top: "0",
    padding_bottom: "0",
    margin_top: "0",
    margin_bottom: "0",
    g_classes: "",
    g_cursor_disabled: false,
    g_action: "hash_builder",
  },
  records: [
    {
      name: "Intent Data",
      desc: "",
      icon: "",
      href: "/intentData",
    },
    {
      name: "Account",
      desc: "",
      icon: "",
      href: "/account",
    },
    {
      name: "Campaign",
      desc: "",
      icon: "",
      href: "/campaign",
    },
  ],
};
graniteTabs(mainTabs, theme);

/*---------------------------------------------
    Select Row - Checkboxes
    ---------------------------------------------*/
const rowCheckboxArr = document.querySelectorAll(".p__checkbox-row");
const compareBtn = document.getElementById("p__compare-btn");
if (rowCheckboxArr) {
  const checkLimit = 3;
  let checkedNum = 0;
  rowCheckboxArr.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
      let isChecked = e.target.checked;
      if (isChecked) {
        checkedNum += 1;
      } else {
        checkedNum -= 1;
      }
      if (checkedNum > 1) {
        compareBtn.setAttribute("disabled", false);
      } else {
        compareBtn.setAttribute("disabled", true);
      }
    });
  });
}
/*--------------- Compare button ---------------*/
compareBtn.addEventListener("click", () => {
  let urlParams = "/topic_overview?";
  rowCheckboxArr.forEach((box, index) => {
    if (box.checked) {
      let boxName = box.name;
      urlParams += `topic${index}=${boxName}&`;
    }
  });
  window.location.href = urlParams;
});
