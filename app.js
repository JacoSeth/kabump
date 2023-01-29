const options = {
    method: "GET"
}

function callAllThings() {
    fetch("https://allthings.umphreys.com/api/v1/latest.json?order_by=position", options)
        .then(res = res.json)
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error))
}

callAllThings();