import {MongoClient} from "mongodb";

class PostService {

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

    getPosts() {
        return new Promise((resolve, reject) => {
            this.client.collection("posts").find({}).toArray(function(err, result) {
                if (err) {
                    reject(err);
                }
                console.log(result);
                resolve(result);
              });
        });
    }

    addPost(post) {
        return new Promise((resolve, reject) => {
            service.client.collection("posts").insertOne(post);
            resolve();
        });
    }
}

export default PostService;