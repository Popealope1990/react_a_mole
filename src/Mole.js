
import { useEffect } from 'react'
import moleImage from './mole.png'

function Mole(props) {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 7000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <img style={{'width' : '50px'}} src={moleImage} alt='mole' onClick={props.handleClick} />
    )
}

export default Mole