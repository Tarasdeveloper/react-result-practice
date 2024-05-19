import { useRef, useState } from 'react';
import Button from './Button/Button';

function StateVsRef() {
  const input = useRef();
  // const [value, setValue] = useState('');
  const [show, setShow] = useState(false);

  function handleKeyDown(evt) {
    if (evt.key === 'Enter') {
      setShow(true);
    }
  }
  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        className="control"
        // value={value}
        // onChange={(e) => setValue(e.target.value)}
        type="text"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: false,
    reason: 'suggest',
  });

  // const [name, setName] = useState('');
  // const [hasError, setHasError] = useState(true);
  // const [reason, setReason] = useState('suggest');

  function handleNameChange(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
    // setForm({
    //   reason: form.reason,
    // });
  }

  // function toggleError() {
  // setHasError((prev) => !prev);
  // setHasError(!hasError);
  // }

  return (
    <section>
      <h3>Обратная связь</h3>

      {/* <Button onClick={toggleError}>Toggle Error</Button> */}

      <form style={{ marginBottom: '1rem' }}>
        <label htmlFor="name">Ваше имя</label>
        <input
          className="control"
          id="name"
          type="text"
          value={form.name}
          onChange={handleNameChange}
          style={{ border: form.hasError ? '1px solid red' : null }}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          className="control"
          id="reason"
          value={form.reason}
          onChange={(evt) =>
            setForm((prev) => ({ ...prev, reason: evt.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        {/* <pre> */}
        {/* {JSON.stringify(form, null, 2)} */}
        {/* Name:{form.name}
          <br />
          Reason: {form.reason} */}
        {/* </pre> */}

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>

      <hr />
      <StateVsRef />
    </section>
  );
}

export default FeedbackSection;
