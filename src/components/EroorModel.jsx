import './ErrorModel.css'
function ErrorModel(props){
    const resetHandler=()=>{

    }
    return(
        <div>
        <div className='backdrop' onClick={props.onConfirm}  />
        <div className="box">
        <header className="head">
            <h2>{props.MSG.title}</h2>
        </header>
        <div className="para">
            <p>{props.MSG.message}</p>
        </div>
        
            <button onClick={props.onConfirm} className="buttonss" >
                OK
            </button>
            
        </div>
        </div>
    )
}
export default ErrorModel;