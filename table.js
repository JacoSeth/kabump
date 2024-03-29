const simpleArray = []
const arrayFromSongData = []
const mysongArray = []
const charString = "1abcdefghijklmnopqrstuvwxyz"

// I'm proud of my work here, but is there a way to condense? 

function buildNav() {
    const col = document.querySelector(".col-6")
    const charContainer = document.createElement("div")
    charContainer.classList = ["nav-container"]
    const charString = "1abcdefghijklmnopqrstuvwxyz"
    for (i = 0; i < charString.length; i++) {
        char = charString[i]
        charElement = document.createElement("a")
        charElement.className = "navchar"
        charElement.id = `nav-${char}`
        charNode = document.createTextNode(char)
        charElement.appendChild(charNode)
        charContainer.appendChild(charElement)
        col.appendChild(charContainer)
    }
    document.body.appendChild(col)
}
buildNav();

function displaySongData() {
    fetch("umphreysJSONCached.json")
        .then(results => results.json())
        .then(data => {
            function buildTable() {
                // Select column for table, and row for column
                const row = document.querySelector(".row")
                const column = document.querySelector(".col-6")
                column.classList.add("order-first")

                // Wrapper Div to set scroll
                const wrapper = document.createElement("div")
                wrapper.className = "table-wrap"

                // Create two tables: one for header and one for body

                // Create Header Table
                const songHeader = document.createElement('table')
                songHeader.className = "table-head-element"
                const songTableHead = document.createElement("thead")
                songTableHead.className = "table-head"

                // Create Body Table 
                const songTable = document.createElement('table')
                songTable.className = "table table-hover"
                    // const songTableHead = document.createElement("thead")
                    // songTableHead.className = "table-head"
                const songTableBody = document.createElement("tbody")
                songTableBody.className = "table-body"

                // Create Head Elements
                const th = document.createElement("tr")
                th.className = "table-head-row"
                const thTitle = document.createElement("th")
                thTitle.className = "th-title"
                const thDebut = document.createElement("th")
                thDebut.className = "th-debut"
                const thCount = document.createElement("th")
                thCount.className = "th-count"
                const thShowGap = document.createElement("th")
                thShowGap.className = "th-showgap"

                // Create Col Names
                const songTitle = "Title"
                const songDebut = "Debut"
                const songCount = "Played"
                const showGap = "Gap"

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
                songHeader.appendChild(songTableHead)
                column.appendChild(songHeader)

                // Build Table Body
                for (i = 0; i < data.length; i++) {

                    // Define Values
                    const tdTitle = data[i]["Song Name"]

                    // console.log(tdTitleStrip)
                    const tdDebut = data[i]["Debut Date"]
                    const tdCount = data[i]["Times Played Live"]
                    const tdShowGap = data[i]["Avg Show Gap"]
                    const tdLinkHrefVal = `https://allthings.umphreys.com${data[i]["Links"]}`
                    const titleStrip = data[i]["Song Name Sort"]

                    // Create Elements, set class
                    const tr = document.createElement("tr")
                    tr.className = "table-body-row"
                    const trTitle = document.createElement("td")
                    trTitle.setAttribute('data-id', `${titleStrip}`)
                    const trDebut = document.createElement("td")
                    trDebut.className = "td-debut"
                    const trCount = document.createElement("td")
                    trCount.className = "td-count"
                    const trShowGap = document.createElement("td")
                    trShowGap.className = "td-showgap"
                    const trLinkATag = document.createElement("a")

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
                    trLinkATag.setAttribute("target", "_blank")


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

                wrapper.appendChild(songTable)

                column.appendChild(wrapper)

                row.appendChild(column)

            }
            buildTable();
        })
        .catch(error => console.log(error))
}
displaySongData();


function getSetAnchorTags() {

    fetch("umphreysJSONCached.json")
        .then(results => results.json())
        .then(data => {

            // Get the first entry of each letter for anchor tag
            letterString = "1abcdefghijklmnopqrstuvwxyz"

            // populate the array
            data.forEach(d => {
                arrayFromSongData.push(d["Song Name Sort"])
            })

            // define function to call on each character in letterString
            function returnFirstListing(x) {
                holder = {}
                arrayFromSongData.forEach(song => {
                    // console.log(song)
                    if (song.startsWith(x) && holder.hasOwnProperty(x) == false) {
                        holder[`${x}`] = song
                        mysongArray.push(song)
                    } else {
                        // console.log(`the song that starts with ${x} is ${holder[`${x}`]}`)
                    }
                })

                // Add an ID so we can route links to each
                for (i = 0; i < mysongArray.length; i++) {
                    const listing = document.querySelector(`[data-id="${mysongArray[i]}"]`)
                    const songTitle = mysongArray[i]
                    listing.classList.add(`anchor-${mysongArray[i][0]}`)
                    listing.id = `anchor-${mysongArray[i][0]}`
                }
            }

            for (l = 0; l < letterString.length; l++) {
                char = letterString[l]
                returnFirstListing(char);
            }
            // Placing anchors in nav elements
            function placeAnchors() {
                for (i = 0; i < charString.length; i++) {
                    char = charString[i]
                        // find the element in the nav
                    const itemToTag = document.getElementById(`nav-${char}`)
                    const scrollATagVal = `#anchor-${char}`
                    itemToTag.setAttribute("href", scrollATagVal)
                }
            }
            placeAnchors();

        })
        .catch(error => console.log(error))
}
getSetAnchorTags();