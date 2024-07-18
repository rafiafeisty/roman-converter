const output = document.getElementById('output');
const number = document.getElementById('number');
const convert = document.getElementById('convert-btn');

function convertToRoman(num) {
    const roman={
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    let str='';
    for(let i of Object.keys(roman)){
        let q=Math.floor(num/roman[i]);
        num-=q*roman[i];
        str+=i.repeat(q);
    }
    return str;
}

function handleconvert ()  {
    const numValue = number.value;

    if (numValue === "") {
        output.style.display = "block";
        output.style.backgroundColor = "#a94442";
        output.innerHTML = "Please enter a valid number";
    } else if (numValue < 1) {
        output.style.display = "block";
        output.style.backgroundColor = "#a94442";
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if (numValue > 3999) {
        output.style.display = "block";
        output.style.backgroundColor = "#a94442";
        output.innerHTML = "Please enter a number less than or equal to 3999";
    } else {
        output.style.display = "block";
        output.style.backgroundColor = "#3b3b4f"; 
        output.innerHTML = convertToRoman(number.value);
    }
};
convert.addEventListener("click", handleconvert);
number.addEventListener("keydown",(event)=>{
if(event.key==="Enter"){
    handleconvert();
}
})
