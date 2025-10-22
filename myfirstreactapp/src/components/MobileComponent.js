const MobileComponent = (props) => {

    let {counterVariable, name} = props

    return(
        <>
        <h1>This is App Component {counterVariable} </h1>
        <h1>This is MobileComponent for {name}</h1>
        </>
        
    )
}

export default MobileComponent