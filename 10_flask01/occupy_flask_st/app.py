# Team Kent Cockroaches (William Yin, Arib Chowdhury, Ian Chen-Adamczyk)
# SoftDev
# K10 -- Putting Little Pieces Together
# 2020-10-09

from flask import Flask
import occupations
app = Flask(__name__)

@app.route("/")
def hello_world():
    roster = """Team Kent Cockroaches (William Yin, Arib Chowdhury, Ian Chen-Adamczyk)
<br>SoftDev
<br>K10 -- Putting Little Pieces Together
<br>2020-10-09"""
    occupationDict = occupations.build_dict('occupations.csv')
    occupationSelect = occupations.select_occupation(occupationDict)
    return f"{roster}<br><br> \
            {occupationSelect}<br><br> \
            {str(occupationDict).replace(',', ',<br>')}"

if __name__ == "__main__":
    app.debug = True
    app.run()
