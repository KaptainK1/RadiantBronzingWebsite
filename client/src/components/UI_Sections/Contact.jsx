import React from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import ErrorModal from "../UI_Components/ErrorModal";

class Contact extends React.Component {

    constructor(props){
    super(props);
        this.state= {
            firstName: '',
            showBookNowSection: false,
            lastName: '',
            phone: '',
            email: '',
            message: '',
            selectedDate: (new Date()),
            // selectedDate: (Date.now().getFullYear(), Date.now.getMonth(), Date.now.getDate(),7,30),
            isAppointment: false,
            errorMessage: undefined
        }


        //variables to hold the input objects which we can use to interact with
        this.textFirstNameInput = null;
        this.textLastNameInput = null;
        this.textPhoneInput = null;
        this.textEmailInput = null;
        this.textMessageInput = null;

        this.setFirstNameTextInputRef = element => {
            this.textFirstNameInput = element
        }

        this.setLastNameTextInputRef = element => {
            this.textLastNameInput = element
        }

        this.setPhoneTextInputRef = element => {
            this.textPhoneInput = element
        }

        this.setEmailTextInputRef = element => {
            this.textEmailInput = element
        }

        this.setMessageTextInputRef = element => {
            this.textMessageInput = element
        }

        this.setInputErrorColor = this.setInputErrorColor.bind(this);
        this.setInputFocus = this.setInputFocus.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.formValidation = this.formValidation.bind(this);
        this.checkInput = this.checkInput.bind(this);
        this.onDateChange=this.onDateChange.bind(this);
        this.errorHandler = this.errorHandler.bind(this);
        this.handleShowBookNowSection = this.handleShowBookNowSection.bind(this);
    }

    componentDidMount() {
        let currentDate = new Date();
        currentDate.setHours(7);
        currentDate.setMinutes(30);
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);

        console.log(currentDate);

        this.setState({
            selectedDate: currentDate
        })
    }

    setInputErrorColor(element) {
        element.classList.add("input-error");
    }

    setInputFocus(element) {
        element.focus();
    }

    handleSubmit(event){

        event.preventDefault();

        if (this.state.isAppointment === true){
            alert("Appointment Confirmed!");
        }

        let isValidated = this.formValidation();
        console.log(isValidated);
        if (!isValidated){
            //TODO if the form fails a validation check, we should be alerting the user as to what failed

        } else{
            console.log('first name: ' + this.state.firstName + '\n'
                + 'last Name: ' + this.state.lastName + '\n'
                + 'phone number: ' + this.state.phone + '\n'
                + 'email: ' + this.state.email + '\n'
                + 'message: ' + this.state.message
            );
        }
    }

    formValidation(){
        let inputs = [{
            inputField: this.textFirstNameInput, minLength:1, maxLength:20
        }, {
            inputField: this.textLastNameInput, minLength:1, maxLength:20
        }, {
            inputField: this.textPhoneInput,
            minLength:0,
            maxLength:11
        }, {
            inputField: this.textEmailInput, minLength:1, maxLength:50
        }, {
            inputField: this.textMessageInput, minLength:0, maxLength:255
        }];
        // let isError = true;
        inputs.forEach(element => {
            console.log(element);
                if (!this.checkValueIsInRange(element.inputField.value.length, element.minLength, element.maxLength)) {
                    this.setInputErrorColor(element.inputField);
                    // alert("Sorry, there was an error with " + element.inputField.placeholder + " please check the data and try again");
                    this.setState( {
                           errorMessage: "Sorry, there was an error with " + element.inputField.placeholder + " please check the data and try again"
                    });
                    this.setInputFocus(element.inputField);
                    return false;
                }
            }
        );
        return true;
    }

    handleFirstNameChange(event){
        this.setState({firstName: event.target.value});
        this.checkInput(event, this.textFirstNameInput, 0, 20);
    }

    //method to check a users input to see if its in the appropriate range
    //if not, flag teh input field as red by adding the input-error class
    //then return the text input object (should be an input field)
    checkInput(event, textInput, minValue, maxValue){
        if (!this.checkValueIsInRange(event.target.value.length,minValue,maxValue)){
            if (!textInput.classList.contains("input-error")){
                textInput.classList.add("input-error");
            }
        } else {
            if (textInput.classList.contains("input-error")){
                textInput.classList.remove("input-error");
            }
        }
    }

    checkValueIsInRange(value, minValue, maxValue){
        if (value < minValue || value > maxValue){
            return false;
        }
        return true;
    }

    handleLastNameChange(event){
        this.setState({lastName: event.target.value});
        this.checkInput(event, this.textLastNameInput, 0, 20);
        console.log(this.state.lastName);
    }

    handlePhoneChange(event){
        this.setState({phone: event.target.value});
        this.checkInput(event, this.textPhoneInput, 0, 11);
        console.log(this.state.phone);
    }

    handleEmailChange(event){
        this.setState({email: event.target.value});
        this.checkInput(event, this.textEmailInput, 0, 50);
        console.log(this.state.email);
    }

    handleMessageChange(event){
        this.setState({message: event.target.value});
        this.checkInput(event, this.textMessageInput, 0, 255);
        console.log(this.state.message);
    }

    onDateChange(date){
        this.setState({
            selectedDate: date
        });
    }

    //function to show the book now feature once the book an appointment button is clicked
    handleShowBookNowSection(event){
        event.preventDefault();
        let toggleValue = !this.state.showBookNowSection;
        // console.log("Toggle Value: " + toggleValue);
        this.setState( {
                showBookNowSection: toggleValue
            }

        );
    }

    //function to clear the error state
    errorHandler() {
        this.setState({
           errorMessage: null
        });
    };

    render(){
        return(
            <div>
                {this.state.errorMessage && (
                    <ErrorModal
                        title="Error!"
                        message={this.state.errorMessage}
                        onConfirm={this.errorHandler}
                    />
                 )}
                <div className="container-fluid">
                    <h1 id="contactSection">Contact Us!</h1>

                    <form onSubmit={this.handleSubmit} method="post">
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputFirstName">
                                    First Name:
                                </label>
                                <input id="inputFirstName" placeholder="First Name" className="form-control" required={true} type="text"
                                       value={this.state.firstName}
                                       ref={this.setFirstNameTextInputRef}
                                       onChange={this.handleFirstNameChange}
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label htmlFor="inputLastName">
                                    Last Name:
                                </label>
                                <input id="inputLastName" placeholder="Last Name" className="form-control" type="text"
                                       required={true}
                                       value={this.state.lastName}
                                       ref={this.setLastNameTextInputRef}
                                       onChange={this.handleLastNameChange}/>
                            </div>
                        </div>

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPhone">
                                        Phone Number:
                                    </label>
                                    <div>
                                    <input id="inputPhone" placeholder="Phone Number" className="form-control" type="tel"
                                           value={this.state.phone}
                                           ref={this.setPhoneTextInputRef}
                                           onChange={this.handlePhoneChange}/>
                                    </div>
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail">
                                        Email:
                                    </label>
                                    <input id="inputEmail" placeholder="Email" className="form-control" required={true} type="email"
                                           value={this.state.email}
                                           ref={this.setEmailTextInputRef}
                                           onChange={this.handleEmailChange}/>
                                </div>
                            </div>

                            <div className="row">
                                {/*Empty div with a small column to center the message field*/}
                                <div className="form-group col-md-2">
                                </div>
                                <div className="form-group col-md-8">
                                    <label htmlFor="inputMessage">
                                        Message:
                                    </label>
                                    <textarea id="inputMessage" placeholder="Message" className="form-control"
                                              // ref={this.setMessageTextInputRef}
                                              value={this.state.message}
                                              ref={this.setMessageTextInputRef}
                                              onChange={this.handleMessageChange}/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your personal information with anyone
                                        else.</small>
                                </div>
                                {/*Empty div with a small column to center the message field*/}
                                <div className="form-group col-md-2">

                                </div>
                            </div>

                        <div className="container">
                            <div className="row book-appointment-section">
                                <div className="col-md-3">

                                </div>
                                <div className="col-md-6" id="contact-us-cta">
                                    <div>
                                        <input className="btn btn-lg btn-outline-primary"
                                               type="submit" value="Contact Us!" />
                                    </div>
                                    <div>
                                        <label htmlFor="btn-booknow-expander">Or</label>
                                    </div>
                                    <div>
                                        <button id="btn-booknow-expander" onClick={this.handleShowBookNowSection}
                                                className="btn btn-lg btn-outline-primary">Book An Appointment</button>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                </div>
                            </div>
                        </div>

                        {this.state.showBookNowSection && (
                        <div className="container-fluid">
                            <div className="row" id="date-picker-section">

                                <div className="col-md-3 offset-md-3 date-picker-section-component">
                                    <p>Please select a preferred date and time:</p>
                                </div>

                                <div className="calendarApp col-md-4 date-picker-section-component">
                                        {/*<div className="input-group mb-3">*/}
                                            <DatePicker
                                                className="form-control calendar-form"
                                                id="date-picker"
                                                selected={this.state.selectedDate}
                                                onChange={this.onDateChange}
                                                minDate={new Date()}
                                                name="selectedDate"
                                                showTimeSelect
                                                timeIntervals={30}
                                                timeFormat="HH:mm"
                                                timeCaption="Time"
                                                dateFormat="MMMM d, yyyy h:mm aa"
                                                // by setting the min and max time, we can limit the hours
                                                minTime={new Date(0,0,0,7,30)}
                                                maxTime={new Date(0,0,0,18,30)}
                                                ref={(c) => this._calendar = c}
                                            />
                                        {/*</div>*/}
                                </div>
                            </div>
                                <input className="btn btn-lg btn-outline-primary"
                                       type="submit"
                                       //onClick={ this.setState({isAppointment: true})}
                                       value="Book Appointment!" />
                        </div>
                        )}
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;