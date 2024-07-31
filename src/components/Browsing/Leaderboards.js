import "./browsing.css";
import {useState} from "react";
function Leaderboards(props){
    const entriesLava = [
        ["CoolLeopard567", "00:01:45"],
        ["SmartLion937", "00:02:10"],
        ["QuickDolphin972", "00:02:18"],
        ["ChicTiger492", "00:03:05"],
        ["NiftyFalcon384", "00:05:30"],
        ["BoldPanther489", "00:06:42"],
        ["SageTiger134", "00:08:15"],
        ["SlyEagle356", "00:09:28"],
        ["SwiftHawk925", "00:10:57"],
        ["BrightShark254", "00:12:34"],
        ["CoolEagle123", "00:14:22"],
        ["BoldCheetah678", "00:15:07"],
        ["NiftyDolphin782", "00:18:45"],
        ["SwiftShark456", "00:20:31"],
        ["SlyLeopard879", "00:21:29"],
        ["ChicHawk153", "00:25:14"],
        ["QuickPanther348", "00:26:08"],
        ["BrightFalcon472", "00:27:45"],
        ["SageLion743", "00:29:37"],
        ["SageCheetah128", "00:31:59"]
    ];
    const entriesMaze = [
        ["MightyDragon567", "00:02:00"],
        ["BraveElephant937", "00:02:25"],
        ["FierceTurtle972", "00:02:30"],
        ["GentleGiraffe492", "00:03:20"],
        ["SpeedyCheetah384", "00:05:45"],
        ["StealthyFox489", "00:06:55"],
        ["WiseOwl134", "00:08:30"],
        ["CunningRaven356", "00:09:45"],
        ["RapidJaguar925", "00:11:10"],
        ["LuminousWhale254", "00:12:50"],
        ["CoolPanda123", "00:14:35"],
        ["DaringEagle678", "00:15:20"],
        ["GracefulSwan782", "00:19:00"],
        ["VibrantParrot456", "00:20:45"],
        ["SlyFox879", "00:21:45"],
        ["NobleStag153", "00:25:30"],
        ["SwiftHorse348", "00:26:20"],
        ["BoldWolf472", "00:28:00"],
        ["SageHawk743", "00:29:50"],
        ["MajesticLion128", "00:32:15"]
    ];
    const [DataToggle,setData]=useState(true)
    const [entries,setentries]=useState(entriesLava)

    function ToggleLeaderboard(){
        if(DataToggle){
            setData(false)
            setentries(entriesMaze)
        }
        else{
            setData(true)
            setentries(entriesLava)
        }
}
    return(
        <div className="LeaderboardsPage">
            <div className="LeaderboardContainer">
                {(DataToggle)?<h1 className="TitleContainer">Fastest Players to beat the math lava puzzle</h1>:<h1 className="TitleContainer">Fastest Players to beat the history maze</h1>}
                <div className="togglerbutton">
                    <div className={!DataToggle?"redbutton":"redbutton pressed"} onClick={ToggleLeaderboard}/>
                    <div className={DataToggle?"yellowbutton":"yellowbutton pressed"} onClick={ToggleLeaderboard}/>
                </div>
                <div className="Leaders">
                {entries.map((entry, index) => (
                <h4 key={index}>{entry[0]} with {entry[1]}</h4>
            ))}      </div>
            
            <p>Updated every two weeks at 12:00 GMT+2</p>

                  </div>

        </div>

    )
}
export default Leaderboards;