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
            <Link className={`header-item ${currentRoute === '' ? 'active' : ''}`} href="/public">Home</Link>
            <Link className={`header-item ${currentRoute === '#skills' ? 'active' : ''}`} href="/public#skills">Skills</Link>
            <Link className={`header-item ${currentRoute === '#service' ? 'active' : ''}`} href="/public#service">Service</Link>
            <h1>ANAS BOUABID</h1>
            <Link className={`header-item ${currentRoute === '#portfolio' ? 'active' : ''}`} href="/public#portfolio">Portfolio</Link>
            <Link className={`header-item ${currentRoute === '#resume' ? 'active' : ''}`} href="/public#resume">Resume</Link>
            <Link className={`header-item ${currentRoute === '#contact' ? 'active' : ''}`} href="/public#contact">Contact</Link>
        </header>
    )
}

export default Header;