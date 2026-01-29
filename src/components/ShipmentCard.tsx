import type { Shipment } from "../types/shipment";
import StatusBadge, { statusStyleMap } from "./StatusBadge";
import { useState } from "react";

interface ShipmentCardProps {
  shipment: Shipment;
}

const ShipmentCard = ({ shipment }: ShipmentCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`p-4 rounded-lg shadow-lg flex flex-col gap-2 ${statusStyleMap[shipment.status].card}`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg tracking-tighter">
          {shipment.trackingNumber}
        </h2>
        <StatusBadge status={shipment.status} />
      </div>

      <p className="text-sm text-gray-600 tracking-tight">
        Last Location: {shipment.lastLocation}
      </p>

      <p className="text-sm text-gray-600 tracking-tight">
        Estimated Delivery:{" "}
        {new Date(shipment.estimatedDelivery).toDateString()}
      </p>

      <button
        onClick={() => setShowDetails((prev) => !prev)}
        className="mt-3 text-sm font-medium text-blue-600 hover:underline cursor-pointer"
      >
        {showDetails ? "Hide Details" : "View Details"}
      </button>
      {showDetails && (
        <div className="mt-3 pt-3 border-t border-black/10 text-sm space-y-1">
          <p>
            <span className="font-medium">Sender:</span> {shipment.sender}
          </p>
          <p>
            <span className="font-medium">Receiver:</span> {shipment.receiver}
          </p>
          <p>
            <span className="font-medium">Last Location:</span>{" "}
            {shipment.lastLocation}
          </p>
          <p>
            <span className="font-medium">Estimated Delivery:</span>{" "}
            {shipment.estimatedDelivery}
          </p>
        </div>
      )}
    </div>
  );
};

export default ShipmentCard;
