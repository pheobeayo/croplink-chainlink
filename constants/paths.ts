export const LOGIN = "/login";
export const REGISTER = "/register";
export const OVERVIEW = "/overview";
export const LISTINGS = "/listings";
export const  MY_PRODUCE = "/my-produce";
export const ORDERS = "/orders";
export const TRANSACTIONS = "/transactions";
export const FIND_FARMERS = "/find-farmers";
export const MARKET_PRICES = "/market-prices";

const publicPaths = [LOGIN];

const privatePaths = [...new Set([...publicPaths, REGISTER])];

const farmerPaths = [
  ...new Set([
    ...publicPaths,
    ...privatePaths,
    OVERVIEW,
    MY_PRODUCE,
    ORDERS,
    TRANSACTIONS,
  ]),
];

const buyerPaths = [
  ...new Set([
    ...publicPaths,
    ...privatePaths,
    LISTINGS,
    FIND_FARMERS,
    ORDERS,
    MARKET_PRICES,
  ]),
];

export { publicPaths, privatePaths, farmerPaths, buyerPaths };
