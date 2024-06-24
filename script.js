const allCards = document.querySelectorAll(".card");
let firstCard =null;
let secondCard=null;
canclick =true;
let score =0;




allCards.forEach((card)=>{
    card.addEventListener("click",handleCardClicked);
});



function handleCardClicked(){
    if(!canclick) return;
    if(this.classList.contains("flip"))return;

    this.classList.add("flip"); 
    if(!firstCard) firstCard =this;
    else if(!secondCard) secondCard  = this;
    //handling matchss
    let img1 = firstCard ? firstCard.firstElementChild.src : null;
    let img2 = secondCard ? secondCard.firstElementChild.src : null;
    
    console.log(img1);
    if(img1===img2){
        firstCard=null;
        secondCard=null;
        score++;
        if(score===6) Gameover();
    }else if(img1 && img2){
        canclick = false;
        setTimeout(()=>{
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            firstCard=null;
            secondCard=null;
            canclick =true; 
        },1000);
     }


}
function Gameover(){
    setTimeout(()=>{
        let reval = confirm("you win !!! u want to play again ?");
        if(reval===true){
            location.reload();
        }
    },1000)

}
////////////// shufllung////////////
allCards.forEach((card)=>{
    let newgame = Math.floor(Math.random()*12);
    card.style.order=newgame;
})
