# Team Kent Cockroaches (William Yin, Arib Chowdhury, Ian Chen-Adamczyk)
# SoftDev
# K10 -- Putting Little Pieces Together
# 2020-10-09

from flask import Flask
import occupations
app = Flask(__name__)

@app.route("/")
def hello_world():
    heading = "Team Kent Cockroaches (William Yin, Arib Chowdhury, Ian Chen-Adamczyk)<br>SoftDev<br>K10 -- Putting Little Pieces Together<br>2020-10-09"
    occupation_dict = occupations.build_dict('occupations.csv')
    occupation_select = occupations.select_occupation(occupation_dict)
    return f"{heading}<br><br>Your chosen occupation is {occupation_select}<br><br>{'<br>'.join(list(occupation_dict.keys())[:-1])}"

if __name__ == "__main__":
    app.debug = True
    app.run()
