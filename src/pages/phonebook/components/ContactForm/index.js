import React, {useState} from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const pattern = {
    text: "^[a-zA-Zа-яА-Я]+(([\' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    tel: "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
}

const Input = ({label, type, name, value, onChange, title, required}) => {
    return <label className={styles.label}>{label}:
        <input
            className={styles.input}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            pattern={pattern[type]}
            title={title}
            required={required}
        />
    </label>
}

const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const nameTitle = "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    const numberTitle = "Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"

    const handleName = ({currentTarget: {value}}) => setName(value)
    const handleNumber = ({currentTarget: {value}}) => setNumber(value)
    const handleSubmit = evt => {
        evt.preventDefault()
        onSubmit({name, number})
        setName('')
        setNumber('')
    }

    return <form onSubmit={handleSubmit} className={styles.form}>
        <Input
            value={name}
            label='Name'
            type='text'
            name='name'
            title={nameTitle}
            required
            onChange={handleName}
        />
        <Input
            value={number}
            label='Number'
            type='tel'
            name='number'
            title={numberTitle}
            required
            onChange={handleNumber}
        />
        <button className={styles.button} type="submit">Add contact</button>
    </form>
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
