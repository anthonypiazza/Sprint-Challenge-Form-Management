import React, { useEffect, useState } from 'react';
import axios from 'axios';

import axiosConfig from './axiosConfig';
import FoodDetails from './FoodDetails';

function Profile(){
    const [apiData, setApiData] = useState();

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/restricted/data', axiosConfig)
            .then(res=>{
                console.log('SUCCESS',res.data)
                setApiData(res.data)
            })
            .catch(err=>{
                console.log('UNSUCCESSFUL',err)
            })
    }, [])

    if(!apiData) return <div>Loading...</div>
    return(
        <div>
            <h1>Hello this is Your Profile.</h1>
            {apiData.map((food, index) => <FoodDetails food={food} key={index} />)}
        </div>
    )
}

export default Profile;