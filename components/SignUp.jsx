import SignUpIcon from './SVG/SignUp';

import styles from '../styles/SignUp.module.scss';

const SignUp = () => {
  return (
    <section className={styles.abovesignup}>
      <div className={styles.signup}>
        <div>
          <SignUpIcon />
          <h4>sign up &amp; stay connected</h4>
        </div>
        <p>
          Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new
          stuff drops!
        </p>
        <form action='/'>
          <input type='email' id='email' name='email' placeholder='Enter Your Email Address' />
          <input type='submit' />
        </form>
      </div>
    </section>
  );
};

export default SignUp;
