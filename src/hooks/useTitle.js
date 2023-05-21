import { useEffect } from "react";

const useTitle = title => {
    useEffect(()=>{
        document.title = `Lego World | ${title}`
    }, [title])
};

export default useTitle;