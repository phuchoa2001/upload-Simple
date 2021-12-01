import Link from "next/link";
function Posts(props) {
  const { post } = props;
  console.log(post);
  return (
    <>
      <h2>List Post</h2>
      {post.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a>{post.id + ":" + post.title}</a>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}
export default Posts;

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return {
    props: {
      post: data.slice(0, 3),
    },
  };
}
