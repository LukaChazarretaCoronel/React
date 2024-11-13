import {useState} from "react"

export function MultipleForms(){
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
    const handleChange=(event)=>{
        const {name, value} = event.target
        setFormData(prevdata =>({
            ...prevdata,
            [name]:value
        }))
    }
    const handleSubmit = (event)=> {
        event.preventDefault()
        console.log('form data', formData)
    }

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <input 
                name="username"
                value={formData.username}
                onChange={handleChange} 
                placeholder="Username"
                />
                <input 
                name="email"
                value={formData.email}
                onChange={handleChange} 
                placeholder="email"
                />
                <button type="submit">Submit</button>
            </form>
            <div>
                <p>{formData.username}</p>
                <p>{formData.email}</p>
            </div>
        </div>    
        )
    }