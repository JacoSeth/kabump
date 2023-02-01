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

function getSongMetadata() {
    fetch("umSongData.json")
        .then(results => results.json())
        .then(data => {
            var range = 20
            for (i = 0; i < range; i++)
                console.log(`Song: ${data[i]["Song Name"]}-- Played ${data[i]["Times Played Live"]} times`)
            column = document.querySelector("col-4")
            list = document.createElement("ul")
            listItem = document.createElement("li")
            dataNode = data[i]["Song Name"]
            listData = document.createTextNode(dataNode)
            listItem.appendChild(listData)
            list.appendChild(listItem)
            column.appendChild(list)
            document.body.appendChild(column)

        })
        .catch(error => console.log(error))
}

getSongMetadata();