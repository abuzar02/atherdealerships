

"use client";
import "../style/admin.css";
import { useState, useEffect } from 'react';

const AdminPanel = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/leads');
                const data = await response.json();
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

            const updatedData = data.map(user =>
                user._id === id ? { ...user, status: newStatus } : user
            );
            setData(updatedData);
        } catch (error) {
            console.error('Failed to update status:', error);
        }
    };

    // Handle entries per page change
    const handleEntriesPerPageChange = (e) => {
        setEntriesPerPage(Number(e.target.value));
        setCurrentPage(1); // Reset to first page on change
    };

    // Calculate total pages
    const totalPages = Math.ceil(filteredData.length / entriesPerPage);
    const displayedData = filteredData.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div className='table' style={{ flex: 1, padding: '20px' }}>
                <h1>Admin Panel</h1>

                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ padding: '10px', width: '200px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }}
                />

                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    style={{ padding: '10px', marginLeft: '20px', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                </select>

                <select
                    value={entriesPerPage}
                    onChange={handleEntriesPerPageChange}
                    style={{ padding: '10px', marginLeft: '20px', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                    <option value={10}>10 Entries</option>
                    <option value={20}>20 Entries</option>
                    <option value={50}>50 Entries</option>
                </select>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Name</th>
                                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Number</th>
                                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Email</th>
                                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Status</th>
                                <th style={{ border: '1px solid #ccc', padding: '10px' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedData.map((user) => (
                                <tr key={user._id}>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.name}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.number}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.email}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>{user.status}</td>
                                    <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                                        <select
                                            value={user.status}
                                            onChange={(e) => handleStatusChange(user._id, e.target.value)}
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

                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            style={{
                                padding: '10px',
                                margin: '0 5px',
                                borderRadius: '4px',
                                border: '1px solid #0070f3',
                                backgroundColor: currentPage === index + 1 ? '#0070f3' : '#fff',
                                color: currentPage === index + 1 ? '#fff' : '#0070f3',
                                cursor: 'pointer',
                            }}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
