let score1,scorer=0
const random=(symbols)=>{
    let b=Math.floor(Math.random()*3)
    console.log(symbols[b])
    return symbols[b]
}
const symbols=['stone','paper','scissor']


const stone=document.getElementById('stone')
const paper=document.getElementById('paper')
const scissor=document.getElementById('scissor')
const clear=document.getElementById('clear')

const update1=(user,comp)=>{
    scoreupdate.innerText=`👱 ${user} vs 🤖 ${comp}`
}
const update=(scorer,score1)=>{
    scoreupdate0.innerText=`Your Score is ${scorer}`
   if(score1==-1){
    scoreupdate1.innerText=`You Lose!`
    return
   }
   else if(score1==1){
    scoreupdate1.innerText=`You Won!`
    return
   }
   else{
    scoreupdate1.innerText=`It's a Tie!`
    return
   }
}


const tie=()=>{
    scoreupdate0.innerText=``
    scoreupdate.innerText=``
   scoreupdate1.innerText=`It's a Tie!`
    return
}

const score=(symbol)=>{
    let compchoice=random(symbols)
    if((symbol=='stone' && compchoice=='stone')||(symbol=='paper' && compchoice=='paper')||(symbol=='scissor' && compchoice=='scissor')){
        tie()
        return
    }
    else if((symbol=='paper' && compchoice=='stone')||(symbol=='stone' && compchoice=='scissor')||(symbol=='scissor' && compchoice=='paper')){
        score1=1
        scorer++
        update(scorer,score1)
        update1(symbol,compchoice);
        return
    }
    else if((symbol=='stone' && compchoice=='paper')||(symbol=='paper' && compchoice=='scissor')||(symbol=='scissor' && compchoice=='stone')){
        score1=-1
        scorer--
        update(scorer,score1)
        update1(symbol,compchoice);
        return
    }
    
}
stone.onclick=()=>score('stone')
paper.onclick=()=>score('paper')
scissor.onclick=()=>score('scissor')

const cleargame=()=>{
    scoreupdate0.innerText=``
    scoreupdate.innerText=``
    scoreupdate1.innerText=``
    scorer=0
}

clear.onclick=()=>cleargame()