// Write your code here
import {format} from 'date-fns'

// console.log(format(new Date(2021, 19, 07), 'dd MMMM yyyy, EEEE'))
import './index.css'

const AppointmentItem = props => {
  const {mylist, myfunction} = props
  const {id, title, date, isStar} = mylist
  const myvalue = date.split('-')
  const result = myvalue.map(each => parseInt(each))
  console.log(date)
  console.log(result)
  console.log(id)
  const myresult = isStar
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  const mystarfunction = () => myfunction(id)
  return (
    <li className="each_appointment_container">
      <div className="list_header">
        <p className="each_app_heading">{title}</p>
        <button
          data-testid="star"
          onClick={mystarfunction}
          type="button"
          className="stared_btn"
        >
          <img className="stared_icon" src={myresult} alt="star" />
        </button>
      </div>
      <p className="date_desc">
        Date :{' '}
        {format(
          new Date(result[0], result[1] - 1, result[2]),
          'dd MMMM yyyy, EEEE',
        )}
      </p>
    </li>
  )
}

export default AppointmentItem
