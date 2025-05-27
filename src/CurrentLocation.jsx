import {useLocation} from "react-router-dom";

function CurrentLocation() {
    const location = useLocation()
    return (
        <h1>current path: {location.pathname}</h1>
    )

}

export default CurrentLocation;