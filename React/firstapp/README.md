# React App Creation:

- go to the folder where you want to create the app inside
- open it with terminal
- `npx create-react-app FolderName`
- ` cd FolderName`
- ` npm Start`
- You get to your browser by default port:3000
- To change the port you should go to :
- package,json ->script-> "Start"
- `"start": "PORT=5050 react-scripts start"`
- write the same command in terminal seeing the port
- `npm start`
- you get new port:5050

# React App folder Structure :

- Public : includes the static files
- Src: includes React files
- package.json/ package-lock.json
- node_modules: do not kept it after development (delete it)
- after deleting node_modules, you can still re install it using this command
- `npm install` (should be the root folder where is package.json)
