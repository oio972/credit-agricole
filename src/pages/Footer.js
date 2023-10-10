import { NavLink } from 'react-router-dom';
import "./style.css";

export function Footer() {
    return (
        <div className="footer">
            <p className="footerTitle">footer</p>
            <NavLink to="/public/index1.html">Une autre page</NavLink> 
        </div>
    )
}
