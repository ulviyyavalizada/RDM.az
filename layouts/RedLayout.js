import react from "react";

const RedLayout = ({ children }) => {
  return (
    <div style={{ background: "red" }}>
      <header />
      {children}
      <footer />
    </div>
  );
};

export default RedLayout;
