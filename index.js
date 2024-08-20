const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 3003;
const dirPath = path.join(__dirname, '/views');
const router = require('./router');

    

console.log(process.env.PORT,"hello ")
app.set('view engine', 'ejs');
app.set('views',dirPath );
app.use(express.static(dirPath));

app.use('/',router)

app.listen(PORT, (err) => {
    if(!err){


        console.log(`Server is running on http://localhost:${PORT}`);
    }
});
