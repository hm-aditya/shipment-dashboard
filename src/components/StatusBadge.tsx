import type { ShipmentStatus } from "../types/shipment";

interface StatusBadgeProps {
  status: ShipmentStatus;
}

const statusColorMap: Record<ShipmentStatus, string> = {
  Pending: "text-red-600 bg-red-100",
  "In Transit": "text-orange-600 bg-orange-100",
  "Out for Delivery": "text-blue-600 bg-blue-100",
  Delivered: "text-green-600 bg-green-100",
  Cancelled: "text-gray-600 bg-gray-200",
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${statusColorMap[status]}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
