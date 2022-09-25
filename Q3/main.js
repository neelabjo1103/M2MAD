let numberdiv = document.getElementById("number");


let number = 0;


let plus = document.getElementById("increment-button");
let minus = document.getElementById("decrement-button");


plus.addEventListener("click", () => {
    ++number;
    numberdiv.innerHTML = number;
})

minus.addEventListener("click", () => {
    if (number > 0){
        --number;
        numberdiv.innerHTML = number;
    }
    else {
        numberdiv.innerHTML = 0;
    }
})
