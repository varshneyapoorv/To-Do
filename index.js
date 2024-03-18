const express = require('express');

// init app
const app = express();
const PORT = 8000;
// view engine
app.set("view engine", "ejs");

// lsiten server
app.listen(PORT, ()=>{
    console.log(`SErver is running on port ${PORT}`);
})