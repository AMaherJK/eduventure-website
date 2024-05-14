import './browsing.css'
import Title from './MiniComponents/Title'
import TeamMember from './MiniComponents/TeamMember'
function About() {
    var AboutUsParagraph = "Introducing EduVenture Learning World, a groundbreaking graduation project merging a low-poly open-world gaming environment with an interactive web interface. Tailored for ages 6 to 18, this innovative RPG journey delves into various subjects including Mathematics, Science, Programming, Ethics, IQ, and History, seamlessly intertwining learning with gameplay excitement. Moreover, our accompanying web platform grants parents the ability to track their child's progress, participate in challenges, and tailor learning trajectories. EduVenture Learning World signifies a joint endeavor to revolutionize education by fusing technology and learning, fostering a dynamic and enjoyable educational journey for the upcoming generation."
    var MeetTheTeamParagraph = "Spotlighting the dedicated individuals behind this project, each with their own page."
    var TeamMembers = [
        { Name: "Ahmed Maher", JobDesc: "Front-End Dev", ImgID:0 },
        { Name: "Ahmed Saad", JobDesc: "Game Dev", ImgID:1 },
        { Name: "Anas Ashraf", JobDesc: "Game Dev",ImgID:2 },
        { Name: "Farah Moustafa", JobDesc: "Game Dev", ImgID:3 },
        { Name: "Hazem Aboulhassan", JobDesc: "Back-End Dev", ImgID:4 },
        { Name: "Maryam Mohamed", JobDesc: "Front-End Dev", ImgID:5 },
        { Name: "Mohamed Salah", JobDesc: "Back-End Dev", ImgID:6 }
    ]
    return (
        <div className='AboutDivContainer'>
            <div className='AboutContainer'>
                <Title msg="About Us" />
                <p className='Paragraph'>{AboutUsParagraph}</p>
                <Title msg="Meet the Team" />
                <p className='Paragraph'>{MeetTheTeamParagraph}</p>
                <div className='TeamMembersContainer'>
                    {TeamMembers.map((TMinfo, index) => (
                        <TeamMember key={index} TMinfo={TMinfo} />))}
                </div>
                <span style={{marginTop:"5%"}}/>
                <Title msg="QuestGivers" />

            </div>
        </div>
    )
}
export default About