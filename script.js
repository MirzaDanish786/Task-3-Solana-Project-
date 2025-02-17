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
let footerSection_Box4_DropDownIcon = document.getElementsByClassName(
  "footerSection_Box4_DropDownIcon"
)[0];
let icon = footerSection_Box4_DropDownIcon.getElementsByTagName("img")[0];
icon.addEventListener("click", (e) => {
  if (!isLangDropDown) {
    let footerSection_Box4_DropDownIcon_Menu = (document.getElementsByClassName(
      "footerSection_Box4_DropDownIcon_Menu"
    )[0].style.display = "block");
    isLangDropDown = true;
  } else {
    let footerSection_Box4_DropDownIcon_Menu = (document.getElementsByClassName(
      "footerSection_Box4_DropDownIcon_Menu"
    )[0].style.display = "none");
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

// Code for animate the numbers of community section:

// document.addEventListener("DOMContentLoaded", () => {
//   let communitySection = document.querySelector(
//     "communitySectionContainerWrapper"
//   );
//   let numbers = document.querySelectorAll("numbers");

//   let observe = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           animateNumbers();
//           observe.unobserve(communitySection);
//         }
//       });
//     },
//     {
//       threshold: 0.3,
//     }
//   );

//   let animateNumbers=()=>{
//     numbers.forEach((number)=>{
//       let targetText = number.textContent;
//       let targetValue = parseFloat(targetText.replace(/[0-9.]/g,""));
      

//     })
//   }



// });




document.addEventListener("DOMContentLoaded", () => {
  // Get the section that contains the numbers
  const communitySection = document.querySelector(
    ".communitySectionContainerWrapper"
  );
  // Get all elements with the class 'numbers'
  const numbers = document.querySelectorAll(".numbers");

  // Create an Intersection Observer to watch when the communitySection comes into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // Check if the section is intersecting (i.e., visible in the viewport)
        if (entry.isIntersecting) {
          // Call the function to animate the numbers
          animateNumbers();
          // Stop observing the section after animating the numbers
          observer.unobserve(communitySection);
        }
      });
    },
    {
      threshold: 0.3, // Trigger when 30% of the section is visible
    }
  );

  // Start observing the communitySection
  observer.observe(communitySection);

  // Function to animate the numbers
  function animateNumbers() {
    // Loop through each number element
    numbers.forEach((number) => {
      // Extract the target number and suffix
      const targetText = number.textContent;
      const targetValue = parseFloat(targetText.replace(/[^0-9.]/g, ""));
      const prefix = targetText.startsWith("$") ? "$" : "";
      const suffix = targetText.replace(/[0-9.]/g, "").replace(prefix, "");

      // Calculate the increment value (adjust the division for speed)
      const increment = targetValue / 400; // Slowed down by increasing the division from 200 to 400
      let current = 0; // Start from 0

      // Function to update the number
      function updateNumber() {
        current += increment; // Increment the current value
        if (current < targetValue) {
          // If the current value is less than the target, update the text content with the appropriate formatting
          number.textContent = prefix + formatNumber(current) + suffix;
          // Use setTimeout to create a smooth animation
          setTimeout(updateNumber, 16); // Approximately 60 frames per second
        } else {
          // Set the text content to the target value with the appropriate formatting when the animation is done
          number.textContent = prefix + formatFinalNumber(targetValue) + suffix;
        }
      }

      // Start the update process
      updateNumber();
    });
  }

  // Function to format the number with commas and appropriate suffixes during animation
  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M+";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K+";
    } else if (num < 1 && num > 0) {
      return num.toFixed(5).replace(/\.?0+$/, ""); // Ensure 5 decimal places for small numbers
    } else {
      return num.toLocaleString();
    }
  }

  // Function to format the final number with appropriate suffixes
  function formatFinalNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M+";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K+";
    } else if (num < 1 && num > 0) {
      return num.toFixed(5).replace(/\.?0+$/, ""); // Ensure 5 decimal places for small numbers
    } else {
      return num.toLocaleString();
    }
  }
});
