import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchIcon() {
    const navigate=useNavigate()
    const [Searchinput,setInput]=useState("")
    const [toggleit,settoggleit]=useState(false)
    useEffect(()=>{
        if(toggleit){
            setTimeout(() => {
                settoggleit(false)
                navigate(`/Community/${Searchinput}`);
            }, 100);}

    },)
    const handleInput = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }
    function handleClick(){
        settoggleit(!toggleit)
    }
    return (
        <input style={{height: "90px", width: "280px", backgroundColor: "#000033", borderRadius: "90px", fontSize: "20pt", paddingLeft: "50px"
            ,color:"#fff",outline:"none",border:"none"
        }} placeholder="Search..." value={Searchinput} onChange={handleInput} onKeyDown={(e) => { if (e.key === "Enter") handleClick() }}/>
   
    )
}
export default SearchIcon;