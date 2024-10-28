const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/authorize', (req, res) => {
    const { response_type, client_id, redirect_uri, scope, state } = req.query;

    console.log('Authorization Request:', {
        response_type,
        client_id,
        redirect_uri,
        scope,
        state
    });
    res.render('index');
});
app.post('/ola', (req, res) => {
    res.json({ok:1});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
