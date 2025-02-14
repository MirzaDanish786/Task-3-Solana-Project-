// Code for the navbar items drop down:
let currentClicked = undefined;
let previousClicked = undefined;
let isDropDown = false;
let navNavigationsItems_img = document.getElementsByClassName(
  "navNavigationsItems_img"
);
let navNavigationsItems_li = document.getElementsByClassName(
  "navNavigationsItems_li"
);
Array.from(navNavigationsItems_li).forEach((e, index) => {
  e.addEventListener("click", () => {
    previousClicked = currentClicked;
    currentClicked = index;
    console.log(previousClicked);
    console.log(currentClicked);

    let navDropDownDisable =
      document.getElementsByClassName("navDropDownDisable");

    if (currentClicked === previousClicked && isDropDown) {
      Array.from(navDropDownDisable).forEach((e) => {
        e.classList.remove("navDropDownEnable");
        navNavigationsItems_img[currentClicked].style.transform =
          " rotate(0deg)";
      });
      isDropDown = false;
    } else {
      if (previousClicked !== undefined && previousClicked !== currentClicked) {
        navDropDownDisable[previousClicked].classList.remove(
          "navDropDownEnable"
        );
        navNavigationsItems_img[previousClicked].style.transform =
          " rotate(0deg)";
      }
      navDropDownDisable[currentClicked].classList.add("navDropDownEnable");
      navNavigationsItems_img[currentClicked].style.transform =
        " rotate(180deg)";
      isDropDown = true;
    }
  });
});

let navDropDownDisable = document.getElementsByClassName("navDropDownDisable");
Array.from(navDropDownDisable).forEach((e) => {
  let div = e.getElementsByTagName("div");
  Array.from(div).forEach((div) => {
    div.addEventListener("click", () => {
      e.classList.remove("navDropDownEnable");
      let navNavigationsItems_img = document.getElementsByClassName(
        "navNavigationsItems_img"
      );
      Array.from(navNavigationsItems_img).forEach((e) => {
        e.style.transform = " rotate(0deg)";
      });
    });
  });
});

// Code for slide the card when click on the buttons:
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let sliderCardSection_Card = document.getElementsByClassName(
    "sliderCardSection_Card"
  );
  if (n > sliderCardSection_Card.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = sliderCardSection_Card.length;
  }
  for (i = 0; i < sliderCardSection_Card.length; i++) {
    sliderCardSection_Card[i].style.display = "none";
  }
  sliderCardSection_Card[slideIndex - 1].style.display = "flex";
}
