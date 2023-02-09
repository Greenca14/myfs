const bt=document.querySelector(".cl")
const bode=document.body
let fn=1
bt.addEventListener("click",() => {
    if(fn===1){
    bode.style.background="linear-gradient(221.77deg, rgba(255, 0, 153, 0.94) 16.3%, #70FF00 94.58%)"
    fn=2
    }else{
        bode.style.background="linear-gradient(130.92deg, rgba(198, 87, 87, 0.8) 29.71%, rgba(198, 87, 87, 0.417281) 45.72%, rgba(198, 87, 87, 0) 53.94%), linear-gradient(242.53deg, #00E0FF -0.16%, rgba(198, 87, 87, 0.521601) 84.74%)"
        fn=1
    }
})
const bt2=document.querySelector(".bt2")
const korz=document.querySelector(".bq")
const popup=document.querySelector(".popup")
korz.addEventListener("click",() => {
    popup.classList.remove("invise")
})
bt2.addEventListener("click",() => {
    popup.classList.add("invise")
})