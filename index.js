let skillItem = document.getElementsByClassName("skillItem");
let pre = -1;
for(let i=0;i<skillItem.length;i++){
    skillItem[i].addEventListener("click",()=>{
        skillItem[i].classList.toggle("spred");
        if(pre!=-1){
            skillItem[pre].classList.remove("spred");
        }
        pre = i;
    })
}