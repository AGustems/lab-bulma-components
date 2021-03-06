import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './Container.css'
import FormField from '../formfield/FormField.js'
import CoolButton from '../coolbutton/CoolButton.js'

class Container extends Component {
    render() {
        return (
            <section className="container">
                <form className="form-fields">
                    <FormField label="Name" type="text" placeholder="e.g Alex Smith"/>
                    <FormField label="Email" type="email" placeholder="e.g alexsmith@gmail.com"/>
                    <FormField label="Password" type="password" placeholder="8 characters minimum" minlength="8" required/>
                    <CoolButton buttonClass="button is-success is-rounded" link="submit" text="Submit"/>
                </form>
            </section>
        )
    }
}

export default Container