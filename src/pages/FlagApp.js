import React,{useEffect,useState} from 'react'

const FlagApp = () => {

    const[country,setCountry]=useState([])
    console.log(country)
    useEffect(() => {
        fetch("https://restcountries.com/v3/all")
        .then((res) => res.json())
        .then((data) =>setCountry(data))
        .catch((err)=>console.log(err));
        
    }, []); //sadece ilk açıldığında çalışacak


    return (
        <div>
            <h1>Countries</h1>
            {country.length}
        </div>
    )
}

export default FlagApp
