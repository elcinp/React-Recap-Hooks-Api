import React,{useEffect,useState} from 'react'

const FlagApp = () => {

    const[countries,setCountries]=useState([])
    console.log(countries)
    useEffect(() => {
        fetch("https://restcountries.com/v3/all")
        .then((res) => res.json())
        .then((data) =>setCountries(data))
        .catch((err)=>console.log(err));
        
    }, []); //sadece ilk açıldığında çalışacak


    return (
        <div>
            <h1>Countries</h1>
            {countries.length}
            {countries.map((country) => {
                const {name,capital,flags} = country
                return(
                    <div key={name.common}>
                        <h2>{name.common}</h2>
                        <img src={flags[1]} alt="" />
                        <h4>Capital of the {name.common} is {capital}</h4>
                    </div>
                )
            })}
        </div>
    )
}

export default FlagApp
