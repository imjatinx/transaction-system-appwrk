import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddTransaction = () => {
    const [type, setType] = useState('credit');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const transaction = { type, amount : parseFloat(amount), description };

        try {
            const response = await axios.post('http://127.0.0.1:5000/api/transaction', transaction)            
            alert(response.data.message)
            navigate('/')
        } catch (error) {
            console.log('Error===>',error);
            alert('Something went wrong')
        }

    }


    return (
        <div style={{ height: '100vh', width: '100vw', display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form style={{ border: '1px solid black', padding: "30px" }} onSubmit={handleSubmit}>
                <div><h3>New Transcation</h3></div>
                <div>
                    <label htmlFor="transactionType">Transaction Type</label>
                    <select name="transactionType" id="" onChange={(e) => setType(e.target.value)}>
                        <option value="credit">credit</option>
                        <option value="debit">debit</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input type="text" name="amount" id="" onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <input type="submit" value="Save" />
                </div>
            </form>
        </div>
    )
}

export default AddTransaction