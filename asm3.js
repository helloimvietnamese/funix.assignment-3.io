"use strict";
console.log("minh");
const submit = document.querySelector(".submit-email");
const error = document.querySelector(".error-email");
const btn = document.querySelector(".btn");
// const view = document.querySelector(".view");

const info = document.querySelector(".info");
// if (check == emailValue) {
//   info.classList.remove("hidden");
// } else {
//   document.querySelector("error-email").textContent = "Nhập lại";
// }

btn.addEventListener("click", function () {
  console.log("minh");
  const email = document.getElementById("email").value;
  const check =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(check)) {
    info.style.display = "block";
    submit.style.display = "none";
    error.innerHTML = "";
  } else {
    error.innerHTML = "Không đúng định dạng email. Vui lòng nhập lại !";
  }
});

btn.addEventListener("click", function () {
  console.log("minh");
  const email = document.getElementById("email").value;
  const check =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(check)) {
    info.style.display = "block";
    submit.style.display = "none";
    error.innerHTML = "";
  } else {
    error.innerHTML = "Không đúng định dạng email. Vui lòng nhập lại !";
  }
});

// function handleViewMore() {
//   const view = element.querySelector(".view-more");
// }
// const col = document.querySelector(".col-12");

// function handleOnMouseOver(element) {
//   const view = element.querySelector(".view");
//   view.style.display = "inline-block";
// }
// view.addEventListener("click", function () {
//   console.log("view");
// });
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".view-more");
  console.log(viewMore.classClick);

  if (viewMore.innerHTML == "View more") {
    const sContent = parentElement.querySelectorAll(".s-content");
    sContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.innerHTML = "Less more";
  } else {
    const sContent = parentElement.querySelectorAll(".s-content");
    sContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.innerHTML = "View more";
  }
}
