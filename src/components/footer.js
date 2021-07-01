import React from 'react'

export default function Footer() {
    return (
        <footer className="container py-4">
            <div className="row justify-content-between">
                <div className="col-auto py-auto">&copy;All rights reserved</div>
                <div className="col-auto py-auto">Calle 23 #13-80 <p>Bogotá D. C.</p></div>
                <div className="col-auto py-auto">
                    master@votrading.com.co
                    <p>CO: +57 (310) 228 5775<br />
                        +57 (322) 307 4029</p>
                </div>
                <div className="col-auto d-flex">
                    <a className="btn btn-default" href="https://www.facebook.com" rel="noreferrer" target="_blank"><i className="fab fa-facebook-square"></i></a>
                    <a className="btn btn-default" href="https://www.instagram.com" rel="noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </footer>
    )
}
