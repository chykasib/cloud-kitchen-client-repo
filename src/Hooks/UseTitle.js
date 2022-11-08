import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Rock Cloud Kitchen`;
    }, [title])
}

export default useTitle;