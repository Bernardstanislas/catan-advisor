import * as React from "react"
import Board from '../components/Board';
import '../style.css'

export default () => <div className="container mx-auto p-2 bg-gray-100 h-screen">
    <h1 className="text-xl text-grey-500 text-center">Catan Advisor</h1>
    <Board>
        <polygon points="60,20 100,40 100,80 60,100 20,80 20,40" fill="red"/>
    </Board>
</div>
