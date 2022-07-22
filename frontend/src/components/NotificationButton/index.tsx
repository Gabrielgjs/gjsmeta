import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saleId: number;

}

function handleCLick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        console.log("SUCESSO");
    })
} 


function NotificationButton({saleId} : Props) {
    return (
        <div className="gjsmeta-red-btn" onClick={() => handleCLick(saleId)}>
        <img src={icon} alt="notificação" />
    </div>
    )
}

export default NotificationButton;
