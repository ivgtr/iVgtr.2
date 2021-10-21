import React from "react";

export const BoxLayout: React.FC = ({ children }) => {
  return <div className="sm:grid items-center justify-center">{children}</div>;
};
