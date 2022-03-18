import express from "express";
import cors from "cors";
import PostService from "./PostService";

const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());


let service = new MongoService();
service.connect();

app.get('/', (req, res) => {
    res.send("CODEWEEKEND server");
});

app.get('/posts', (req, res) => {
    service.getPosts().then(result => {
        res.send({'posts': result});
    })
})

app.post('/posts', (req, res) => {
    console.log(req.body.post);
    service.addPost(req.body.post).then(result => {
        res.send("OK");
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
