
function Feelings(props) {
    let icon =  props.hasFeel ? 'fa-heart' : 'fa-heart-o';
    return (
        <div className="block">
            <i
                className={`fa ${icon} mg-r4 link red`}
                onClick={props.onFeelClick}
            />
            <a
                className="link hv-u"
                onClick={props.onShowClick}
            >{props.total}</a>
        </div>
    )
}
Feelings.defaultProps = {
    feel: 'none',
    feelings: [],
}

Feelings.defaultProps = {
    hasFeel: false,
    total: 0,
    onFeelClick: () => alert('Like Box Like'),
    onShowClick: () => alert('Like Box View'),
};

export default Feelings;