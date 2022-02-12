import User from "../components/User";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAlphaDown,
  faSortAlphaDownAlt,
} from "@fortawesome/free-solid-svg-icons";

/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/users/usersAction";

/* Router */
import { Link } from "react-router-dom";

const UsersList = () => {
  const { users, isLoading, error } = useSelector((state) => ({
    users: state.users.users,
    isLoading: state.users.isLoading,
    error: state.users.error,
  }));

  const [orderedUsers, setOrderedUsers] = useState([]);
  const [sortedAZ, setSortedAZ] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const sortAZ = () => {
    let newUsers = [];

    if (!sortedAZ) {
      newUsers = users.sort((a, b) => (a.username < b.username ? -1 : 1));
      setSortedAZ(true);
    } else {
      newUsers = users.sort((a, b) => (a.username > b.username ? -1 : 1));
      setSortedAZ(false);
    }
    setOrderedUsers(newUsers);
  };

  console.log(error);

  return (
    <div className="bg-light mb-5 rounded p-3 shadow">
      <div className="d-flex justify-content-between mb-3 px-3">
        <h3>User List</h3>
        <Link to="/adduser" className="btn btn-primary">
          Add New
        </Link>
      </div>
      {/* Loading Message */}
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {/* Error Handling */}
          {error.length !== 0 ? (
            <Error>Oops... Something went Wrong!</Error>
          ) : (
            /* Users List */
            <div>
              {users.length === 0 ? (
                <h4 className="text-danger fst-italic">
                  There's no Users Left
                </h4>
              ) : (
                <table className="table-striped table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>
                        Username
                        <span onClick={sortAZ}>
                          {sortedAZ ? (
                            <FontAwesomeIcon
                              className="btn ms-2 fs-5 p-0"
                              icon={faSortAlphaDown}
                            />
                          ) : (
                            <FontAwesomeIcon
                              className="btn ms-2 fs-5 p-0"
                              icon={faSortAlphaDownAlt}
                            />
                          )}
                        </span>
                      </th>
                      <th>Email</th>
                      <th>City</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderedUsers.length
                      ? orderedUsers.map((user) => (
                          <User user={user} key={user.id} />
                        ))
                      : users.map((user) => <User user={user} key={user.id} />)}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UsersList;
