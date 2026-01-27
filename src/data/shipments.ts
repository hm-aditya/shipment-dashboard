import type { Shipment } from "../types/shipment";

export const shipments: Shipment[] = [
  {
    id: 1,
    trackingNumber: "SHIP-10234",
    status: "In Transit",
    lastLocation: "Warehouse A",
    estimatedDelivery: "2026-01-29",
    sender: "Amazon",
    receiver: "John Doe",
  },
  {
    id: 2,
    trackingNumber: "SHIP-20489",
    status: "Out for Delivery",
    lastLocation: "Mumbai Hub",
    estimatedDelivery: "2026-01-27",
    sender: "Flipkart",
    receiver: "Rohit Sharma",
  },
  {
    id: 3,
    trackingNumber: "SHIP-87654",
    status: "Delivered",
    lastLocation: "Customer Address",
    estimatedDelivery: "2026-01-25",
    sender: "Myntra",
    receiver: "Sneha Joshi",
  },
  {
    id: 4,
    trackingNumber: "SHIP-55678",
    status: "Pending",
    lastLocation: "Sorting Center",
    estimatedDelivery: "2026-01-30",
    sender: "Meesho",
    receiver: "Amit Verma",
  },
];
