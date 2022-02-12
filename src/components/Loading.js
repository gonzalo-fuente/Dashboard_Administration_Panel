const Loading = () => {
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h4 className="ms-2 fs-italic text-primary">Loading...</h4>
    </div>
  );
};

export default Loading;
