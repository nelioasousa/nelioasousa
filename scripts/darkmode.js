function setEventHandlers() {
  let button = document.querySelector("#darkmode");
  button.addEventListener("click", (e) => {
    let html = document.querySelector("html");
    let tables = document.querySelectorAll("table");
    let anchors = document.querySelectorAll("a");
    if (button.checked) {
      html.style.backgroundColor = "rgb(35, 35, 35)";
      html.style.color = "white";
      for (let a of anchors) { a.style.color = "lightgreen"; }
      for (let table of tables) {
        table.style.borderColor = "rgb(200, 200, 200)";
        table.style.color = "white";
      }
    } else {
      html.style.backgroundColor = "rgb(240, 240, 240)";
      html.style.color = "black";
      for (let a of anchors) { a.style.color = "mediumslateblue"; }
      for (let t of tables) {
        t.style.borderColor = "rgb(35, 35, 35)";
        t.style.color = "black";
      }
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("load", setEventHandlers);
} else {
  setEventHandlers();
}
