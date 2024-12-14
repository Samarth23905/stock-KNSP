const apiKey = 'DAONH2A0RRMVLTDN';
        async function fetchStockData(symbol) {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`);
            const data = await response.json();

            if (!data["Time Series (Daily)"]) {
                alert("Invalid stock symbol or API limit reached.");
                return null;
            }

            return Object.entries(data["Time Series (Daily)"]).map(([date, values]) => ({
                date,
                close: parseFloat(values["4. close"])
            })).reverse();
        }

        // Render stock data chart
        function renderChart(data) {
            const ctx = document.getElementById('stockChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(d => d.date),
                    datasets: [{
                        label: 'Stock Price (Close)',
                        data: data.map(d => d.close),
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true
                        }
                    }
                }
            });
        }
        function makePrediction(data) {
            const prices = data.map(d => d.close);
            const avg = prices.reduce((sum, price) => sum + price, 0) / prices.length;
            return avg;
        }

        document.getElementById('fetchData').addEventListener('click', async () => {
            const symbol = document.getElementById('stockSymbol').value.toUpperCase();
            const stockData = await fetchStockData(symbol);

            if (stockData) {
                renderChart(stockData);
                const prediction = makePrediction(stockData);
                document.getElementById('prediction').innerText = `Predicted Price (Average): $${prediction.toFixed(2)}`;
            }
        });

document.getElementById("predict-trend").addEventListener("click", function () {
    const stockSymbol = document.getElementById("stock-symbol").value;
    if (!stockSymbol) {
        alert("Please enter a stock symbol.");
        return;
    }
    const trendResult = document.getElementById("trend-result");
    trendResult.innerHTML = `<p>Predicting trend for <strong>${stockSymbol}</strong>...</p>`;

    setTimeout(() => {
        const randomTrend = Math.random() > 0.5 ? "uptrend" : "downtrend";
        trendResult.innerHTML = `<p>The predicted trend for <strong>${stockSymbol}</strong> is <strong>${randomTrend}</strong>.</p>`;
    }, 2000);
});

function rrrc() {
    window.location.href = 'index2.html';
}

function strat() {
    window.location.href = 'index3.html';
}
function sa() {
    window.location.href = 'index4.html';
}