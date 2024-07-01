let count = 0;
let output = document.getElementById("result");
let increment = () =>{
    count++;
    output.innerHTML = count;
    output.className = "text-success";
}
let decrement = () =>{
    count--;
    output.textContent = count;
    output.className = "text-warning";
}
let reset = () =>{
    count=0;
    output.innerHTML = count;
    output.style.color="blue";
}
document.getElementById("increment").addEventListener("click",increment);
document.getElementById("decrement").addEventListener("click",decrement);
document.getElementById("reset").addEventListener("click",reset);