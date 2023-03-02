# kabump

In this project, I'm going to collect info on songs from several different sources and display them in an interactive webpage.


Architecture Prospectus

1. It would be cool to have a self-serving app that frequently scrapes AllThingsUM for new song data, then updates a private database with that info. 
    COLLECTIONS
    Topline Analytics
        Collect analytics about songs, updated info with new songs, show counts, etc.
    Songs
        Individual documents for each song that combine the following: 
            - Show Count
            - Last Played
            - Gap Since Last Played
            - Lyrics
            - Authors & Metadata
2. Host app online
3. Update semi-frequently
4. Provide API via graphql?

I really need to do better at actually coding. I think I'm just in a low spot because the scraping is a constant barrier to my plans. 

Resolving to crack it open again tomorrow
    