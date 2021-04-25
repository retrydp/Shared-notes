import React, { useState, useRef } from 'react';

import env from '../env.json';
import Error from './Error';
import { request } from '../services/api';
import Spinner from './Spinner';

const Create = () => {
  const [url, setUrl] = useState(''),
    [visibility, setVisibility] = useState({
      line: 'hide',
      form: '',
    }),
    [serverError, setServerError] = useState(false),
    [loading, setLoading] = useState(false),
    { urlF } = env,
    message = useRef(),
    noteInput = useRef(),
    token = url.match(/[0-9a-z]*$/g)[0];

  let trigger = true; // {once: true} option for onClick listener

  const sendData = (data) => {
    setLoading(true);
    request(data)
      .then(({ result, url, error }) => {
        if (result) {
          setLoading(false);
          setVisibility({
            form: 'hide',
            line: '',
          });
          setServerError(false);
          setUrl(`${urlF}/${url}`);
        } else if (!result) {
          //Failed connect to database
          setServerError(error.name);
          setLoading(false);
        }
      })
      .catch((err) => {
        //Backend error
        setLoading(false);
        setServerError(err);
      });
  };

  const loadDataFromForm = (event) => {
    event.preventDefault();
    const note = noteInput.current.value.trim();
    note ? sendData({ note }) : alert('Заполните поля');
  };

  const copyMessage = () => {
    if (trigger) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(token);
        message.current.innerHTML = '<b>Токен скопирован в буфер обмена.</b>';
        trigger = !trigger;
      }
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (serverError) {
    //Server/database error
    return <Error error={serverError} redirect="/create" />;
  }

  const { line, form } = visibility;

  return (
    <div className="side">
      <div className="form-wrapper">
        <form onSubmit={loadDataFromForm} className={form}>
          <label htmlFor="note">
            <b> Введите заметку:</b>
          </label>
          <input
            name="note"
            id="note"
            placeholder="Текст заметки"
            required
            className="input"
            ref={noteInput}
          />
          <button type="submit" className="btn send" aria-label="create note"></button>
        </form>
        <div className={`out ${line}`} onClick={copyMessage}>
          <div className="out-text" ref={message}>
            {token}
          </div>
          <button
            className={`btn add plus ${line}`}
            onClick={() =>
              setVisibility({
                form: '',
                line: 'hide',
              })
            }
            aria-label="add note"></button>
        </div>
      </div>
    </div>
  );
};

export default Create;
