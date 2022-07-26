function Child(props) {
    function handleClick() {
        console.log('this is ' + props.name)
    }

    return (
        <div onClick={handleClick}>
            {props.name}
        </div>
    )
}

export { Child }

