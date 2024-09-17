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
        calling_time:'10 to 6 PM',
        qualification: '',
        investment:'Type',
        property:'Type',
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
               <div className='input-flex'>
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
               </div>
                <div className='input-flex'>
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
                </div>
                <div className='input-flex'>
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
                </div>
               <select
                    name="investment"
                    value={formData.investment}
                    onChange={handleChange}
                    required
                >
                    <option value="Type">Type of Investment</option>
                    <option value="25LAC">25LAC</option>
                    <option value="55LAC">55LAC</option>
                    <option value="1CR">1CR</option>
                </select>
                <select
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    required
                >
                    <option value="Type">Type of Property</option>
                    <option value="Own">Own</option>
                    <option value="Ranted">Ranted</option>
                </select>
              
             
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
