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


function homeThemes(welcolor, welto, welshadow, helocolor, backcolorfs, backcolorts, fer3on) {
  document.documentElement.style.setProperty('--welcomeColor', welcolor);
  document.documentElement.style.setProperty('--welcomeTo', welto);
  document.documentElement.style.setProperty('--welcomeShadow', welshadow);
  document.documentElement.style.setProperty('--heloColor', helocolor);
  document.documentElement.style.setProperty('--backgroundFirstS', backcolorfs);
  document.documentElement.style.setProperty('--backgroundthirdS', backcolorts);
  document.documentElement.style.setProperty('--fer3onColor', fer3on);
}
function places (c_H_H_B_h,c_B,c_Bh,c_P_w,c_B_S_b,c_B_S_s,c_Bs,p_Bg)
{
    document.documentElement.style.setProperty('--color_header_h2_bordercard_h3',c_H_H_B_h);
    document.documentElement.style.setProperty('--color_button',c_B);
    document.documentElement.style.setProperty('--color_buttonhover',c_Bh);
    document.documentElement.style.setProperty('--color_paragraph_write',c_P_w);
    document.documentElement.style.setProperty('--color_background_sec_big',c_B_S_b);
    document.documentElement.style.setProperty('--color_background_sec_smoll',c_B_S_s);
    document.documentElement.style.setProperty('--color_boxshadow',c_Bs);
    document.documentElement.style.setProperty('--photo_background',p_Bg);

}
function ticketsThemes (
  mainBg,bg,cardSectionBg,cardBg,cardVipBg,primary,accent,textMain,textMuted,textOnPrimary,textBtn,textPrice,
  textConfirm,titleColor,titleBorder,stepDefaultBg,stepDefaultBorder,cardBorder,cardGoldFrom,inputBorder,
  timeItemBg,timeLabelBg,timeLabelHoverBg,optionHoverBg,shadowSection,shadowCardHover
) {
  document.documentElement.style.setProperty('--mainBg',mainBg);
  document.documentElement.style.setProperty('--bg',bg);
  document.documentElement.style.setProperty('--card-section-bg',cardSectionBg);
  document.documentElement.style.setProperty('--card-bg',cardBg);
  document.documentElement.style.setProperty('--card-vip-bg',cardVipBg);
  document.documentElement.style.setProperty('--primary',primary);
  document.documentElement.style.setProperty('--accent',accent);
  document.documentElement.style.setProperty('--text-main',textMain);
  document.documentElement.style.setProperty('--text-muted',textMuted);
  document.documentElement.style.setProperty('--text-on-primary',textOnPrimary);
  document.documentElement.style.setProperty('--text-btn',textBtn);
  document.documentElement.style.setProperty('--text-price',textPrice);
  document.documentElement.style.setProperty('--text-confirm',textConfirm);
  document.documentElement.style.setProperty('--title-color',titleColor);
  document.documentElement.style.setProperty('--title-border',titleBorder);
  document.documentElement.style.setProperty('--step-default-bg',stepDefaultBg);
  document.documentElement.style.setProperty('--step-default-border',stepDefaultBorder);
  document.documentElement.style.setProperty('--card-border',cardBorder);
  document.documentElement.style.setProperty('--card-gold-from',cardGoldFrom);
  document.documentElement.style.setProperty('--input-border',inputBorder);
  document.documentElement.style.setProperty('--time-item-bg',timeItemBg);
  document.documentElement.style.setProperty('--time-label-bg',timeLabelBg);
  document.documentElement.style.setProperty('--time-label-hover-bg',timeLabelHoverBg);
  document.documentElement.style.setProperty('--option-hover-bg',optionHoverBg);
  document.documentElement.style.setProperty('--shadow-section',shadowSection);
  document.documentElement.style.setProperty('--shadow-card-hover',shadowCardHover);
}
function mainThemes(navcolor, navbordcolor, navtextcolor, nashadow){
  document.documentElement.style.setProperty('--navBackgroundColor', navcolor);
  document.documentElement.style.setProperty('--navBorderColor', navbordcolor);
  document.documentElement.style.setProperty('--navTextColor',navtextcolor);
  document.documentElement.style.setProperty('--navShadowColor',nashadow);
}

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
  // !
  window.localStorage.setItem("themes" , JSON.stringify(local));
}
generate ();