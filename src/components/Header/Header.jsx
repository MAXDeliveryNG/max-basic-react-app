import {useState} from "react";
import "./Header.scss";
import Logo from "./logo.svg";
import Notification from "./notification.png"
function Header() {
    const [currentTime,setCurrentTime] = useState({
        date:'',
        time:'',
        day:''
    })
    const listOfDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
    setInterval(function() {
        let currentDate = new Date();
        let numberOfDay = currentDate.getDay();
        let day = listOfDays[numberOfDay];
        let cday = currentDate.getDate();
        let month = currentDate.getMonth();
        let year = currentDate.getFullYear();
        let date = cday + " / " + month + " / " + year;
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        let seconds = currentDate.getSeconds();
        let time = '';
        if (seconds < 10)seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;
        if (hours > 12) {
            hours = hours - 12;
            time = hours + " : " + minutes + " : " + seconds + "  PM ";
        } else if (hours < 12) {
            time = hours + " : " + minutes + " : " + seconds + "  AM ";
        } else if (hours = 12) {
            time = hours + " : " + minutes + " : " + seconds + "  PM ";
        }
        setCurrentTime({date,time,day})
      }, 1000);
    return (
      <div className="header-container">
            <div className="logo-container">
                <a href="#"><img src={Logo}/></a>
            </div>
            <div className="dis-flex-center">
                <div className="time-container">
                    <span>{currentTime.date}</span> <span>{currentTime.day}</span><br/>
                    <span style={{fontWeight:'700'}}>{currentTime.time}</span>
                </div>
                <div>
                    <a href="#"><img src={Notification} className="notification-img"/></a>
                </div>
                <div className="user-circle">SP</div>
            </div>
      </div>
    );
  }
  export default Header;