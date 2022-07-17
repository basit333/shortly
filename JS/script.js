const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");
const copyBtn = document.querySelectorAll(".copy-btn");
const copyMsg = document.querySelectorAll(".text-copied");

btn.addEventListener("click", navToggle);
linkForm.addEventListener("submit", formSubmit);

// Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// Valid URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
}

// Input URL
function formSubmit(e) {
  e.preventDefault();
  if (input.value === "") {
    errMsg.innerHTML = "Please enter something";
    input.classList.add("border-red");
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = "Please enter a valid URL";
    input.classList.add("border-red");
  } else {
    errMsg.innerHTML = "";
    input.classList.remove("border-red");
  }
}

// Copy Text And Change Button Color On Click
for (let i = 0; i < copyBtn.length; i++) {
  copyBtn[i].addEventListener("click", () => {
    copyBtn.forEach((button) => {
      button.classList.remove("bg-darkViolet");
      button.innerHTML = "copy";
      copyMsg[i].classList.remove("hidden");
    });
    copyBtn[i].classList.add("bg-darkViolet");
    navigator.clipboard.writeText(copyBtn[i].previousElementSibling.innerHTML);
    setTimeout(() => {
      copyBtn[i].classList.remove("bg-darkViolet");
      copyBtn[i].innerHTML = "copy";
      copyMsg[i].classList.add("hidden");
    }, 1000);
    copyBtn[i].innerHTML = "Copied";
    copyMsg[i].innerHTML = "Text copied!";
  });
}
