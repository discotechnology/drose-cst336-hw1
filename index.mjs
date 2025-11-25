import express from 'express';
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
   res.render('index');
});

app.get('/history', (req, res) => {
   res.render('history');
});

app.get('/media', (req, res) => {
   res.render('media');
});

app.get('/protocols', (req, res) => {
   res.render('protocols');
});

app.listen(3000, () => {
   console.log('server started');
});