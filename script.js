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

// Code for footer Language DropDown:
let isLangDropDown = false;
let footerSection_Box4_DropDownIcon = document.getElementsByClassName(
  "footerSection_Box4_DropDownIcon"
)[0];
let icon = footerSection_Box4_DropDownIcon.getElementsByTagName("img")[0];
icon.addEventListener("click", (e) => {
  if (!isLangDropDown) {
    let footerSection_Box4_DropDownIcon_Menu = (document.getElementsByClassName(
      "footerSection_Box4_DropDownIcon_Menu"
    )[0].style.display = "block");
    icon.style.transform = "rotate(180deg)";
    icon.style.transition = "all .3s";

    isLangDropDown = true;
  } else {
    let footerSection_Box4_DropDownIcon_Menu = (document.getElementsByClassName(
      "footerSection_Box4_DropDownIcon_Menu"
    )[0].style.display = "none");
    icon.style.transform = "rotate(0deg)";
    icon.style.transition = "all .3s";

    isLangDropDown = false;
  }
});

// Code for Hamburger:
let isHamburgerActive = false;
let hamburger = document.getElementsByClassName("hamburger")[0];
hamburger.addEventListener("click", () => {
  let hamburger_Content =
    document.getElementsByClassName("hamburger_Content")[0];
  let body = document.getElementsByTagName("body")[0];

  if (!isHamburgerActive) {
    hamburger_Content.classList.add("hamburger_Active");
    body.classList.add("no_scroll");
    isHamburgerActive = true;
  } else {
    hamburger_Content.classList.remove("hamburger_Active");
    body.classList.remove("no_scroll");
    isHamburgerActive = false;
  }
});

//
document.addEventListener("DOMContentLoaded", () => {
  let communitySection = document.querySelector(
    ".communitySectionContainerWrapper"
  );
  let numbers = document.querySelectorAll(".numbers");

  let observe = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers();
          observe.unobserve(communitySection);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  let animateNumbers=()=>{
    numbers.forEach((number)=>{
      let targetText = number.textContent;
      let targetValue = parseFloat(targetText.replace(/[^0-9.]/g), "");
      let prefix = targetText.startsWith("$") ? "$" : "";
      let suffix = targetText.replace(/[0-9.]/g,"").replace(prefix, "");

      let current = 0;
      let increment  = targetText/300;

      let updateNumber=()=>{
        current+=increment;
        if(current < targetValue){
          number.textContent = prefix + current + suffix; 
          setTimeout((e) => {
            updateNumber();
          }, 60);
        }
      
      }
      updateNumber();
    })
  }



});

// Code for animate the numbers of community section:
document.addEventListener("DOMContentLoaded", () => {
  const communitySection = document.querySelector(
    ".communitySectionContainerWrapper"
  );

  const numbers = document.querySelectorAll(".numbers");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers();

          observer.unobserve(communitySection);
        }
      });
    },
    {
      threshold: 0.25,
    }
  );

  observer.observe(communitySection);

  function animateNumbers() {
    numbers.forEach((number) => {
      const targetText = number.textContent;
      const targetValue = parseFloat(targetText.replace(/[^0-9.]/g, ""));
      const prefix = targetText.startsWith("$") ? "$" : "";
      const suffix = targetText.replace(/[0-9.]/g, "").replace(prefix, "");

      const increment = targetValue / 300;
      let current = 0;

      function updateNumber() {
        current += increment;
        if (current < targetValue) {
          number.textContent = prefix + formatNumber(current) + suffix;

          setTimeout(updateNumber, 16);
        } else {
          number.textContent = prefix + formatFinalNumber(targetValue) + suffix;
        }
      }
      updateNumber();
    });
  }

  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M+";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K+";
    } else if (num < 1 && num > 0) {
      return num.toFixed(5).replace(/\.?0+$/, ""); 
    } else {
      return num.toLocaleString();
    }
  }

  function formatFinalNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M+";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K+";
    } else if (num < 1 && num > 0) {
      return num.toFixed(5).replace(/\.?0+$/, ""); 
    } else {
      return num.toLocaleString();
    }
  }
});
