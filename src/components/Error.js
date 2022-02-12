const Error = ({ children, setError }) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={() => {
          setError(false);
        }}
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Error;
