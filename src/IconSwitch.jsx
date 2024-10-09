export function IconSwitch ({icon,onSwitch}){
    function click(){

    }
    return(
        <span className="material-icons" onClick={onSwitch}>
            {icon}
        </span>
    )
}