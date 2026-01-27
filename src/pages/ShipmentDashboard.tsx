import { useEffect, useState } from "react";
import { fetchShipments } from "../services/shipmentService";
import type { Shipment } from "../types/shipment";
import StatusBadge from "../components/StatusBadge";

const ShipmentDashboard = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadShipments = async () => {
      try {
        const data = await fetchShipments();
        setShipments(data);
      } catch (err) {
        setError("Failed to load shipments");
      } finally {
        setLoading(false);
      }
    };

    loadShipments();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Loading shipments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Shipment Dashboard</h1>

      <ul className="space-y-4">
        {shipments.map((shipment) => (
          <li
            key={shipment.id}
            className="bg-white p-4 rounded shadow-sm"
          >
            <p className="font-semibold">
              Tracking: {shipment.trackingNumber}
            </p>
            <StatusBadge status={shipment.status} />
            <p>Last Location: {shipment.lastLocation}</p>
            <p>
              Estimated Delivery:{" "}
              {new Date(shipment.estimatedDelivery).toDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipmentDashboard;
