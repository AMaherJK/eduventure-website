import "./CombinedSheet.css"
function NewsPrevItem(props){
    return(
        <div className="NewsPreview">
            <img src={props.item.imgPath} alt=""/>
            <div className="details">
                <h6 style={{color:"#000033"}}>{props.item.Date}</h6>
                <h6 style={{color:"#FF3399"}}>{props.item.Type}</h6>
            </div>
            <h2>{props.item.Title}</h2>
        </div>


    )
}
export default NewsPrevItem