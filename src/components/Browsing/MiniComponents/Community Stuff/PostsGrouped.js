import PostPreview from "./PostPreview";
import "../../browsing.css"
import { useParams } from "react-router-dom";
function PostsGrouped(){
    const { type } = useParams();
    var catalog=
    [
        {
            "Title": "Introduction to Game Controls",
            "Author": "GameMaster101",
            "Type": "Basics",
            "Date": "12/6/2024",
            "Contents": "A comprehensive guide to the basic controls of our game.",
            "Comments": [
                {
                    "User": "PlayerOne",
                    "cDate": "2024-06-13T08:45:30Z",
                    "CommentContent": "This helped me get started quickly, thanks!"
                },
                {
                    "User": "GamerGirl",
                    "cDate": "2024-06-13T10:15:50Z",
                    "CommentContent": "Very useful for beginners."
                }
            ]
        },
        {
            "Title": "Understanding the HUD",
            "Author": "LevelUpGuy",
            "Type": "Basics",
            "Date": "15/6/2024",
            "Contents": "Learn about Hot Key Controls",
            "Comments": [
                {
                    "User": "NoobMaster",
                    "cDate": "2024-06-16T12:34:22Z",
                    "CommentContent": "Finally understand what all those icons mean!"
                },
                {
                    "User": "ProGamer",
                    "cDate": "2024-06-16T14:00:50Z",
                    "CommentContent": "Clear and informative guide."
                }
            ]
        },

        {
            "Title": "Controller or Keyboard & Mouse? Find out now",
            "Author": "CraftingGuru",
            "Type": "Basics",
            "Date": "20/6/2024",
            "Contents": "Learn the essentials of crafting items in the game.",
            "Comments": [
                {
                    "User": "CraftMaster",
                    "cDate": "2024-06-21T13:20:15Z",
                    "CommentContent": "This guide made crafting so much easier."
                },
                {
                    "User": "ItemCollector",
                    "cDate": "2024-06-21T15:10:40Z",
                    "CommentContent": "Very detailed and helpful."
                }
            ]
        },
        {
            "Title": "Controller Tips",
            "Author": "ExplorerJoe",
            "Type": "Basics",
            "Date": "22/6/2024",
            "Contents": "Tips for exploring the game world and discovering hidden secrets.",
            "Comments": [
                {
                    "User": "Wanderer",
                    "cDate": "2024-06-23T10:05:50Z",
                    "CommentContent": "Found so many hidden areas thanks to this!"
                },
                {
                    "User": "MapMaker",
                    "cDate": "2024-06-23T12:30:25Z",
                    "CommentContent": "Exploration just got a lot more fun."
                }
            ]
        }
    ]
    

    return(
        <div className="postsgroupedContainer">
        <h1 style={{color:"#fff"}}>Posts regarding {type}</h1>
        {catalog.map((post, index) => (
                    <PostPreview key={index} Data={post} Comments={post.Comments} />))}

        </div>
    )
}
export default PostsGrouped