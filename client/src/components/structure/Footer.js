import Links from '../contents/Links';
import Copyright from '../contents/Copyright';
import style from './structure.module.css';

const Footer = () => {
  return (
    <div id={style.footer}>
      <Links />
      <Copyright />
    </div>
  );
};

export default Footer;
