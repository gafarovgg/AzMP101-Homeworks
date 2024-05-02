import { BaseURL } from "./const.js";

let tBody = document.querySelector("tbody");

async function getAllData(endpoint) {
  try {
    const response = await axios.get(`${BaseURL}/${endpoint}`);
    renderList(response.data);
  } catch (err) {
    console.log(err);
  }
}

function renderList(arr) {
  tBody.innerHTML = "";

  arr.forEach((element) => {
    let trElem = document.createElement("tr");

    trElem.innerHTML = `
                <td><img src="${element.image}"></td>
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.category}</td>
                <td>${element.description}</td>
                <td>${element.price}</td>
                <td><a href="#">details</a></td>
        `;

    tBody.append(trElem);
  });
}

getAllData("products");
