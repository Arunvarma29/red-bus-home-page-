# RedBus Home Page Clone

A modern, fully functional RedBus home page clone built with React, Vite, and Tailwind CSS using a modular component architecture.

## 🎯 Features

- **Modular Component Structure**: Clean separation of concerns with reusable components
- **SVG Icons**: Custom SVG icons for better visual design
- **Responsive Design**: Mobile-first design that works on all devices
- **Interactive Features**:
  - Trip type selection (One-way / Round Trip)
  - Passenger count selector
  - Search functionality
  - Booking modal with confirmation
- **Multiple Sections**:
  - Header with navigation
  - Hero section with search form
  - Popular routes display
  - Special offers section
  - Customer testimonials
  - Enhanced footer with links
- **Dummy Data**: Realistic mock data for demonstration

## 📁 Project Structure

```
src/
├── components/
│   ├── HeaderEnhanced.jsx          # Navigation header with mobile menu
│   ├── HeroSectionEnhanced.jsx     # Search form with trip type & passengers
│   ├── PopularRoutesEnhanced.jsx   # Popular routes display with booking
│   ├── OffersSection.jsx           # Special offers and promotions
│   ├── TestimonialsSection.jsx     # Customer testimonials & stats
│   ├── FooterEnhanced.jsx          # Footer with multiple sections
│   ├── BookingModal.jsx            # Booking confirmation modal
│   ├── SVGIcons.jsx                # SVG icon components
│   ├── Header.jsx                  # (Legacy)
│   ├── Footer.jsx                  # (Legacy)
│  
├── data/
│   └── dummyData.js               # All dummy data exported
├── App.jsx                         # Main app component
├── App.css                         # Custom styles & animations
├── main.jsx                        # Entry point
└── index.css                       # Global styles
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 🛠️ Technologies Used

- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern JavaScript

## 📦 Dependencies

- `react` - ^19.2.5
- `react-dom` - ^19.2.5
- `tailwindcss` - ^4.2.4
- `@tailwindcss/vite` - ^4.2.4

## 🎨 Design Highlights

1. **Color Scheme**: Red (#dc2626) primary with gradients
2. **Icons**: Custom SVG icons for visual appeal
3. **Animations**: Smooth fade-in and slide-up animations
4. **Responsive**: Mobile, tablet, and desktop layouts
5. **Interactive Elements**: Hover effects and transitions

## 📋 Component Details

### HeaderEnhanced
- Logo with bus icon
- Navigation links
- Sign In button
- Mobile menu toggle

### HeroSectionEnhanced
- Trip type selection (One-way/Round Trip)
- Location inputs with icons
- Date picker
- Passenger count selector
- Search button with instant feedback

### PopularRoutesEnhanced
- 6 popular routes with pricing
- Star ratings and bus count
- Benefits checkmarks
- Book Now button with modal integration

### BookingModal
- Displays selected route details
- Confirmation dialog
- Email notification message
- Cancel/Confirm actions

### OffersSection
- 3 special offers with discounts
- Promo codes
- Copy code functionality

### TestimonialsSection
- 4 customer testimonials
- Star ratings
- User avatars and locations
- Statistics section

### FooterEnhanced
- Company information
- Multiple link sections
- Newsletter subscription
- Trust badges
- Social media links
- Legal links

## 🎯 Usage Examples

### Using Dummy Data

```javascript
import { POPULAR_ROUTES, OFFERS, TESTIMONIALS } from './data/dummyData';
```

### Adding New Route

```javascript
const newRoute = {
  from: 'Chennai',
  to: 'Coimbatore',
  price: '₹350',
  rating: 4.6,
  buses: 20
};
```

### Triggering Booking

The "Book Now" button opens a modal with route details and a confirmation dialog.

## 🔧 Customization

### Changing Colors

Update Tailwind color classes in components (e.g., `bg-red-600` to your preferred color)

### Adding New Routes

Edit `src/data/dummyData.js` and add to `POPULAR_ROUTES` array

### Modifying Offers

Update `OFFERS` array in `src/data/dummyData.js`

### Adding Features

Create new components in `src/components/` and import them in `App.jsx`

## 📱 Responsive Breakpoints

- Mobile: < 768px (md breakpoint)
- Tablet: 768px - 1024px (lg breakpoint)
- Desktop: > 1024px

## 🚨 Note

This is a demonstration/prototype clone. For production use:
- Add actual API integration
- Implement proper authentication
- Add form validation
- Set up error handling
- Configure proper backend

## 📄 License

This project is open source and available under the MIT License.
