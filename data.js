var apikey = 'FE7SYPB6I2D42EIQ';
var ticker = null

document.addEventListener('DOMContentLoaded', bindbuttons);

function bindbuttons () {
    document.getElementById('stock_submit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        if (document.getElementById('stock_ticker').value) {
            ticker = document.getElementById('stock_ticker').value
            req.open('GET', `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${apikey}&datatype=json`)
            document.getElementById('user_log').textContent = ""
        } else {
            // if no stock given
            document.getElementById('user_log').textContent = "You need to give a stock ticker!"
        }
        req.addEventListener('load', function(){
            if(req.status >= 200 && req.status <= 400) {
                var response = JSON.parse(req.responseText)
                document.getElementById('ticker_output').textContent = `Last Day's Stock Data of: ${response["Meta Data"]["2. Symbol"]}`
                document.getElementById('date_output').textContent = `${response["Meta Data"]["3. Last Refreshed"]}`
                document.getElementById('open_output').textContent = `$${response["Time Series (Daily)"]["2021-02-26"]["1. open"]}`
                document.getElementById('high_output').textContent = `$${response["Time Series (Daily)"]["2021-02-26"]["2. high"]}`
                document.getElementById('low_output').textContent = `$${response["Time Series (Daily)"]["2021-02-26"]["3. low"]}`
                document.getElementById('close_output').textContent = `$${response["Time Series (Daily)"]["2021-02-26"]["4. close"]}`
                document.getElementById('volume_output').textContent = `${response["Time Series (Daily)"]["2021-02-26"]["5. volume"]}`
                document.getElementById('download_anchor').setAttribute('href', `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${apikey}&datatype=csv`)
            }
            else {
                console.log("Error in network request: " + req.statusText)
            }
        })
        req.send(null)
        event.preventDefault()
    })
}