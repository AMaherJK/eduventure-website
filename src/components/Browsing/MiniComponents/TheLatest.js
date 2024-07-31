import "./CombinedSheet.css"
import NewsPrevItem from "./NewsPrevItem"
import { Link } from "react-router-dom"
function TheLatest() {
    var NewsCatalog = [
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault1.png"), ID: "19", Date: "5/8/2024", Type: "Announcement", Title: "New partnership announcement", content: "We are excited to announce a new partnership that will bring more resources and opportunities to our Eduventure community. Stay tuned for more details!" },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault2.png"), ID: "18", Date: "30/7/2024", Type: "Update Log", Title: "Eduventure V2.5 sneak peek", content: "Get a sneak peek at the upcoming Eduventure V2.5 release. This update includes new features and enhancements to improve your experience." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault2.png"), ID: "17", Date: "25/7/2024", Type: "Community", Title: "Community challenge results", content: "The results are in! Check out the winners of our latest community challenge and see their amazing contributions." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault2.png"), ID: "16", Date: "20/7/2024", Type: "Event News", Title: "New events scheduled", content: "We have scheduled a series of new events for the coming months. Mark your calendars and join us for exciting learning opportunities." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault1.png"), ID: "15", Date: "15/7/2024", Type: "Update Log", Title: "Minor updates and fixes", content: "This update includes minor bug fixes and performance improvements to ensure a smooth experience." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault2.png"), ID: "14", Date: "10/7/2024", Type: "Community", Title: "Eduventure user guide", content: "Introducing our comprehensive Eduventure user guide. Learn how to make the most out of all the features and tools available." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault1.png"), ID: "13", Date: "5/7/2024", Type: "Announcement", Title: "Partnership with new educational platforms", content: "We are thrilled to announce our partnership with several new educational platforms. This will provide our users with more diverse content and learning materials." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault2.png"), ID: "12", Date: "1/7/2024", Type: "Event News", Title: "Upcoming feature walkthrough", content: "Join us for a walkthrough of the upcoming features in Eduventure. Get an in-depth look at what's new and how to use them." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault2.png"), ID: "11", Date: "25/6/2024", Type: "Community", Title: "User feedback and testimonials", content: "Read some of the amazing feedback and testimonials from our community members. Learn how Eduventure is making a difference in their learning journey." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault1.png"), ID: "10", Date: "20/6/2024", Type: "Update Log", Title: "Eduventure V2.4 release notes", content: "Eduventure V2.4 is here! Check out the release notes for a detailed list of new features, improvements, and bug fixes." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault1.png"), ID: "9", Date: "15/6/2024", Type: "Event News", Title: "Eduventure summer contest", content: "Don't miss our summer contest! Participate and stand a chance to win exciting prizes. Details on how to enter are available on our website." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault2.png"), ID: "8", Date: "10/6/2024", Type: "Community", Title: "Eduventure community highlights", content: "This month, we are highlighting some of the best contributions from our community. Check out the inspiring stories and projects." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault1.png"), ID: "7", Date: "30/5/2024", Type: "Update Log", Title: "Bug fixes and performance improvements", content: "We've rolled out several bug fixes and performance improvements to enhance your experience with Eduventure." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault1.png"), ID: "6", Date: "20/5/2024", Type: "Event News", Title: "Join our next webinar", content: "Join us for our next webinar where we will discuss the latest trends in education technology and how to leverage Eduventure for better learning outcomes." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault2.png"), ID: "5", Date: "15/5/2024", Type: "Community", Title: "Eduventure user spotlight", content: "This month, we are shining the spotlight on some of our most active users. Read their stories and learn from their experiences." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault1.png"), ID: "4", Date: "1/5/2024", Type: "Announcement", Title: "New features coming to Eduventure", content: "Exciting new features are coming to Eduventure! Learn about what's in store and how these updates will enhance your learning experience." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault1.png"), ID: "0", Date: "25/4/2024", Type: "Community", Title: "Eduventure Coming soon!", content: "We are thrilled to announce that Eduventure is coming soon. Get ready for an innovative platform designed to revolutionize education." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault2.png"), ID: "1", Date: "12/3/2024", Type: "Event News", Title: "Summer event update and changes", content: "Our summer event has been updated with new activities and changes. Check out the details and join the fun!" },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault1.png"), ID: "2", Date: "7/12/2023", Type: "Update Log", Title: "Eduventure V2.3 changelog", content: "Eduventure V2.3 has been released. Take a look at the changelog for a comprehensive list of updates and improvements." },
        { imgPath: require("../../../assets/imgs/StockImgs/stockimgdefault2.png"), ID: "3", Date: "7/12/2023", Type: "Update Log", Title: "Eduventure V2.3 changelog", content: "Eduventure V2.3 has been released. Take a look at the changelog for a comprehensive list of updates and improvements." }
        ];     

    var LatestNews=[NewsCatalog[0],NewsCatalog[1],NewsCatalog[2]]
    
    return (
        <div className="TheLatest">
            <div className="Title">
                <h1>The Latest</h1>
                <Link to="/News"><h4>Go to news page</h4></Link>
            </div>
            <div className="NewsContainer">
                {LatestNews.map((item, index) => (
                    <NewsPrevItem key={index} item={item} />))}
            </div>
        </div>
    )
}
export default TheLatest