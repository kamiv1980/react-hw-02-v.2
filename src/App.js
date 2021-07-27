import styles from'./App.module.css';
import React, { useState} from "react";
import Home from './components/Home'
import Feedback from "./pages/feedback";
import Phonebook from "./pages/phonebook"



const Index = () => {
    const [sel,setSel]=useState('')
    const SelectPage=({select})=>{
       setSel(select)}

      return (
      <>
        <Home onSubmit={SelectPage} />
        {sel==='' ? (<h3 className={styles.alert}>Select a page</h3>):
         sel==='Feedback'?(<Feedback/>):(<Phonebook/>)}
      </>
  );
}

export default Index;
