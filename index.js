import express from 'express'

// Create an express app
const app = express()
const router = express.Router()
app.use(router)
const port = +process.env.PORT || 4000

// router
//.httpmethod you want to use 
// ('^/$|/express') for home to be displayed on both home and custom name for home 
router.get('/', display, (req, res)=>{
    // res.status(200).json({
    //     msg: "You're home"
    // })
    res.json({
            status: res.statusCode,
            msg: "You're home"    
    })
})

//middleware
function display(req,res,next){
    console.log('Hello there');
    next()
   //next() commented out will let the page reload, next hence then display results
}

router.get('/about', (req, res)=>{
    res.json({
            status: res.statusCode,
            msg: "About page"    
    })
})


// app.all('*', (req, res)=>{
//     res.json({
//             status: 404,
//             msg: "404 page"    
//     })
// })

app.listen(port)