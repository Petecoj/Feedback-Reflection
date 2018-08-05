const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require('../server/modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/api/feedback', (req, res) => {
    pool.query('SELECT * FROM "feedback"')
        .then((results) => {
            res.send(results)
        }).catch((err) => {
            res.sendStatus(500)
        })
});


app.post('/api/feedback', (req, res) => {
    let feedback = req.body
    req.body.feeling
    pool.query(`INSERT INTO "feedback" ("feeling", "understanding","support", "comments") VALUES ($1,$2,$3,$4);`,
                [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});
app.delete('/api/feedback/:id', (req, res) => {
    console.log(req.params.id);
    
    let feedbackId = req.params.id;
    pool.query('DELETE FROM "feedback" WHERE "id" = $1;', [feedbackId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
});

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});