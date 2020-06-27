const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
const port = process.env.PORT || 3000;

app.get('*', (req, res, next) => {
    res.sendFile(path.join(publicPath, 'index.js'));
})

app.listen(port, () => {
    console.log('Server is running!');
})