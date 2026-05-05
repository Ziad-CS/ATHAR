document.addEventListener("DOMContentLoaded", () => {

  let currentStep = 0;

  const steps = document.querySelectorAll(".step-section");
  const circles = document.querySelectorAll(".step");

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("active", i === index);
    });

    circles.forEach((circle, i) => {
      circle.classList.toggle("active", i === index);
    });
  }

  window.nextStep = function () {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  };

  window.prevStep = function () {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  };

  showStep(currentStep);
  document.querySelectorAll(".card").forEach(card=>{
  const buttons = card.querySelectorAll(".counter button");
  const value = card.querySelector(".counter span");

  let count=1;
  buttons[1].addEventListener("click",()=>{
    count++;
    value.textContent=count;
  });
  buttons[0].addEventListener("click",()=>{
    if(count>0){
      count--;
      value.textContent=count;
    }
  });
});
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("user-name").value;
  const email = document.getElementById("user-email").value;
  const phone = document.getElementById("user-phone").value;

  const data = {
    name: name,
    email: email,
    phone: phone
  };

  localStorage.setItem("bookingData", JSON.stringify(data));

  alert("Your booking information has been saved successfully");
});

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