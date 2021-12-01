import { useState, useEffect } from "react";
function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboard, setDashboard] = useState(null);
  useEffect(() => {
    async function fetchDashboardData() {
      const res = await fetch("http://localhost:4000/Dashboard");
      const data = await res.json();
      setDashboard(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);
  if (isLoading) {
    return <h3>loading...</h3>;
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Post - {dashboard.posts}</h2>
      <h2>likes -{dashboard.likes}</h2>
      <h2>follwers -{dashboard.follwers}</h2>
      <h2>following -{dashboard.following}</h2>
    </div>
  );
}
export default Dashboard;
