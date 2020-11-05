const button = document.querySelector(".button-primary");
const form = document.querySelector(".search-form");
const tripStart = form.querySelector('.trip-start');
const tripEnd = form.querySelector('.trip-end');
const countAdults = form.querySelector('.count-adults');
const countChildren = form.querySelector('.count-children');

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("adults" || "children");
} catch (err) {
  isStorageSupport = false;
}

form.classList.add('hide-form');

button.addEventListener ("click", (event) => {
    event.preventDefault();
    form.classList.toggle("show-form");
    form.classList.remove("form-error");
});

form.addEventListener('submit', function (evt) {
    if (!tripStart.value || !tripEnd.value) {
      evt.preventDefault();
      form.classList.remove("form-error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("form-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("adults", countAdults.value || "children", countChildren.value);
      } 
    }
  });


  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (form.classList.contains("show-form")) {
        evt.preventDefault();
        form.classList.remove("show-form");
        form.classList.remove("form-error");
      }
    }
  });