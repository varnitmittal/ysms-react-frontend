const tile = (props) => {
    return (
        <div className={`br-20 mb-30 mr-0-xs d-flex justify-space-between align-items-center w-100per ${props.lastTile ? '' : 'mr-50'} p-20 tile ${props.tileClass}`}>
                <div className="d-flex flex-column">
                    <span className="d-flex font-weight-bold fs-30 pb-10">{props.tileCount} {props.tileClassSection? " (" + props.tileClassSection + ")" : "" }</span>
                    <span className="fs-16">{props.tileText}</span>
                </div>
            </div>
    )
}

export default tile
