import { useEffect, useState } from "react"
import Suggestions from "./suggession";

export default function SearchAutoComplete(){
    const [loading, setloading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null)

    const [searchParam, setSearchParam] = useState('')
    const [showDropDown, setShowDropDown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])

    function handleChange(event){
        const query = event.target.value.toLowerCase()
        setSearchParam(query)
        if(query.length > 1){
            const filteredData = users && users.length ? 
            users.filter(item=> item.toLowerCase().indexOf(query) > -1)    
            : []
            setFilteredUsers(filteredData)
            setShowDropDown(true)
        }else{
            showDropDown(false)
        }

    }


    function handleClick(event){
        console.log(event.target.innerText)
        setShowDropDown(false)
        setSearchParam(event.target.innerText)
        setFilteredUsers([])

    }

    async function fetchListOfUsers(){
        try{
            setloading(true)
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()
            
            console.log(data)
            if(data && data.users && data.users.length){
                setUsers(data.users.map(userItem => userItem.firstName))
                setloading(false)
                setError(null)
            }


        }catch(error){
            setloading(false)
            console.log(error)
            setError(error)
        }
    }
    useEffect(()=> {
        fetchListOfUsers()
    }, [])


console.log(users, filteredUsers )
    

    return (
        <div className="search-autocomplete-container">
            {
                loading ? <h2>Loading data ! Please wait</h2> :
                 <input onChange={handleChange} value={searchParam} type="search-users"  placeholder="search users here" />
            }
            {
                
                showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers}/>
            }
        </div>
    )
}