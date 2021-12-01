function ArticleListByCategory({ articles, category }) {
  return (
    <>
      <h1>
        Showing new for category <i>{category}</i>
      </h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} : {article.title}
          </h2>
          <p>{article.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}
export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const { category } = context.params;
  const res = await fetch(`http://localhost:4000/news?category=${category}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      articles: data,
      category,
    },
  };
}
