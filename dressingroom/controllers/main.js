import BackGround from "../models/BG.js";
import Hair from "../models/Hairs.js";
import Face from "../models/Face.js";
import Necklace from "../models/Neck.js";
import Shirt from "../models/Shirt.js";
import Dress from "../models/Dress.js";
import Shoes from "../models/Shoes.js";
import Bags from "../models/Bag.js";

const getElement = (selector) => {
  return document.querySelector(selector);
};

const display = () => {
  const arr = BackGround;
  render(arr, "#showBG");
  localStorage.setItem('dssp', JSON.stringify(arr))
}

// backgruond
document.getElementById("backgruond").onclick = display

// hairs
document.getElementById("Hair").onclick = function () {
  const arr = Hair;
  render(arr, "#showHair");
  localStorage.setItem('dssp', JSON.stringify(arr))
};

// face
document.getElementById("Face").onclick = function () {
  const arr = Face;
  render(arr, "#showFace");
  localStorage.setItem('dssp', JSON.stringify(arr))
};

// neck
document.getElementById("Necklace").onclick = function () {
  const arr = Necklace;
  render(arr, "#showNecklace");
  localStorage.setItem('dssp', JSON.stringify(arr))
};

// shirt
document.getElementById("Shirt").onclick = function () {
  const arr = Shirt;
  render(arr, "#showShirt");
  localStorage.setItem('dssp', JSON.stringify(arr))
};

// dress
document.getElementById("Dress").onclick = function () {
  const arr = Dress;
  render(arr, "#showDress");
  localStorage.setItem('dssp', JSON.stringify(arr))
};

// shoes
document.getElementById("Shoes").onclick = function () {
  const arr = Shoes;
  render(arr, "#showShoes");
  localStorage.setItem('dssp', JSON.stringify(arr))
};

// bag
document.getElementById("HandBag").onclick = function () {
  const arr = Bags;
  render(arr, "#showBags");
  localStorage.setItem('dssp', JSON.stringify(arr))
};

// render UI
const render = (arr, selector) => {
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    content += `
        <div class="col-3 mt-3">
                    <div class="content text-center">
                      <div class="content__img">
                        <img class="img-fluid" src=${item.image}>
                      </div>
                      <div class="content__text py-2">
                        <h5>${item.name}</h5>
                      </div>
                      <div class="content__button">
                        <button class="btn btn-success" onclick="editsValue(${item.id})">Try On</button>
                      </div>
                    </div>
                  </div>
        `;
  }
  getElement(selector).innerHTML = content;
};

// Check cloth
window.editsValue = (id) => {
  const parseValue = JSON.parse(localStorage.getItem('dssp'))
  const choose = parseValue.find((v) => v.id == id)
  if (choose && choose.type == "bg") {
    getElement('.background').innerHTML =  `<image style="width:100%; height: 100%" src="${choose.image}" ></image>`
  }
  if (choose && choose.type == "bag") {
    getElement('.handbag').innerHTML =  `<image style="width:100%; height: 100%" src="${choose.image}" ></image>`
  }
  if (choose && choose.type == "dress") {
    getElement('.bikinibottom').innerHTML =  `<image style="width:100%; height: 100%" src="${choose.image}" ></image>`
  }
  if (choose && choose.type == "hair") {
    getElement('.hairstyle').innerHTML =  `<image style="width:100%; height: 100%" src="${choose.image}" ></image>`
  }
  if (choose && choose.type == "shirt") {
    getElement('.bikinitop').innerHTML =  `<image style="width:100%; height: 100%" src="${choose.image}" ></image>`
  }
  if (choose && choose.type == "necklace") {
    getElement('.necklace').innerHTML =  `<image style="width:100%; height: 100%" src="${choose.image}" ></image>`
  }
  if (choose && choose.type == "shoes") {
    getElement('.feet').innerHTML =  `<image style="width:100%; height: 100%" src="${choose.image}" ></image>`
  }
  if (choose && choose.type == "face") {
    getElement('.model').innerHTML =  `<image style="width:100%; height: 100%" src="${choose.image}" ></image>`
  }
};

display()