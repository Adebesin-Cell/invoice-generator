import { ReactComponent as Chart } from '../assets/svgs/icon-bar-chart.svg';
import { ReactComponent as User } from '../assets/svgs/icon-user-smooth.svg';
import { ReactComponent as Products } from '../assets/svgs/icon-products.svg';
import { ReactComponent as Dollar } from '../assets/svgs/icon-dollar.svg';
import ProductImage from '../assets/images/product--0.jpg';
import ProductImageOne from '../assets/images/product--2.jpg';
import ProductImageTwo from '../assets/images/product--3.jpg';
import ProductImageThree from '../assets/images/product--4.jpg';
import ProductImageFour from '../assets/images/product--5.jpg';
import ProductImageFive from '../assets/images/product--6.jpg';
import ProductImageSix from '../assets/images/product--1.jpg';
import ProductImageSeven from '../assets/images/product--7.png';
import ProductImageEight from '../assets/images/product--8.png';
import ProductImageNine from '../assets/images/product--9.png';
import ProductImageTen from '../assets/images/product--10.png';

export const Statistics = [
  {
    id: 1,
    title: 'Sales',
    icon: <Chart fill='#7367f0' />,
    amountinwords: '270k',
    amountinFigure: 270000,
    background: '#eeedfd',
    color: '#7367f0',
  },
  {
    id: 2,
    title: 'Products',
    icon: <Products />,
    amountinwords: '20k',
    amountinFigure: 20000,
    background: '#fceaea',
    color: '#ea5455',
  },
  {
    id: 3,
    title: 'Customers',
    icon: <User />,
    amountinwords: '50k',
    amountinFigure: 50000,
    background: '#e0f9fc',
    color: '#00cfe8',
  },
  {
    id: 4,
    title: 'Revenue',
    icon: <Dollar />,
    amountinwords: '550k',
    amountinFigure: 550000,
    background: '#e5f8ed',
    color: '#28c76f',
  },
];

export const Sales = [
  {
    title: 'Smoothie Hop',
    totalAmount: 4,
    orderNumber: 'WP1247',
    buyer: 'John Doe',
    price: 1000,
    currency: 'NGN',
  },
  {
    title: 'Make Up Kit',
    totalAmount: 1,
    orderNumber: 'WP2297',
    buyer: 'Evelyn Sam',
    price: 50000,
    currency: 'NGN',
  },
  {
    title: 'Beer',
    totalAmount: 12,
    orderNumber: 'WP9239',
    buyer: 'Mark Don',
    price: 1200,
    currency: 'NGN',
  },
  {
    title: 'Nike Air XI',
    totalAmount: 1,
    orderNumber: 'WP4447',
    buyer: 'Khali James',
    price: 15000,
    currency: 'NGN',
  },
];

export const ProductsList = [
  {
    id: 1,
    image: ProductImage,
    title: 'Classic Utility Jacket',
    status: 'in stock',
    price: 110,
    currency: '$',
    sizesAvailable: ['XS', 'S', 'M', 'L', 'XL'],
    comment: 'Free shipping on all continental US orders.',
  },
  {
    id: 2,
    image: ProductImageOne,
    title: 'Nike Sneakers',
    status: 'in stock',
    price: 39,
    currency: '$',
    sizesAvailable: ['XS', 'S', 'M', 'L', 'XL'],
    comment: 'Free shipping on all continental US orders.',
  },

  {
    id: 3,
    image: ProductImageTwo,
    title: 'Classic White Hoodie',
    status: 'in stock',
    price: 39,
    currency: '$',
    sizesAvailable: ['XS', 'S', 'M', 'L', 'XL'],
    comment: 'Free shipping on all continental US orders.',
  },

  {
    id: 4,
    image: ProductImageThree,
    title: 'Nike Brown Sneakers',
    status: 'in stock',
    price: 39,
    currency: '$',
    sizesAvailable: ['XS', 'S', 'M', 'L', 'XL'],
    comment: 'Free shipping on all continental US orders.',
  },

  {
    id: 5,
    image: ProductImageFour,
    title: 'Nike Brown Sneakers',
    status: 'in stock',
    price: 39,
    currency: '$',
    sizesAvailable: ['XS', 'S', 'M', 'L', 'XL'],
    comment: 'Free shipping on all continental US orders.',
  },

  {
    id: 6,
    image: ProductImageFive,
    title: 'Nike Brown Sneakers',
    status: 'in stock',
    price: 39,
    currency: '$',
    sizesAvailable: ['XS', 'S', 'M', 'L', 'XL'],
    comment: 'Free shipping on all continental US orders.',
  },

  {
    id: 7,
    image: ProductImageSix,
    title: 'Classic white top',
    status: 'in stock',
    price: 39,
    currency: '$',
    sizesAvailable: ['XS', 'S', 'M', 'L', 'XL'],
    comment: 'Free shipping on all continental US orders.',
  },
];

export const DUMMY_PRODUCTS = [
  {
    id: 1,
    title: 'Ankara Materials',
    category: 'Clothing',
    Description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in ex optio placeat quia quidem aliquid, vero exercitationem id commodi molestiae illo tempore quod. Sapiente eum eveniet quisquam suscipit ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui aut voluptatum consectetur praesentium, commodi voluptatibus laudantium hic, alias aliquam dicta possimus iure minima magnam? Quibusdam minus repudiandae voluptatum sit rem neque possimus modi velit, explicabo consequatur natus vero, corrupti ex commodi eveniet aliquid? Ab libero animi aliquid beatae, autem, suscipit rem porro rerum tempore ea consequatur deleniti, dolor accusamus.',
    price: 5000,
    quantity: 50,
    image: ProductImageSeven,
    discount: 0,
    currency: '₦',
  },

  {
    id: 2,
    title: 'Classic White Hoodie',
    category: 'Clothing',
    Description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in ex optio placeat quia quidem aliquid, vero exercitationem id commodi molestiae illo tempore quod. Sapiente eum eveniet quisquam suscipit ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores qui aut voluptatum consectetur praesentium, commodi voluptatibus laudantium hic, alias aliquam dicta possimus iure minima magnam? Quibusdam minus repudiandae voluptatum sit rem neque possimus modi velit, explicabo consequatur natus vero, corrupti ex commodi eveniet aliquid? Ab libero animi aliquid beatae, autem, suscipit rem porro rerum tempore ea consequatur deleniti, dolor accusamus.',
    price: 5000,
    quantity: 50,
    image: ProductImageTwo,
    discount: 0,
    currency: '₦',
  },
];

export const RecentProducts = [
  {
    id: 1,
    image: ProductImageNine,
    title: 'Cargo Shorts',
    quantity: 30,
    price: 1500,
    currency: 'NGN',
  },
  {
    id: 2,
    image: ProductImageTen,
    title: 'Shirts and Shorts',
    quantity: 15,
    price: 3500,
    currency: 'NGN',
  },
  {
    id: 3,
    image: ProductImageFive,
    title: 'Nike Sneakers',
    quantity: 15,
    price: 23500,
    currency: 'NGN',
  },
  {
    id: 4,
    image: ProductImageEight,
    title: 'Vintage Shirt',
    quantity: 15,
    price: 4000,
    currency: 'NGN',
  },
  {
    id: 5,
    image: ProductImageThree,
    title: 'Nike Sneakers',
    quantity: 15,
    price: 15000,
    currency: 'NGN',
  },
  {
    id: 6,
    image: ProductImageTwo,
    title: 'Classic White Hoodie',
    quantity: 25,
    price: 7500,
    currency: 'NGN',
  },
];

export const RecentSales = [
  {
    id: 1,
    sales_id: '#123939',
    sales_date: '2022-08-02T12:01:20.894Z',
    sales_status: 'paid',
    sales_by: 'Amode Habeeb',
    hasPaid: true,
    currency: 'NGN',
    sales_cost: 15000,
  },
  {
    id: 2,
    sales_id: '#123933',
    sales_date: '2022-08-10T12:01:20.894Z',
    sales_status: 'not-paid',
    sales_by: 'Amode Habeeb',
    hasPaid: false,
    currency: 'NGN',
    sales_cost: 15000,
  },
  {
    id: 3,
    sales_id: '#123939',
    sales_date: '2022-08-09T12:01:20.894Z',
    sales_status: 'paid',
    sales_by: 'Amode Habeeb',
    hasPaid: true,
    currency: 'NGN',
    sales_cost: 15000,
  },
  {
    id: 4,
    sales_id: '#123933',
    sales_date: '2022-08-05T12:01:20.894Z',
    sales_status: 'not-paid',
    sales_by: 'Amode Habeeb',
    hasPaid: false,
    currency: 'NGN',
    sales_cost: 15000,
  },
  {
    id: 5,
    sales_id: '#123939',
    sales_date: '2022-08-02T12:01:20.894Z',
    sales_status: 'paid',
    sales_by: 'Amode Habeeb',
    hasPaid: true,
    currency: 'NGN',
    sales_cost: 15000,
  },
  {
    id: 6,
    sales_id: '#123933',
    sales_date: '2022-08-10T12:01:20.894Z',
    sales_status: 'not-paid',
    sales_by: 'Amode Habeeb',
    hasPaid: false,
    currency: 'NGN',
    sales_cost: 15000,
  },
  {
    id: 7,
    sales_id: '#123939',
    sales_date: '2022-08-09T12:01:20.894Z',
    sales_status: 'paid',
    sales_by: 'Amode Habeeb',
    hasPaid: true,
    currency: 'NGN',
    sales_cost: 15000,
  },
  {
    id: 8,
    sales_id: '#123933',
    sales_date: '2022-08-05T12:01:20.894Z',
    sales_status: 'not-paid',
    sales_by: 'Amode Habeeb',
    hasPaid: false,
    currency: 'NGN',
    sales_cost: 15000,
  },
];
