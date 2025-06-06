const button = document.getElementById("check-btn");
const result = document.querySelector("#result");

const palindrome = (input) => {
const alphanumericInput= input.toLowerCase().replace(/[^a-z\d]/g, "");
const reverseAlphanumericInput= alphanumericInput.split("").reverse().join("");
return alphanumericInput === reverseAlphanumericInput;
}

button.addEventListener("click", () => {
   const input = document.getElementById("text-input");
   if(!input.value.trim()){
     alert("Please input a value");
   }else{
     result.innerText = palindrome(input.value) ? `${input.value} is a palindrome` : `${input.value} is not a palindrome`;
   }
});
