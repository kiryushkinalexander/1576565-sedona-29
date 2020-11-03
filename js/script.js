const button = document.querySelector(".button-primary");
const form = document.querySelector(".search-form");
const tripStart = form.querySelector('.trip-start');
const tripEnd = form.querySelector('.trip-end');


button.addEventListener ("click", (event) => {
    event.preventDefault();
    form.classList.toggle("show-form");
});

form.addEventListener('submit', function (evt) {
    if (!tripStart.value || !tripEnd.value) {
      evt.preventDefault();
      form.classList.remove("form-error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("form-error");
      console.log('error');
    } else {
        return false;
    }
  });
