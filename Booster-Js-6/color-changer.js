/*
- Create two sections in the middle of the page 

1- The first section contains two elements:
  - A text input.
  - A color input.

When the user clicks on the color input, a color picker will appear.
Whatever color the user chooses, the background color of the page will change accordingly.
The hex code of the selected color will be displayed in the text input.

2- Dynamic Color Change:
By modifying the code in the text input, the color of the page should update.

3- In the second section(History Section):
Display the last 10 colors selected by the user.
*/

const root = document.querySelector("#root");
root.style.display = "flex";
root.style.justifyContent = "center";

//first section

const firstSection = document.createElement("section");
const textInput = document.createElement("input");
textInput.setAttribute("type", "text");
const colorInput = document.createElement("input");
colorInput.setAttribute("type", "color");
firstSection.append(textInput, colorInput);
root.append(firstSection);

//second section

const secondSection = document.createElement("section");
const list = document.createElement("ol");
secondSection.append(list);
root.append(secondSection);

firstSection.addEventListener("change", (e) => {
  textInput.value = e.target.value;
  document.body.style.backgroundColor = textInput.value;
  if (list.children.length > 9) {
    list.children[0].remove();
    list.innerHTML += `<li>${textInput.value}</li>`;
  } else list.innerHTML += `<li>${textInput.value}</li>`;
});
