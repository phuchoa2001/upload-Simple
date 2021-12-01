function index(props) {
  return (
    <>
      <h1>Hello</h1>
      {props.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
}
export default index;
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const randomNumber = +Math.floor(Math.random() * 10);
  return {
    props: {
      users: [data[randomNumber]],
    },
  };
}
