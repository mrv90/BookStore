import style from './structure.module.css';
// import Navigation from './Navigation';

const Header = () => {
  return (
    <div className={style.header}>
      <a className={style.logo} href="./">
        BookStore
      </a>
      <div className={style.nav}>
        <a href="./">Home</a>
        <a href="./books">Books</a>
        <a href="./authors">Authors</a>
        <a href="./about">About</a>
        <a href="./login">Login</a>
      </div>
    </div>
  );
};

export default Header;
