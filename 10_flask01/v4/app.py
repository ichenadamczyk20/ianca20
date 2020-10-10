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
    print("the __name__ of this module is... ")
    print(__name__)
    return "No hablo queso!"

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()

#We predict that if the script is run directly, it will startup a website on local host in debug mode with the words "No hablo queso!" and when the website is terminated in console, it'll print the two lines with print(__name__) printing "__main__". Otherwise, we predict it will not do anything when imported into another file.
#It behaved as predicted. 
