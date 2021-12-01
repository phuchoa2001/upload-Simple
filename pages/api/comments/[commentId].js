import { Comments } from "../../../data/comment";
export default function handler(req, res) {
  const { commentId } = req.query;
  if (req.method === "GET") {
    const comment = Comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deleteComment = Comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    const index = Comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );
    Comments.splice(index, 1);
    res.status(200).json(deleteComment);
  }
}
