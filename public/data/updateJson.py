import pandas as pd

data = pd.read_excel('laptops.xlsx')
data.to_json('laptops.json', orient='records')