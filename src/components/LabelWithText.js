import './Label.css'
function LabelWithText(props){
    return (
        <div>
            <h4 className="InputLabel">{props.label}</h4>
            <input type="text"  id={props.inputId}></input>
        </div>
    )
}
export default LabelWithText;