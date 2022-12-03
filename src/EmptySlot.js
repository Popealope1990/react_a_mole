import { useEffect } from "react"
import moleHillImage from "./molehill.png"

function EmptySlot(props) {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 6000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randomSeconds)

        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img src={moleHillImage} alt="Mole Hill" onClick={props.handleClick} />
        </div>
    )
}

export default EmptySlot