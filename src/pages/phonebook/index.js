import './index.css';
import { v4 as uuidv4 } from 'uuid';
import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import EditForm from "./components/EditForm";


class Index extends Component {
  state = {
    contacts: [
      {id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: uuidv4(), name: 'Hermione Kline', number: '443-89-12'},
      {id: uuidv4(), name: 'Eden Clements', number: '645-17-79'},
      {id: uuidv4(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:'',
    showModal: false,
    idEdit:'',
    nameEdit:'',
    numberEdit:''
  }

  openModal = () => {
    this.setState({showModal: true});
  }
  closeModal = () => {
    this.setState({showModal: false});
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };
    const { contacts } = this.state;

    if (
        contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase(),
        )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts,contact],
      }));
    }
  };
  deleteContact = (idContact)=>{
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== idContact),
    }));
  }

  getId=(idContact,name,number)=>{
    this.openModal()
    this.setState({idEdit:idContact,nameEdit: name,numberEdit:number});
  }

  editContact = ({name, number }) => {
    const { contacts, idEdit} = this.state;

    contacts.forEach(contact =>{
      if (contact.id === idEdit) {
        contact.name = name
        contact.number = number
      }})
    this.setState({contacts:contacts,idEdit:'',nameEdit:'',numberEdit:''});
    this.closeModal()
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  componentDidMount(){
    const { contacts } = this.state;
    localStorage.setItem("contacts",JSON.stringify(contacts))
  }

  render() {
    const { contacts, filter, showModal } = this.state;

    localStorage.setItem("contacts",JSON.stringify(contacts))

    const visibleContacts = this.getContacts();
    return (
        <>
          <Section title="Phonebook">
            <ContactForm
                onSubmit={this.addContact}
            />
          </Section>
          <Section title="Contacts">
            {contacts.length > 1 && (
                <Filter value={filter} onChange={this.changeFilter} />
            )}
            {contacts.length > 0 ? (
                <ContactList
                    list={visibleContacts}
                    deleteContact={this.deleteContact}
                    GetId={this.getId}
                />

              ) : (
                <p>Your phonebook is empty. Please add contact.</p>
            )}
            {showModal && (
                <EditForm
                    nameEdit={this.state.nameEdit}
                    numberEdit={this.state.numberEdit}
                    handleModal={this.closeModal}
                    onSubmit={this.editContact}
                />
            )}

          </Section>

        </>
    );
  }
}

export default Index;