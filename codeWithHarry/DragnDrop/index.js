// Drap and Drop utilities in Js

const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

// Event listerners for draggble element imgBox
imgBox.addEventListener("dragstart", (e) => {
  console.log("DragStart has been triggered .");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className += " hide";
  }, 0); // zero means after all the tasks are over then execute this settimeout
});
imgBox.addEventListener("dragend", (e) => {
  console.log("Dragend has been triggered .");
  e.target.className = "imgBox";
});

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("Dragover has been triggered .");
  });
  whiteBox.addEventListener("dragenter", (e) => {
    console.log("DragEnter has been triggered .");
    e.target.className += " dashed";
  });
  whiteBox.addEventListener("dragleave", (e) => {
    console.log("DragLeave has been triggered .");
    e.target.className = "whiteBox";
  });
  whiteBox.addEventListener("drop", (e) => {
    console.log("DragDrop has been triggered .");
    e.target.append(imgBox);
  });
}
