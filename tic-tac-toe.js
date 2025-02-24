let box = document.getElementsByClassName("box");
let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");
let image = document.querySelector("img");
let gameStop = false;
let url = image.src;
const arr = [ [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8] ];
let arr1 = arr;

function isWin(array,realArray){
    for(let i=0;i<array.length;i++){
        let number0 = 0;
        let numberX = 0;
        for(let j=0;j<3;j++){
            if(array[i][j]=="0"){
                number0++;
            }
            else if(array[i][j]=="X"){
                numberX++;
            }
 
                if(number0==3){
                    gameStop = true;
                    console.log("Winner is 0");
                    player1.innerText ="Player 1 is Winner";
                    player1.style = "color:white"
                    player2.innerText = "";
                    image.src="";
                    setTimeout(function(){
                        for(let k=0;k<box.length;k++){
                            box[k].innerText = "";
                        }
                    player1.innerText ="Player 1";
                    player2.innerText ="Player 2";
                    array = realArray;
                    image.src=url;
                    player1.style = "color:transparent"
                    window.location.reload("/");
                    },1000);
                    if(i==0){
                        let newDiv =document.createElement("div");
                        box[0].appendChild(newDiv);
                        newDiv.classList = "line";
                       
                    }
                    if(i==0){
                        let newDiv =document.createElement("div");
                        box[0].appendChild(newDiv);
                        newDiv.classList = "line";
                       
                    }
                    if(i==1){
                        let newDiv =document.createElement("div");
                        box[3].appendChild(newDiv);
                        newDiv.classList = "line";
                        
                    }
                    if(i==2){
                        let newDiv =document.createElement("div");
                        box[6].appendChild(newDiv);
                        newDiv.classList = "line";
                        
                    }
                    if(i==3){
                        let newDiv =document.createElement("div");
                        box[0].appendChild(newDiv);
                        newDiv.classList = "line1";
                    }
                    if(i==4){  ///////
                        let newDiv =document.createElement("div");
                        box[2].appendChild(newDiv);
                        newDiv.classList = "line2";
                    }
                    if(i==5){
                        let newDiv =document.createElement("div");
                        box[0].appendChild(newDiv);
                        newDiv.classList = "line3";
                    }
                    if(i==6){
                        let newDiv =document.createElement("div");
                        box[1].appendChild(newDiv);
                        newDiv.classList = "line3";
                    }
                    if(i==7){
                        let newDiv =document.createElement("div");
                        box[2].appendChild(newDiv);
                        newDiv.classList = "line3";
                    }
                    return 1;
                    
                }
                else if(numberX == 3){
                    gameStop = true;
    
                    player2.innerText ="Player 2 is Winner";
                    player2.style = "color:white"
                    player1.innerText = "";
                    image.src="";
                    setTimeout(function(){
                        for(let k=0;k<box.length;k++){
                            box[k].innerText = "";
                        }
                    player1.innerText = "Player 1";
                    player2.innerText ="Player 2";
                    array = realArray;
                    image.src=url;
                    player2.style.cssText = "color:transparent"
                    window.location.reload("/");
    
                    },1000);
                    if(i==0){
                        let newDiv =document.createElement("div");
                        box[0].appendChild(newDiv);
                        newDiv.classList = "line";
                       
                    }
                    if(i==1){
                        let newDiv =document.createElement("div");
                        box[3].appendChild(newDiv);
                        newDiv.classList = "line";
                        
                    }
                    if(i==2){
                        let newDiv =document.createElement("div");
                        box[6].appendChild(newDiv);
                        newDiv.classList = "line";
                        
                    }
                    if(i==3){
                        let newDiv =document.createElement("div");
                        box[0].appendChild(newDiv);
                        newDiv.classList = "line1";
                    }
                    if(i==4){  ///////
                        let newDiv =document.createElement("div");
                        box[2].appendChild(newDiv);
                        newDiv.classList = "line2";
                    }
                    if(i==5){
                        let newDiv =document.createElement("div");
                        box[0].appendChild(newDiv);
                        newDiv.classList = "line3";
                    }
                    if(i==6){
                        let newDiv =document.createElement("div");
                        box[1].appendChild(newDiv);
                        newDiv.classList = "line3";
                    }
                    if(i==7){
                        let newDiv =document.createElement("div");
                        box[2].appendChild(newDiv);
                        newDiv.classList = "line3";
                    }
                    return 1;
                }
                
            

            
        }
        number0 = 0;
        numberX = 0;
    }
    return 0;
}

player2.style.cssText = "color:transparent";
let count = 0;
let drawCount = 0;
for(let i=0;i<box.length;i++){
    box[i].addEventListener("click",function(){
        if(box[i].innerText=="" && gameStop==false){
            drawCount++;
        if(count%2===0){
            box[i].innerText = "0";
            count++;
        player1.style.cssText = "color:transparent";
        player2.style.cssText = "color:white";

        
        for(let i=0;i<box.length;i++){
            if(box[i].innerText=="0"){
                for(let j=0;j<arr1.length;j++){
                    for(let k=0;k<3;k++){
                        if(arr1[j][k]===i){
                            arr1[j][k] ="0"; 
                        }
                    }
                }
            }
            
        }

        }
        else{
            box[i].innerText = "X";
            count++;
        player1.style.cssText = "color:white";
        player2.style.cssText = "color:transparent";
        } 
        if(box[i].innerText == "X"){
            box[i].style.cssText = "color:greenyellow"
        }
        else{
            box[i].style.cssText = "color:aqua"

        }
        for(let i=0;i<box.length;i++){

        if(box[i].innerText=="X") {
            for(let j=0;j<arr1.length;j++){
                for(let k=0;k<3;k++){
                    if(arr1[j][k]===i){
                        arr1[j][k] ="X"; 
                    }
                }
            }

        }
    }
    console.log(arr1);
    let ans = isWin(arr1,arr);
    
console.log(ans)
if(ans==1){
    console.log("start");
    console.log(arr1);
    arr1 =[ [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8] ];
    console.log(arr1);
  
    drawCount = 0;
}
else if(drawCount==9){
    if(count%2==0){
        player2.innerText ="Match Draw";
        player2.style.cssText = "color:white";
        player1.innerText ="";
        image.src= "";
    }
    else{
        player1.innerText ="Match Draw";
        player1.style.cssText = "color:white";
        player2.innerText ="";
        image.src= "";
    }
        setTimeout(function(){
            player1.innerText = "Player 1";
            player2.innerText = "Player 2";
            image.src = url;
            for(let k=0;k<box.length;k++){
                box[k].innerText = "";
            }
            arr1 =[ [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8] ];
        },500);
    }

}

    })

}
