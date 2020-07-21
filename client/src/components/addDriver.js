import React, { useState } from 'react';

const AddDriver = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const addDriver = (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/api/drivers';
        fetch(url, {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify({name,age})
        })
        .then(()=>console.log('success'))
        .catch(err => console.log('error : ' + err));
    }
    return ( 
        <form>
            <input type="text" name = 'name' placeholder= "Name"  onChange={(e) => setName(e.target.value)} required/>
            <input type="text" name = 'age' placeholder = 'age'  onChange = {(e)=> setAge(e.target.value)} required/>
            <input type="submit" value = 'add a driver!' onClick = {addDriver} />
        </form>
     );
}
 
export default AddDriver;
