import { useEffect } from "react"

const Title= title=> {
    useEffect(()=> {
document.title= `${title} | Photo Studio`;
    }, [title])
}

export default Title;