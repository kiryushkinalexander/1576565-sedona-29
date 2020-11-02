let button = document.querySelector(".button-primary");
let form = document.querySelector(".search-form");
let body = document.querySelector(".page-body");
let fields = document.querySelectorAll(".form-field-button");

button.addEventListener ("click", (event) => {
    event.preventDefault();
    form.classList.toggle("show-form");
});

form.addEventListener('submit', function (event) {
  event.preventDefault()

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('field is blank', fields[i])
    }
  }
})
