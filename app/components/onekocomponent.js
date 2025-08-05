'use client'
import oneko from "./oneko";
import { useEffect } from "react";

let onekoInitialized = false;

export default function Oneko() {
    useEffect(() => {
        if (!onekoInitialized) {
            oneko();
            onekoInitialized = true;
        }
    }, []);
    
    return (
        <div>
        </div>
    );
}


