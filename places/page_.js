places:{
    color_Header_H2_Bordercard_h3: "";
    color_Button: "";
    color_Buttonhover:"";
    color_Paragraph_write:"";
    color_Background_Sec_big:"";
    color_Background_Sec_smoll:"";
    color_Boxshadow:"";
    photo_background:"";
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
