import Head from "next/head";
import Link from "next/link";

export default function Product({ products }) {
  console.log(products);
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/product/${product.id}`}>
            <a>
              {product.title}
              <span>{product.price}</span>
            </a>
          </Link>
          <br></br>
        </div>
      ))}
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
    revalidate: 5,
  };
}
