// "use client";
// import "../style/admin.css"

// import { useState, useEffect } from 'react';

// const AdminPanel = () => {
//   // Example data for table
//   const [data, setData] = useState([
//     { id: 1, name: 'User 1', number: '1234567890', pincode: '123456', email: 'user1@example.com', address: 'Address 1', calling_time: '10 to 6 PM', qualification: 'Bachelor', investment: '25LAC', property: 'Own', remark: 'Remark 1', partnershipType: 'Dealership', status: 'Active' },
//     { id: 2, name: 'User 2', number: '0987654321', pincode: '654321', email: 'user2@example.com', address: 'Address 2', calling_time: '10 to 6 PM', qualification: 'Master', investment: '55LAC', property: 'Rented', remark: 'Remark 2', partnershipType: 'Distributor', status: 'Inactive' },
//     { id: 3, name: 'User 3', number: '1112223334', pincode: '111222', email: 'user3@example.com', address: 'Address 3', calling_time: '10 to 6 PM', qualification: 'PhD', investment: '1CR', property: 'Own', remark: 'Remark 3', partnershipType: 'Sub-Distributor', status: 'Pending' }
//   ]);

//   const [filteredData, setFilteredData] = useState(data); // For filtered data
//   const [searchTerm, setSearchTerm] = useState(''); // For search bar
//   const [statusFilter, setStatusFilter] = useState('All'); // For status filter

//   useEffect(() => {
//     // Filtering logic based on search term and status filter
//     let filtered = data.filter((user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     if (statusFilter !== 'All') {
//       filtered = filtered.filter((user) => user.status === statusFilter);
//     }
//     setFilteredData(filtered);
//   }, [searchTerm, statusFilter, data]);

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       {/* Sidebar */}
//       {/* <aside style={{ width: '250px', background: '#333', color: '#fff', padding: '20px' }}>
//         <h2>Admin Dashboard</h2>
//         <ul style={{ listStyle: 'none', padding: 0 }}>
//           <li style={{ marginBottom: '15px' }}>
//             <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</a>
//           </li>
//           <li style={{ marginBottom: '15px' }}>
//             <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Users</a>
//           </li>
//           <li style={{ marginBottom: '15px' }}>
//             <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Settings</a>
//           </li>
//           <li style={{ marginBottom: '15px' }}>
//             <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Logout</a>
//           </li>
//         </ul>
//       </aside> */}

//       {/* Main Content */}
//       <div className='table' style={{ flex: 1, padding: '20px'  }}>
//         <h1>Admin Panel</h1>

//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search by name..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: '10px',
//             width: '200px',
//             marginBottom: '20px',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//           }}
//         />

//         {/* Status Filter */}
//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//           style={{
//             padding: '10px',
//             marginLeft: '20px',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//           }}
//         >
//           <option value="All">All Status</option>
//           <option value="Active">Active</option>
//           <option value="Inactive">Inactive</option>
//           <option value="Pending">Pending</option>
//         </select>

//         {/* Responsive Table */}
//         <div style={{ overflowX: 'auto' }}>
//           <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
//             <thead>
//               <tr style={{ backgroundColor: '#f2f2f2' }}>
//                 <th style={{ border: '1px solid #ccc', padding: '10px' }}>ID</th>
//                 <th style={{ border: '1px solid #ccc', padding: '10px' }}>Name</th>
//                 <th style={{ border: '1px solid #ccc', padding: '10px' }}>Number</th>
//                 <th style={{ border: '1px solid #ccc', padding: '10px' }}>Pincode</th>
//                 <th style={{ border: '1px solid #ccc', padding: '10px' }}>Email</th>
//                 <th style={{ border: '1px solid #ccc', padding: '10px' }}>Address</th>
//                 <th style={{ border: '1px solid #ccc', padding: '10px' }}>Calling Time</th>
//                 <th style={{ border: '1px solid #ccc', padding: '10px' }}>Qualification</th>
//                 <th style={{ border: '1px solid #ccc', padding: '10px' }}>Investment</th>
//                 <th style={{ border: '1px solid #ccc', padding: '10px' }}>Property</th>
//                 <th style={{ border: '1px solid #ccc', padding: '10px' }}>Remark</th>
//                 <th style={{ border: '1px solid #ccc', padding: '10px' }}>Partnership Type</th>
//                 <th style={{ border: '1px solid #ccc', padding: '10px' }}>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredData.map((user) => (
//                 <tr key={user.id}>
//                   <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.id}</td>
//                   <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.name}</td>
//                   <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.number}</td>
//                   <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.pincode}</td>
//                   <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.email}</td>
//                   <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.address}</td>
//                   <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.calling_time}</td>
//                   <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.qualification}</td>
//                   <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.investment}</td>
//                   <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.property}</td>
//                   <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.remark}</td>
//                   <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.partnershipType}</td>
//                   <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;

"use client";
import "../style/admin.css";
import { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('/api/leads');
            const data = await response.json();
            console.log(data); // Log data to check if id is present
            setData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);


  // Filter data based on search term and status filter
  useEffect(() => {
    let filtered = data.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (statusFilter !== 'All') {
      filtered = filtered.filter((user) => user.status === statusFilter);
    }
    setFilteredData(filtered);
  }, [searchTerm, statusFilter, data]);

  // Handle status update
  const handleStatusChange = async (id, newStatus) => {
    try {
        const response = await fetch(`/api/leads/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: newStatus }),
        });

        if (!response.ok) {
            throw new Error('Failed to update status');
        }

        // Update local state if necessary
        const updatedData = data.map(user => 
            user._id === id ? { ...user, status: newStatus } : user
        );
        setData(updatedData);
    } catch (error) {
        console.error('Failed to update status:', error);
    }
};




  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div className='table' style={{ flex: 1, padding: '20px' }}>
        <h1>Admin Panel</h1>

        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            width: '200px',
            marginBottom: '20px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{
            padding: '10px',
            marginLeft: '20px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2' }}>
     
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Name</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Number</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Pincode</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Email</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Address</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Calling Time</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Qualification</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Investment</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Property</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Remark</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Partnership Type</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Status</th>
                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
    {filteredData.map((user) => (
        <tr key={user._id}>

            <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.name}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.number}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.pincode}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.email}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.address}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.calling_time}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.qualification}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.investment}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.property}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.remark}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.partnershipType}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.status}</td>
                  <td style={{ border: '1px solid #ccc', padding: '10px' }}>
        
                <select
                    value={user.status}
                    onChange={(e) => handleStatusChange(user._id, e.target.value)} // Use _id instead of id
                    style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                </select>
            </td>
        </tr>
    ))}
</tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
