import '../index.css';
function profileShowcase(props) {
    var mainStyle = ["#000033", "#FF3399", "#66CCCC"]
    var userAchivementsCount = 63
    var TotalAchivementsCount = 150
    var userTrophiesCount = 63
    var itemsOwned=112
    var typeID = props.typeID
    if (typeID === 0) {
        return (
            <div>
                <div className='profileShowcaseHeader' style={{ '--var1': mainStyle[0], '--var2': mainStyle[1] }}><p>Achievements</p></div>
                <div className='profileShowcaseBody' style={{ '--var1': mainStyle[2], '--var2': mainStyle[0] }}>
                    <div className='profileShowcaseitemContainer'>
                        <div className='items'><img src='' /></div>
                        <div className='itemsHighlight'></div>
                        <div className='items'></div>
                        <div className='items'></div>
                        <div className='itemsHighlight'></div>
                        <div className='items'></div>
                    </div>
                    <div className='profileShowcasetext'>
                        <h1>{userAchivementsCount / TotalAchivementsCount * 100}% Completed</h1>
                        <h3>{userAchivementsCount} out of {TotalAchivementsCount}</h3>
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
                        <div className='items'><img src='' /></div>
                        <div className='itemsHighlight'></div>
                        <div className='items'></div>
                        <div className='items'></div>
                        <div className='itemsHighlight'></div>
                        <div className='items'></div>
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
                        <div className='items'><img src='' /></div>
                        <div className='itemsHighlight'></div>
                        <div className='items'></div>
                        <div className='items'></div>
                        <div className='itemsHighlight'></div>
                        <div className='items'></div>
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