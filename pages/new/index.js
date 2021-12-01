function NewArticleList({ articles }) {
  return (
    <>
      <h1>Dach sach New Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} : {article.title} | {article.category}
          </h2>
        </div>
      ))}
    </>
  );
}
export default NewArticleList;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();
  return {
    props: {
      articles: data,
    },
  };
}
