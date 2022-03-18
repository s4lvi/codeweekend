import express from "express";
import {MongoClient} from "mongodb";
import cors from "cors";

const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());

class MongoService {
    client;

    connect() {
        MongoClient.connect("mongodb://localhost:27017", (err, db) => {
            if (err) {
                console.log(err);
                return false;
            }
            this.client = db.db("codeweekend");
            return true;
        });
    }
}

let service = new MongoService();
service.connect();

app.get('/', (req, res) => {
    res.send("CODEWEEKEND server");
});

app.get('/posts', (req, res) => {
    service.client.collection("posts").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        res.send({'posts': result});
      });
})

app.post('/posts', (req, res) => {
    console.log(req.body.post);
    service.client.collection("posts").insertOne(req.body.post)
    res.send("OK");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
