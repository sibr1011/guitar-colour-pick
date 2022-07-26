// get color picker input element from id
let colorWell = document.querySelector("#colorWell");
let colorWellLabel = document.getElementById("colorWellLabel");

chrome.storage.sync.get("color", ({ color }) => {
    colorWell.value = color;
    // change text of label
    colorWellLabel.innerHTML = colorWell.value
});

// see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color for events explanation
colorWell.addEventListener("change", setColorPickerColor, false);
colorWell.addEventListener("input", setColorPickerColor, false);


// save current color for later
function setColorPickerColor() {
    colorWellLabel.innerHTML = colorWell.value
    chrome.storage.sync.set({ color: colorWell.value }, function () {});
}