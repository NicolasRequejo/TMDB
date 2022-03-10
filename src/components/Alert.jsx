const Alert = (param) => {
  return (
    <div
      className="notification"
      style={{
        width: "40vw",
        top: "1rem",
        margin: "0 auto",
        zIndex: "50",
        display: param.param.display ? "block" : "none",
      }}
    >
      <button className="delete"></button>
      <strong>{param.param.message}</strong>
    </div>
  );
};

export default Alert;
