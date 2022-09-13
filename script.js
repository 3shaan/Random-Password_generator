let charSet = "abcdefghijklmnopqrstuvwxABCDEFGHIJKLMNOPQRSTUVWX";
let numberSet = "0123456789";
let specialCharSet = "!@#$%^&*()";

// getElementById function 
const element= id=>{
    const getElement = document.getElementById(id);
    return getElement; 
}
const charCount = element('char-count');

// ramdom Number function
const inputfield = element('password')
const randomNumber =()=>{
    let password = '';
    for(let i=0; i < charCount.innerText ; i++){
        const ramdom = Math.floor(Math.random()* charSet.length);
        password+= charSet.substring(ramdom, ramdom+1);

    }
    inputfield.value = password;
}
randomNumber();

const handleViewPassword =()=>{
    const viewPass = element('view-check');
    const viewIcon = element('view-icon');
    if(viewPass.checked === true){
        viewIcon.innerHTML=`<i class="fa-solid fa-eye text-white"></i>`
        inputfield.setAttribute('type', 'text')
    }
    else{
        viewIcon.innerHTML=`<i class="fa-solid fa-eye-slash text-white"></i>`
        inputfield.setAttribute('type', 'password')
    }
}
const handleSlider=(event)=>{
    charCount.innerHTML= event;
    randomNumber();

}
const number = element('number');
const special = element('special');
const handleCheckbox =()=>{
        if ( number.checked === true){
            charSet+= numberSet;
        }
        else{
            charSet = charSet.replace(/0123456789/g, "");
        }
        if ( special.checked === true){
            charSet+= specialCharSet;
        }
        else{
            charSet = charSet.replace(/[^\w ]/g, "");
        }
        randomNumber();
}

const handleCopy=()=>{
    const inputvalue = inputfield;
    inputvalue.select();
    document.execCommand('copy');
    alert('text copied');
}