import {BsArrowLeft} from 'react-icons/bs';
import './App.css';
import DeliveryComponent from './Components/DeliveryComponent';
import OrderComponent from './Components/OrderComponent';
import VoucherComponent from "./Components/VoucherComponent";
import PriceComponent from "./Components/PriceComponent";
import FinishComponent from "./Components/FinishComponent";

function App() {
  return (
    <div className="App">
      <div className="header">
        <BsArrowLeft size={35} className="left-arrow" style={{cursor: "pointer"}} />
        <h3 className="header-title">ORDER INFORMATION</h3>
      </div>
      <DeliveryComponent title="Delivery Address" body="Please Choose Destination Address" />
      <DeliveryComponent title="Shipping Option" body="Please Choose your shipping method" />
      <DeliveryComponent title="Payment Option" body="Please Choose your payment method" />
      <OrderComponent />
      <VoucherComponent />
      <PriceComponent />
      <FinishComponent />
    </div>
  );
}

export default App;
