import { useState } from 'react';
import logo from '/logo-name.svg';
function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  return (
    <header>
      <img src={logo} alt={'Result'} />

      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}
export default Header;