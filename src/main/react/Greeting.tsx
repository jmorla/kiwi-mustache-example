import React from 'react'

export default function Greeting({ name }) {
    return (<h1>Hey {name}, Thanks for using <span className="badge bg-success">Kiwi 1.0-SNAPSHOT</span></h1>);
}