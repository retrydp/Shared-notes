import React from "react";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="side">
      <div className="side-header">
        <Link className=" btn-link btn add" to="/create">
          <span className="hide">Create new note</span>
        </Link>
        <Link className="btn-link btn view" to="/note">
          <span className="hide">Search for note</span>
        </Link>
      </div>
      <div className="wrapper">
        <b>Shared notes</b> - сервис для обмена заметками. Создайте заметку, отправте ссылку вашему другу. После просмотра заметка будет удалена(или по истечению 15 минут с момента создания).
        <br />
        <br />
        Как сделать заметку:
        <ul className="items">
          <li>Пройдите по ссылке</li>
          <li>Вставте текст и нажмите Create</li>
          <li>Отправте сгенерированый адрес другу</li>
        </ul>
        Как прочитать заметку? Перейдите по присланному URL, либо введите адрес в адресную строку.
      </div>
    </div>
  );
};

export default Main;
