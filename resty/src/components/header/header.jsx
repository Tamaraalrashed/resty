import './header.scss'
import { Link } from 'react-router-dom';

const Header=(props)=>{
    return(
        <header className="App-header">
            <h1>
              rest
              <span> 
                  y
                  </span>  
            </h1>
            <nav>
                <ul>
                    
                    <Link to='/'>Home</Link>
                    <Link to='/history'>History</Link>
                    <Link to='/help'>Help</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;