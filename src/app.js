const express=require('express')
const app=express()
const multer=require('multer')
const uploadFile=require('./services/storage.service')
const cors=require('cors')
const postModel=require('./models/post.model')
app.use(cors());


app.use(express.json());
const upload=multer({storage:multer.memoryStorage()})

app.post('/create-post',upload.single("image") , async (req,res)=>{
  console.log(req.body);
  console.log(req.file);
  const result=await uploadFile(req.file.buffer);
  const post=await postModel.create({
    image:result.url,
    caption:req.body.caption
  })
  return res.status(201).json({
    messgae:"Post Created Successfully",
    post
  })

})

app.get('/post',async (req,res)=>{
const posts=await postModel.find();
return res.status(200).json({
  message:"Post fetched Sucessfully",
  posts
})
  
})

app.delete('/post/:id', async (req, res) => {
  try {
    const deletedPost = await postModel.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    return res.status(200).json({
      message: "Post deleted successfully"
    });

  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
});







module.exports=app;