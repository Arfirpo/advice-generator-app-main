const diceBtn = document.querySelector('.dice__button');
const adviceTxt = document.querySelector('#advice')
const adviceId = document.querySelector('#adviceid');

getAdvice();

diceBtn.addEventListener('click', ()=>{
    getAdvice();
});


function getAdvice(){
    //generate a random number
    const id = Math.floor(Math.random() * 100) + 1;
    //calling the api with the functions fetch & them
    fetch(`https://api.adviceslip.com/advice/${id}`)
    .then(res=>{
        return res.json()
    }).then(data =>{
    //show the api values in the html
        let adv = data.slip.advice;
        adviceTxt.innerHTML = `"${adv}"`;
        adviceId.innerHTML = `${id}`;
    })
    .catch(err => getAdvice()); 
}