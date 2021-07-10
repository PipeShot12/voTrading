import React from 'react'
import SeoUse from "../SeoUse"

export default function NotFound() {
    return (
        <div style={{ width: "100%", height: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <SeoUse title="404 Not Foud" canonical="https://votrading.netlify.app/*" content="Page Not Found" />
            <div>
                <span class="fas fa-exclamation-circle" style={{ fontSize: "20vh", color: "#00AFA0", width: "100%", textAlign: "center" }}></span>
                <h2 style={{ fontSize: "12vh", width: "100%", textAlign: "center" }}>Not Found</h2>
            </div>

        </div>
    )
}
