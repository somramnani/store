import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import useShoppingCart from "../hooks/useShoppingCart";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quanity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-space-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>
      <div className="mt-auto">
        {quanity === 0 ? (
          <Button onClick={() => increaseCartQuantity(id)} className="w-100">
            + Add to Cart
          </Button>
        ) : (
          <div
            className="d-flex align-items-center flex-column"
            style={{ gap: ".5rem" }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              <div>
                <span className="fs-3">{quanity}</span>
              </div>
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
            </div>
            <Button
              onClick={() => removeFromCart(id)}
              variant="danger"
              size="sm"
            >
              Remove
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default StoreItem;
