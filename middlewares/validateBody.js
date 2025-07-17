export function validateBody(req, res, next) {
    if(req.body["name"] && req.body["taskDescription"] && req.body["correctAnswer"]){
        req.body = {"name" : req.body["name"] , "taskDescription" : req.body["taskDescription"] , "correctAnswer" : req.body["correctAnswer"]}
        next();
    }else{
        res.status(400).json({msg: "Body is not good, missing fields."});
    }
}