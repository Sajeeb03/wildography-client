import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-wildography`;
    }, [title])
}

export default useTitle;