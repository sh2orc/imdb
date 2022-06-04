import React from 'react';

function HeaderIcon({Icon, title}) {
    return (
        <div>
            <Icon className={"h-8"}/>
            <p>{title}</p>
        </div>
    );
}

export default HeaderIcon;