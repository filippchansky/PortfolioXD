import React from 'react'
import "./swipercard.css"
import {Link} from "react-router-dom"

interface SwiperCardProps {
    title?: string
    description?: string
    link: string
}

const SwiperCard:React.FC<SwiperCardProps> = ({title, description, link}) => {
    
    return (
        <div>
            <div className="card">
                <Link to={link}>
                <div className="card__content">
                    <strong>{title}</strong>
                    <img src={description} alt="" />
                </div>
                </Link>
            </div>
        </div>
    )
}
export default SwiperCard;