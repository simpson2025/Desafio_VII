import styles from './Header.module.css'


function Header() {
  return (
    <div className={styles.cabeza}>
      <h1 className={styles.titulo}>pizzeria Mamma Mia!</h1>
    </div>
  );
}

export default Header;
