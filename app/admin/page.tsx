import Card from "../../components/admin/Card";

export default function Dashboard() {
  return (
    <div>
      <h1 className="admin-title">Dashboard</h1>

      <div className="admin-grid">
        <Card title="Total Users" value="1,280" />
        <Card title="New Orders" value="320" />
        <Card title="Revenue" value="$24,500" />
        <Card title="Pending Tasks" value="18" />
      </div>
    </div>
  );
}
