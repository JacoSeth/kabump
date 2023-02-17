htmlString =
    `Lift me up, sit me up, or I won't make it<br>
I set it down, I saw you turned around<br>
I can't explain, Can you explain the rest?<br/>
I filled to top, at least I thought<br/>
But now these pieces won't connect<br/>
<br/>
He didn't know he was the victim of a crime<br/>
Or even notice that particular time<br/>
Tried to explain it but it didn't quite line up<br/>
<br/>
I really doubt he even made a connection<br/>
He missed his sister when he saw a reflection<br/>
Got turned around and went the wrong direction<br/>
<br/>
He's barely there by now but manages to talk somehow<br/>
As every word is slowing down<br/>
<br/>
Come up for air only to breathe more pollution<br/>
You didn't factor in your own contributions<br/>
Twist it around until you find a solution<br/>
<br/>
Overreacted when they gave you what was less than<br/>
What you expected though an educated guess then<br/>
Tried to retracted when you stated your confession<br/>
<br/>
He's fading faster now so asking him the question how<br/>
As all he knows is upside down<br/>
<br/>
There's no need to overthink this through<br/>
I feel fine<br/>
Let me lie right here<br/>
<br/>
From the beginning it was all too revealing<br/>
Back in the middle did you know what you were stealing<br/>
And in the end you're only running from the feeling<br/>
<br/>
You run in place to make your own translation<br/>
Bury your face into your own imagination<br/>
And start to worry â€˜bout the wrong calculations<br/>
<br/>
He's barely hanging on with no idea that something's wrong<br/>
As every word just waits too long<br/>
<br/>
I'll concede to what I need from you<br/>
I feel fine<br/>
Let me lie down here<br/>
<br/>
One last promise before I fall<br/>
I might say things I don't recall, you can forget â€˜em all	</br></br>`


async function fetchLyrics() {
    row = document.querySelector(".row")
    column = document.querySelector(".col-4")
    column.classList.add("order-last")
    lyricsBody = document.createElement("div")
    lyricsBody.classList.add("body-lyrics")
    lyricsElement = document.createElement("p")
    lyricsNode = document.createTextNode(htmlString)
    lyricsElement.appendChild(lyricsNode)
    lyricsBody.appendChild(lyricsElement)
    column.appendChild(lyricsBody)
}

fetchLyrics();