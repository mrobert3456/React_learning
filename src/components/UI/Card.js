import "./Card.css"
function Card(props)
{
    const classes='card '+props.className; //give multiple class names
    return <div className={classes}>{props.children}</div>
}

export default Card;