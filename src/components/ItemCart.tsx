import { Stack } from "react-bootstrap";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type ItemCartProps = {
  id: number;
  quantity: number;
};

const ItemCart = ({ id, quantity }: ItemCartProps) => {
  const item = storeItems.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        style={{ width: "124px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              {quantity} x
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item?.price)}
        </div>
      </div>
    </Stack>
  );
};

export default ItemCart;
