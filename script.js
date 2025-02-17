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
    sliderCardSection_Card[i].style.opacity = "0";
  }
  sliderCardSection_Card[slideIndex - 1].style.display = "flex";
  sliderCardSection_Card[slideIndex - 1].style.opacity = "1";
  sliderCardSection_Card[slideIndex - 1].style.trasition = "all .3s";
}

// Code for buildForGrowthSection_Upper_FilterButton:
// Code for buildForGrowthSection_Upper_FilterButton:
let buildForGrowthSection_Upper_FilterButton = document.getElementsByClassName(
  "buildForGrowthSection_Upper_FilterButton"
);
let buildForGrowthSection_CardSection_Right_Text =
  document.getElementsByClassName(
    "buildForGrowthSection_CardSection_Right_Text"
  )[0];

Array.from(buildForGrowthSection_Upper_FilterButton).forEach((e, btn_index) => {
  e.addEventListener("click", (item) => {
    console.log(btn_index);

    buildForGrowthSection_CardSection_Right_Text.innerHTML = "";

    // Removing the  oulines on the buttons
    Array.from(buildForGrowthSection_Upper_FilterButton).forEach((e) => {
      e.style.outline = "none";
    });

    let append = "";
    if (btn_index == 0) {
      append = "Payment";
    } else if (btn_index == 1) {
      append = "Gaming";
    } else if (btn_index == 2) {
      append = "NFTs";
    } else if (btn_index == 3) {
      append = "DeFi";
    } else {
      append = "DAOs";
    }

    buildForGrowthSection_CardSection_Right_Text.innerHTML = `<b>${append}</b>`;
    buildForGrowthSection_Upper_FilterButton[btn_index].style.outline =
      "2px solid #A962FF";
  });
});



// 
let isLangDropDown = false;
let footerSection_Box4_DropDownIcon = document.getElementsByClassName("footerSection_Box4_DropDownIcon")[0];
let icon = footerSection_Box4_DropDownIcon.getElementsByTagName("img")[0];
icon.addEventListener('click',(e)=>{
  if(!isLangDropDown){
    let footerSection_Box4_DropDownIcon_Menu = document.getElementsByClassName("footerSection_Box4_DropDownIcon_Menu")[0].style.display = "block";
    isLangDropDown = true;
  }
  else{
    let footerSection_Box4_DropDownIcon_Menu = document.getElementsByClassName("footerSection_Box4_DropDownIcon_Menu")[0].style.display = "none";
    isLangDropDown = false;
  }
})

