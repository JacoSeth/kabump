import requests
from bs4 import BeautifulSoup
import json
import pandas as pd
import re

def get_UM (): 

    url = "https://webcache.googleusercontent.com/search?q=cache:https://allthings.umphreys.com/song/"
#     headers = {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36'}
    page = requests.get(url)
    links = []
    r = requests.get(url, headers = headers)
    print(r)
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
    newSeries = []
#     Follow Regex to pre-process data, remove special chars
    for i in df["Song Name"]: 
        i = re.sub('[^a-zA-Z0-9]+', '', i)
        i = i.lower()
        newSeries.append(i)
# print(newSeries)
    df["Song Name Sort"] = newSeries
    df = df.sort_values("Song Name Sort")
#     df.head()
    UMdata = df.to_json(orient='records')
    UM_JSON = json.loads(UMdata)
    UM_JSON_formatted = json.dumps(UM_JSON, indent=2)
    return UM_JSON_formatted
    
get_UM_Toplines()
