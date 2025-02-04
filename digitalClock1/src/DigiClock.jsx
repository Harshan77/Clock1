import react,{useState,useEffect} from "react";
function DigiClock(){

    const[time,setTime] = useState(new Date());

    useEffect(()=>{
        setTime(new Date());
    })

    const hours=time.getHours();
    const minutes=time.getMinutes();
    const seconds=time.getSeconds();

    return(
        <>
        <h1>Digital Clock</h1>
        <span> {hours}:{minutes}:{seconds} </span>
        </>
    )

}

export default DigiClock;