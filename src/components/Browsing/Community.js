import './browsing.css'
import CommunityHubTitle from './MiniComponents/CommunityHubTitle'
function Community() {
    return (
        <div className='CommunityDiv'>
            <div className='CommunityContainer'>
                <div className='CommunitySection'>
                    <div className='SectionTitle'>
                        <img src={require("../../assets/imgs/icons/CommunityHub/Icon-Globe.png")} className='Communityicon' alt='' />
                        <h1>Community Hub</h1>
                    </div>
                    <CommunityHubTitle />
                </div>

                <div className='CommunitySection'>
                    <div className='SectionTitle'>
                        <img src={require("../../assets/imgs/icons/CommunityHub/Icon-Pin.png")} className='Communityicon' alt='' />
                        <h1>Pinned Threads</h1>
                    </div>
                    <div className='CommunityPlaceholder'>CommunityPlaceholder</div>
                </div>
                <div className='CommunitySection'>
                    <div className='SectionTitle'>
                        <img src={require("../../assets/imgs/icons/CommunityHub/Icon-Fire.png")} className='Communityicon' alt='' />
                        <h1>Hot Threads</h1>
                    </div>
                    <div className='CommunityPlaceholder'>CommunityPlaceholder</div>
                </div>
                <div className='CommunitySection'>
                    <div className='SectionTitle'>
                        <img src={require("../../assets/imgs/icons/CommunityHub/Icon-New.png")} className='Communityicon' alt='' />
                        <h1>New Threads</h1>
                    </div>
                    <div className='CommunityPlaceholder'>CommunityPlaceholder</div>
                </div>


            </div>
        </div>
    )
}
export default Community