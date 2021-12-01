import UseSWR from "swr";

const fetcher = async function fetchDashboardData() {
  const res = await fetch("http://localhost:4000/Dashboard");
  const data = await res.json();
  return data;
};
function DashboardSWR() {
  const {data , error} = UseSWR("dashboard" , fetcher);
  if(error) return "error 404";
  if(!data) return "No Data!"
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Post - {data.posts}</h2>
      <h2>likes -{data.likes}</h2>
      <h2>follwers -{data.follwers}</h2>
      <h2>following -{data.following}</h2>
    </div>
  );
}
export default DashboardSWR;
