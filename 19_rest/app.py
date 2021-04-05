'''
Team COIS (Stella Oh + Ian Chen-Adamczyk)
SoftDev
K19 -- A RESTful Journey Skyward
2021-04-05
'''

from flask import Flask, render_template
import urllib.request
import json

app = Flask(__name__)
# read key_nasa.txt file 
file = open("key_nasa.txt", "r")
api_key = file.read()

@app.route("/")
def root():
    u = urllib.request.urlopen("https://api.nasa.gov/planetary/apod?api_key=" + api_key) #open the api URL
    response = u.read() #read the api
    data = json.loads(response)
    return render_template("main.html", pic = data['url']) #load the html on the website

if __name__ == "__main__": # true is this file is NOT imported
    app.debug = True #enable auto-reload upon code change
    app.run()