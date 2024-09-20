import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Styles for the component
const formContainerStyle = {
    maxWidth: '600px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    display: "contents;"
};

const resultContainerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
    fontSize: '24px',
    marginBottom: '15px',
    borderBottom: '2px solid #0070f3',
    paddingBottom: '10px',
    color: '#333',
};

const paragraphStyle = {
    marginBottom: '10px',
    fontSize: '16px',
    lineHeight: '1.5',
};

const strongStyle = {
    fontWeight: 'bold',
    color: '#555',
};

// CheckStatusForm Component
const CheckStatusForm = () => {
    const [statusData, setStatusData] = useState(null);
    const [error, setError] = useState('');
    const router = useRouter();

    // Fetch the status once the component mounts
    useEffect(() => {
        const loggedInEmail = localStorage.getItem('loggedInEmail');
        const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

        if (!isLoggedIn || !loggedInEmail) {
            router.push('/login'); // Redirect to login page if not logged in
            return;
        }

        fetchStatus(loggedInEmail);
    }, [router]);

    // Function to fetch status data
    const fetchStatus = async (email) => {
        try {
            const response = await fetch('/api/check-status', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatusData(data);
            } else {
                setError(data.error || 'An error occurred');
            }
        } catch (error) {
            setError('Failed to fetch status');
        }
    };

    return (
        <div style={formContainerStyle}>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {statusData && (
                <div style={resultContainerStyle}>
                    <h2 style={headingStyle}>Status Information</h2>
                    <p style={paragraphStyle}>
                        <span style={strongStyle}>Name:</span> {statusData.name}
                    </p>
                    <p style={paragraphStyle}>
                        <span style={strongStyle}>Email:</span> {statusData.email}
                    </p>
                    <p style={paragraphStyle}>
                        <span style={strongStyle}>Type:</span> {statusData.type}
                    </p>
                    <p style={paragraphStyle}>
                        <span style={strongStyle}>Status:</span> {statusData.status}
                    </p>
                    <p style={paragraphStyle}>
                        <span style={strongStyle}>Date:</span> {new Date(statusData.date).toLocaleDateString()}
                    </p>
                </div>
            )}
        </div>
    );
};

export default CheckStatusForm;
