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

app.run()


#We predict it will start up the website with the words "No hablo queso!" and that'll print the two lines being printed (the second one printing "__main__") in the terminal after the app is terminated there.
#The behaviour was as predicted.
