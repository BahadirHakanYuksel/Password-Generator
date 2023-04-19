const sliderInput = document.getElementById('slider-input');
const sliderValue = document.getElementById('slider-value');
const generateButton = document.getElementById('generate-button');
const pwInput = document.getElementById('pw-input');
const copyButton = document.getElementById('copy');
const delButton = document.getElementById('del');
const see = document.getElementById('see');

const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
//---------------------------------------------------------//
let upperChars = "ABCDEFGHIJKLMNOPRSTUVYZQWX";
let lowerChars = "abcdefghijklmnoprstuvyzqwx";
let allNumbers = "0123456789";
let allSymbols = ".+$*#"
let numberOfSights = 0;
//---------------------------------------------------------//

copyButton.title = "Copy"
delButton.title = "Delete"
see.title="Visibility"

sliderInput.addEventListener("input", ()=>{
    sliderValue.innerHTML =  sliderInput.value;

    if(sliderInput.value < 8){
        sliderValue.style.color="red"
    }
    else{
        sliderValue.style.color="rgb(50, 184, 117)"
    }
})

see.addEventListener("click" , ()=>{
    if(pwInput.value != "" || pwInput.value.length >= 1){
        numberOfSights++;
        if(numberOfSights %2 != 0){
            pwInput.type="text"
            see.innerText="visibility_off"
        }
        else{
            pwInput.type="password"
            see.innerText="visibility"
        }
    }
})

copyButton.addEventListener("click" , ()=>{
    if(pwInput.value != "" || pwInput.value.length >=1){
        navigator.clipboard.writeText(pwInput.value);
        copyButton.innerText = "check"
        setTimeout(() => {
            copyButton.innerText = "content_copy"
        },1500);
    }
})

delButton.addEventListener("click",()=>{
    pwInput.value="";
    numberOfSights = 0;
    see.innerText="visibility";
})

//click the generate button
generateButton.addEventListener("click", ()=>{
    numberOfSights = 0;
    see.innerText="visibility";
    pwInput.type="password"

    pwInput.value=genPassword()
})

const genPassword = ()=>{

    let password="";
    let allChars="";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked   ? allNumbers : "";
    allChars += symbols.checked   ? allSymbols : "";

    if(allChars == "" || allChars.length == 0) return password;

    let i = 1;
    while(i<=sliderInput.value){
        password += allChars.charAt(Math.floor(Math.random() * allChars.length))
        i++;
    }
    return password;
}
