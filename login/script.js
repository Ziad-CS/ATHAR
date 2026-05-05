const passwordInput = document.getElementById("password-input");
const confirmInput = document.getElementById("confirm-input");
const form = document.getElementById("form");

// requirements
const lengthReq = document.getElementById("length");
const numberReq = document.getElementById("number");
const upperReq = document.getElementById("uppercase");
const symbolReq = document.getElementById("symbol");
const matchReq = document.getElementById("passwordmatched");

// regex
const numberRegex = /[0-9]/;
const upperRegex = /[A-Z]/;
const symbolRegex = /[!@#$%^&*()_+\-=]/;

// function to toggle valid/invalid
function setValid(element, condition) {
    if (condition) {
        element.classList.remove("invalid");
        element.classList.add("valid");
    } else {
        element.classList.remove("valid");
        element.classList.add("invalid");
    }
}

// password typing event
passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;

    setValid(lengthReq, value.length >= 8);
    setValid(numberReq, numberRegex.test(value));
    setValid(upperReq, upperRegex.test(value));
    setValid(symbolReq, symbolRegex.test(value));

    // check match while typing
    setValid(matchReq, value === confirmInput.value && value !== "");
});

// confirm password event
confirmInput.addEventListener("input", () => {
    setValid(matchReq, passwordInput.value === confirmInput.value && confirmInput.value !== "");
});

// form submit
form.addEventListener("submit", (e) => {
    const inputs = form.querySelectorAll("input");

    // check empty fields
    for (let input of inputs) {
        if (input.value.trim() === "") {
            e.preventDefault();
            alert("Please fill this field");
            return;
        }
    }

    // check passwords match
    if (passwordInput.value !== confirmInput.value) {
        e.preventDefault();
        alert("The passwords are not matched");
        return;
    }
});
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;

    const newUser = {
        firstName,
        lastName,
        email,
        password
    };

    // Get the user
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check if email exists 
    const emailExists = users.some(user => user.email === email);

    if (emailExists) {
        alert("This email already exists");
        return;
    }

    // New user
    users.push(newUser);

    // Store again
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully");

    window.location.href = "login.html";
});


let local = JSON.parse(window.localStorage.getItem("themes"));
const homeStyle = document.getElementById("css");
const ticketsStyle = document.getElementById("cssTickets");
const civilizationsStyle = document.getElementById("cssCivilizations");
const placesStyle = document.getElementById("cssPlaces");
const loginStyle = document.getElementById("cssLogin");
// !applay all propertys
function generate () {
  console.log(local)
  // ! main
  mainThemes(
    local.main.navBackgroundColor,
    local.main.navBorderColor,
    local.main.navTextColor,
    local.main.navShadowColor
  )
  document.getElementById("homeicone").setAttribute("src", local.main.homeIcone);
  // ! me
  homeThemes(
    local.home.welcomeColor,
    local.home.welcomeTo,
    local.home.welcomeShadow,
    local.home.heloColor,
    local.home.backgroundFirstS,
    local.home.backgroundthirdS
  );
  ticketsThemes (
    local.tickets.mainBg,
    local.tickets.bg,
    local.tickets.cardSectionBg,
    local.tickets.cardBg,
    local.tickets.cardVipBg,
    local.tickets.primary,
    local.tickets.accent,
    local.tickets.textMain,
    local.tickets.textMuted,
    local.tickets.textOnPrimary,
    local.tickets.textBtn,
    local.tickets.textPrice,
    local.tickets.textConfirm,
    local.tickets.titleColor,
    local.tickets.titleBorder,
    local.tickets.stepDefaultBg,
    local.tickets.stepDefaultBorder,
    local.tickets.cardBorder,
    local.tickets.cardGoldFrom,
    local.tickets.inputBorder,
    local.tickets.timeItemBg,
    local.tickets.timeLabelBg,
    local.tickets.timeLabelHoverBg,
    local.tickets.optionHoverBg,
    local.tickets.shadowSection,
    local.tickets.shadowCardHover,
  )
  places (
    local.places.color_Header_H2_Bordercard_h3,
    local.places.color_Button,
    local.places.color_Buttonhover,
    local.places.color_Paragraph_write,
    local.places.color_Background_Sec_big,
    local.places.color_Background_Sec_smoll,
    local.places.color_Boxshadow,
    local.places.photo_background
  )
  if (homeStyle !== null)
  {
    homeStyle.setAttribute("href", local.home.style)
  }
  if (ticketsStyle !== null)
  {
    ticketsStyle.setAttribute("href", local.tickets.style)
  }
  if (civilizationsStyle !== null)
  {
    civilizationsStyle.setAttribute("href", local.civilizations.style)
  }
  if (placesStyle !== null)
  {
    placesStyle.setAttribute("href", local.places.style)
  }
  if (loginStyle !== null)
  {
    loginStyle.setAttribute("href", local.login.style)
  }

  for (let i = 0; i < cards.length; i++)
  {
    cards[i].classList.remove("fix");
  }
  // !
  window.localStorage.setItem("themes" , JSON.stringify(local));
}
generate ();