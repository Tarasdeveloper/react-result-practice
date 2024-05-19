import classes from './Button.module.css';

function Button({ children, isActive, ...props }) {
  // const handleMouseEnter = () => console.log('mouse Entered');
  // let classes = 'button';
  // if (isActive) classes += ' active';

  return (
    <button
      // className={classes}
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
      // onMouseEnter={handleMouseEnter}
      // onDoubleClick={() => console.log('dbl')}
    >
      {children}
    </button>
  );
}

export default Button;
