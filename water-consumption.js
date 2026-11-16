const capacity = 100;
const waterLevel = document.getElementById("water-level");
const waterAmount = document.getElementById("water-amount");
const output = document.getElementById("output");
const runButton = document.getElementById("run-button");
const resetButton = document.getElementById("reset-button");
const tankFill = document.getElementById("tank-fill");
const tankLabel = document.getElementById("tank-label");
let simulationId = 0;

function updateTank(water) {
    const percentage = Math.max(0, Math.min(100, (water / capacity) * 100));
    const fillHeight = Math.max(0, percentage);

    waterLevel.value = percentage;
    waterAmount.textContent = `${water} L`;
    tankFill.style.height = `${fillHeight}%`;
    tankLabel.textContent = `${Math.round(percentage)}%`;
}

function setInitialState() {
    updateTank(capacity);
    output.textContent = "Press the button to start the cycle.";
}

function pause(milliseconds) {
    return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

runButton.addEventListener("click", async function () {
    const currentSimulation = ++simulationId;
    runButton.disabled = true;
    let water = capacity;
    let operation = 0;
    let messages = "Starting with 100 litres of water.\n";
    output.textContent = messages;
    updateTank(water);
    await pause(500);

    while (water >= 12) {
        operation++;
        water -= 12;

        const percentage = (water / capacity) * 100;
        messages += `Operation ${operation}: ${water} litres left (${percentage.toFixed(0)}%)\n`;

        if (water < 30) {
            messages += "LOW WATER ALERT\n";
        }

        if (currentSimulation !== simulationId) return;
        updateTank(water);
        output.textContent = messages;
        await pause(850);
    }

    messages += `Warning: Not enough water for another operation. ${water} litres remain.\n`;
    output.textContent = messages;
    await pause(850);

    while (water < capacity) {
        const refill = Math.min(50, capacity - water);
        water += refill;

        const percentage = (water / capacity) * 100;
        messages += `Refilled ${refill} litres. ${water} litres left (${percentage.toFixed(0)}%)\n`;
        if (currentSimulation !== simulationId) return;
        updateTank(water);
        output.textContent = messages;
        await pause(850);
    }

    if (currentSimulation !== simulationId) return;
    messages += "The tank is full.";
    output.textContent = messages;
    runButton.disabled = false;
});

resetButton.addEventListener("click", function () {
    simulationId++;
    runButton.disabled = false;
    resetButton.disabled = false;
    setInitialState();
});

setInitialState();
