const lightbox = document.createElement('div');
lightbox.id = "lightbox";

const lightbox2 = document.createElement('div');
lightbox2.id = "lightbox2";

document.body.appendChild(lightbox2);
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.scrollContainer img, .Artifacts img , .standardContainer img');

images.forEach((image) => {
    image.addEventListener('click', () => {

        lightbox.innerHTML = "";
        lightbox2.innerHTML = "";

        const newImg = document.createElement('img');
        const imgDescription = document.createElement('p');

        const item = image.parentElement;
        const element = item.querySelector('.hiddenImgDescription');

        let hiddenDesc;
        if (element) {
            hiddenDesc = element.textContent;
        } else {
          hiddenDesc = "";
        }

        if (image.classList.contains('sectImg')) {
            lightbox2.classList.add('active');
            newImg.src = image.src;
            lightbox2.appendChild(newImg);
        }
        else {
            lightbox.classList.add('active');
            imgDescription.textContent = hiddenDesc;
            newImg.src = image.src;

            lightbox.appendChild(newImg);
            lightbox.appendChild(imgDescription);
        }
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox2.addEventListener('click', () => {
    lightbox2.classList.remove('active');
});

//scroll container
const timeButtons = document.querySelectorAll('.timebuttonsContainer button');
const container = document.querySelector('.scrollContainer');
const groups = document.querySelectorAll('.scrollContainer .group');

timeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const target = groups[index];
        const targetCenter = target.offsetLeft + target.offsetWidth / 2;
        const containerCenter = container.offsetWidth / 2;

        container.scrollTo({
            left: targetCenter - containerCenter,
            behavior: "smooth"
        });
    });
});

//filter buttons
const statuesButton = document.querySelector('#statuesButton');
const jewelryButton = document.querySelector('#jewelryButton');
const allButton = document.querySelector('#allButton');
const otherButton = document.querySelector('#otherButton');

const statues = document.querySelectorAll('.statues');
const jewelry = document.querySelectorAll('.jewelry');
const other = document.querySelectorAll('.other');

allButton.classList.add('active');

//statues
statuesButton.addEventListener('click', () => {
    statuesButton.classList.add('active');
    jewelryButton.classList.remove('active');
    otherButton.classList.remove('active');
    allButton.classList.remove('active');

    statues.forEach(el => el.style.display = "block");
    jewelry.forEach(el => el.style.display = "none");
    other.forEach(el => el.style.display = "none");
});

//jewelry
jewelryButton.addEventListener('click', () => {
    jewelryButton.classList.add('active');
    statuesButton.classList.remove('active');
    otherButton.classList.remove('active');
    allButton.classList.remove('active');

    statues.forEach(el => el.style.display = "none");
    jewelry.forEach(el => el.style.display = "block");
    other.forEach(el => el.style.display = "none");
});

//other
otherButton.addEventListener('click', () => {
    otherButton.classList.add('active');
    statuesButton.classList.remove('active');
    jewelryButton.classList.remove('active');
    allButton.classList.remove('active');

    statues.forEach(el => el.style.display = "none");
    jewelry.forEach(el => el.style.display = "none");
    other.forEach(el => el.style.display = "block");
});

//all
allButton.addEventListener('click', () => {
    allButton.classList.add('active');
    jewelryButton.classList.remove('active');
    statuesButton.classList.remove('active');
    otherButton.classList.remove('active');

    statues.forEach(el => el.style.display = "block");
    jewelry.forEach(el => el.style.display = "block");
    other.forEach(el => el.style.display = "block");
});



//pyramids
const pyramidsImg = document.querySelector('#pyramidsSect .sectImg');
const pyramidsNum = document.querySelector('#pyramidsSect .imgNum');
const pyramidsNext = document.querySelector('#pyramidsSect .nextBtn');
const pyramidsPrev = document.querySelector('#pyramidsSect .prevBtn');

let pyramidsCount = 1;
const pyramidsMax = 2;

pyramidsNext.addEventListener('click', () => {
    pyramidsCount++;
    if (pyramidsCount > pyramidsMax) pyramidsCount = 1;

    pyramidsImg.src = `images/Pyramids${pyramidsCount}.jpg`;
    pyramidsNum.textContent = pyramidsCount;
});

pyramidsPrev.addEventListener('click', () => {
    pyramidsCount--;
    if (pyramidsCount < 1) pyramidsCount = pyramidsMax;

    pyramidsImg.src = `images/Pyramids${pyramidsCount}.jpg`;
    pyramidsNum.textContent = pyramidsCount;
});


//karnak
const karnakImg = document.querySelector('#karnakSect .sectImg');
const karnakNum = document.querySelector('#karnakSect .imgNum');
const karnakNext = document.querySelector('#karnakSect .nextBtn');
const karnakPrev = document.querySelector('#karnakSect .prevBtn');

let karnakCount = 1;
const karnakMax = 2;


karnakNext.addEventListener('click', () => {
    karnakCount++;
    if (karnakCount > karnakMax) karnakCount = 1;

    karnakImg.src = `images/karnak (${karnakCount}).jpg`;
    karnakNum.textContent = karnakCount;
});

karnakPrev.addEventListener('click', () => {
    karnakCount--;
    if (karnakCount < 1) karnakCount = karnakMax;

    karnakImg.src = `images/karnak (${karnakCount}).jpg`;
    karnakNum.textContent = karnakCount;
});


const elements = document.querySelectorAll(".left, .right, .down, .up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    if (!entry.isIntersecting) {
        entry.target.classList.remove("show");
    }
  });
});

elements.forEach(el => observer.observe(el));

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
  document.getElementById("homeicone").setAttribute("src", local.main.homeIconePages);
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