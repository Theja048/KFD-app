import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err)
    return(
        <>
        <h1>{err.status}</h1>
        <h1>{err.statusText}</h1>
        <h1>{err.error.
message}</h1>
        </>
    )
}
export default Error