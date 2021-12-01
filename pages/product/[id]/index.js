import  { useRouter } from 'next/router';
function ProductID(props) {
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
        {post.price}
      </h2>
      <p>{post.body}</p>
    </>
  );
}
export default ProductID;
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { id: "1" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `http://localhost:4000/products/${params.id}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
    revalidate: 5,
  };
}
