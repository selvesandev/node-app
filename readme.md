# Node JS App (Express, Live Chat with socket IO, API)
This is second part of the (node-express) references https://github.com/selvesandev/node-express  
Go through the (node-express) before this.

This is a very basic node js app that uses a json data for it's content. This is a simple web page that follows a MVC design pattern with Express framework and does not include node js advanced features.
All the data used by this app is in data.json file in the root (./) directory.  


## Workflow automation
Watch for changes and automatically reload the browser and re-running the server when the changes occurs.    
These package will be helpful for this.
* Nodemon (Node monitor to watch the file changes)
* Reload (to reload the browser)

### Nodemon
```terminal
sudo npm install -g nodemon
```

Navigate to your project folder from terminal and write `nodemon`

### Better 
Only watch for css,ejs,js and json file and only in the app folder
```terminal
"scripts": {
    "start": "nodemon -e css,ejs,js,json --watch app ./bin/www"
  },
```

--ignore to ignore certain files or folder.


### Reload
```terminal
sudo npm install -g reload
```

```terminal 
npm install --save reload
```


## Creating an API

HTTP VERBS POST,DELETE,UPDATE,GET


POST
```terminal
npm install --save body-parser
```
