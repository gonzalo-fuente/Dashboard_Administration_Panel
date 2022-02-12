import DeleteUser from "./DeleteUser";

/* Router */
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.address.city}</td>
      <td>
        <Link to={`adduser/${user.id}`} className="btn btn-secondary">
          Edit
        </Link>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target={"#staticBackdrop" + user.id}
        >
          Delete
        </button>
        <DeleteUser id={user.id} />
      </td>
    </tr>
  );
};

export default User;
