import requests
from bs4 import BeautifulSoup
import json
import pandas as pd

def get_UM_Toplines (): 

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
    links = [i for i in links if '/song/' in i] 
    df['Links'] = links
    UMdata = df.to_json(orient='records')
    UM_JSON = json.loads(UMdata)
    UM_JSON_formatted = json.dumps(UM_JSON, indent=2)
    print(UM_JSON_formatted)
    return UM_JSON_formatted
    
get_UM_Toplines()
