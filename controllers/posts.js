const posts = require('../module/posts')
exports.findPosts =  async (req,res)=>{
    const post =  await posts.find()
    res.send({"data":post})
};
exports.createPost = async (req, res)=>{
    const post = new post(req.body);
    await post.save()
    res.send({"data":post})     

}