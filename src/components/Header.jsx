import {Link} from 'react-router-dom'

const Header = (props) => {
    return <nav>
        <Link to='/'>
            <div><h1 className='title'>Cheese App</h1></div>
        </Link>
    </nav>
}

export default Header