import headerStyle from './header.module.css';

const header = () => {
    return (
        <nav className = {headerStyle.nav}>
        <h1>
            DELIZIA WORLD
        </h1>
        <ul className = {headerStyle.ul}>
                <li><a href = "#contact " >Contact</a></li>
                <li><a href = "#items" >Items</a></li>
                <li><a href = "#about" >About</a></li>
                <li><a href = "#home" >Home</a></li>
            </ul>
        </nav>
    );
        };

export default header;