import { useState } from 'react';
import './browsing.css'
import CommunityHubTitle from './MiniComponents/Community Stuff/CommunityHubTitle'
import PostPreview from './MiniComponents/Community Stuff/PostPreview'
function Community() {
    var Post1 = { Title: "Introducing Eduventure!", Author: "Mahmoud Ali", Type: "Announcement", Date: "24/5/2024", CommentCounter: "5", contents: "We are thrilled to announce the release of Eduventure 3.0! This major update brings a host of new features designed to enhance your learning experience. From a completely revamped user interface to powerful new tools and resources, Eduventure 3.0 is packed with everything you need to succeed. Join us for a live demo on July 15th to explore all the exciting new capabilities. We can't wait for you to experience the future of education with Eduventure 3.0! " }
    var comments1 = [
        { User: "Ahmed Maher", cDate: "2024-04-23T19:03:34Z", CommentContent: "This is beautiful! Exciting news!" },
        { User: "Sara Ali", cDate: "2024-04-24T10:15:45Z", CommentContent: "Great job, everyone!" },
        { User: "John Doe", cDate: "2024-04-25T14:30:21Z", CommentContent: "Can't wait to see what's next." },
        { User: "Emily Smith", cDate: "2024-04-26T08:45:50Z", CommentContent: "Impressive work, team!" },
        { User: "Michael Brown", cDate: "2024-04-27T12:00:00Z", CommentContent: "This is a game-changer." },
        { User: "Jessica Lee", cDate: "2024-04-28T09:22:33Z", CommentContent: "Fantastic effort by all involved!" },
        { User: "David Wilson", cDate: "2024-04-29T16:47:11Z", CommentContent: "This is going to be huge!" },
        { User: "Sophia Martinez", cDate: "2024-04-30T11:35:27Z", CommentContent: "Absolutely love this!" },
        { User: "James Taylor", cDate: "2024-05-01T13:14:56Z", CommentContent: "Remarkable achievement." },
        { User: "Linda Anderson", cDate: "2024-05-02T17:29:43Z", CommentContent: "This news made my day!" }];
    var comments2 = [
        { User: "Alice Johnson", cDate: "2024-05-03T10:20:30Z", CommentContent: "Lovely!" },
    ];
    var Post2 = { Title: "Community Guidelines", Author: "Hassan Hussain", Type: "Basics", Date: "1/5/2024", CommentCounter: "12", contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis faucibus nisl. Mauris gravida volutpat justo ac mollis. Vivamus eget velit ac ex gravida cursus id ac odio. Cras posuere nec eros vel dapibus. Nulla vestibulum felis id sollicitudin auctor. Quisque euismod sit amet nulla in porta. Ut eget nisi non est fermentum finibus. Etiam hendrerit nisi et turpis ullamcorper, et faucibus enim porttitor. Praesent vitae lacus vel metus suscipit tempus a non magna" }
    var post3 = {
        Title: "Game Mechanics: Mastering the Basics",
        Author: "Alex Johnson",
        Type: "Basics",
        Date: "18/6/2024",
        CommentCounter: "15",
        contents: "Understanding the fundamental game mechanics is crucial for any player aiming to excel. In this post, we dive deep into the core mechanics, providing you with tips and tricks to master the basics. Whether you're new to the game or looking to brush up on your skills, this guide will set you on the right path. Join the discussion and share your own strategies!"
    };
    var comments3 = [
        { User: "PlayerOne", cDate: "2024-06-18T14:20:34Z", CommentContent: "This is exactly what I needed, thank you!" },
        { User: "GamerGirl", cDate: "2024-06-18T15:10:22Z", CommentContent: "Great tips! I’ve already improved my gameplay." },
        { User: "NoobMaster", cDate: "2024-06-18T16:45:12Z", CommentContent: "Can someone explain the dodge mechanic in more detail?" },
        { User: "ProGamer", cDate: "2024-06-18T17:05:44Z", CommentContent: "@NoobMaster Sure, the dodge mechanic is all about timing..." },
        { User: "DragonSlayer", cDate: "2024-06-18T18:20:11Z", CommentContent: "The section on resource management was really helpful." },
        { User: "KnightRider", cDate: "2024-06-18T19:35:47Z", CommentContent: "I think the guide could use more info on advanced tactics." },
        { User: "Wanderer", cDate: "2024-06-18T20:10:39Z", CommentContent: "Loving the detailed explanations!" },
        { User: "MapMaker", cDate: "2024-06-18T21:25:53Z", CommentContent: "Can you add a video tutorial? That would be awesome." },
        { User: "RogueAgent", cDate: "2024-06-18T22:15:28Z", CommentContent: "This is super helpful for new players, thanks!" },
        { User: "ShadowHunter", cDate: "2024-06-18T23:05:16Z", CommentContent: "I’ve shared this with my friends. Great resource!" },
        { User: "MageMaster", cDate: "2024-06-19T00:35:49Z", CommentContent: "Looking forward to more posts like this." },
        { User: "StealthNinja", cDate: "2024-06-19T01:20:02Z", CommentContent: "The tips on stealth gameplay were spot on!" },
        { User: "BattleMage", cDate: "2024-06-19T02:45:23Z", CommentContent: "Anyone else having trouble with the latest update?" },
        { User: "EpicHero", cDate: "2024-06-19T03:10:34Z", CommentContent: "@BattleMage Not me, everything’s running smoothly." },
        { User: "CyberWarrior", cDate: "2024-06-19T04:05:10Z", CommentContent: "This guide helped me win my last match, thanks!" }
    ];
    var post4 = {
        Title: "Unlocking All Achievements: Tips and Tricks",
        Author: "Emily Carter",
        Type: "Basics",
        Date: "22/6/2024",
        CommentCounter: "12",
        contents: "Unlocking all the achievements in our game can be a daunting task, but with the right strategies, you can earn them all. In this post, we'll share insider tips and tricks to help you achieve 100% completion. From hidden secrets to expert gameplay advice, this guide covers everything you need to know. Share your own achievement milestones and join the conversation!"
    };
    var comments4 = [
        { User: "AchievementHunter", cDate: "2024-06-22T10:10:34Z", CommentContent: "This guide is a lifesaver, I was stuck on the final achievement!" },
        { User: "Completionist123", cDate: "2024-06-22T11:45:22Z", CommentContent: "Finally unlocked all achievements thanks to this." },
        { User: "GamerGeek", cDate: "2024-06-22T12:20:12Z", CommentContent: "Can you add more tips on the stealth achievements?" },
        { User: "TrophyCollector", cDate: "2024-06-22T13:35:44Z", CommentContent: "This helped me find the last hidden area!" },
        { User: "AchievementGuru", cDate: "2024-06-22T14:10:11Z", CommentContent: "Great guide, very detailed and helpful." },
        { User: "UnlockMaster", cDate: "2024-06-22T15:25:47Z", CommentContent: "I appreciate the step-by-step instructions." },
        { User: "BadgeManiac", cDate: "2024-06-22T16:10:39Z", CommentContent: "Got my platinum trophy today, thanks!" },
        { User: "AchievementAce", cDate: "2024-06-22T17:25:53Z", CommentContent: "Any tips for the multiplayer achievements?" },
        { User: "QuestSeeker", cDate: "2024-06-22T18:15:28Z", CommentContent: "This post should be pinned, super useful." },
        { User: "HeroOfLegends", cDate: "2024-06-22T19:05:16Z", CommentContent: "Thanks for the help, finally 100% complete!" },
        { User: "ExplorerX", cDate: "2024-06-22T20:35:49Z", CommentContent: "Struggling with the last boss achievement, any advice?" },
        { User: "TrophyHunter", cDate: "2024-06-22T21:20:02Z", CommentContent: "@ExplorerX Use the shield tactic, it worked for me!" }
    ];
    var Post5 = {
        Title: "New Feature: Daily Challenges",
        Author: "Laura Stevens",
        Type: "Basics",
        Date: "24/6/2024",
        CommentCounter: "0",
        contents: "We are excited to introduce Daily Challenges in our game! Each day, players will have the opportunity to complete unique tasks and earn exclusive rewards. This new feature aims to keep the gameplay fresh and engaging. Give it a try and let us know your thoughts in the comments."
    };
    
    var comments5 = [];
    const [Post6,setPost6]=useState({
        Title: "Guide to Character Customization",
        Author: "Mark Thompson",
        Type: "Basics",
        Date: "25/6/2024",
        CommentCounter: "1",
        contents: "Customizing your character is one of the most enjoyable aspects of our game. In this guide, we provide an overview of the customization options available, from outfits to abilities. Discover how to create a unique character that reflects your personal style. We'd love to hear your feedback and see your custom characters!"
    })
    
    
    var comments6 = [
        { User: "CreativeGamer", cDate: "2024-06-25T14:30:21Z", CommentContent: "Looking forward to trying this out!" }
    ];
    
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
                    <PostPreview Data={Post1} Comments={comments1} />
                    <PostPreview Data={Post2} Comments={comments2} />
                </div>
                <div className='CommunitySection'>
                    <div className='SectionTitle'>
                        <img src={require("../../assets/imgs/icons/CommunityHub/Icon-Fire.png")} className='Communityicon' alt='' />
                        <h1>Hot Threads</h1>
                    </div>
                    <PostPreview Data={post3} Comments={comments3} />
                    <PostPreview Data={post4} Comments={comments4} />
                </div>
                <div className='CommunitySection'>
                    <div className='SectionTitle'>
                        <img src={require("../../assets/imgs/icons/CommunityHub/Icon-New.png")} className='Communityicon' alt='' />
                        <h1>New Threads</h1>
                    </div>
                    <PostPreview Data={Post5} Comments={comments5} />
                    <PostPreview Data={Post6} Comments={comments6} />
                </div>

                <div className='writepostbtn'>WRITE A POST</div>
                
            </div>
        </div>
    )
}
export default Community