// normal array
const stuff: string[] = [];

//tuples
// array fixed in their type and in their length

const color: [number, number, number] = [255, 0, 255];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "Ok"];
const badRes: HTTPResponse = [404, "Not Found"];

//ENUMS
enum OrderStatus {
  PENDING = 10,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;
function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 404,
}
