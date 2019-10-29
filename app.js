const express = require("express");

let app = express();

app.get("/", (req, res)=>{
    res.send(`Hello World !!
                ${new Date()}
                v0.0.0`);
})

app.listen(process.env["PORT"] || 8080, () => {
    console.log('Listening on port');
});