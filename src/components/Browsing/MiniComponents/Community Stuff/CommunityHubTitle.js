import { useState } from 'react'
import '../CombinedSheet.css'
function CommunityHubTitle() {

    const seperator = { height: "100%", width: "5px", backgroundColor: "#000017", borderRadius: "5px" }
    var shortcutdata = [{ Name: "Guides", NewP: 5, TotalP: 10 }, { Name: "Discussions", NewP: 0, TotalP: 23 }, { Name: "Achievements", NewP: 10, TotalP: 23 }, { Name: "Basics", NewP: 2, TotalP: 11 }, { Name: "Secrets", NewP: 1, TotalP: 10 }, { Name: "Requests", NewP: 7, TotalP: 23 },]
    const [SearchGroup,setSearchGroup]=useState("");
    const [SearchPerson,setSearchPerson]=useState("");
    const handleSGInput = (e) => {
        e.preventDefault();
        setSearchGroup(e.target.value)
    }
    const handleSPInput = (e) => {
        e.preventDefault();
        setSearchPerson(e.target.value)
    }
    return (
        <div className='CommunityHubTitle'>
            <div className='TypeShortcuts'>
                {shortcutdata.map((item, index) => (
                    <div key={index} className='Shortcut'>
                        <img className='ShortcutImg' src={require("../../../../assets/imgs/Logos/Light - Vertical.png")} alt=''/>
                        <div className='ShortcutText'>
                            <h2>{item.Name}</h2>{item.NewP > 0 && (<h5>{item.NewP} new {item.NewP > 1 ? 'posts' : 'post'}</h5>)}
                            <h5>{item.TotalP} total posts</h5>
                        </div>
                    </div>
                ))}
            </div>
            <div style={seperator} />
            <div className='SearchShortcuts'>
                <div className='SearchShortcutGroup'>
                    <h2>Find Group</h2>
                    <input type='text' placeholder='Find your community' value={SearchGroup} onChange={handleSGInput}/>
                </div>
                <div className='SearchShortcutGroup'>
                    <h2>Find People</h2>
                    <input type='text' placeholder='Find your friends' value={SearchPerson} onChange={handleSPInput}/></div>
                </div>
        </div>
    )

}
export default CommunityHubTitle