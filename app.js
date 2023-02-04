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

            // Select column for table
            const column = document.querySelector(".col-6")

            // Create Table 
            const songTable = document.createElement('table')
            songTable.className = "table table-hover"
            const songTableBody = document.createElement("tbody")
            const songTableHead = document.createElement("thead")

            // Create Elements
            const th = document.createElement("tr")
            const thTitle = document.createElement("th")
            const thDebut = document.createElement("th")
            const thCount = document.createElement("th")
            const thShowGap = document.createElement("th")
                // const thLink = document.createElement("th")

            // Create Col Names
            const songTitle = "Title"
            const songDebut = "Debut"
            const songCount = "Times Played"
            const showGap = "Avg Show Gap"

            // Add strings to text nodes
            const thTitleVal = document.createTextNode(songTitle)
            const thDebutVal = document.createTextNode(songDebut)
            const thCountVal = document.createTextNode(songCount)
            const thShowGapVal = document.createTextNode(showGap)

            // Add header cols to table data
            thTitle.appendChild(thTitleVal)
            thDebut.appendChild(thDebutVal)
            thCount.appendChild(thCountVal)
            thShowGap.appendChild(thShowGapVal)

            // Add table data to table row
            th.appendChild(thTitle)
            th.appendChild(thDebut)
            th.appendChild(thCount)
            th.appendChild(thShowGap)

            // Add table row to to thead element
            songTableHead.appendChild(th)
            songTable.appendChild(songTableHead)

            var range = 20

            // Build Table
            for (i = 0; i < range; i++) {

                // Create Elements, set class
                const tr = document.createElement("tr")
                const trTitle = document.createElement("td")
                trTitle.className = "td-title"
                const trDebut = document.createElement("td")
                trDebut.className = "td-debut"
                const trCount = document.createElement("td")
                trCount.className = "td-count"
                const trShowGap = document.createElement("td")
                trTitle.className = "td-showgap"
                const trLinkATag = document.createElement("a")

                // Define Values
                const tdTitle = data[i]["Song Name"]
                const tdDebut = data[i]["Debut Date"]
                const tdCount = data[i]["Times Played Live"]
                const tdShowGap = data[i]["Avg Show Gap"]
                const tdLinkHrefVal = `https://allthings.umphreys.com${data[i]["Links"]}`
                console.log(tdLinkHrefVal)

                // Create Nodes for Values
                tdTitleVal = document.createTextNode(tdTitle)
                tdDebutVal = document.createTextNode(tdDebut)
                tdCountVal = document.createTextNode(tdCount)
                tdShowGapVal = document.createTextNode(tdShowGap)
                tdLinkVal = document.createTextNode(tdLinkHrefVal)

                // Add link to title, then title to td
                trLinkATag.appendChild(tdTitleVal)
                trTitle.appendChild(trLinkATag)

                // Add the rest of the elements
                trDebut.appendChild(tdDebutVal)
                trCount.appendChild(tdCountVal)
                trShowGap.appendChild(tdShowGapVal)

                // Hyperlink the title
                trLinkATag.setAttribute("href", tdLinkHrefVal)

                // Add td elements to tr
                tr.appendChild(trTitle)
                tr.appendChild(trDebut)
                tr.appendChild(trCount)
                tr.appendChild(trShowGap)

                // Add tr to table body
                songTableBody.appendChild(tr)
            }
            songTable.appendChild(songTableBody)
            column.appendChild(songTable)
        })
        .catch(error => console.log(error))
}

getSongMetadata();