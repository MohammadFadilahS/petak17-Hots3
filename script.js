//insialisasi 
const quiz_box = document.querySelector (".quiz_box");
const next_btn = document.querySelector ("button.next_btn");
const card = document.querySelector (".card");
const start_btn = document.querySelector ("button.start_btn");
const cek_btn = document.querySelector ("button1.cek_btn");
const option2 = document.querySelector (".option2");
const option1 = document.querySelector (".option1");
const option3 = document.querySelector (".option3");
const option4 = document.querySelector (".option4");
const card2 = document.querySelector(".card2");
const benar = document.querySelector(".benar");


//jika click mulaijawab
start_btn.onclick = ()=>{
   quiz_box.classList.add("activeQuiz");
   button3.classList.remove("activeButton3");
}
//jika klik pembahasan
next_btn.onclick = ()=>{
    quiz_box.classList.remove("activeQuiz");
    card.classList.add("activeCard");
 }
 //jika klik kotak benar dan salah
 card2.onclick = ()=>{
    card2.classList.remove("activeCard2");
 }
 benar.onclick = ()=>{
    benar.classList.remove("activeBenar");
 }
 //Muncul Pembahasan dan cek jawaban
 const footerbutton=document.querySelector("footer button");
 const footerbutton1=document.querySelector("footer button1");
//jika klik cek jawaban
cek_btn.onclick = ()=>{
    icontick.classList.add("activeTick");
    iconcross1.classList.add("activeCross1");
    iconcross3.classList.add("activeCross3");
    iconcross4.classList.add("activeCross4");
    option_listdivnthlastchild.classList.add("activeBackground");
    option_listdivnthchild4.classList.add("activeBgcross1");
    option_listdivnthlastchild4.classList.add("activeBgcrossatas");
    option_listdivnthlastchild2.classList.add("activeBgcross3");
 }
 //tombol petak hilang 
 const h3 = document.querySelector ("footer h3");
 const kalah = document.querySelector ("footer button3");
 const nyerah = document.querySelector (".kalah");
 kalah.onclick = ()=> {
    nyerah.classList.add("activeKalah");
 }
 nyerah.onclick = ()=> {
    nyerah.classList.remove("activeKalah");
    h3.classList.add("activeH3");
    footerbutton.classList.add("activeButton");
    icontick.classList.add("activeTick");
    option_listdivnthlastchild.classList.add("activeBackground");
    iconcross1.classList.add("activeCross1");
    option_listdivnthlastchild4.classList.add("activeBgcrossatas");
    iconcross3.classList.add("activeCross3");
    option_listdivnthlastchild2.classList.add("activeBgcross3");
    iconcross4.classList.add("activeCross4");
    option_listdivnthchild4.classList.add("activeBgcross1");
 }
//getting answer 
const icontick = document.querySelector (".icon.tick");
const iconcross1 = document.querySelector (".icon.cross1");
const iconcross3 = document.querySelector (".icon.cross3");
const iconcross4 = document.querySelector (".icon.cross4");
const option_listdivnthlastchild = document.querySelector (".option_list div:nth-last-child(3)");
const option_listdivnthchild4= document.querySelector(".option_list div:nth-child(4)");
const option_listdivnthlastchild4= document.querySelector(".option_list div:nth-last-child(4)");
const option_listdivnthlastchild2= document.querySelector(".option_list div:nth-last-child(2)");

option2.onclick = () => {
    icontick.classList.add("activeTick");
    option_listdivnthlastchild.classList.add("activeBackground");
    footerbutton.classList.add("activeButton");
    footerbutton1.classList.add("activeButton1");
    benar.classList.add("activeBenar");
    h3.classList.add("activeH3");
    kalah.classList.add("activeButton3");
}
option1.onclick = () => {
    iconcross1.classList.add("activeCross1");
    option_listdivnthlastchild4.classList.add("activeBgcrossatas");
    footerbutton.classList.add("activeButton");
    footerbutton1.classList.add("activeButton1");
    card2.classList.add("activeCard2");
    h3.classList.add("activeH3");
    kalah.classList.add("activeButton3");
}
option3.onclick = () => {
    iconcross3.classList.add("activeCross3");
    option_listdivnthlastchild2.classList.add("activeBgcross3");
    footerbutton.classList.add("activeButton");
    footerbutton1.classList.add("activeButton1");
    card2.classList.add("activeCard2");
    h3.classList.add("activeH3");
    kalah.classList.add("activeButton3");
}
option4.onclick = () => {
    iconcross4.classList.add("activeCross4");
    option_listdivnthchild4.classList.add("activeBgcross1");
    footerbutton.classList.add("activeButton");
    footerbutton1.classList.add("activeButton1");
    card2.classList.add("activeCard2");
    h3.classList.add("activeH3");
    kalah.classList.add("activeButton3");
}
