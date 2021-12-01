import  { useRouter } from 'next/router';
function Propsid(props) {
  const { post } = props;
  const router  = useRouter();
  if(router.isFallback){
      return  <h1>Loading...</h1>
  }
  return (
    <>
      <h2>
        {post.id}
        {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}
export default Propsid;
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postid: "1" },
      },
      {
        params: { postid: "2" },
      },
      {
        params: { postid: "3" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postid}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
}
