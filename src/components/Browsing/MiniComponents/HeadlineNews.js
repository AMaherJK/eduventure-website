import './CombinedSheet.css'
function HeadlineNews(props){

    return(
        <div className='HeadlineNews'>
            <img src={props.Headline[0].imgPath} alt=''/>
            <div className='HeadlineInfo'>
                <h1>{props.Headline[0].Title}<span style={{color:"#FF3399"}}>!</span> </h1>
                <div className='TitleUnderline1'/>
                <div className='TitleUnderline2'/>
                <p>{props.Headline[0].textPreview}</p>
            </div>
        </div>
    )

}
export default HeadlineNews