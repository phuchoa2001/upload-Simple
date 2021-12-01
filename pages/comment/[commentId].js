import {Comments} from "../../data/comment"
function CommentID( { comment}){
    return(
        <div>
            {comment.id} {comment.text}
        </div>
    )
}
export default CommentID; 

export async function getStaticPaths() {
    return {
        paths: [
            {params: {commentId : "1"} },
            {params: {commentId : "2"} },
            {params: {commentId : "3"} },
        ], 
        fallback: false,
    }
}
export async function getStaticProps(context) {
    const {commentId} = context.params;
    const comment = Comments.find((comment) =>comment.id === parseInt(commentId));
    return {
        props : {
            comment,
        }
    }
}