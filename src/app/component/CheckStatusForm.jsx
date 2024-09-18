import { useState } from 'react';

// Styles for the component
const formContainerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
};

const formElementStyle = {
    marginBottom: '15px',
};

const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
};

const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#0070f3',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
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
    const [email, setEmail] = useState('');
    const [statusData, setStatusData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setStatusData(null);

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
            <h1>Check Your Status</h1>
            <form onSubmit={handleSubmit}>
                <div style={formElementStyle}>
                    <label htmlFor="email" style={labelStyle}>Enter your email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </div>
                <button type="submit" style={buttonStyle}>Check Status</button>
            </form>

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
