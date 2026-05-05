/** @type {HTMLElement} */
const container = document.querySelector(".scroll");
const cards = document.querySelectorAll(".scroll .card");
const homeStyle = document.getElementById("css");
const ticketsStyle = document.getElementById("cssTickets");
const civilizationsStyle = document.getElementById("cssCivilizations");
const placesStyle = document.getElementById("cssPlaces");
const loginStyle = document.getElementById("cssLogin");

cards.forEach(function(ele) {
  ele.addEventListener("mouseenter", function(){
    this.classList.add("card-focus");
    container.style.animationPlayState = "paused";
    for (let i = 0; i < cards.length; i++)
    {
      if (this !== cards[i]) {
        cards[i].classList.add("card-blur");
      }
      cards[i].style.animationPlayState = "paused";
    }
    this.classList.remove("card-blur");
  })
  ele.addEventListener("mouseleave", function(){
    this.classList.remove("card-focus");
    container.style.animationPlayState = "running";
    for (let i = 0; i < cards.length; i++)
    {
      cards[i].classList.remove("card-blur");
      cards[i].style.animationPlayState = "running";
    }
  })
});
// !cards and themes
// !me
function homeThemes(welcolor, welto, welshadow, helocolor, backcolorfs, backcolorts) {
  document.documentElement.style.setProperty('--welcomeColor', welcolor);
  document.documentElement.style.setProperty('--welcomeTo', welto);
  document.documentElement.style.setProperty('--welcomeShadow', welshadow);
  document.documentElement.style.setProperty('--heloColor', helocolor);
  document.documentElement.style.setProperty('--backgroundFirstS', backcolorfs);
  document.documentElement.style.setProperty('--backgroundthirdS', backcolorts);
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
// !
// ! class for all web
// window.localStorage.clear()
let themes = {
  home:{
    welcomeColor: "",
    welcomeTo: "",
    welcomeShadow: "",
    heloColor: "",
    backgroundFirstS: "",
    backgroundthirdS: "",
    style: ""
  },
  civilizations:{
    style:""
  },
  places:{
    color_Header_H2_Bordercard_h3: "",
    color_Button: "",
    color_Buttonhover:"",
    color_Paragraph_write:"",
    color_Background_Sec_big:"",
    color_Background_Sec_smoll:"",
    color_Boxshadow:"",
    photo_background:"",
    style: "",
  },
  tickets:{
    mainBg: "",
    bg: "",
    cardSectionBg: "",
    cardBg: "",
    cardVipBg: "",           
    primary: "",     
    accent: "",        
    textMain: "",        
    textMuted: "",           
    textOnPrimary: "",
    textBtn: "",
    textPrice: "",        
    textConfirm: "",        
    titleColor: "",       
    titleBorder: "",        
    stepDefaultBg: "",
    stepDefaultBorder: "",
    cardBorder: "",
    cardGoldFrom: "",        
    inputBorder: "",         
    timeItemBg: "",        
    timeLabelBg: "",        
    timeLabelHoverBg: "",
    optionHoverBg: "",    
    shadowSection: "",   
    shadowCardHover: "",
    style: "",
  },
  login:{
    style: "",
  },
  main:{
    navBackgroundColor: "",
    navBorderColor: "",
    navTextColor: "",
    navShadowColor: "",
    homeIcone: "",
    homeIconePages: "",
  }
}
// window.localStorage.setItem("themes" , JSON.stringify(themes));
let local = JSON.parse(window.localStorage.getItem("themes"));

// ! all themes and syles for all web valus set
function theme1() {
  // ! me
  local.home.welcomeColor = "rgba(219, 180, 50, 0.864)";
  local.home.welcomeTo = "#c6c6c6";
  local.home.welcomeShadow = "rgb(161, 132, 37)";
  local.home.heloColor = "#b689001c";
  local.home.backgroundFirstS = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) , url(../img/home1.png)";
  local.home.backgroundthirdS = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) , url(../img/testTheme/sectionInEnd.png)";
  // ! tickets
  local.tickets.mainBg = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) ,url(\"back3.jpg\")";
  local.tickets.bg = "#fac26f";
  local.tickets.cardSectionBg = "#965d0794";
  local.tickets.cardBg = "#a8926e";
  local.tickets.cardVipBg = "#111";           
  local.tickets.primary = "#af6c08";     
  local.tickets.accent = "#c5a467";        
  local.tickets.textMain = "#f7eded";        
  local.tickets.textMuted = "#666";           
  local.tickets.textOnPrimary = "white";
  local.tickets.textBtn = "#ece5d4";
  local.tickets.textPrice = "#eecece";        
  local.tickets.textConfirm = "#f7ecec";        
  local.tickets.titleColor = "#e7d897";       
  local.tickets.titleBorder = "#d19f07";        
  local.tickets.stepDefaultBg = "#a59d9d";
  local.tickets.stepDefaultBorder = "#ccc";
  local.tickets.cardBorder = "#eee";
  local.tickets.cardGoldFrom = "#f5e6c8";        
  local.tickets.inputBorder = "#ccc";         
  local.tickets.timeItemBg = "#f4efe7";        
  local.tickets.timeLabelBg = "#8f641f";        
  local.tickets.timeLabelHoverBg = "#ffdfa3";
  local.tickets.optionHoverBg = "#c7a25e";    
  local.tickets.shadowSection = "rgba(0, 0, 0, 0.08)";  
  local.tickets.shadowCardHover = "rgba(0, 0, 0, 0.1)";
  // ! places
  local.places.color_Header_H2_Bordercard_h3 = "#F5C542";
  local.places.color_Button = "#D4AF37";
  local.places.color_Buttonhover = "#B8860B";
  local.places.color_Paragraph_write = "#E0E0E0";
  local.places.color_Background_Sec_big = "rgba(255, 255, 255, 0.02)";
  local.places.color_Background_Sec_smoll = "rgba(255, 255, 255, 0.07)";
  local.places.color_Boxshadow = "rgba(245,197,66,0.4)";
  local.places.photo_background = "url(background.png)";
  
};
function theme2(){
  // ! me
  local.home.welcomeColor = "red";
  local.home.welcomeTo = "black";
  local.home.welcomeShadow = "yellow";
  local.home.heloColor = "#b689001c";
  local.home.backgroundFirstS = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) , url(../img/home_backgrounds/sand.jpeg)";
  local.home.backgroundthirdS = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) , url(../img/testTheme/sectionInEnd.png)";
  // ! tickets
  local.tickets.mainBg = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) ,url(\"back3.jpg\")";
  local.tickets.bg = "#fac26f";
  local.tickets.cardSectionBg = "#965d0794";
  local.tickets.cardBg = "#a8926e";
  local.tickets.cardVipBg = "#111";           
  local.tickets.primary = "#af6c08";     
  local.tickets.accent = "#c5a467";        
  local.tickets.textMain = "#f7eded";        
  local.tickets.textMuted = "#666";           
  local.tickets.textOnPrimary = "white";
  local.tickets.textBtn = "#ece5d4";
  local.tickets.textPrice = "#eecece";        
  local.tickets.textConfirm = "#f7ecec";        
  local.tickets.titleColor = "#e7d897";       
  local.tickets.titleBorder = "#d19f07";        
  local.tickets.stepDefaultBg = "#a59d9d";
  local.tickets.stepDefaultBorder = "#ccc";
  local.tickets.cardBorder = "#eee";
  local.tickets.cardGoldFrom = "#f5e6c8";        
  local.tickets.inputBorder = "#ccc";         
  local.tickets.timeItemBg = "#f4efe7";        
  local.tickets.timeLabelBg = "#8f641f";        
  local.tickets.timeLabelHoverBg = "#ffdfa3";
  local.tickets.optionHoverBg = "#c7a25e";    
  local.tickets.shadowSection = "rgba(0, 0, 0, 0.08)";   
  local.tickets.shadowCardHover = "rgba(0, 0, 0, 0.1)";
  // ! places
  local.places.color_Header_H2_Bordercard_h3 = "#efd4d4";
  local.places.color_Button = "#72590592";
  local.places.color_Buttonhover = "#0bb87c";
  local.places.color_Paragraph_write = "#e8a30e";
  local.places.color_Background_Sec_big = "rgba(255, 255, 255, 0.02)";
  local.places.color_Background_Sec_smoll = "rgba(80, 178, 10, 0.07)";
  local.places.color_Boxshadow = "rgba(245,197,66,0.4)";
  local.places.photo_background = "url(themes_back/back2.png)";

};
function theme3(){
  // ! me
  local.home.welcomeColor = "red";
  local.home.welcomeTo = "black";
  local.home.welcomeShadow = "yellow";
  local.home.heloColor = "#b689001c";
  local.home.backgroundFirstS = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) , url(../img/night-nile.jpg)";
  local.home.backgroundthirdS = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) , url(../img/testTheme/sectionInEnd.png)";
  // ! tickets
  local.tickets.mainBg = "linear-gradient(rgba(10,15,28,0.4), rgba(10,15,28,0.4)) ,url(\"dark-test.jpg\")";
  local.tickets.bg = "#020617";
  local.tickets.cardSectionBg = "#0f172a";
  local.tickets.cardBg = "#1e293b";
  local.tickets.cardVipBg = "#15181d";
  local.tickets.primary = "#d4af37";
  local.tickets.accent = "#e3e3e3";
  local.tickets.textMain = "#f8fafc";
  local.tickets.textMuted = "#94a3b8";
  local.tickets.textOnPrimary = "#020820";
  local.tickets.textBtn = "#f1f5f9";
  local.tickets.textPrice = "#fbbf24";
  local.tickets.textConfirm = "#e2e2e2";
  local.tickets.titleColor = "#fde047";
  local.tickets.titleBorder = "#ca8a04";
  local.tickets.stepDefaultBg = "#333155";
  local.tickets.stepDefaultBorder = "#475569";
  local.tickets.cardBorder = "#334155";
  local.tickets.cardGoldFrom = "#b48608";
  local.tickets.inputBorder = "#475569";
  local.tickets.timeItemBg = "#1e293b";
  local.tickets.timeLabelBg = "#b48608";
  local.tickets.timeLabelHoverBg = "#d4af37";
  local.tickets.optionHoverBg = "#334155";
  local.tickets.shadowSection = "rgba(0,0,0,0.4)";
  local.tickets.shadowCardHover = "rgba(0.0.0.0.6)";
  // ! places
  local.places.color_Header_H2_Bordercard_h3 = "#b4b61e";
  local.places.color_Button = "#a9d21492";
  local.places.color_Buttonhover = "#bd631a";
  local.places.color_Paragraph_write = "#0da282";
  local.places.color_Background_Sec_big = "rgba(255, 255, 255, 0.02)";
  local.places.color_Background_Sec_smoll = "rgba(0, 156, 83, 0.07)";
  local.places.color_Boxshadow = "rgba(66, 245, 182, 0.4)";
  local.places.photo_background = "url(themes_back/back3.png)";

};
function theme4() {
  // ! me
  local.home.welcomeColor = "rgba(219, 180, 50, 0.864)";
  local.home.welcomeTo = "white";
  local.home.welcomeShadow = "rgb(161, 132, 37)";
  local.home.heloColor = "#b689001c";
  local.home.backgroundFirstS = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) , url(../img/home_backgrounds/Papyrus_Scrolls.jpeg)";
  local.home.backgroundthirdS = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) , url(../img/sectionInEnd/mob-background.png)";
  // ! tickets
  local.tickets.mainBg = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) ,url(\"back3.jpg\")";
  local.tickets.bg = "#fac26f";
  local.tickets.cardSectionBg = "#965d0794";
  local.tickets.cardBg = "#a8926e";
  local.tickets.cardVipBg = "#111";           
  local.tickets.primary = "#af6c08";     
  local.tickets.accent = "#c5a467";        
  local.tickets.textMain = "#f7eded";        
  local.tickets.textMuted = "#666";           
  local.tickets.textOnPrimary = "white";
  local.tickets.textBtn = "#ece5d4";
  local.tickets.textPrice = "#eecece";        
  local.tickets.textConfirm = "#f7ecec";        
  local.tickets.titleColor = "#e7d897";       
  local.tickets.titleBorder = "#d19f07";        
  local.tickets.stepDefaultBg = "#a59d9d";
  local.tickets.stepDefaultBorder = "#ccc";
  local.tickets.cardBorder = "#eee";
  local.tickets.cardGoldFrom = "#f5e6c8";        
  local.tickets.inputBorder = "#ccc";         
  local.tickets.timeItemBg = "#f4efe7";        
  local.tickets.timeLabelBg = "#8f641f";        
  local.tickets.timeLabelHoverBg = "#ffdfa3";
  local.tickets.optionHoverBg = "#c7a25e";    
  local.tickets.shadowSection = "rgba(0, 0, 0, 0.08)";  
  local.tickets.shadowCardHover = "rgba(0, 0, 0, 0.1)";
  // ! places
  local.places.color_Header_H2_Bordercard_h3 = "#F5C542";
  local.places.color_Button = "#D4AF37";
  local.places.color_Buttonhover = "#B8860B";
  local.places.color_Paragraph_write = "#E0E0E0";
  local.places.color_Background_Sec_big = "rgba(255, 255, 255, 0.02)";
  local.places.color_Background_Sec_smoll = "rgba(255, 255, 255, 0.07)";
  local.places.color_Boxshadow = "rgba(245,197,66,0.4)";
  local.places.photo_background = "url(background.png)";
};
function theme5(){
  // ! me
  local.home.welcomeColor = "red";
  local.home.welcomeTo = "black";
  local.home.welcomeShadow = "yellow";
  local.home.heloColor = "#b689001c";
  local.home.backgroundFirstS = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) , url(../img/testTheme/home.png)";
  local.home.backgroundthirdS = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) , url(../img/testTheme/sectionInEnd.png)";
  // ! tickets
  local.tickets.mainBg = "linear-gradient(to bottom, rgb(0, 0, 0, 0.7) 5%, rgb(0, 0, 0, 0.7) 95%) ,url(\"back3.jpg\")";
  local.tickets.bg = "#020617";
  local.tickets.cardSectionBg = "#0f172a";
  local.tickets.cardBg = "#1e293b";
  local.tickets.cardVipBg = "#15181d";
  local.tickets.primary = "#d4af37";
  local.tickets.accent = "#e3e3e3";
  local.tickets.textMain = "#f8fafc";
  local.tickets.textMuted = "#94a3b8";
  local.tickets.textOnPrimary = "#020820";
  local.tickets.textBtn = "#f1f5f9";
  local.tickets.textPrice = "#fbbf24";
  local.tickets.textConfirm = "#e2e2e2";
  local.tickets.titleColor = "#fde047";
  local.tickets.titleBorder = "#ca8a04";
  local.tickets.stepDefaultBg = "#333155";
  local.tickets.stepDefaultBorder = "#475569";
  local.tickets.cardBorder = "#334155";
  local.tickets.cardGoldFrom = "#b48608";
  local.tickets.inputBorder = "#475569";
  local.tickets.timeItemBg = "#1e293b";
  local.tickets.timeLabelBg = "#b48608";
  local.tickets.timeLabelHoverBg = "#d4af37";
  local.tickets.optionHoverBg = "#334155";
  local.tickets.shadowSection = "rgba(0,0,0,0.4)";
  local.tickets.shadowCardHover = "rgba(0.0.0.0.6)";
  // ! places
  local.places.color_Header_H2_Bordercard_h3 = "#efd4d4";
  local.places.color_Button = "#72590592";
  local.places.color_Buttonhover = "#0bb87c";
  local.places.color_Paragraph_write = "#e8a30e";
  local.places.color_Background_Sec_big = "rgba(255, 255, 255, 0.02)";
  local.places.color_Background_Sec_smoll = "rgba(80, 178, 10, 0.07)";
  local.places.color_Boxshadow = "rgba(245,197,66,0.4)";
  local.places.photo_background = "url(themes_back/back2.png)";

};
function theme6(){
  // ! me
  local.home.welcomeColor = "red";
  local.home.welcomeTo = "black";
  local.home.welcomeShadow = "yellow";
  local.home.heloColor = "#b689001c";
  local.home.backgroundFirstS = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) , url(../img/testTheme/home.png)";
  local.home.backgroundthirdS = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) , url(../img/sectionInEnd/mob-background.png)";
  // ! tickets
  local.tickets.mainBg = "linear-gradient(to bottom, rgb(0, 0, 0, 0.3) 5%, rgb(0, 0, 0, 0.05) 95%) ,url(\"back3.jpg\")";
  local.tickets.bg = "#fac26f";
  local.tickets.cardSectionBg = "#965d0794";
  local.tickets.cardBg = "#a8926e";
  local.tickets.cardVipBg = "#111";           
  local.tickets.primary = "#af6c08";     
  local.tickets.accent = "#c5a467";        
  local.tickets.textMain = "#f7eded";        
  local.tickets.textMuted = "#666";           
  local.tickets.textOnPrimary = "white";
  local.tickets.textBtn = "#ece5d4";
  local.tickets.textPrice = "#eecece";        
  local.tickets.textConfirm = "#f7ecec";        
  local.tickets.titleColor = "#e7d897";       
  local.tickets.titleBorder = "#d19f07";        
  local.tickets.stepDefaultBg = "#a59d9d";
  local.tickets.stepDefaultBorder = "#ccc";
  local.tickets.cardBorder = "#eee";
  local.tickets.cardGoldFrom = "#f5e6c8";        
  local.tickets.inputBorder = "#ccc";         
  local.tickets.timeItemBg = "#f4efe7";        
  local.tickets.timeLabelBg = "#8f641f";        
  local.tickets.timeLabelHoverBg = "#ffdfa3";
  local.tickets.optionHoverBg = "#c7a25e";    
  local.tickets.shadowSection = "rgba(0, 0, 0, 0.08)";  
  local.tickets.shadowCardHover = "rgba(0, 0, 0, 0.1)";
  // ! places
  local.places.color_Header_H2_Bordercard_h3 = "#b4b61e";
  local.places.color_Button = "#a9d21492";
  local.places.color_Buttonhover = "#bd631a";
  local.places.color_Paragraph_write = "#0da282";
  local.places.color_Background_Sec_big = "rgba(255, 255, 255, 0.02)";
  local.places.color_Background_Sec_smoll = "rgba(0, 156, 83, 0.07)";
  local.places.color_Boxshadow = "rgba(66, 245, 182, 0.4)";
  local.places.photo_background = "url(themes_back/back3.png)";

};
function mainTheme1(){
  // ! me
  local.main.navBackgroundColor = "rgba(211, 211, 211, 0.32)";
  local.main.navBorderColor = "rgba(255, 255, 255, 0.153)";
  local.main.navTextColor = "black";
  local.main.navShadowColor = "rgba(0, 0, 0, 0.3)";
  local.main.homeIcone = "img/homeicone1.png";
};
function mainTheme2(){
  // ! me
  local.main.navBackgroundColor = "rgb(0 0 0 / 47%)";
  local.main.navBorderColor = "rgb(0 0 0 / 20%)";
  local.main.navTextColor = "white";
  local.main.navShadowColor = "rgb(255 255 255 / 28%)";
  local.main.homeIcone = "img/homeicone2.png";
};

function style1(){
  // ! me
  local.home.style = "css/home3.css";
  // ! tickets
  local.tickets.style = "style.css";
  // ! civilizations
  local.civilizations.style = "css/style.css";
  // ! places
  local.places.style = "main.css";
  // ! login
  local.login.style = "style.css";
}
function style2(){
  // ! me
  local.home.style = "css/home2.css";
  // ! tickets
  local.tickets.style = "style2.css";
  // ! civilizations
  local.civilizations.style = "css/style2.css";
  // ! places
  local.places.style = "sec.css";
  // ! login
  local.login.style = "style2.css";
}
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

cards[0].addEventListener("click", style1);
cards[0].addEventListener("click", theme1);
cards[0].addEventListener("click", mainTheme1);
cards[0].addEventListener("click", generate);
cards[6].addEventListener("click", style1);
cards[6].addEventListener("click", theme1);
cards[6].addEventListener("click", mainTheme1);
cards[6].addEventListener("click", generate);

cards[1].addEventListener("click", style2);
cards[1].addEventListener("click", theme2);
cards[1].addEventListener("click", mainTheme2);
cards[1].addEventListener("click", generate);
cards[7].addEventListener("click", style2);
cards[7].addEventListener("click", theme2);
cards[7].addEventListener("click", mainTheme2);
cards[7].addEventListener("click", generate);

cards[2].addEventListener("click", style1);
cards[2].addEventListener("click", theme3);
cards[2].addEventListener("click", mainTheme2);
cards[2].addEventListener("click", generate);
cards[8].addEventListener("click", style1);
cards[8].addEventListener("click", theme3);
cards[8].addEventListener("click", mainTheme2);
cards[8].addEventListener("click", generate);

cards[3].addEventListener("click", style2);
cards[3].addEventListener("click", theme4);
cards[3].addEventListener("click", mainTheme2);
cards[3].addEventListener("click", generate);
cards[9].addEventListener("click", style2);
cards[9].addEventListener("click", theme4);
cards[9].addEventListener("click", mainTheme2);
cards[9].addEventListener("click", generate);

cards[4].addEventListener("click", style1);
cards[4].addEventListener("click", theme5);
cards[4].addEventListener("click", mainTheme1);
cards[4].addEventListener("click", generate);
cards[10].addEventListener("click", style1);
cards[10].addEventListener("click", theme5);
cards[10].addEventListener("click", mainTheme1);
cards[10].addEventListener("click", generate);

cards[5].addEventListener("click", style2);
cards[5].addEventListener("click", theme6);
cards[5].addEventListener("click", mainTheme2);
cards[5].addEventListener("click", generate);
cards[11].addEventListener("click", style2);
cards[11].addEventListener("click", theme6);
cards[11].addEventListener("click", mainTheme2);
cards[11].addEventListener("click", generate);

