import { Stack, Button } from "react-bootstrap";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import useShoppingCart from "../hooks/useShoppingCart";

type ItemCartProps = {
  id: number;
  quantity: number;
};

const ItemCart = ({ id, quantity }: ItemCartProps) => {
  const { removeFromCart } = useShoppingCart();
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
          {formatCurrency(item!.price)}
        </div>
      </div>
      <div> {formatCurrency(item!.price * quantity)} </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item!.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default ItemCart;
