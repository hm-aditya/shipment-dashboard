import type { ShipmentStatus } from "../types/shipment";

export const statusStyleMap: Record<
  ShipmentStatus,
  { badge: string; card: string ,border:string}
> = {
  Pending: {
    badge: "text-red-600 bg-red-100",
    card: "bg-red-50",
    border:"border-red-600"
  },
  "In Transit": {
    badge: "text-orange-600 bg-orange-100",
    card: "bg-orange-50",
    border:"border-orange-600"
  },
  "Out for Delivery": {
    badge: "text-blue-600 bg-blue-100",
    card: "bg-blue-50",
    border:"border-blue-600"
  },
  Delivered: {
    badge: "text-green-600 bg-green-100",
    card: "bg-green-50",
    border:"border-green-600"
  },
  Cancelled: {
    badge: "text-gray-600 bg-gray-200",
    card: "bg-gray-100",
    border:"border-gray-600"
  },
};

interface StatusBadgeProps {
  status: ShipmentStatus;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium tracking-tight border ${statusStyleMap[status].badge}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
