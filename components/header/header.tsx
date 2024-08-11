"use client"

import "./header.scss"
import Link from "next/link";
import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const Header = () => {
    const router = useRouter();
    const params = useParams();
    const [currentRoute, setCurrentRoute] = useState('');

    useEffect(() => {
        setCurrentRoute(window.location.hash);
    }, [params]);

    return (
        <header id="header">
            <Link className={`header-item ${currentRoute === '' ? 'active' : ''}`} href="/">Home</Link>
            <Link className={`header-item ${currentRoute === '#skills' ? 'active' : ''}`} href="/#skills">Skills</Link>
            <Link className={`header-item ${currentRoute === '#service' ? 'active' : ''}`} href="/#service">Service</Link>
            <h1>ANAS BOUABID</h1>
            <Link className={`header-item ${currentRoute === '#portfolio' ? 'active' : ''}`} href="/#portfolio">Portfolio</Link>
            <Link className={`header-item ${currentRoute === '#resume' ? 'active' : ''}`} href="/#resume">Resume</Link>
            <Link className={`header-item ${currentRoute === '#contact' ? 'active' : ''}`} href="/#contact">Contact</Link>
        </header>
    )
}

export default Header;