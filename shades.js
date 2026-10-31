const SHADES=[["Jet Black","#141210","Deep black roots with no warmth."],["Espresso","#2B1E17","Dark brown that reads black indoors and brown in sun."],["Walnut","#4A3326","Medium brown, the most common match."],["Chestnut","#6B4A33","Light-to-medium brown with warmth."],["Sand","#A8875F","Dark blonde and light brown."],["Auburn","#6E3524","Red-brown tones."],["Slate","#6F6B66","Gray hair, or layer over Espresso for salt and pepper."],["Silver","#BDBAB4","White and silver hair."]];
function initShades(el,out){
 SHADES.forEach((s,i)=>{const b=document.createElement('button');b.className='sw'+(i==1?' on':'');b.innerHTML=`<i style="background:${s[1]}"></i>${s[0]}`;b.onclick=()=>{el.querySelectorAll('.sw').forEach(x=>x.classList.remove('on'));b.classList.add('on');if(out)out(s)};el.appendChild(b)});
 if(out)out(SHADES[1]);
}
