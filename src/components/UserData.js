
import PropTypes from 'prop-types'
import { FaTimes } from "react-icons/fa"

const UserData = (props) => {
  const { name, email, phone, deleteUser, handleRemaind, remaind, id } = props;
  return (
    <tr onDoubleClick={() => handleRemaind(id)} className={remaind===true ? "selected": "normal"} >
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td><FaTimes className="symbol" onClick={() => deleteUser(id)} /></td>
    </tr>
  )
};
UserData.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired,
  handleRemaind: PropTypes.func.isRequired,
  remaind: PropTypes.bool,
}
export default UserData;
