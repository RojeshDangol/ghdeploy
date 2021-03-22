const express = require("express");
const app = express();


const port = process.env.PORT || 3000;
const web = process.env.WEB || "./";

app.use(express.static(web));

app.get('*', (req, res)=>{
    res.sendFile("index.html", {root: web});
})

app.listen(port, ()=> {
    console.log(`listening to http:localhost:${port}`)
});