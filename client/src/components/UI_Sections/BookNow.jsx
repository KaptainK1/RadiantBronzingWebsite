import React from 'react';
// import 'boostrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

class BookNow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date()
        };
        this.onSubmitForm=this.onSubmitForm.bind(this);
        this.onDateChange=this.onDateChange.bind(this);
    }

    onSubmitForm(event){
        event.preventDefault();
        alert(this.state.selectedDate)
    }

    componentDidMount() {
        // function to open the date picker when the component mounts
        // this.openDatepicker();
    }

    onDateChange(date){
        this.setState({
            selectedDate: date
        });
    }

    openDatepicker = () => this._calendar.setOpen(true);


    render(){
        return(
            <div className="calendarApp mt-5">
                <form onSubmit={this.onSubmitForm}>
                    <div className="input-group mb-3">
                        <DatePicker
                          className="form-control calendar-form"
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

                    </div>
                    <button className="btn btn-lg btn-outline-primary">Book Appointment!</button>
                </form>
            </div>
        );
    }

}

export default BookNow;