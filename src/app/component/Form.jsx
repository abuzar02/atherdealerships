"use client";
import { useState } from 'react';
import '../style/fomrsec.css';
import { useRouter } from 'next/navigation';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        pincode: '',
        email: '',
        address:'',
        calling_time:'',
        qualification: '',
        investment:'',
        property:'',
        remark:'',
        partnershipType: 'Type'
    });

    const [loading, setLoading] = useState(false);  // State to track loading

    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setLoading(true);  // Set loading to true when form submission starts

        try {
            const response = await fetch('/api/proxy', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log("Form successfully submitted!");
                router.push('/thank-you');
            } else {
                console.error('Form submission failed: ', response.statusText);
                alert("Error in form submission");
            }
        } catch (error) {
            console.error('Error submitting form', error);
            alert("An error occurred while submitting the form");
        } finally {
            setLoading(false);  // Set loading to false after the form submission completes
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Application Form</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="number"
                    placeholder="Number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="pincode"
                    placeholder="Pin code"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                />
                 <input
                    type="text"
                    name="calling_time"
                    placeholder="Calling time"
                    value={formData.calling_time}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="qualification"
                    placeholder="Qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                />
                 <input
                    type="text"
                    name="investment"
                    placeholder=" Investment ₹ 0,00"
                    value={formData.investment}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="property"
                    placeholder="Property"
                    value={formData.property}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="remark"
                    placeholder="Remark"
                    value={formData.remark}
                    onChange={handleChange}
                    required
                />
                <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    required
                >
                    <option value="Type">Type of partnership</option>
                    <option value="Dealership">Dealership</option>
                    <option value="Distributor">Distributor</option>
                    <option value="Sub-Distributor">Sub-Distributor</option>
                </select>
                <input
                    className="mt-top"
                    type="submit"
                    value={loading ? "Wait..." : "Submit"}
                    disabled={loading}  // Disable the button while loading
                />
            </form>
        </>
    );
}

export default Form;
