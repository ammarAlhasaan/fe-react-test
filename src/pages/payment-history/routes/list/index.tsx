import Content from "./content";
import {useLoaderData} from "react-router-dom";
import IPaymentHistory from "types/payment-history.type";

export default function PaymentHistoryList() {
  const {paymentHistory} = useLoaderData() as { paymentHistory: IPaymentHistory[] };
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Payment history</h2>
      </div>
      <Content paymentHistory={paymentHistory}/>
    </div>
  );
}
