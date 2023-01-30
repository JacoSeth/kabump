const options = {
    method: "GET"
}

function callAllThings() {
    fetch("https://allthings.umphreys.com/api/v1/latest.json?order_by=position", options)
        .then(response = response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.log(error))
}

callAllThings();