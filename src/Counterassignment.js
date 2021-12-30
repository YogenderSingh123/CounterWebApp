import React, { useEffect, useState } from 'react'

export default function Counterassignment() {
    const [count, setCount] = useState(0)

    useEffect(() => {

        if (count == 11) {
            setCount(1)

        }

    }, [count])

    const clickME = () => {

        let countData = count + 1

        setCount(countData)
        console.log('count', count)

    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => { clickME() }}>
                click me
            </button>
        </div>
    )
}
