import express from 'express';
import yesNoWords from 'yes-no-words';
import fetch from 'node-fetch';
const getQuestion = (await import('random-questions')).default;
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

app.get('/random', async (req, res) => {
   const question = getQuestion.getQuestion();
   console.log(question);
   const answer = yesNoWords.allRandom();

   let response = await fetch("https://random-d.uk/api/v2/random");
   let data = await response.json();
   let duckPic = data.url;

   res.render('random', { "question": question, "answer": answer, "duckPic": duckPic });
});

app.listen(3000, () => {
   console.log('server started');
});