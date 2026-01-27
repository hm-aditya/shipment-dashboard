//use axios when the api is ready
import type { Shipment } from "../types/shipment";
import { shipments } from "../data/shipments";


export const fetchShipments = (): Promise<Shipment[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = false; // toggle to test error UI

      if (shouldFail) {
        reject(new Error("Failed to fetch shipments"));
      } else {
        resolve(shipments);
      }
    }, 1000); //to simulate network delay
  });
};
