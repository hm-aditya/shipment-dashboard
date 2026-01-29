import { useEffect, useState } from "react";
import { fetchShipments } from "../services/shipmentService";
import type { Shipment, ShipmentStatus } from "../types/shipment";
import ShipmentCard from "../components/ShipmentCard";

const STATUS_TABS: ("All" | ShipmentStatus)[] = [
  "All",
  "Pending",
  "In Transit",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];
const ShipmentDashboard = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeStatus, setActiveStatus] = useState<"All" | ShipmentStatus>(
    "All",
  );
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

  const filteredShipments =
    activeStatus === "All"
      ? shipments
      : shipments.filter((s) => s.status === activeStatus);

  //loading UI
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-600">Loading shipments...</p>
      </div>
    );
  }
  // error UI
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 font-medium">{error}</p>
      </div>
    );
  }

//main UI
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 pt-4 text-center tracking-tight">
        Shipment Dashboard{" "}
      </h1>

      <div className="flex flex-wrap justify-center gap-2 mb-6">

        {/*status tabs" */}
        {STATUS_TABS.map((status) => {
          const isActive = activeStatus === status;

          return (
            <button
              key={status}
              onClick={() => setActiveStatus(status)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
          ${
            isActive
              ? "bg-blue-800 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
            >
              {status}
            </button>
          );
        })}
      </div>
      <ul className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/*shipment cards*/}
          {filteredShipments.map((shipment) => (
            <li key={shipment.id}>
              <ShipmentCard shipment={shipment} />
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ShipmentDashboard;
