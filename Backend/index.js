const express = require("express");
const { createTodoSchema } = require("./types");
const app = express();
const port =3000;

// middle-ware
app.use(express.json());

// calls
app.post("/add",(req,res)=>{
    const createPayLoad = req.body;
    const parsePayLoad = createTodoSchema.safeParse(createPayLoad);
    if(!parsePayLoad){
        res.status(411).json({
            msg:"you sent wrong inputs"
        })
        return
    }

})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })