import Logo from "../logoNwordmark";
function achievements() {
    var achievements = [
        { Name: "Welcome to Eduventure!", Description: "Complete the tutorial.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 1.jpg") },
        { Name: "Social Life!", Description: "Talk to an NPC.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 2.jpg") },
        { Name: "First Timer!", Description: "Achieve your first quest.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 3.jpg") },
        { Name: "Can’t handle the Heat!", Description: "Lose in the Math puzzle.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 4.jpg") },
        { Name: "Math Wizz!", Description: "Win the Math Puzzle.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 5.jpg") },
        { Name: "Human Calculator!", Description: "Win the Math Puzzle 5 times.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 6.jpg") },
        { Name: "Dazed & Confused!", Description: "Lose in the History puzzle.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 7.jpg") },
        { Name: "Historian!", Description: "Win the History puzzle.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 8.jpg") },
        { Name: "Marco... POLO!", Description: "Win the History puzzle 5 times.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 9.jpg") },
        { Name: "Adventurer!", Description: "Visit the 6 biomes.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 10.jpg") },
        { Name: "Gallop!", Description: "Ride a horse for the first time.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 11.jpg") },
        { Name: "Quick Travel!", Description: "Use a portal for the first time.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 12.jpg") },
        { Name: "Time Flies!", Description: "Pass a day in game.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 13.jpg") },
        { Name: "Novice Explorer!", Description: "Reach level 5.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 14.jpg") },
        { Name: "Trailblazer!", Description: "Reach level 10.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 15.jpg") },
        { Name: "Maverick!", Description: "Reach level 15.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 16.jpg") },
        { Name: "True Contender!", Description: "Reach level 20.", imgPath: require("../../assets/imgs/aaa/Achievements/Artboard 17.jpg") },
    ];
    var userInfo = {imgPath: require("../../assets/imgs/StockImgs/stockimgdefault.png"),themeID:3, name: "AMaherJK"}

    return (<>
            <Logo ver={0} />
                <div className="header">
                    <img src={userInfo.imgPath} className="headerUserPic" style={{marginLeft:"25rem"}}/>
                    <h1 style={{marginLeft:"5%"}}>{userInfo.name}</h1>
                </div>
        <div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap: "2rem", backgroundColor: "#000033", justifyContent:"space-around" }}>
            {achievements.map((achievement, index) => (
                <img key={index} src={achievement.imgPath} alt={achievement.Name} style={{ border: "2px solid #fff" }} />
            ))}
        </div>
    </>

    )
}
export default achievements