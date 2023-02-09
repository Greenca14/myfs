const fr=document.querySelector(".ab")
const zx=document.querySelector(".zx")
const as=document.querySelector(".as")
const pas=document.querySelector("#pas")
const log=document.querySelector("#log")
const m=document.querySelector("#m")
const j=document.querySelector("#j")
let mg
fr.addEventListener("submit",(e) => {
    e.preventDefault() 
    if (m.checked==true)
    {
        mg="Мужской"
    }else{mg="Женский"}
    zx.classList.remove("invise")
    as.innerHTML=`Логин:${log.value} Пароль: ${pas.value} Пол:${mg}`
})