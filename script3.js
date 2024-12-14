// script.js

document.getElementById("analyzeBtn").addEventListener("click", function () {
    // Get user inputs
    const totalTrades = parseInt(document.getElementById("totalTrades").value);
    const winRate = parseFloat(document.getElementById("winRate").value) / 100;
    const avgProfit = parseFloat(document.getElementById("avgProfit").value);
    const avgLoss = parseFloat(document.getElementById("avgLoss").value);

    // Validate inputs
    if (isNaN(totalTrades) || isNaN(winRate) || isNaN(avgProfit) || isNaN(avgLoss)) {
        alert("Please fill out all fields with valid numbers.");
        return;
    }

    // Calculate metrics
    const totalProfit = totalTrades * winRate * avgProfit;
    const totalLoss = totalTrades * (1 - winRate) * avgLoss;
    const profitFactor = (totalLoss === 0) ? "Infinity" : (totalProfit / totalLoss).toFixed(2);

    // Update UI with calculated metrics
    document.getElementById("profitFactor").textContent = profitFactor;
    document.getElementById("totalProfit").textContent = `$${totalProfit.toFixed(2)}`;
    document.getElementById("totalLoss").textContent = `$${totalLoss.toFixed(2)}`;
});
