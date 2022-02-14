import React from 'react';
import style from './Message.module.css';

export const Message = (props) => {
    return (
        <>
            <h3 className={style.title}>{this.props.title}</h3>
            <p className={style.text}>{this.props.text}</p>
        </>
    );
}
