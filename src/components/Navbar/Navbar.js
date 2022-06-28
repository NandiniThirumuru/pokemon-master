import React from 'react';
import './style.css';

function Navbar() {
    return (
        <div className="Navbar">
            <form>
                <input type={"text"} value={"search by name"} />
                
                <button>Search</button>
            </form>
        </div>
    );
}

export default Navbar;
