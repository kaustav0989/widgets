import React from "react";

const Link = ({className,href,children}) => {

    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({},'',href); //used for navigate to link in url
    };

    return (
        <a onClick={onClick} href={href} className={className}>
            {children}
        </a>
    );
}

export default Link;