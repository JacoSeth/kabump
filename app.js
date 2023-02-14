simpleArray = []
arrayFromSongData = []
arrayFromSongData = []
mysongArray = []

function buildNav() {
    const col = document.querySelector(".col-6")
    const charContainer = document.createElement("div")
    charContainer.classList = ["nav-container"]
    const charString = "1abcdefghijklmnopqrstuvwxyz"
    for (i = 0; i < charString.length; i++) {
        // container = document.querySelector(".nav-container")
        char = charString[i]
        charElement = document.createElement("p")
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
                // Select column for table
                const column = document.querySelector(".col-6")

                // Create Table 
                const songTable = document.createElement('table')
                songTable.className = "table table-hover"
                const songTableHead = document.createElement("thead")
                songTableHead.className = "table-head"
                const songTableBody = document.createElement("tbody")
                songTableBody.className = "table-body"
                    // const songTableFoot = document.createElement("tfoot")
                    // songTableFoot.className = "table-foot"

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
                        // console.log(titleStrip)

                    // Create Elements, set class
                    const tr = document.createElement("tr")
                    const trTitle = document.createElement("td")
                    trTitle.className = titleStrip //Adding a classname of the Song Title to match the anchor tag
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

                column.appendChild(songTable)
            }
            buildTable();
        })
        .catch(error => console.log(error))
}

displaySongData();


async function getSetAnchorTags() {

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
                    const listing = document.querySelector(`[class ="${mysongArray[i]}" ]`)
                    listing.id = `anchor-${mysongArray[i]}`
                        // console.log(listing)
                    hrefInternalRoute = listing.id
                    scrollElement = document.createElement("p")
                        // ###################
                        // find the navchar item matching i, then create a link /add href to that item
                    itemToTag = document.getElementsByClassName(`nav-${i}`)
                    scrollTag = document.createElement("a")
                    scrollTag.setAttribute("href", `#${listing.id}`)
                    itemToTag.appendChild(scrollTag)
                }

            }

            // call function on each letter
            // console.log(letterString.length)
            for (l = 0; l < letterString.length; l++) {
                char = letterString[l]
                returnFirstListing(char);
            }
        })
        .catch(error => console.log(error))
}
getSetAnchorTags();