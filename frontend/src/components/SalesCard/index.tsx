import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './styles.css';

function SalesCard() {

  const min = new Date(new Date().setDate(new Date().getDate() - 365));

  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);


  return (
    <div className="gjsmeta-card">
      <h2 className="gjsmeta-sales-title">Vendas</h2>
      <div>
        <div className="gjsmeta-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="gjsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="gjsmeta-form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="gjsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="gjsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#341</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">8</td>
              <td className="show992">7</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="gjsmeta-red-btn-container" >
                  <NotificationButton />
                </div>

              </td>
            </tr>
            <tr>
              <td className="show992">#342</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">12</td>
              <td className="show992">10</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="gjsmeta-red-btn-container" >
                  <NotificationButton />
                </div>

              </td>
            </tr>
            <tr>
              <td className="show992">#343</td>
              <td className="show576">08/07/2022</td>
              <td>Anakin</td>
              <td className="show992">18</td>
              <td className="show992">13</td>
              <td>R$ 55300.00</td>
              <td>
                <div className="gjsmeta-red-btn-container" >
                  <NotificationButton />
                </div>

              </td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>
  )
}


export default SalesCard;
