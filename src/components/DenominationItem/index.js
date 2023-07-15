import './index.css'

const List = props => {
  const {denominationsList, onDelete} = props
  const {id, value} = denominationsList
  const isClicked = () => {
    onDelete(id)
  }

  return (
    <li className="list-cont">
      <button className="btn" type="button" onClick={isClicked}>
        {value}
      </button>
    </li>
  )
}
export default List
