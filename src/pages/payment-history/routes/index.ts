import {RouteObject} from "react-router-dom";
import PaymentHistoryList from "./list";
import {fetchPaymentHistory} from "../shared/loaders";

export const paymentHistoryRoute: RouteObject = {
  path: "payment-history",
  Component: PaymentHistoryList,
  loader: fetchPaymentHistory
}
