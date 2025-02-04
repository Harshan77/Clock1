import react,{useState,useEffect} from "react";
function DigiClock(){

    const[time,setTime] = useState(new Date());

    useEffect(()=>{
        setTime(new Date());
    })

    const hours=numberFormat(time.getHours());
    const minutes=numberFormat(time.getMinutes());
    const seconds=numberFormat(time.getSeconds());

    function numberFormat(number){    
        return (number<10 ? "0" : "")+number;
    }

    return(
        <div>
        <h1>Digital Clock</h1>
        <span> {hours}:{minutes}:{seconds} </span>
        </div>
    )

}

export default DigiClock;