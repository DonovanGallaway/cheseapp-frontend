import {useState} from 'react'
import {Link} from 'react-router-dom'

const Index = (props) => {

    const [newForm, setNewForm] = useState({
        name: "",
        country: "",
        image: ""
    })

    const handleChange = (event) => {
        const newState = {...newForm}
        newState[event.target.name] = event.target.value
        setNewForm(newState)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createCheese(newForm)
        setNewForm({
            name: "",
            image: "",
            title: ""
        })
    }

        const form = <form onSubmit={handleSubmit}>
        <input
        type='text'
        value={newForm.name}
        name='name'
        placeholder='name'
        onChange={handleChange}
        />
        <input
        type='text'
        value={newForm.country}
        name='country'
        placeholder='country'
        onChange={handleChange}
        />
        <input
        type='text'
        value={newForm.iamge}
        name='image'
        placeholder='image'
        onChange={handleChange}
        />
        <input type='submit' value='submit'/>
    </form>

    if (props.cheese){
        return <section>
            {form}
            {props.cheese.map((cheese) => {
                return <div key={cheese._id} className='cheese'>
                    <Link to={`/cheese/${cheese._id}`}><h1>{cheese.name}</h1></Link>
                    <img src={cheese.image} alt={cheese.name}/>
                    <h3>From: {cheese.country}</h3>
                </div>
            })}
        </section>
    } else {
        return <section>
            {form}
            <h1>Loading...</h1>
        </section>
    }
}



export default Index