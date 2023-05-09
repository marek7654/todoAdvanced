import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className='container'>
        <p className={classes.content}>
          © 2023 - ToDo Advanced by{' '}
          <a
            className={classes.link}
            href='https://mzborowski.pl'
            target='_blank'
            rel='noreferrer'
          >
            mzb
          </a>
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
