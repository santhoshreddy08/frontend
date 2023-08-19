var count = 0;
document.getElementById("incre").addEventListener("click" , () => {
    count++;
    document.getElementById("counter").innerText = count;
})
document.getElementById("decre").addEventListener("click", () => {
    count--;
    document.getElementById("counter").innerText = count;
})