import Navbar from './navbar';

export default (props) => (
    <div>
        <Navbar/>
        {
            props.children
        }
    </div>
)