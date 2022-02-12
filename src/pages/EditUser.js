import { useEffect, useState } from "react";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../store/users/usersAction";
import { fetchUser } from "../store/users/usersAction";

/* Router */
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import Loading from "../components/Loading";

const EditUser = () => {
  const { user, isLoading } = useSelector((state) => ({
    user: state.users.user,
    isLoading: state.users.isLoading,
  }));

  const [editedUser, setEditedUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      city: "",
    },
  });

  const [error, setError] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setEditedUser(...user);
    }
  }, [user]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name !== "city") {
      setEditedUser({ ...editedUser, [name]: value });
    } else {
      setEditedUser({ ...editedUser, address: { [name]: value } });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedUser.name === "" || editedUser.email === "") {
      setError(true);
    } else {
      setError(false);
      dispatch(editUser(editedUser));
      navigate("/");
    }
  };

  return (
    <>
      {/* Loading Message */}
      {isLoading ? (
        <Loading />
      ) : (
        editedUser && (
          <Form
            user={editedUser}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            error={error}
            setError={setError}
          >
            Edit User
          </Form>
        )
      )}
    </>
  );
};

export default EditUser;
