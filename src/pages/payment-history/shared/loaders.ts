import {getPaymentsHistory} from "api";

export const fetchPaymentHistory = async () => {
  const paymentHistory = await getPaymentsHistory();
  return {
    paymentHistory
  }
}
