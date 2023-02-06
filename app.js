function displaySongData() {
    fetch("umSongData.json")
        .then(results => results.json())
        .then(data => {
            function buildTable() {
                // Select column for table
                const column = document.querySelector(".col-6")

                // Create Table 
                const songTable = document.createElement('table')
                songTable.className = "table table-hover"
                const songTableHead = document.createElement("thead")
                songTableHead.className = "table-head"
                const songTableBody = document.createElement("tbody")
                songTableBody.className = "table-body"
                const songTableFoot = document.createElement("tfoot")
                songTableFoot.className = "table-foot"

                // Create Head Elements
                const th = document.createElement("tr")
                const thTitle = document.createElement("th")
                const thDebut = document.createElement("th")
                const thCount = document.createElement("th")
                const thShowGap = document.createElement("th")

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

                // Get the first entry of each letter for anchor tag
                letterString = "abcdefghijklmnopqrstuvwxyz"
                arrayFromSongData = []
                firstListingForEach = {}

                // populate the array
                data.forEach(d => {
                    arrayFromSongData.push(d["Song Name"])
                })

                // define function to call on each letter
                function returnFirstListing(x) {
                    arrayFromSongData.forEach(song => {
                        song = song.toLowerCase()
                            // console.log(song)
                        if (song.startsWith(x) && firstListingForEach.hasOwnProperty(x) == false) {
                            console.log(song)
                            firstListingForEach[`${x}`] = song
                        } else {
                            // console.log("fits else statement Randy")
                        }
                    })
                }

                // call function on each letter
                for (l = 0; l < letterString.length; l++) {
                    letter = letterString[l]
                    console.log(letter)
                    returnFirstListing(letter);
                }

                console.log(firstListingForEach)

                // Build Table Body
                for (i = 0; i < data.length; i++) {

                    // Create Elements, set class
                    const tr = document.createElement("tr")
                    const trTitle = document.createElement("td")
                    trTitle.className = "td-title"
                    const trDebut = document.createElement("td")
                    trDebut.className = "td-debut"
                    const trCount = document.createElement("td")
                    trCount.className = "td-count"
                    const trShowGap = document.createElement("td")
                    trShowGap.className = "td-showgap"
                    const trLinkATag = document.createElement("a")

                    // Define Values
                    const tdTitle = data[i]["Song Name"]
                    const tdDebut = data[i]["Debut Date"]
                    const tdCount = data[i]["Times Played Live"]
                    const tdShowGap = data[i]["Avg Show Gap"]
                    const tdLinkHrefVal = `https://allthings.umphreys.com${data[i]["Links"]}`

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

                // Create Footer th Elements Dynamically
                const tf = document.createElement('tr')
                for (l = 0; l < letterString.length; l++) {
                    letterString = letterString.toUpperCase()
                    letterNode = letterString[l]
                    var elementTd = document.createElement("td")
                    var elementNode = document.createTextNode(letterNode)
                    elementTd.appendChild(elementNode)
                    tf.appendChild(elementTd)
                }
                songTableFoot.appendChild(tf)
                songTable.appendChild(songTableFoot)
                column.appendChild(songTable)
            }


            // Create Footer th Elements Dynamically
            // const tf = document.createElement('tr')
            // for (l = 0; l < letterString.length; l++) {
            //     letterString = letterString.toUpperCase()
            //     letterNode = letterString[l]
            //     var elementTd = document.createElement("td")
            //     var elementNode = document.createTextNode(letterNode)
            //     elementTd.appendChild(elementNode)
            //     tf.appendChild(elementTd)
            // }
            // songTableFoot.appendChild(tf)
            // songTable.appendChild(songTableFoot)
            // column.appendChild(songTable)
            buildTable();
        })
        .catch(error => console.log(error))
}




displaySongData();


function fetchData() {
    fetch("mockData.json")
        .then(results => results.json())
        .then(data => {
            letterString = "abcdefghijklmnopqrstuvwxyz"
            arrayFromData = []
            firstOfEach = {}
            data.forEach(d => {
                arrayFromData.push(d.name)
            })
            arrayFromData = arrayFromData.sort()

            function returnFirstMatch(input) {
                arrayFromData.forEach(i => {
                    i = i.toLowerCase()
                    if (i.startsWith(input) && firstOfEach.hasOwnProperty(input) == false) {
                        firstOfEach[`${input}`] = i
                    } else {
                        // console.log("nothing")
                    }
                })
            }

            for (l = 0; l < letterString.length; l++) {
                letter = letterString[l]
                console.log(letter)
                    // returnFirstMatch(letter)
            }
            console.log(firstOfEach)

            returnFirstMatch();
        })
}
// fetchData();