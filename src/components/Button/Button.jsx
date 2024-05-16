import './Button.css';

function Button({ children, onClick, isActive }) {
  // const handleMouseEnter = () => console.log('mouse Entered');
  // let classes = 'button';
  // if (isActive) classes += ' active';

  return (
    <button
      // className={classes}
      className={isActive ? 'button active' : 'button'}
      onClick={onClick}
      // onMouseEnter={handleMouseEnter}
      // onDoubleClick={() => console.log('dbl')}
    >
      {children}
    </button>
  );
}

export default Button;
