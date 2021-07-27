import React,{useState} from "react";
import styles from "./styles.module.css";



 const Home = ({onSubmit}) => {
    const [select, setSelect] = useState('')
     const handleSubmit = evt => {
         evt.preventDefault()
         onSubmit({select})
     }


     return (
         <section className={styles.section}>
            <h2>Home work 2</h2>
     <form onSubmit={handleSubmit} className={styles.form}>
            <button className={styles.button} onClick={()=>setSelect("Feedback")}>
                Feedback
            </button>
            <button className={styles.button} onClick={()=>setSelect("Phonebook")}>
                Phonebook
            </button>
         <button className={styles.button} onClick={()=>setSelect("")}>
             Cancel
         </button>

     </form>
         </section>
    );
};

export default Home