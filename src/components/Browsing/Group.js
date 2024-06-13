import './browsing.css'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import PostPreview from './MiniComponents/Community Stuff/PostPreview';
function Group(props) {
    const { Group_id } = useParams();

    var Post1 = { Title: "Trying a post type", Author: "Mahmoud Ali", Type: "Announcement", Date: "24/5/2024", CommentCounter: "5", contents: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis faucibus nisl. Mauris gravida volutpat justo ac mollis. Vivamus eget velit ac ex gravida cursus id ac odio. Cras posuere nec eros vel dapibus. Nulla vestibulum felis id sollicitudin auctor. Quisque euismod sit amet nulla in porta. Ut eget nisi non est fermentum finibus. Etiam hendrerit nisi et turpis ullamcorper, et faucibus enim porttitor. Praesent vitae lacus vel metus suscipit tempus a non magna. Fusce nisi turpis, faucibus ut tristique a, eleifend sit amet mi. Vivamus malesuada diam eros, sit amet hendrerit enim sollicitudin nec. Sed vel lectus eleifend, dictum dui quis, vulputate sapien. Curabitur faucibus laoreet magna ac sollicitudin. Morbi vel rhoncus nisl. Maecenas tempor lobortis ligula ac faucibus. Nulla ut elementum libero. Phasellus at rhoncus metus, quis tincidunt tellus. Sed quis purus lectus. Quisque ac tristique quam. Aenean non ligula sagittis, varius diam at, venenatis tortor. Etiam sed enim nisl. Etiam malesuada nulla a tristique interdum. Quisque quis nisi lorem. Quisque lobortis lorem sit amet turpis eleifend, vel pulvinar nisi elementum. Nulla vel nulla eu libero bibendum gravida id eget nisl. Sed sed justo laoreet, interdum odio eu, pellentesque nulla. Sed eu vehicula augue. Nunc velit diam, feugiat eu augue sit amet, commodo convallis odio. Donec imperdiet sem metus, sed aliquam lectus pharetra in. Suspendisse id lacinia enim. Fusce non ante ut enim ultricies elementum vitae et dolor. Suspendisse mauris tortor, iaculis non ligula ac, mollis sollicitudin augue. Fusce varius non dolor id egestas. Pellentesque vestibulum accumsan magna, ornare laoreet dolor egestas vitae. Nullam quam libero, lacinia sed imperdiet ut, tempor ut quam. Integer vitae dapibus augue. Nam eget iaculis velit. Vestibulum arcu ante, elementum sit amet ante in, tristique mattis ante. Nullam vel aliquam erat, quis auctor augue. Phasellus accumsan rutrum massa. Cras elementum libero ex, vestibulum gravida mauris pretium in. Fusce tortor sem, consectetur ut ante ac, blandit suscipit risus. Sed lobortis euismod ligula blandit vulputate. Maecenas sapien enim, convallis convallis tortor ac, ultrices gravida velit. Ut a libero porttitor, convallis libero nec, aliquam dui. Pellentesque a hendrerit leo. Integer convallis massa id mattis efficitur. Mauris id condimentum mi. In luctus, magna ut laoreet dignissim, augue lacus scelerisque dolor, non dapibus elit est eget augue. Nunc vestibulum mi interdum nunc bibendum ullamcorper. Vivamus a nulla sodales, auctor lacus eget, condimentum metus. Integer a odio arcu. Nam id est ac ligula porta rutrum a non nisi. Nunc at eros ac metus vestibulum scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur dolor nulla, porttitor eu porta vel, faucibus eu urna. Donec at iaculis purus. " }
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


    return (
        <div className='GroupPageContainer'>
            <div className='GroupInfoSidebar'>
                <img src={require('../../assets/imgs/Decoratives/GroupImgs/1.png')} alt='' />
                <h1 className='GroupNameTitle'>Group Name</h1>
                <p className='GroupDescParagraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut commodo ipsum. Sed consectetur volutpat rhoncus. Curabitur varius neque metus, sed iaculis lectus sagittis nec. Cras tincidunt tincidunt risus, vitae vestibulum arcu feugiat quis. In commodo sollicitudin dolor ultricies tristique. </p>
                <h2>14 Members</h2>
                <h2>3 posts</h2>
            </div>
            <div className='GroupPostContainer'>
            <PostPreview Data={Post1} Comments={comments1} />
            <PostPreview Data={Post1} Comments={comments1} />
            <PostPreview Data={Post1} Comments={comments1} />
            <PostPreview Data={Post1} Comments={comments1} />
            <PostPreview Data={Post1} Comments={comments1} />
            <PostPreview Data={Post1} Comments={comments1} />
            <PostPreview Data={Post1} Comments={comments1} />
            </div>

        </div>
    )
}
export default Group
