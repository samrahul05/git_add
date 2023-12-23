const express=require('express')
const app=express()
const mongoose=require('mongoose')
const Validation=require('./schema')
const cors=require('cors')

// mongoose connect
mongoose.connect('mongodb+srv://sam_rahul:rajanbabu7373@cluster0.hqoru8l.mongodb.net/')


.then(()=>{
    console.log("Database is connected successsfully");
})
.catch(()=>{
    console.log("Database is Connected");
})


//midddelware

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

// Post a Data
app.post('/post',async(req,res)=>{
    const details= new Validation({
        ...req.body
    })
    await details.save()

    .then(()=>{
     res.json("Data Send Successfully")
    })
    .catch(()=>{

        res.json("something wrong")
      })
})
// get a data
app.get('/get',async(req,res)=>{
    const data= await Validation.find({})
      res.json(data)
    })
  //update a data
  app.put('/put/:id',async(req,res)=>{
      const data= await Validation.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
      res.json(data)
  })
// delete a data

  app.delete('/delete/:id',async(req,res)=>{
      const data =await Validation.findByIdAndDelete(req.params.id)
      res.json('Message Deleted Successfully')
  })
 // server listen
app.listen(3000,()=>{
  console.log("server:3000");
})