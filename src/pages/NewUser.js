import { useState } from "react";
import Form from "../components/Form";

/* Redux */
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/users/usersAction";

/* Router */
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: {
      city: "",
    },
  });

  const [error, setError] = useState(false);

  const { users } = useSelector((state) => ({
    users: state.users.users,
  }));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name !== "city") {
      if (users.length) {
        const lastIndex = users[users.length - 1].id;
        setUser({ ...user, id: lastIndex + 1, [name]: value });
      } else {
        setUser({ ...user, id: 1, [name]: value });
      }
    } else {
      setUser({ ...user, address: { [name]: value } });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name === "" || user.email === "") {
      setError(true);
    } else {
      setError(false);
      dispatch(addUser(user));
      navigate("/");
    }
  };

  return (
    <Form
      user={user}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
      setError={setError}
    >
      Add New User
    </Form>
  );
};

export default NewUser;
