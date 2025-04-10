const scanBtn =document.getElementById("scanBtn");
const resultText =document.getElementById("resultText");
const resultEmoji =document.getElementById("resultEmoji");
const scanner =document.getElementById("scanner");
const resultBox =document.getElementById("resultBox");

scanBtn.addEventListener("click", () => {
    const input = document.getElementById("questionInput").value.trim();
    if (!input) {
        alert("Please enter a question first!");
        return;
        
    }
    scanner.classList.remove("hidden");
    resultBox.classList.add("hidden");  
    resultText.innerText = "Scanning...";
    resultEmoji.innerText = "🔍";
    setTimeout(()=>{
        scanner.classList.add("hidden");
        resultBox.classList.remove("hidden");  
        
        const isLie= Math.random()> 0.5;

        if (isLie) {
            resultText.textContent = "❌ LIE DETECTED!";
            resultEmoji.textContent = "😈🔥😂"; 
        }
        else {
            resultText.textContent = "✅ TRUTH CONFIRMED!";
            resultEmoji.textContent = "😇👍💖✨"; 
        }
    }, 2000);
});