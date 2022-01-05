import express from 'express';
import cors from 'cors';


const app = express();


app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.post('/books', (req, res) =>  {
    res.send("successful post");
    console.log("post saved")
});

app.get('/books', (req, res) => {
    res.send("successful get");
    console.log("get displayed")
});

app.listen(5000, () => {
    console.log("server is running")
})