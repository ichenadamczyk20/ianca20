# Clyde 'Thluffy' Sinclair
# SoftDev -- Rona Ed.
# Oct 2020 

#Team Kent Cockroaches (Ian Chen-adamczyk, William Yin, Arib Chowdhury)
#SoftDev
#K10 -- Putting Little Pieces Together
#2020-10-08

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    return "No hablo queso!"

app.run()

#We predict it will start up the website with the words "No hablo queso!" in plain text on it.
#The behaviour was as predicted
