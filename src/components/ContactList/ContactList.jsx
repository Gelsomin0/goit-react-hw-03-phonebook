import { Component } from "react";
import css from './ContactList.module.css';

export class ContactList extends Component {
    render() {
        return (
            <ol className="list-group list-group-numbered">
                {this.props.filter === ''
                    ? this.props.contacts.map(({ id, name, number }) => {
                        return (
                            <li key={id} className="list-group-item d-flex justify-content-start align-items-start" >
                                <p className="fw-bold">{name}:</p> {number}
                                <button className="badge bg-primary rounded-pill" onClick={() => this.props.deleteContact(id)}>Delete</button>
                            </li> 
                        )
                    })
                    : this.props.contacts.map(({ id, name, number }) => {
                        if (name.toLowerCase().includes(this.props.filter.toLowerCase())) {
                            return (
                                <li key={id} className={css.contacts_list_item} >{name}: {number}
                                    <button onClick={() => this.props.deleteContact(id)}>Delete</button>
                                </li> 
                            )
                        }
                    })
                }
            </ol>
        );
    }
}