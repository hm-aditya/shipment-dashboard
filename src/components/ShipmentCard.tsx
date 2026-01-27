import type { Shipment } from "../types/shipment";
import StatusBadge, { statusStyleMap } from "./StatusBadge";

interface ShipmentCardProps {
  shipment: Shipment;
}

const ShipmentCard = ({ shipment }: ShipmentCardProps) => {
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
    </div>
  );
};

export default ShipmentCard;
