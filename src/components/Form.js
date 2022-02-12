import Error from "./Error";

/* Router */
import { Link } from "react-router-dom";

const Form = ({
  children,
  user,
  handleChange,
  handleSubmit,
  error,
  setError,
}) => {
  const { name, username, email } = user;
  const { city } = user.address;

  return (
    <div className="w-50 bg-light mx-auto mb-5 rounded p-3 shadow">
      <h3>{children}</h3>
      {error && (
        <Error setError={setError}>
          Name and Email are <strong>MANDATORY</strong> fields
        </Error>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="city"
            value={city}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-success me-4">Submit</button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
