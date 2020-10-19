# Team Alpak-a (Alvin Wu, Pak Ming Lau, Ian Chen-Adamczyk)
# SoftDev
# K13 -- Template for Success
# 2020-10-15

from flask import Flask, render_template
import csv
from random import choices
app = Flask(__name__) 

@app.route("/") 
def hello_world():
    return "This is not the page you are looking for" #this is not the page we're looking for

@app.route("/occupyflaskst")
def test_tmplt(): #Pak's function from previous work
    with open("data\occupations.csv", "r", newline='') as csv_file:
        reader = csv.reader(csv_file, delimiter=',')
        header = next(csv_file) #skips first line
        links = {}
        occupations = {}
        for row in reader:
            occupations[row[0]] = float(row[2])
            links[row[0]] = row[1]
        total = occupations['Total']
    del occupations['Total'] #remove double "total" entry
    key = list(occupations.keys())
    values = list(occupations.values())
    occupationR = choices(key, weights=values, k=1)[0]
    return render_template('occupyflaskst_tmp.html',occupationDict = occupations,occupationRandom = occupationR,totals = total, linkdict = links) #fill in variables in template
    
if __name__ == "__main__":
    app.debug = True
    app.run()
