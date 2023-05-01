import classes from './Card.module.css';

const Card = (props) => {
  const title = props.title || false;
  return (
    <div className={classes.card}>
      {title && <h2 className={classes.title}>{props.title}</h2>}
      <div className={classes.card_body}>
      {props.children}
      </div>
    </div>
  );
};

export default Card;
