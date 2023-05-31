import { InputProps } from '@/types';
import React from 'react';

const Input = ({
    label,
    type,
    value,
    onChange
}:InputProps) => {
    return (
        <div className="fullInput">
            <label>{label}</label>
            <input className="input" type={type} value={value} onChange={onChange}/>
        </div>
    );
};

export default Input;