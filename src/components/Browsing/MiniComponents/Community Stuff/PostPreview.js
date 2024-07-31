import './CommunitySheet.css'
import { useState } from 'react';
function PostPreview(props) {
    const [isActive, setIsActive] = useState(false);
    const [C_isActive, C_setIsActive] = useState(false);
    const [PostTextArea, setPostTextArea]=useState("");
    function ToggleContentsPreview() { setIsActive(!isActive) }
    function ToggleCommentsPrev() { C_setIsActive(!C_isActive) }
    function HandlePostTextAreaChange(e){e.preventDefault();setPostTextArea(e.target.value)}
    function emptyPostTextArea(){setPostTextArea("");ToggleCommentsPrev();}
    function sendPostTextArea(){
        console.log(PostTextArea)
    }
    return (
        <div className={isActive ? 'expandedContainer' : 'PostPrevContainer'}>
            <div className='PrevContainer'>
                <div className='PostPrevContents'>
                    <h1>{props.Data.Title}</h1>
                    <div className='ContentsData'>
                        <h3 className='Author'>{props.Data.Author}</h3>
                        <h3 className='Type'>{props.Data.Type}</h3>
                        <h3 className='Date'>{props.Data.Date}</h3>
                    </div>
                </div>
                <div className='PostPrevLSide'>
                    <div className='CommentsButton' onClick={ToggleCommentsPrev}>    <h2>{props.Comments.length}</h2>    </div>
                    <div className={`Toggle ${isActive ? "ToggleActive" : "ToggleNotActive"}`} onClick={ToggleContentsPreview}>
                    </div>
                </div>
            </div>
            {isActive ? <p>{props.Data.contents}</p> : null}
            {C_isActive ?
                <div className='CommentPopUpContainer'>
                    <div className='CommentsContainer'>
                        <div className='Title'>
                            <h1>{props.Data.Title}</h1>
                            <div className='CloseBtn' onClick={ToggleCommentsPrev}>X</div>
                        </div>
                        <div className='ContentsData p50'><h3 className='Author'>{props.Data.Author}</h3><h3 className='Type'>{props.Data.Type}</h3><h3 className='Date'>{props.Data.Date}</h3></div>
                        <div className='CommentBox'>
                        {props.Comments.map((comment, index) => (
                            <div className="Comment" key={index}>
                                <div className='T'>
                                    <div className='T2'>
                                        <a>{comment.User}</a>
                                    </div>
                                    <h4>15h</h4>
                                </div>
                                <p>{comment.CommentContent}</p>
                                <div className='CommentSeperator'/>
                            </div>
                        ))}
                        <div className='PostAComment'>
                            <textarea value={PostTextArea} onChange={HandlePostTextAreaChange} placeholder='Write a comment...'/>
                            <div className='Btns'>
                            <button className='cancel' onClick={emptyPostTextArea}>Cancel</button>
                            <button className='post' onClick={sendPostTextArea}>Post</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                : null}
        </div>

    )

}
export default PostPreview