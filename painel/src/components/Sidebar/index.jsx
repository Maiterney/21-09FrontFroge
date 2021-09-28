import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

const Sidebar = () => {

    const router = useRouter();

    return (
        <div className="sidebar-controller">
            <div className="sidebar">
                <Link href="/">
                    <div className={router.pathname == "/" ? "active" : ""}>
                        <img src="_logo.png" alt="" className="type-link" />
                    </div>
                </Link>
                <div className="border_default"></div>
                <span className="title">Cadastros</span>
                <Link href="/Banners" className="offers">
                    <div className={router.pathname == "/Banners" ? "active this-link" : ""} data-color="#ff00ff">
                        <span className="type-link" >Cadastrar banners</span>
                    </div>       
                </Link>
                <Link href="/Offers" className="offers">
                    <div className={router.pathname == "/Offers" ? "active this-link" : ""} data-color="#ff00ff">
                        <span className="type-link" >Cadastrar ofertas</span>
                    </div>       
                </Link>
                
            </div>
        </div>
    )
}

export default Sidebar;