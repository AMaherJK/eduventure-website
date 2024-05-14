import '../browsing.css'
function Title(props){
    return(
        <div className='TitleContainer'>
        <h1>{props.msg}<span style={{color:"#FF3399"}}>!</span></h1>
        <div className='TitleUnderline1'/>
        <div className='TitleUnderline2'/>
    </div>


    )
}
export default Title