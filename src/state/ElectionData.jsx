import React, { useState } from 'react'

const ElectionData = () => {

    let [party, setParty] = useState("DMK");
    let [CM, setCm] = useState("M.K.STALIN");
    let [seats, setSteats] = useState(58);

    let vijay = () => {

        if (party == "DMK") {
            setParty(party = "TVK")
            setCm(CM = "VIJAY")
            setSteats(seats = 105)
        } else {
            setParty(party = "DMK")
            setCm(CM = "M.K.STALIN")
            setSteats(seats = 58)
        }
    }




    return (
        <div>
            <h1>
                Tamilnadu Election Result 2026
            </h1>

            <div>
                <h2>party:{party}</h2>
                <h2>CM:{CM}</h2>
                <h2>seats:{seats}</h2>
                <button onClick={vijay}>Chnage Ruler</button>

            </div>
        </div>
    )
}

export default ElectionData
