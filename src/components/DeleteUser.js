/* Redux */
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/users/usersAction";

const DeleteUser = ({ id }) => {
  const dispatch = useDispatch();

  const removeUser = () => {
    dispatch(deleteUser(id));
  };

  return (
    <div
      className="modal fade"
      id={"staticBackdrop" + id}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Delete User
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Do you <em className="text-danger">REALLY</em> want to{" "}
            <em className="text-danger">DELETE</em> this{" "}
            <em className="text-danger">USER</em>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={removeUser}
              data-bs-dismiss="modal"
            >
              Yes, I Want to Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
