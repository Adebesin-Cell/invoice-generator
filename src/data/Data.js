import { ReactComponent as Chart } from "../assets/svgs/icon-bar-chart.svg";
import { ReactComponent as User } from "../assets/svgs/icon-user-smooth.svg";
import { ReactComponent as Products } from "../assets/svgs/icon-products.svg";
import { ReactComponent as Dollar } from "../assets/svgs/icon-dollar.svg";
import ProductImage from "../assets/images/product--0.jpg";
import ProductImageOne from "../assets/images/product--2.jpg";
import ProductImageTwo from "../assets/images/product--3.jpg";
import ProductImageThree from "../assets/images/product--4.jpg";
import ProductImageFour from "../assets/images/product--5.jpg";
import ProductImageFive from "../assets/images/product--6.jpg";
import ProductImageSix from "../assets/images/product--1.jpg";

export const Statistics = [
  {
    id: 1,
    title: "Sales",
    icon: <Chart fill='#7367f0' />,
    amountinwords: "270k",
    amountinFigure: 270000,
    background: "#eeedfd",
    color: "#7367f0",
  },
  {
    id: 2,
    title: "Products",
    icon: <Products />,
    amountinwords: "20k",
    amountinFigure: 20000,
    background: "#fceaea",
    color: "#ea5455",
  },
  {
    id: 3,
    title: "Customers",
    icon: <User />,
    amountinwords: "50k",
    amountinFigure: 50000,
    background: "#e0f9fc",
    color: "#00cfe8",
  },
  {
    id: 4,
    title: "Revenue",
    icon: <Dollar />,
    amountinwords: "550k",
    amountinFigure: 550000,
    background: "#e5f8ed",
    color: "#28c76f",
  },
];

export const Sales = [
  {
    title: "Smoothie Hop",
    totalAmount: 4,
    orderNumber: "WP1247",
    buyer: "John Doe",
    price: 1000,
    currency: "NGN",
  },
  {
    title: "Make Up Kit",
    totalAmount: 1,
    orderNumber: "WP2297",
    buyer: "Evelyn Sam",
    price: 50000,
    currency: "NGN",
  },
  {
    title: "Beer",
    totalAmount: 12,
    orderNumber: "WP9239",
    buyer: "Mark Don",
    price: 1200,
    currency: "NGN",
  },
  {
    title: "Nike Air XI",
    totalAmount: 1,
    orderNumber: "WP4447",
    buyer: "Khali James",
    price: 15000,
    currency: "NGN",
  },
  {
    title: "Smoothie Hop",
    totalAmount: 4,
    orderNumber: "WP1247",
    buyer: "John Doe",
    price: 1000,
    currency: "NGN",
  },
  {
    title: "Make Up Kit",
    totalAmount: 1,
    orderNumber: "WP2297",
    buyer: "Evelyn Sam",
    price: 50000,
    currency: "NGN",
  },
  {
    title: "Beer",
    totalAmount: 12,
    orderNumber: "WP9239",
    buyer: "Mark Don",
    price: 1200,
    currency: "NGN",
  },
  {
    title: "Nike Air XI",
    totalAmount: 1,
    orderNumber: "WP4447",
    buyer: "Khali James",
    price: 15000,
    currency: "NGN",
  },
  {
    title: "Smoothie Hop",
    totalAmount: 4,
    orderNumber: "WP1247",
    buyer: "John Doe",
    price: 1000,
    currency: "NGN",
  },
  {
    title: "Make Up Kit",
    totalAmount: 1,
    orderNumber: "WP2297",
    buyer: "Evelyn Sam",
    price: 50000,
    currency: "NGN",
  },
  {
    title: "Beer",
    totalAmount: 12,
    orderNumber: "WP9239",
    buyer: "Mark Don",
    price: 1200,
    currency: "NGN",
  },
  {
    title: "Nike Air XI",
    totalAmount: 1,
    orderNumber: "WP4447",
    buyer: "Khali James",
    price: 15000,
    currency: "NGN",
  },
];

export const ProductsList = [
  {
    id: 1,
    image: ProductImage,
    title: "Classic Utility Jacket",
    status: "in stock",
    price: 110,
    currency: "$",
    sizesAvailable: ["XS", "S", "M", "L", "XL"],
    comment: "Free shipping on all continental US orders.",
  },
  {
    id: 2,
    image: ProductImageOne,
    title: "Nike Sneakers",
    status: "in stock",
    price: 39,
    currency: "$",
    sizesAvailable: ["XS", "S", "M", "L", "XL"],
    comment: "Free shipping on all continental US orders.",
  },

  {
    id: 3,
    image: ProductImageTwo,
    title: "Classic White Hoodie",
    status: "in stock",
    price: 39,
    currency: "$",
    sizesAvailable: ["XS", "S", "M", "L", "XL"],
    comment: "Free shipping on all continental US orders.",
  },

  {
    id: 4,
    image: ProductImageThree,
    title: "Nike Brown Sneakers",
    status: "in stock",
    price: 39,
    currency: "$",
    sizesAvailable: ["XS", "S", "M", "L", "XL"],
    comment: "Free shipping on all continental US orders.",
  },
];
