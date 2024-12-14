// Select the form and result elements
const form = document.getElementById("rrForm");
const riskElement = document.getElementById("risk");
const rewardElement = document.getElementById("reward");
const ratioElement = document.getElementById("ratio");

// Add form submit event listener
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get user inputs
    const entryPrice = parseFloat(document.getElementById("entryPrice").value);
    const stopLoss = parseFloat(document.getElementById("stopLoss").value);
    const targetPrice = parseFloat(document.getElementById("targetPrice").value);

    // Validate inputs
    if (isNaN(entryPrice) || isNaN(stopLoss) || isNaN(targetPrice) || entryPrice <= 0 || stopLoss <= 0 || targetPrice <= 0) {
        alert("Please enter valid positive numbers for all fields!");
        return;
    }

    // Calculate risk, reward, and ratio
    const risk = entryPrice - stopLoss; // Risk per share
    const reward = targetPrice - entryPrice; // Reward per share

    // Ensure risk and reward values make sense
    if (risk <= 0) {
        alert("Stop-loss must be lower than the entry price.");
        return;
    }

    if (reward <= 0) {
        alert("Target price must be higher than the entry price.");
        return;
    }

    const ratio = (reward / risk).toFixed(2); // Risk-Reward Ratio

    // Update the results on the page
    riskElement.textContent = `Risk per Share: $${risk.toFixed(2)}`;
    rewardElement.textContent = `Reward per Share: $${reward.toFixed(2)}`;
    ratioElement.textContent = `Risk-Reward Ratio: ${ratio}:1`;
});