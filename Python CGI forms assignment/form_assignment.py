#!C:\Users\Ben\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.10_qbz5n2kfra8p0\python.exe
# the SHEbang/SHArp bang line

#import the module for CGI handling
import cgi
import html

#create an instance for FeildStorage class
form = cgi.FieldStorage()

print("content-type: text/html\n\n")
#the HTTP header which describes what content is being sent to the browser

name = form.getvalue('name')

email = form.getvalue('email')

passwd = form.getvalue('password')

emotion_list = form.getlist('emotion')

satisfaction = form.getvalue('satisfaction')

comments = form.getvalue('comments','No Comments')

locationvisited = form.getvalue('locvisited')

# handling file upload(os and cgi modules)
import os
try:
    import msvcrt
    # set mode for stdin and stdout
    msvcrt.setmode(0, os.O_BINARY) # setting stdin to 0
    msvcrt.setmode(1, os.O_BINARY) # setting stdout to 1
except ImportError:
    pass
# get the file from the nested field storage instance
fileitem = form['photo']
# checking if a valid file was uploaded
if fileitem.filename: 
    # get rid of path and keep only the filename
    imagefilename = os.path.basename(fileitem.filename)
    open('files/'+imagefilename,'wb').write(fileitem.file.read())
    message = "The file was uploaded to files/"+imagefilename
else:
    message = "No file was uploaded"

print(f"""
<html>
    <head>
        <title>Test title</title>
    </head>
    <body>
        <h2>Hi {name}</h2><br>
        Your email: {email}
""")

print("<p>Your emotions:</p>")
for emotion in emotion_list:
    print(html.escape(emotion))

print(f"""
        <br>Your satisfaction: {satisfaction}
        <br>Comments: {comments}
        <br>Location Visited: {locationvisited}
    </body>
</html>        
""")

