import {Comments} from "../../../data/comment"
export default function handler(req , res) {
    if(req.method === "GET"){
        res.status(200).json(Comments)
    }else if(req.method === "POST") {
        const comment = req.body.comment;
        const newComment = {
            id : Date.now(),
            text: comment
        }
        Comments.push(newComment);
        res.status(201).json(newComment);
    }
  
}