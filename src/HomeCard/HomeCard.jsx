
function HomeCard(props) {
    return(
        <>
        <div>
        <h2>{props.time} {props.userName}</h2>
        <p>A glimpse of today</p>
        </div>
        </>
    );
}

export default HomeCard