import "./topicOverview.css";
import graniteDataVisualization from "../../graniteComponents/graniteDataVisualization";
import graniteTable from "../../graniteComponents/graniteTable";

// Global Variables
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const colors = ["#7DDBF5", "#AA4CFC", "#5D50E6"];

/* ------------------------------
Overview Chart
------------------------------ */
const topicOverviewChart = {
  id: "topic-line-chart",
  feature: "line chart",
  options: {
    type: "line chart",
    color: "#39cdf4",
    legend: true,
    key: ["{topic.name01}", "{topic.name02}", "{topic.name03}"],
    stroke_colors: ["#7DDBF5", "#AA4CFC", "#5D50E6"],
  },
  records: [],
};

const label = [
  "Jan 1",
  "Jan 4",
  "Jan 7",
  "Jan 10",
  "Jan 13",
  "Jan 16",
  "Jan 21",
  "Jan 24",
  "Jan 27",
  "Jan 30",
];

label.forEach((label, index) => {
  let record = {
    value: [
      label,
      getRandomNumberBetween(0, 100),
      getRandomNumberBetween(0, 100),
      getRandomNumberBetween(0, 100),
    ],
  };
  topicOverviewChart.records.push(record);
});

graniteDataVisualization(topicOverviewChart);

/* ------------------------------
Score Table
------------------------------ */
const scoreTable = {
  id: "score-table",
  feature: "table",
  options: {
    type: "table",
    datatables: false,
    searching: false,
    paging: false,
    page_length: 10,
  },
  records: [
    {
      type: "header",
      background: "#FAFAFA",
      children: [
        { value: "Topic", text_align: "left" },
        { value: "Campaigns", text_align: "center" },
        { value: "Accounts", text_align: "center" },
        { value: "Topic Score", text_align: "center" },
      ],
    },
  ],
};
const accounts = ["{topic.name01}", "{topic.name02}", "{topic.name03}"];
accounts.forEach((account, index) => {
  let record = {
    type: "row",
    href: "",
    children: [
      { value: account, text_align: "left", color_label: colors[index] },
      {
        value: getRandomNumberBetween(0, 10),
        text_align: "center",
      },
      { value: getRandomNumberBetween(0, 1000), text_align: "center" },
      {
        value: getRandomNumberBetween(0, 100),
        strength: true,
        text_align: "center",
      },
    ],
  };
  scoreTable.records.push(record);
});

graniteTable(scoreTable);

/* ------------------------------
Market Engagement
------------------------------ */
const marketingEngagement = {
  id: "marketing-engagement",
  feature: "table",
  options: {
    type: "table",
    datatables: false,
    searching: false,
    paging: false,
    page_length: 10,
  },
  records: [
    {
      type: "header",
      background: "#FAFAFA",
      children: [
        { value: "Market Engagement", text_align: "left" },
        {
          value: "{topic.name01}",
          text_align: "center",
          color_label: colors[0],
        },
        {
          value: "{topic.name02}",
          text_align: "center",
          color_label: colors[1],
        },
        {
          value: "{topic.name03}",
          text_align: "center",
          color_label: colors[2],
        },
      ],
    },
  ],
};
const marketVariables = [
  "Ad Impressions",
  "Ad Clicks",
  "Web Visits",
  "Form Fills",
  "Marketing Score",
];

marketVariables.forEach((market, index) => {
  let record = {
    type: "row",
    href: "",
    children: [
      {
        value: market,
        text_align: "left",
      },
      {
        value: getRandomNumberBetween(0, 50),
        text_align: "center",
      },
      {
        value: getRandomNumberBetween(0, 50),
        text_align: "center",
      },
      {
        value: getRandomNumberBetween(0, 50),
        text_align: "center",
      },
    ],
  };
  marketingEngagement.records.push(record);
});

graniteTable(marketingEngagement);

/* ------------------------------
Sales Engagement
------------------------------ */
const salesEngagement = {
  id: "sales-engagement",
  feature: "table",
  options: {
    type: "table",
    datatables: false,
    searching: false,
    paging: false,
    page_length: 10,
  },
  records: [
    {
      type: "header",
      background: "#FAFAFA",
      children: [
        { value: "Sales Engagement", text_align: "left" },
        {
          value: "{topic.name01}",
          text_align: "center",
          color_label: colors[0],
        },
        {
          value: "{topic.name02}",
          text_align: "center",
          color_label: colors[1],
        },
        {
          value: "{topic.name03}",
          text_align: "center",
          color_label: colors[2],
        },
      ],
    },
  ],
};
const salesVariables = [
  "Emails Sent",
  "Emails Opened",
  "Email Responses",
  "Booked Meetings",
  "Opps Created",
  "Opps Won",
  "Sales Score",
];

salesVariables.forEach((value, index) => {
  let record = {
    type: "row",
    href: "",
    children: [
      {
        value: value,
        text_align: "left",
      },
      {
        value: getRandomNumberBetween(0, 50),
        text_align: "center",
      },
      {
        value: getRandomNumberBetween(0, 50),
        text_align: "center",
      },
      {
        value: getRandomNumberBetween(0, 50),
        text_align: "center",
      },
    ],
  };
  salesEngagement.records.push(record);
});

graniteTable(salesEngagement);
