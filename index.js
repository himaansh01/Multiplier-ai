const express = require("express");
const app = express();
const zod = require("zod");
const { User } = require("./db");
const jwt = require("jsonwebtoken")
const cors= require("cors");
const { JWT_SECRET } = require("./config");

app.use(cors());
app.use(express.json());

const signupBody= zod.object({
    email : zod.string().email(),
    username : zod.string(),
    password: zod.string()
})

app.post("/signup", async function(req,res){
    const body = req.body
    const {success} = signupBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message : "inputs are wrong"
        })
    }
    const user= await User.create({
        email:req.body.email,
        username:req.body.username,
        password: req.body.password
    })
    const userId=user.id

    const token =jwt.sign({
        userId
    },JWT_SECRET)

    res.json({
        msg:"user created",
        token:token
    })
})


const signinBody =zod.object({
    email:zod.string().email(),
    password:zod.string()
})

app.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            msg: "Inputs are wrong"
        });
    }

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if (user) {
        const token =jwt.sign({
            userId:user._id
        }, JWT_SECRET)
        return res.json({
            token:token
        });
    } else {
        return res.status(401).json({
            msg: "Credentials are incorrect"
        });
    }
});







app.listen(3000, ()=>{
    console.log("server running at port 3000")
})

