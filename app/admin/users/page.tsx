export default function UsersPage() {
  return (
    <div>
      <h1 className="admin-title">Users</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>John Doe</td><td>john@mail.com</td><td>Admin</td></tr>
          <tr><td>Sarah Lee</td><td>sarah@mail.com</td><td>User</td></tr>
        </tbody>
      </table>
    </div>
  );
}
