export default function dataConnections(jsonBlock) {
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;

  const dataConnectionsDiv = document.getElementById("data-connections");

  /* ---- Main container ---- */
  const dc_container = document.createElement("div");
  dc_container.classList.add("a__dc-container");

  r.forEach((r, index) => {
    /* ---- Connection container ---- */
    const connection = document.createElement("div");
    connection.classList.add("a__connection");
    /* ---- Left and right content containers ---- */
    const connectionLeft = document.createElement("div");
    connectionLeft.classList.add("a__connection-left");
    connection.appendChild(connectionLeft);
    const connectionRight = document.createElement("div");
    connectionRight.classList.add("a__connection-right");
    connection.appendChild(connectionRight);
    /* ---- Logo ---- */
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("a__connection-logo");
    const logo = new Image();
    logo.src = r.logo_href;
    logoContainer.appendChild(logo);
    connectionLeft.appendChild(logoContainer);
    /* ---- Name ---- */
    const name = document.createElement("div");
    name.classList.add("a__connection-name");
    name.innerHTML = r.name;
    connectionLeft.appendChild(name);
    /* ---- Connected ---- */
    if (r.connected) {
      const connectedIcon = document.createElement("i");
      connectedIcon.setAttribute("class", "fas fa-check-circle a__green-icon");
      connectionLeft.appendChild(connectedIcon);
    }
    /* ---- Button ---- */
    const connectBtn = document.createElement("button");
    connectBtn.classList.add("a__connect-btn");
    connectBtn.classList.add("a__align-right");
    r.connected ? connectBtn.classList.add("a__connected") : "";
    connectBtn.innerHTML = r.connected ? "Connected" : "Connect";
    connectionRight.appendChild(connectBtn);

    /* ---- Append connection to container ---- */
    dc_container.appendChild(connection);
  });
  /* ---- Append container to page ---- */
  dataConnectionsDiv.appendChild(dc_container);
}
