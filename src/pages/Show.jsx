import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Show = (props) => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const cheese = props.cheese
    const [editForm, setEditForm] = useState({})

    useEffect(()=> {
        if (props.cheese){
            const thisCheese = cheese.find((c)=> c._id === id)
            setEditForm(thisCheese)
        }
    }, [props.cheese])

    if (props.cheese) {
        const thisCheese = cheese.find((c)=> c._id === id)

        const handleChange = (event) => {
            const newState = {...editForm}
            newState[event.target.name] = event.target.value
            setEditForm(newState)
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            props.updateCheese(editForm, thisCheese._id)
            navigate('/')
        }

        const removeCheese = () => {
            props.deleteCheese(thisCheese._id)
            navigate('/')
        }

        const form = <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={editForm.name}
            name='name'
            placeholder='name'
            onChange={handleChange}
            />
            <input
            type='text'
            value={editForm.country}
            name='country'
            placeholder='country'
            onChange={handleChange}
            />
            <input
            type='text'
            value={editForm.iamge}
            name='image'
            placeholder='image'
            onChange={handleChange}
            />
        </form>

        return (
        <div className='cheese'>
        <h1>{thisCheese.name}</h1>
        <h2>{thisCheese.country}</h2>
        <img src={thisCheese.iamge} alt={thisCheese.name}/>
        {form}
        <button onClick={removeCheese}>Delete Cheese</button>
        </div>
        )
    } else {
        return <></>
    }


}

export default Show