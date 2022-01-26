const express = require('express')
const mongoose = require('mongoose')
const post = require('./module/posts')
const postController = require('./controllers/posts')
mongoose.connect('mongodb://127.0.0.1:27017/bookStore', {
    useNewUrlParser: true, // <-- no longer necessary
    useUnifiedTopology: true // <-- no longer necessary
  })
    .then(()=>{
        const app = express()
        app.use(express.json());
        app.get('/api/posts', postController.findPosts);
        app.post('api/posts',postController.createPost)
    
        const port = 8000;
        app.listen(port, ()=>{
            console.log(`listening on port ${port}..............`);
        });

    }).catch((error)=>{
        console.log("database connection fail"+error);

    })