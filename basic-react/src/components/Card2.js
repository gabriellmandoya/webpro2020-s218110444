import React from "react";

const Card2 = ({name, username, email, phone}) => {
    return (
        <div className = "card-container">
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default Card2;