// Write your code here
import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    myappointment: [],
    title: '',
    date: '',
  }

  titlevalue = event => {
    this.setState({title: event.target.value})
  }

  datevalue = event => {
    // const myvalue = event.target.value.split('-')
    // const result = myvalue.map(each => parseInt(each))
    // console.log(event.target.value.split('-'))
    this.setState({date: event.target.value})
  }

  activated = id =>
    this.setState(myprevious => ({
      myappointment: myprevious.myappointment.map(each => {
        if (id === each.id) {
          return {...each, isStar: !each.isStar}
        }
        return each
      }),
    }))

  submitfunction = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStar: true,
    }
    return this.setState(myprev => ({
      myappointment: [...myprev.myappointment, newAppointment],
      title: '',
      date: '',
    }))
  }

  filtering = () => {
    const {myappointment} = this.state
    const result = myappointment.filter(each => each.isStar === false)
    this.setState({myappointment: result})
  }

  render() {
    const {myappointment, title, date} = this.state
    console.log(title, date)

    return (
      <div className="bg_container">
        <div className="initial_container">
          <div className="header">
            <div className="left">
              <h1 className="main_heading">Add Appointment</h1>
              <form onSubmit={this.submitfunction} className="form_container">
                <label className="title" htmlFor="title_input">
                  TITLE
                </label>
                <input
                  onChange={this.titlevalue}
                  value={title}
                  placeholder="Title"
                  type="text"
                  id="title_input"
                  className="input"
                />

                <label className="title" htmlFor="date_input">
                  DATE
                </label>
                <input
                  onChange={this.datevalue}
                  value={date}
                  placeholder="Date"
                  type="date"
                  id="date_input"
                  className="input"
                />

                <button type="submit" className="add_button">
                  Add
                </button>
              </form>
            </div>
            <div className="right">
              <img
                className="image1"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <hr />
          <div className="footer">
            <div className="footer_header">
              <h1 className="heading_2">Appointments</h1>
              <button
                onClick={this.filtering}
                type="button"
                className="stared_button"
              >
                Starred
              </button>
            </div>
            <ul className="footer_footer">
              {myappointment.map(each => (
                <AppointmentItem
                  key={each.id}
                  myfunction={this.activated}
                  mylist={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
