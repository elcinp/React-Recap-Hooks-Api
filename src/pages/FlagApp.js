import React,{useEffect,useState} from 'react'

const FlagApp = () => {

    const[countries,setCountries]=useState([])
    const [error,setError] =useState(false)
    console.log(countries)

    useEffect(() => {
        fetch("https://restcountries.com/v3/all")
        // .then((res) => res.json())
        .then((res) => {
            if(res.status>=200 && res.status<=299){
                return res.json();
            }else{
                setError(true)
            }
        })
        .then((data) =>setCountries(data))
        .catch((err)=>console.log(err));
        
    }, []); //sadece ilk açıldığında çalışacak

    if(!error){
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
    }else{
        return(
            <div>
                <h1>Error!!</h1>
            </div>
        )
    }
}

export default FlagApp
