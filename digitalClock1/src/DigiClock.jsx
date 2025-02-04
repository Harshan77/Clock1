import react,{useState,useEffect} from "react";
import './index.css'
function DigiClock(){

    const[time,setTime] = useState(new Date());
    const[color,setColor]=useState("blue");

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return() => {
            clearInterval(intervalId);
        }
    },[]);

    const hours=numberFormat(time.getHours());
    const minutes=numberFormat(time.getMinutes());
    const seconds=numberFormat(time.getSeconds());

    function numberFormat(number){    
        return (number<10 ? "0" : "")+number;
    }

    const handleColor = () => {
        setColor((c) => (c=="blue" ? "red" : "blue"));
    }

    return(
        <div className="digiClock"  style={{color:color}}>
        <h1>Digital Clock</h1>
        <span> {hours}:{minutes}:{seconds} </span><br/>
        <button onClick={() =>handleColor()}>Change Color</button>
        </div>
    )

}

export default DigiClock;