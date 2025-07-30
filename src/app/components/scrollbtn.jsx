"use client";
import { Link } from 'react-scroll';

const ScrollBtn = ({ txt }) => {
    return (
        <Link
            to="contactSection"
            smooth={true}
            duration={100}
            offset={-70}

        >
            {txt ? txt : "Get a Free Consultation"}
        </Link>
    )
}

export default ScrollBtn