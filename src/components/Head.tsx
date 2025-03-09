import React, { useState } from "react";
import LOGO from "../assets/LOGO.svg";
import Refresh from "../assets/Refresh.svg";

interface HeadProps {
    fetchData: () => void;
}

const Head: React.FC<HeadProps> = ({ fetchData }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnim = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    const downButt = () => {
        startAnim();
        fetchData(); 
    };

    return (
        <header className="head-box">
            <img src={LOGO} className="logo" alt="Логотип" />
            <div>
                <button className="refresh-button" onClick={downButt}>
                    <p>Обновить</p>
                    <img src={Refresh} className={`refresh-img ${isAnimating ? 'rotate' : ''}`} alt="Обновить" />
                </button>
            </div>
        </header>
    );
};

export default Head;