const boxContents = [

  {
    iconClass: "fa-brands fa-instagram",
    title: "Instagram",
    subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
  },
]

let boxesDiv = document.createElement("div");
boxesDiv.classList.add("boxes");

// box appen to body
document.body.append(boxesDiv);

boxContents.forEach((element) => {
  let boxElem = document.createElement("div");
  boxElem.classList.add("box");
  boxesDiv.append(boxElem);

  let spanElem = document.createElement("span");
  spanElem.classList.add("icon");
  boxElem.append(spanElem);

  let iconElem = document.createElement("i");
  iconElem.setAttribute("class", element.iconClass);
  spanElem.append(iconElem);

  let titleElement = document.createElement("h3");
  titleElement.textContent = element.title;
  boxElem.append(titleElement);

  let subtitleElement = document.createElement("p");
  subtitleElement.textContent = element.subTitle;
  boxElem.append(subtitleElement);

  let buttonElem = document.createElement("button");
  buttonElem.setAttribute("class", "btn");
  buttonElem.style.padding = "12px 20px";
  buttonElem.style.borderRadius = "15px";
  buttonElem.style.backgroundColor = "#000";
  buttonElem.style.color = "#fff";
  buttonElem.style.border = "none";
  buttonElem.style.cursor = "pointer";
  buttonElem.textContent = "READ MORE";
  boxElem.append(buttonElem);
});
