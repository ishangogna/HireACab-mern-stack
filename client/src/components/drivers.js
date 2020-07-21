import React, {useState} from 'react';

const Drivers = () => {
    const [drivers, setDrivers] = useState([]);

    const showDrivers = (e)=>{
        e.preventDefault();
        console.log('show drivers clicked.')
        const url = 'http://localhost:5000/api/drivers';
        fetch(url).then(response => response.json())
        .then(data => setDrivers([...drivers,...data]));
    }
        return ( 
        <div className= 'container'>
            <h1>Drivers available : </h1>
            <button onClick = {showDrivers}>Show drivers</button>
            {drivers.map(driver=>(
                <div key = {driver._id}>{driver.name}</div>
            ))}
        </div>
     );
}
 
export default Drivers;