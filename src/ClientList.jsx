import React, { useState } from 'react';
import Header from './Components/Header';

export default function ClientList() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const [headerData, setHeaderData] = useState(null);

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;
    const dueDate = new Date(currentDate);
    dueDate.setDate(dueDate.getDate() + 15);
    const formattedDueDate = `${dueDate.getDate().toString().padStart(2, '0')}-${(dueDate.getMonth() + 1).toString().padStart(2, '0')}-${dueDate.getFullYear()}`;

    const obj1 = {
        issueDate: formattedDate,
        dueDate: formattedDueDate,
        number: "123456789"
      }
    
    const handleSubmission = async () => {
        try {
            const res = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ value: inputValue })
            });
            if (!res.ok) {
                const errorData = await res.json();
                setResult(errorData.error || 'An error occurred');
                return;
            }
            const data = await res.json();
            setResult(JSON.stringify(data) || 'No name found');

            const obj2 = {
                name: data.name,
                address: data.address,
                city: data.city,
                phone: data.phone
            };

            setHeaderData({ obj1, obj2 }); 

        } catch (err) {
            console.error('Error sending data:', err);
            setResult('Failed to connect to server');
        }
    };
    return (
        <>
            {!headerData && (
                <div>
                    <h3> Enter client name</h3>
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={handleSubmission}>Submit</button>
                    <p>{result}</p>
                </div>)}
            {headerData && (
                <Header props1={headerData.obj1} props2={headerData.obj2} />
            )}
        </>
    );
}
