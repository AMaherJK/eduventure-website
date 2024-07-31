import './browsing.css'
import { useParams } from 'react-router-dom'
import PostPreview from './MiniComponents/Community Stuff/PostPreview';
import { fetchGroup } from '../../Fetch';
function Group(props) {
    const { group_id } = useParams();
    var GroupCatalog = [
        {
            GroupName: "The EC Community", GroupMembersCount: "12", imgPath: require("../../assets/imgs/Decoratives/GroupImgs/1.png"), GroupID: "1", groupDesc:"The EC Community is a vibrant, inclusive network of individuals committed to fostering innovation, collaboration, and growth. Our mission is to empower members through shared knowledge, resources, and support, enabling each person to achieve their personal and professional goals. We host regular events, workshops, and networking opportunities designed to inspire and connect like-minded individuals. Whether you're an entrepreneur, creative professional, or simply passionate about personal development, The EC Community welcomes you to join us in creating a brighter future together.",
            Posts: [{ Title: "Upcoming Office", Author: "Mahmoud Ali", Type: "Announcement", Date: "24/5/2024", contents: "We are excited to announce the renovation of our main office starting next month.", Comments: [{ User: "Linda Anderson", cDate: "2024-05-02T17:29:43Z", CommentContent: "Looking forward to the new office look!" }, { User: "John Doe", cDate: "2024-05-03T12:14:30Z", CommentContent: "Hope it won’t disrupt our workflow too much." }] }]
        },
        {
            GroupName: "HH Society", GroupMembersCount: "4", imgPath: require("../../assets/imgs/Decoratives/GroupImgs/2.png"), GroupID: "2", groupDesc:"The HH Society, short for Harbour Horizon Society, is a prestigious organization dedicated to the appreciation and preservation of maritime heritage and contemporary marine culture. Our members include maritime enthusiasts, historians, sailors, and environmentalists who are passionate about the sea and its many facets. We organize educational programs, coastal cleanups, sailing expeditions, and social gatherings that celebrate our shared love for the ocean. Join the HH Society to connect with fellow sea lovers and contribute to meaningful maritime initiatives.",
            Posts: [
                { Title: "Quarterly Meeting Scheduled", Author: "Susan Lee", Type: "Reminder", Date: "20/5/2024", contents: "Don't forget our quarterly meeting on June 1st.", Comments: [{ User: "Anna Smith", cDate: "2024-05-20T09:13:21Z", CommentContent: "I'll be there. Thanks for the reminder." }, { User: "Michael Brown", cDate: "2024-05-21T10:45:37Z", CommentContent: "Is there an agenda for the meeting?" }] },
                { Title: "New Cafeteria Menu", Author: "Jason King", Type: "Update", Date: "22/5/2024", contents: "Check out our new and improved cafeteria menu starting next week!", Comments: [{ User: "Sarah Davis", cDate: "2024-05-22T15:27:53Z", CommentContent: "Excited to try the new dishes!" }, { User: "Mark Johnson", cDate: "2024-05-23T08:30:45Z", CommentContent: "Hope there are more vegetarian options." }] }
            ]
        },
        {
            GroupName: "Igor Clan", GroupMembersCount: "5", imgPath: require("../../assets/imgs/Decoratives/GroupImgs/3.png"), GroupID: "3", groupDesc:"Igor is a dynamic collective of creative thinkers, artists, and innovators united by a shared passion for pushing the boundaries of art and technology. We believe in the power of collaboration and the magic that happens when diverse minds come together to create something extraordinary. Igor hosts regular exhibitions, hackathons, workshops, and community projects aimed at inspiring creativity and fostering a spirit of experimentation. Whether you're an artist, coder, designer, or simply someone with a creative spark, Igor is the place for you to thrive and make an impact.",
            Posts: [
                { Title: "IT System Maintenance", Author: "Mahmoud Ali", Type: "Announcement", Date: "24/5/2024", contents: "Scheduled maintenance on our IT systems this weekend.", Comments: [{ User: "Linda Anderson", cDate: "2024-05-24T10:29:43Z", CommentContent: "Thanks for the heads-up!" }, { User: "James Blake", cDate: "2024-05-24T11:15:30Z", CommentContent: "Will the email service be affected?" }] },
                { Title: "Holiday Schedule", Author: "Sandra Kim", Type: "Notice", Date: "23/5/2024", contents: "Here are the office hours for the upcoming holiday season.", Comments: [{ User: "Tom Harris", cDate: "2024-05-23T09:13:21Z", CommentContent: "Got it. Planning my leave accordingly." }, { User: "Alice Moore", cDate: "2024-05-23T10:45:37Z", CommentContent: "Thanks for the update." }] },
                { Title: "New Health Benefits", Author: "John Parker", Type: "Update", Date: "22/5/2024", contents: "We have updated our health benefits package.", Comments: [{ User: "Sarah Davis", cDate: "2024-05-22T15:27:53Z", CommentContent: "Great news, thank you!" }, { User: "Jack Wilson", cDate: "2024-05-22T16:30:45Z", CommentContent: "Where can I find more details?" }] }
            ]
        },
        {
            GroupName: "JJ House", GroupMembersCount: "3", imgPath: require("../../assets/imgs/Decoratives/GroupImgs/4.png"), GroupID: "4", groupDesc:"The J Jonah Jameson House is a unique literary and media club inspired by the legendary journalist's relentless pursuit of the truth. Our group is composed of writers, journalists, media professionals, and enthusiasts who are passionate about storytelling, investigative journalism, and media ethics. We provide a platform for members to share their work, discuss industry trends, and collaborate on projects that uphold the highest standards of journalism. Through workshops, panel discussions, and networking events, the J Jonah Jameson House fosters a community dedicated to excellence in media and the power of the written word.",
            Posts: [
                { Title: "New Project Launch", Author: "Mahmoud Ali", Type: "Announcement", Date: "24/5/2024", contents: "Excited to announce the launch of our new project.", Comments: [{ User: "Linda Anderson", cDate: "2024-05-24T10:29:43Z", CommentContent: "Can’t wait to get started!" }, { User: "John Doe", cDate: "2024-05-24T11:15:30Z", CommentContent: "When can we see the project details?" }] },
                { Title: "Office Cleaning Schedule", Author: "Susan Lee", Type: "Reminder", Date: "23/5/2024", contents: "Reminder: Office cleaning is scheduled for this weekend.", Comments: [{ User: "Anna Smith", cDate: "2024-05-23T09:13:21Z", CommentContent: "Thanks for the reminder." }, { User: "Michael Brown", cDate: "2024-05-23T10:45:37Z", CommentContent: "Will our workstations be affected?" }] },
                { Title: "Website Redesign", Author: "Jason King", Type: "Update", Date: "22/5/2024", contents: "We are redesigning our website to improve user experience.", Comments: [{ User: "Sarah Davis", cDate: "2024-05-22T15:27:53Z", CommentContent: "Looking forward to the new design!" }, { User: "Mark Johnson", cDate: "2024-05-22T16:30:45Z", CommentContent: "Hope it’s more mobile-friendly." }] },
                { Title: "Annual General Meeting", Author: "Rachel Green", Type: "Event", Date: "21/5/2024", contents: "Our AGM is scheduled for June 15th.", Comments: [{ User: "Emily White", cDate: "2024-05-21T11:24:19Z", CommentContent: "Noted. I’ll be there." }, { User: "Chris Evans", cDate: "2024-05-21T14:32:50Z", CommentContent: "Will there be an option to join virtually?" }] },
                { Title: "Employee Recognition Program", Author: "Jason King", Type: "Update", Date: "20/5/2024", contents: "We are launching a new employee recognition program.", Comments: [{ User: "Sarah Davis", cDate: "2024-05-20T15:27:53Z", CommentContent: "Great initiative!" }, { User: "Mark Johnson", cDate: "2024-05-20T16:30:45Z", CommentContent: "How can we nominate colleagues?" }] }
            ]
        }
    ];
    var result = GroupCatalog.find(({ GroupID }) => GroupID === group_id);
    console.log(fetchGroup())

    return (
        <div className='GroupPageContainer'>
            <div className='GroupInfoSidebar'>
                <img src={result.imgPath} alt='' />
                <h1 className='GroupNameTitle'>{result.GroupName}</h1>
                <p className='GroupDescParagraph'>{result.groupDesc}</p>
                <h2>{result.GroupMembersCount} Members</h2>
                <h2>{result.Posts.length} posts</h2>
            </div>
            <div className='GroupPostContainer'>
                {result.Posts.map((post, index) => (
                    <PostPreview key={index} Data={post} Comments={post.Comments} />))}
            </div>
        </div>
    )
}
export default Group
