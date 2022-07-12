import icon from '../../assets/img/notification-icon.svg'
import './styles.css'

function NotificationButton() {
    return (
        <div className="gjsmeta-red-btn">
        <img src={icon} alt="notificação" />
    </div>
    )
}

export default NotificationButton