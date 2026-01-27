export type ShipmentStatus =
  | "Pending"
  | "In Transit"
  | "Out for Delivery"
  | "Delivered"
  | "Cancelled";

export interface Shipment {
  id: number;
  trackingNumber: string;
  status: ShipmentStatus;
  lastLocation: string;
  estimatedDelivery: string; 
  sender: string;
  receiver: string;

}