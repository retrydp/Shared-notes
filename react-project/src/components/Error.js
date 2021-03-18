import React from "react";

const Error = ({ error, redirect }) => {
  setTimeout(() => (window.location.href = redirect), 5000);
  return (
    <div className="error">
      Произошла ошибка, техническая информация:&nbsp;&nbsp;<b>{`${error}`}</b>
    </div>
  );
};

export default Error;
