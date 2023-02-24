import requests
from bs4 import BeautifulSoup
import pandas as pd
import json


songlinks = []

def get_song_links():
    url = "https://allthings.umphreys.com/song/"
    page = requests.get(url)
    links = []
    r = requests.get(url)
    # Parse all tables to a list using pandas
    df_list = pd.read_html(r.text) 
    df = df_list[0]
    soup = BeautifulSoup(page.content, "html.parser")
    table = soup.find("table", { "id" : "song-table" })
    for tr in table.findAll("tr"):
        trs = tr.findAll("td")
        for each in trs:
            try:
                link = each.find('a')['href']
                links.append(link)
            except:
                pass
    # List comprehension- filter to only links containing '/song/' route
    links = [songlinks.append(i) for i in links if '/song/' in i] 
#     songlinks.append(links)
    return songlinks



# will need to determine what source is best for scraping lyrics, may not be allThingUM