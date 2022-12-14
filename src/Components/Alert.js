export default function Alert(props) {
    const capitalise = (word) => {
        let cap = word.toLowerCase();
        return cap[0].toUpperCase() + cap.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
            {
                props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
                    <strong>{capitalise(props.alert.typ)}:</strong>&nbsp;<span>{props.alert.msg}</span>
                </div>
            }
        </div>
    );
}