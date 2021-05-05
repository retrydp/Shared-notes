import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

import env from '../env.json';
import Error from './Error';
import { request } from '../services/api';
import Spinner from './Spinner';

const Note = () => {
  const { urlF } = env,
    token = useRef(),
    { noteURL } = useParams(),
    [noteText, setNoteText] = useState(''),
    [visibility, setVisibility] = useState({
      line: 'hide',
      form: 'hide',
      error: 'hide',
    }),
    [serverError, setServerError] = useState(false),
    [loading, setLoading] = useState(false);

  useEffect(() => {
    if (noteURL) {
      setLoading(true);
      request({ url: noteURL })
        .then(({ result, note, text, error }) => {
          if (result) {
            setLoading(false);
            setServerError(false);
            setNoteText(note);
            setVisibility({
              line: '',
              form: 'hide',
              error: 'hide',
            });
          } else if (!result) {
            setLoading(false);
            if (text) {
              // Note not found
              setVisibility({
                line: 'hide',
                form: 'hide',
                error: '',
              });
            } else {
              // Failed connect to database
              setServerError(error.name);
            }
          }
        })
        .catch((err) => {
          // Backend error
          setLoading(false);
          setServerError(err);
        });
    } else {
      setVisibility({
        line: 'hide',
        form: '',
        error: 'hide',
      });
    }
  }, [noteURL]);

  const getNote = (event) => {
    event.preventDefault();
    const url = token.current.value.trim();
    url ? (window.location.href = `${urlF}/${url}`) : alert('Заполните поля');
  };

  if (loading) {
    return <Spinner />;
  }

  if (serverError) {
    // Server/database error
    return <Error error={serverError} redirect="/note" />;
  }

  const { line, error, form } = visibility;

  return (
    <div className="side">
      <div className={`form-wrapper ${line}`}>
        <div className="out">
          <h4>Note:</h4>
          <div className="note-text">{noteText}</div>
          <Link className="btn search-one" to="/note"></Link>
        </div>
      </div>
      <div className={`form-wrapper ${error}`}>
        <div className="finder">Кеш не найден в дазе данных</div>
      </div>
      <div className={`form-wrapper ${form}`}>
        <form action="" onSubmit={getNote}>
          <label htmlFor="token">
            <b>Введите хеш:</b>
          </label>
          <input
            type="text"
            name="token"
            id="token"
            placeholder="Поиск заметки"
            className="input"
            required
            ref={token}
          />
          <button type="submit" className="btn search" aria-label="find note"></button>
        </form>
      </div>
    </div>
  );
};

export default Note;
