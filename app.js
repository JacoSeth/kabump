firstListingForEach = []
simpleArray = []
arrayFromSongData = []
narrayFromSongData = []
    // songArray = []

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

                // // Get the first entry of each letter for anchor tag
                letterString = "abcdefghijklmnopqrstuvwxyz"

                // Build Table Body
                for (i = 0; i < data.length; i++) {

                    // Define Values
                    const tdTitle = data[i]["Song Name"]
                    tdTitleStrip = tdTitle.replace(/[^a-zA-Z0-9 ]/g, "")
                    tdTitleStrip = tdTitleStrip.replace(/\s+/g, '-')
                        // console.log(tdTitleStrip)
                    const tdDebut = data[i]["Debut Date"]
                    const tdCount = data[i]["Times Played Live"]
                    const tdShowGap = data[i]["Avg Show Gap"]
                    const tdLinkHrefVal = `https://allthings.umphreys.com${data[i]["Links"]}`

                    // Create Elements, set class
                    const tr = document.createElement("tr")
                    const trTitle = document.createElement("td")
                    trTitle.className = `${tdTitleStrip.toLowerCase()}` //Adding a classname of the Song Title to match the anchor tag
                    const trDebut = document.createElement("td")
                    trDebut.className = "td-debut"
                    const trCount = document.createElement("td")
                    trCount.className = "td-count"
                    const trShowGap = document.createElement("td")
                    trShowGap.className = "td-showgap"
                    const trLinkATag = document.createElement("a")


                    // // Define Values
                    // const tdTitle = data[i]["Song Name"]
                    // const tdDebut = data[i]["Debut Date"]
                    // const tdCount = data[i]["Times Played Live"]
                    // const tdShowGap = data[i]["Avg Show Gap"]
                    // const tdLinkHrefVal = `https://allthings.umphreys.com${data[i]["Links"]}`

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

                    // addAnchors();

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

                return firstListingForEach
            }
            buildTable();
            // console.log(firstListingForEach)
            return firstListingForEach
        })
        .catch(error => console.log(error))
}

displaySongData();

async function getSetAnchorTags() {
    fetch("umSongData.json")
        .then(results => results.json())
        .then(data => {
            songArray = []
                // Get the first entry of each letter for anchor tag
            letterString = "abcdefghijklmnopqrstuvwxyz"

            // populate the array
            data.forEach(d => {
                narrayFromSongData.push(d["Song Name"])
            })

            narrayFromSongData.sort()
            console.log(narrayFromSongData)

            // Need to re-sort list after the special characters are removed

            // define function to call on each letter
            function returnFirstListing(x) {
                holder = {}
                narrayFromSongData.forEach(song => {
                    song = song.replace(/[^a-zA-Z0-9 ]/g, "")
                    song = song.replace(/\s+/g, '-')
                    song = song.toLowerCase()
                    console.log(song)
                    if (song.startsWith(x) && holder.hasOwnProperty(x) == false) {
                        holder[`${x}`] = song
                        songArray.push(song.toLowerCase())
                    } else {
                        // do nothing
                    }
                })

                // Add an ID so we can route links to each
                for (i = 0; i < songArray.length; i++) {
                    song = songArray[i]
                        // console.log(song)
                    const listing = document.querySelector(`.${songArray[i]}`)
                    listing.id = `anchor-${songArray[i]}`
                    hrefInternalRoute = listing.id
                    scrollElement = document.createElement("p")
                    scrollAnchorTag = document.createElement("a")
                    console.log(listing.id)
                    scrollAnchorTag.setAttribute("href", `#${listing.id}`)
                }

            }

            // call function on each letter
            for (l = 0; l < letterString.length; l++) {
                letter = letterString[l]

                returnFirstListing(letter);
            }

        })
        .catch(error => console.log(error))
}
getSetAnchorTags();