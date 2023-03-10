import PropTypes from "prop-types"
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  
    return (
    <header className="header">
        <h1 style={{color: "#183A1D"}}>{title}</h1>
        <Button color={showAdd ? "red" : "green"} text={showAdd  ? "close" : "Add" } onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// another way to do css in reactJS
// const headingStyle = {
//     color: "red", 
//     backgroundColor: "black"
// }

export default Header