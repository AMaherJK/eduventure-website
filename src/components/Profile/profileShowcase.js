function profileShowcase(props) {
    var mainStyle = ["#000033", "#FF3399", "#66CCCC"]
    var AuroraStyle = ["#000033", "#1D8C35", "#66CCCC"]
    var mainStyle = ["#000033", "#FF3399", "#66CCCC"]
    var TotalAchivementsCount = 20
    var userTrophiesCount = 12
    var itemsOwned = 48
    var typeID = props.typeID
  

    if (typeID === 0) {
        return (
            <div>
                <div className='profileShowcaseHeader' style={{ '--var1': mainStyle[0], '--var2': mainStyle[1] }}><p>Achievements</p></div>
                <div className='profileShowcaseBody' style={{ '--var1': mainStyle[2], '--var2': mainStyle[0] }}>
                    <div className='profileShowcaseitemContainer'>
                        <img src={props.achievements[Math.floor(Math.random() * (props.achievements.length -1 + 1)) + 0].imgPath} className="items" />
                        <img src={props.achievements[Math.floor(Math.random() * (props.achievements.length -1 + 1)) + 0].imgPath} className="items" />
                        <img src={props.achievements[Math.floor(Math.random() * (props.achievements.length -1 + 1)) + 0].imgPath} className="items" />
                        <img src={props.achievements[Math.floor(Math.random() * (props.achievements.length -1 + 1)) + 0].imgPath} className="items" />
                        <img src={props.achievements[Math.floor(Math.random() * (props.achievements.length -1 + 1)) + 0].imgPath} className="items" />
                        <img src={props.achievements[Math.floor(Math.random() * (props.achievements.length -1 + 1)) + 0].imgPath} className="items" />
                    </div>
                    <div className='profileShowcasetext'>
                        <h1>{props.achievements.length / TotalAchivementsCount * 100}% Completed</h1>
                        <h3>{props.achievements.length} out of {TotalAchivementsCount}</h3>
                    </div>
                </div>
            </div>
        )
    }
    else if (typeID === 1) {
        return (
            <div>
                <div className='profileShowcaseHeader' style={{ '--var1': mainStyle[0], '--var2': mainStyle[2] }}><p>Item Showcase</p></div>
                <div className='profileShowcaseBody' style={{ '--var1': mainStyle[1], '--var2': mainStyle[0] }}>
                    <div className='profileShowcaseitemContainer'>
                        <img src={props.items[Math.floor(Math.random() * (props.items.length -1 + 1)) + 0]} className="items" />
                        <img src={props.items[Math.floor(Math.random() * (props.items.length -1 + 1)) + 0]} className="items" />
                        <img src={props.items[Math.floor(Math.random() * (props.items.length -1 + 1)) + 0]} className="items" />
                        <img src={props.items[Math.floor(Math.random() * (props.items.length -1 + 1)) + 0]} className="items" />
                        <img src={props.items[Math.floor(Math.random() * (props.items.length -1 + 1)) + 0]} className="items" />
                        <img src={props.items[Math.floor(Math.random() * (props.items.length -1 + 1)) + 0]} className="items" />
                    </div>
                    <div className='profileShowcasetext'>
                        <h1>{itemsOwned} Items owned</h1>
                        <h3>View user name trophies</h3>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div className='profileShowcaseHeader' style={{ '--var1': mainStyle[0], '--var2': mainStyle[1] }}><p>Battle Trophies</p></div>
                <div className='profileShowcaseBody' style={{ '--var1': mainStyle[2], '--var2': mainStyle[0] }}>
                    <div className='profileShowcaseitemContainer'>
                        <img src={props.trophies[Math.floor(Math.random() * (props.trophies.length -1 + 1)) + 0]} className="items" />
                        <img src={props.trophies[Math.floor(Math.random() * (props.trophies.length -1 + 1)) + 0]} className="items" />
                        <img src={props.trophies[Math.floor(Math.random() * (props.trophies.length -1 + 1)) + 0]} className="items" />
                        <img src={props.trophies[Math.floor(Math.random() * (props.trophies.length -1 + 1)) + 0]} className="items" />
                        <img src={props.trophies[Math.floor(Math.random() * (props.trophies.length -1 + 1)) + 0]} className="items" />
                        <img src={props.trophies[Math.floor(Math.random() * (props.trophies.length -1 + 1)) + 0]} className="items" />
                    </div>
                    <div className='profileShowcasetext'>
                        <h1>{userTrophiesCount} Trophies Earned</h1>
                        <h3>View user name trophies</h3>
                    </div>
                </div>
            </div>
        )
    }


}
export default profileShowcase;