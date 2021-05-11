import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Poke = () => {

    const [allPokes, setAllPokes] = useState([])

    const getPokies = (e)=>{
        // fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
        // .then(res=> {
        //     return res.json()
        // })
        // .then(res => {
        //     console.log("REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!")
        //     console.log(res)
        //     setAllPokes(res.results)

        // })
        // .catch(err => console.log("ERRROR", err))

        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
        .then(res=>{
            console.log(res)
            setAllPokes(res.data.results)
        })
        .catch(err=>{
            console.log(err)
        })

    }
    
    
    
    return (
        <div>
            <br/>
            <br/>
            <br/>
            <button className="btn btn-secondary btn-lg" onClick={getPokies}>Fetch Pokemon</button>
            <br/>
            <br/>          
            {
                allPokes.map((poke,i) =>{
                    return <div key = {i} >
                        <h4>{poke.name}</h4>
                </div>
                })
            }
            
        </div>
    );
};

export default Poke;