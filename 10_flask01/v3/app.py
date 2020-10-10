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
    print("about to print __name__...")
    print(__name__)   #where will this go?
    return "No hablo queso!"

app.debug = True
app.run()

#We predict it will startup a website on local host with the words "No hablo queso!" and when the website is terminated in console, it'll print the two lines with print(__name__) printing "__main__"
#It behaved as predicted except instead of debug mode off in the startup messages like it said before it said on and gave a debugger PIN
