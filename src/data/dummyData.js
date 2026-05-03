// Dummy Data for RedBus Clone

export const POPULAR_ROUTES = [
  { from: 'Delhi', to: 'Jaipur', price: '₹500', rating: 4.5, buses: 45 },
  { from: 'Mumbai', to: 'Pune', price: '₹300', rating: 4.7, buses: 32 },
  { from: 'Bangalore', to: 'Chennai', price: '₹800', rating: 4.6, buses: 28 },
  { from: 'Kolkata', to: 'Dhaka', price: '₹1200', rating: 4.4, buses: 15 },
  { from: 'Hyderabad', to: 'Vijayawada', price: '₹400', rating: 4.8, buses: 22 },
  { from: 'Ahmedabad', to: 'Surat', price: '₹250', rating: 4.5, buses: 38 },
];

export const OFFERS = [
  {
    title: 'Summer Special',
    description: 'Get 30% off on all bookings',
    discount: '30%',
    code: 'SUMMER30',
    valid: 'Valid till June 30',
  },
  {
    title: 'Group Travel',
    description: 'Book 5+ seats and get flat ₹500 off',
    discount: '₹500',
    code: 'GROUP500',
    valid: 'Valid till end of month',
  },
  {
    title: 'First Booking',
    description: 'New users get ₹250 cashback',
    discount: '₹250',
    code: 'FIRST250',
    valid: 'One-time offer',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    city: 'Delhi',
    rating: 5,
    message: 'Great service! The bus was clean and the driver was very professional. Will book again!',
    avatar: '👩',
  },
  {
    name: 'Rajesh Kumar',
    city: 'Mumbai',
    rating: 5,
    message: 'Excellent experience from booking to reaching. RedBus is my first choice now.',
    avatar: '👨',
  },
  {
    name: 'Anjali Patel',
    city: 'Bangalore',
    rating: 4,
    message: 'Good selection of buses and competitive prices. Highly recommend!',
    avatar: '👩',
  },
  {
    name: 'Vikram Singh',
    city: 'Hyderabad',
    rating: 5,
    message: 'Amazing customer support and hassle-free booking process. Keep it up!',
    avatar: '👨',
  },
];

export const STATS = [
  { label: 'Happy Travelers', value: '50M+' },
  { label: 'Bus Operators', value: '1000+' },
  { label: 'Routes Covered', value: '2500+' },
];