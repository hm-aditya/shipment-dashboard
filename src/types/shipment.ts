//types for shipment status
export type ShipmentStatus =
  | "Pending"
  | "In Transit"
  | "Out for Delivery"
  | "Delivered"
  | "Cancelled";

// type for shipment object
export interface Shipment {
  id: number;
  trackingNumber: string;
  status: ShipmentStatus;
  lastLocation: string;
  estimatedDelivery: string; 
  sender: string;
  receiver: string;

}