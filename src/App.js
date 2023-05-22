import logo from './logo.svg';
import styles from "./estilo.module.css"
import { useState } from 'react';

function App() {
  const [soma , setSoma] = useState(false);
  const [menos , setMenos] = useState(false);
  const [mult , setMult] = useState(false);
  const [div , setDiv] = useState(false);
  const [num , setZero] = useState(0);
  const [um , setUm] = useState(0);
  const [dois , setDois] = useState(0);
  const [tres , setTres] = useState(0);
  const [quatro , setQuatro] = useState(0);
  const [cinco , setCinco] = useState(0);
  const [seis , setSeis] = useState(0);
  const [sete , setSete] = useState(0);
  const [oito , setOito] = useState(0);
  const [nove , setNove] = useState(0);
  const [res , setRes] = useState(0);
  
  function operaçao() {
    if (soma == true) {
      setRes(um + tres)
      console.log(res)
    }
  }
  return (
    <div className={styles.App}>
      <div className={styles.calc}>
        <div className={styles.num}onClick={(e)=> setZero(0)}>0</div>
        <div className={styles.num}onClick={(e)=> setUm (1)}>1</div>
        <div className={styles.num} onClick={(e)=> setDois(2)}>2</div>
        <div className={styles.num}onClick={(e)=> setTres(3)}>3</div>
        <div className={styles.num}onClick={(e)=> setQuatro(4)}>4</div>
        <div className={styles.num}onClick={(e)=> setCinco(5)}>5</div>
        <div className={styles.num}onClick={(e)=> setSeis(6)}>6</div>
        <div className={styles.num}onClick={(e)=> setSete(7)}>7</div>
        <div className={styles.num}onClick={(e)=> setOito(8)}>8</div>
        <div className={styles.num}onClick={(e)=> setNove(9)}>9</div>
        <div className={styles.num}onClick={(e)=> setSoma(true)}>+</div>
        <div className={styles.num}onClick={(e)=> setMenos(true)}>-</div>
        <div className={styles.num}onClick={(e)=> setMult(true)}>*</div>
        <div className={styles.num}onClick={(e)=> setDiv(true)}>/</div>
        <div className={styles.num} onClick={operaçao}>=</div>
      
      </div>
    </div>
  );
}

export default App;
