import { useState } from "react";

function CommentPage() {
  const [comments , setComments] = useState([])
  const [comment , setComment] = useState("")
  async function fetchComment() {
      const res = await fetch("/api/comments");
      const data = await res.json();
      setComments(data)
  }
  const handleSubMitComment = async() => {
      const res = await fetch('/api/comments' , {
        method: 'POST', 
        body: JSON.stringify({comment}) ,
        headers : {
          'Content-Type' : 'application/json',
        },
      })
      const data = await res.json();
      console.log(data);
  }
  const HandledeteleComment = async commentId => {
    console.log(commentId);
    const res = await fetch(`/api/comments/${commentId}` , {
      method: "DELETE"
    })
    const data = await res.json();
    console.log(data);
    fetchComment();
  }
  return (
    <>
    <input 
    type="text" 
    value={comment} 
    onChange={(e) => setComment(e.target.value)} 
    />
    <button onClick={handleSubMitComment}>Submit Comment</button>
      <button onClick={fetchComment}>Load Comment</button>
      {comments.map(comment => 
        <div key={comment.id}>
          {comment.id} : {comment.text}
          <button onClick={() => HandledeteleComment(comment.id)}>xóa</button>
        </div>
      )}
    </>
  );
}
export default CommentPage;
