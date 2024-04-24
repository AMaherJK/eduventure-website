import '../index.css';
import LogoNwordmark from './logoNwordmark'
function Footer(props) {

    return (
        <>
            <div className='Footer'>
                <div className='subFooter'>Sign Up & Download the game</div>
                <ul className='socialmedia'>
                    <li><a href="https://www.facebook.com" target="_blank" rel='noopener noreferrer'><img src={require("../assets/imgs/SocialMedia/Facebook.png")} alt='facebook' /></a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel='noopener noreferrer'><img src={require("../assets/imgs/SocialMedia/Instagram Circle.png")} alt='instagram' /></a></li>
                    <li><a href="https://www.x.com" target="_blank" rel='noopener noreferrer'><img src={require("../assets/imgs/SocialMedia/TwitterX.png")} alt='X formarly known as twitter' /></a></li>
                    <li><a href="https://www.Tiktok.com" target="_blank" rel='noopener noreferrer'><img src={require("../assets/imgs/SocialMedia/TikTok.png")} alt='TikTok' /></a></li>
                    <li><a href="https://www.youtube.com" target="_blank" rel='noopener noreferrer'><img src={require("../assets/imgs/SocialMedia/YouTube.png")} alt='Youtube' /></a></li>
                    <li><a href="https://www.discord.com" target="_blank" rel='noopener noreferrer'><img src={require("../assets/imgs/SocialMedia/Discord New.png")} alt='Discord' /></a></li>
                </ul>
                <img src={require("../assets/imgs/Dark - Horizontal.png")} style={{ width: "40%" }} />
                <p>© 2024 Eduventure Project. Eduventure! and any associated logos <br />are trademarks, service marks are registered trademarks.</p>
                <img src={require("../assets/imgs/SocialMedia/ESRBRating.png")} />
            </div>
        </>
    )

}
export default Footer