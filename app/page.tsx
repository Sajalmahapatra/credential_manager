export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-600 mb-4">
          Welcome to the admin dashboard. Monitor key metrics and manage your
          platform efficiently.
        </p>
        <div className="flex space-x-4">
          <div>
            <p className="text-sm text-gray-500">Users</p>
            <p className="text-lg font-bold">1,234</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Documents</p>
            <p className="text-lg font-bold">567</p>
          </div>
        </div>
      </div>
    </div>
  );
}
