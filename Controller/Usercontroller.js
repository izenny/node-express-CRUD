const User = require('../Modal/Userschema')

exports.AddUser = async (req, res )=>{
    const newUser = new User({
        firstname : req.body.firstname,
        secondname : req.body.secondname,
    })
    try{
        console.log('new user', newUser)
        const saveUser = await newUser.save()
        res.status(200).json(saveUser);

    }catch(err){
        console.log('err increating user',err);
        res.status(400).json({message : err.message})
    }
}

exports.GetDetails = async (req, res)=>{
    try{
        const id = req.params.id;
        const user = await User.findById(id)
        res.status(200).json(user)
    }catch(err){
        console.log('err to get user',err);
        res.status(400).json({message : err.message})
    }
    

}
exports.Update = async(req, res)=>{
    try{

        const id = req.params.id;
        const user = await User.findByIdAndUpdate(id,{
        $set:req.body,
        },{new:true})
        
        console.log('updated user', user);
        res.status(200).json(user)
    }catch(err){
        console.log('err to update user',err);
        res.status(400).json({message : err.message})
    }
    
}
exports.DeleteUser = async (req, res)=>{
    try{
        const id = req.params.id;
        const user = await User.findByIdAndDelete(id)
        console.log('user deleted',user);
        res.status(200).json(user)
    }catch(err){
        console.log('err to delete user',err);
        res.status(400).json({message : err.message})
    }
}