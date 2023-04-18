import {useState, useEffect} from "react";

function useWindowWidth() {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return width;
}

export default useWindowWidth;