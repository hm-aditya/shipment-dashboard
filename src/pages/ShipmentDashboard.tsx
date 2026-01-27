import { useEffect, useState } from "react";
import { fetchShipments } from "../services/shipmentService";
import type { Shipment } from "../types/shipment";
import ShipmentCard from "../components/ShipmentCard";
 
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
    <div >
      <h1 className="text-3xl font-semibold mb-6 pt-4 text-center tracking-tight">Shipment Dashboard  </h1>
      <ul className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shipments.map((shipment) => (
            <ShipmentCard key={shipment.id} shipment={shipment} />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ShipmentDashboard;
