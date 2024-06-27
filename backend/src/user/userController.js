const userModel = require('./userModel');
var userService = require ('./userService');



var getDataControllerfn = async (req, res) =>
{
var emplyee =await userService.getDataFromDBService();
res.send({"status": true, "date" :emplyee});

}
var createUserControllerFn =async (req,res) =>{
    var status = await userService.createUserDBService (req.body);
    if (status){
        res.send({"status": true, "message": "User created successfully"});

    }else{
        res.send({"status": false, "message": "error creating  user"});
    }

}
var updateUserController =async(req,res) =>{
    console.log(req.params.id);
    console.log(req.body);

    var result = await userService.updateUserDBService(req.params.id,req.body);
    if (result){
        res.send({"status": true, "message":"user updated successefully"});

    }else {
        res.send({"status": false, "message": "user updated faild"});
    }
}
var deleteUserController = async (req, res) =>
{
console.log(req.params.id);
var result = await userService.removeUserDBService(req.params.id);
if(result){

    res.send({"status": true, "message": "user deleted successfully"});
}else
{
    res.send({"status": false, "message": "user deleted failed"});
}



}



module.exports = { getDataControllerfn, createUserControllerFn,updateUserController,deleteUserController};