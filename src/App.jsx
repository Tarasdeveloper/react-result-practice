import { useState } from 'react';
import Button from './components/Button/Button';
import Header from './components/Header';
import WayToTeach from './components/WayToTeach';
import { ways, differences } from './data';

function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  // let tabContent = null;

  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>;
  // } else {
  //   tabContent = <p>Нажми на кнопку</p>;
  // }

  return (
    <div>
      <Header />

      <main>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            {ways.map((way) => (
              <WayToTeach key={way.title} {...way} />
            ))}
            {/* <WayToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
            <WayToTeach {...ways[4]} /> */}
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>
          {/* <Button text="button 1" /> */}
          <Button
            isActive={contentType === 'way'}
            onClick={() => handleClick('way')}
          >
            Подход
          </Button>
          <Button
            isActive={contentType === 'easy'}
            onClick={() => handleClick('easy')}
          >
            Доступность
          </Button>
          <Button
            isActive={contentType === 'program'}
            onClick={() => handleClick('program')}
          >
            Концентрация
          </Button>
          {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Нажми на кнопку</p>
          )} */}

          {/* {!contentType ? <p>Нажми на кнопку</p> : null}
          {contentType ? <p>{differences[contentType]}</p> : null} */}

          {!contentType && <p>Нажми на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>}

          {/* {tabContent} */}
        </section>
      </main>
    </div>
  );
}
export default App;
