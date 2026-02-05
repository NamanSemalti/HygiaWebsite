# Pharmaceutical Wholesale Website - PRD

## Project Overview
**Project Name**: Hygia Healthcare Website  
**Business Name**: Hygia Healthcare  
**Type**: B2B Pharmaceutical Product Wholesaler  
**Established**: 2018 (8+ Years in Business)  
**Location**: Dehradun, Uttarakhand, India  
**Target Audience**: Medical retailers, hospitals, clinics, distributors in North India  
**Date Created**: February 5, 2025  
**Last Updated**: February 5, 2025  
**Current Phase**: Phase 1 Complete - Frontend with Accurate Business Information

---

## Original Problem Statement
Create a professional pharmaceutical wholesale website for Hygia Healthcare, an Indian medicine distributor.
- **Business Name**: Hygia Healthcare (exact)
- **Business Type**: Pharmaceutical Product Wholesaler - Wholesale supplier of branded and generic medicines (B2B only)
- **Established**: 2018 (8+ Years in Business)
- **Registered Address**: 1, Krishan Nagar Chowk, Rajpur Road, Dehradun – 248001, Uttarakhand, India
- **Design style**: Clean, medical, trustworthy with white, blue, and green color palette
- **Pages**: Home, About Us, Product Categories, Why Choose Us, Contact Us
- **Features**: WhatsApp button, contact form with WhatsApp redirect, Google Maps, SEO-friendly, mobile-first, professional images

---

## User Personas

### 1. Retail Pharmacy Owner
- **Goal**: Find reliable wholesale supplier with competitive prices
- **Pain Points**: Need genuine stock, fast delivery, credit terms
- **Behavior**: Compares multiple suppliers, values trust indicators

### 2. Hospital Procurement Manager
- **Goal**: Bulk orders for institutional use with compliance
- **Pain Points**: Need consistent supply, proper documentation
- **Behavior**: Focuses on certifications, delivery reliability

### 3. Medical Distributor
- **Goal**: Establish distribution partnership
- **Pain Points**: Need wide product range, flexible terms
- **Behavior**: Long-term relationship focus

---

## Architecture

### Frontend
- **Framework**: React 19 with React Router DOM 7.5
- **Styling**: Tailwind CSS with custom medical theme
- **Components**: Shadcn UI component library
- **State Management**: React hooks (useState for form)
- **Toast Notifications**: Sonner

### Backend (Not Yet Implemented)
- **Framework**: FastAPI
- **Database**: MongoDB (Motor async driver)
- **API Structure**: RESTful with /api prefix

### Deployment
- **Frontend**: Port 3000 (dev), production via supervisor
- **Backend**: Port 8001 (when implemented)

---

## What's Been Implemented (Phase 1)

### ✅ Completed Features (Feb 5, 2025)

#### Phase 1.1: Initial Frontend (Feb 5, 2025)
- Complete 5-page website with mock data
- Professional pharmaceutical design
- Mobile-responsive layout

#### Phase 1.2: Accurate Business Information Update (Feb 5, 2025)
**Business Details Updated**:
- ✅ Company name: "Hygia Healthcare" (everywhere)
- ✅ Tagline: "Wholesale Supplier of Branded & Generic Medicines"
- ✅ Established: 2018 (8+ Years in Business)
- ✅ Exact address: "1, Krishan Nagar Chowk, Rajpur Road, Dehradun – 248001, Uttarakhand, India"
- ✅ Service areas updated to North India (5 states)
- ✅ All testimonials updated with North India locations

**Updated Sections**:
1. ✅ Navbar - Shows "Hygia Healthcare" with "Pharmaceutical Wholesaler"
2. ✅ Footer - Complete business info with Est. 2018, address visible
3. ✅ Home Page:
   - Hero tagline: "Wholesale Supplier of Branded & Generic Medicines"
   - Trust indicators: Drug License, GST, "Established 2018 (8+ Years)"
   - CTAs: "Request Price List" & "Contact via WhatsApp"
   - Updated service description for North India
4. ✅ About Us Page:
   - Company name "Hygia Healthcare" 
   - Updated description mentioning 2018 and North India
   - Stats: "Est. 2018", "8+ Years in Business", "500+ Retail Partners", "50+ Hospital Clients"
   - Service areas: 5 North Indian states
5. ✅ Contact Page:
   - Address displayed exactly in contact card
   - Address displayed above Google Map
   - Google Maps embedded with Dehradun location
   - **WhatsApp Form Integration**: Form submission now redirects to WhatsApp with formatted inquiry details
6. ✅ All Pages:
   - Consistent branding throughout
   - Updated references from South India to North India
   - Professional pharmaceutical images maintained

#### 1. Navigation & Layout
- Sticky navigation bar with logo and menu
- Mobile-responsive hamburger menu
- Footer with company info and links
- WhatsApp floating button

#### 2. Home Page
- Hero section with headline and CTA buttons
- Trust indicators (Drug License, GST, Years of Experience)
- "Why Choose Us" preview (4 cards)
- Call-to-action section with contact options

#### 3. About Us Page
- Company background and mission
- Stats showcase (15+ years, 2000+ retailers, 150+ hospitals)
- Key strengths (4 highlights)
- Compliance & standards (4 sections)
- Service areas (5 South Indian states)
- Professional facility images

#### 4. Products Page
- 6 product categories with icons
  - Antibiotics
  - Cardiac Care
  - Diabetic Care
  - Pain & Fever
  - Syrups & Suspensions
  - Injections
- Example products for each category
- Additional supplies section
- Product images

#### 5. Why Choose Us Page
- Detailed benefits (4 main + 6 additional)
- Client testimonials (3 reviews)
- Professional images
- CTA section

#### 6. Contact Us Page
- Multi-field inquiry form with validation:
  - Business Name *
  - Contact Person *
  - Phone Number * (Indian mobile validation)
  - Email Address * (email format validation)
  - Drug License Number *
  - GST Number (optional)
  - Message *
- Contact information cards (Phone, Email, Address)
- Google Maps embed
- Form submission with toast notification

#### 7. Design Implementation
- Light blue and green medical color palette
- Professional pharmaceutical stock images (12 images)
- Clean, trustworthy design
- Mobile-first responsive layout
- Smooth transitions and hover effects
- No dark gradients (following guidelines)
- Lucide React icons (no emojis)

### 📁 File Structure
```
/app/frontend/src/
├── data/
│   └── mock.js              # All mock data (easily replaceable)
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── WhatsAppButton.jsx
│   └── ui/                  # Shadcn components
├── pages/
│   ├── Home.jsx
│   ├── AboutUs.jsx
│   ├── Products.jsx
│   ├── WhyChooseUs.jsx
│   └── Contact.jsx
├── App.js                   # Main routing
├── App.css                  # Custom styles
└── index.css                # Tailwind & global styles
```

---

## Mock Data Structure

### Company Information (`mock.js`)
- Company name, tagline
- Drug License number (placeholder)
- GST number (placeholder)
- Phone, WhatsApp, Email (placeholders)
- Address (placeholder)
- Years of experience

### Content Data
- About content (mission, description, highlights, service areas)
- Product categories (6 categories with details)
- Why choose us (4 main benefits)
- Testimonials (3 client reviews)
- FAQs (5 questions)

**Note**: All placeholders structured for easy replacement with actual business details

---

## Prioritized Backlog

### P0 Features (Must Have - Next Phase)
1. **Backend Development**
   - Create MongoDB models for inquiries
   - Build POST /api/inquiries endpoint
   - Integrate frontend form with backend
   - Store form submissions in database

2. **Admin Panel**
   - View all inquiries
   - Mark inquiries as read/contacted
   - Search and filter inquiries

### P1 Features (Should Have)
1. **Product Management**
   - Admin interface to add/edit products
   - Product image upload
   - Category management

2. **Price List Download**
   - Generate PDF price lists
   - Download feature for registered users

3. **WhatsApp Integration Enhancement**
   - Send inquiry summary to WhatsApp business number
   - Auto-response system

### P2 Features (Nice to Have)
1. **Product Search**
   - Search bar on products page
   - Filter by category
   - Sort by name/category

2. **User Registration**
   - Allow retailers to register
   - Login system for price access
   - Credit terms dashboard

3. **Analytics**
   - Track page views
   - Monitor inquiry conversion
   - Popular product categories

4. **SEO Optimization**
   - Meta tags for all pages
   - Schema markup for business
   - Sitemap generation

5. **Email Notifications**
   - Auto-email on inquiry submission
   - Admin notification emails
   - Newsletter signup

---

## Next Tasks

### Immediate (This Session)
- ✅ Fix compilation errors
- ✅ Verify all pages loading
- ✅ Test form validation
- ✅ Check mobile responsiveness

### Phase 2 (Backend Development)
1. Create inquiry model in MongoDB
2. Build POST `/api/inquiries` endpoint with validation
3. Integrate frontend form with backend API
4. Test end-to-end flow
5. Add inquiry list endpoint for admin

### Phase 3 (Enhancement)
1. Build admin dashboard
2. Add authentication
3. Implement product management
4. Add price list download
5. Set up email notifications

---

## Technical Notes

### Form Validation Rules
- Phone: 10-digit Indian mobile (starts with 6-9)
- Email: Standard email format
- Required fields: Business Name, Contact Person, Phone, Email, Drug License, Message
- Optional: GST Number

### Images Used
- 12 professional pharmaceutical images from Unsplash/Pexels
- Focus on B2B warehouse/distribution theme
- Quality control and professional facility images

### Known Issues
- Babel metadata plugin temporarily disabled (was causing infinite loop)
- Visual editing feature disabled during development
- Dynamic icon color classes need to be predefined in Tailwind config (currently using fixed colors)

---

## API Contracts (For Backend Implementation)

### POST /api/inquiries
**Request Body**:
```json
{
  "businessName": "string (required)",
  "contactPerson": "string (required)",
  "phone": "string (required, 10 digits)",
  "email": "string (required, valid email)",
  "drugLicense": "string (required)",
  "gstNumber": "string (optional)",
  "message": "string (required)"
}
```

**Response (201 Created)**:
```json
{
  "id": "string",
  "message": "Inquiry submitted successfully",
  "inquiry": { ...inquiry object with timestamp }
}
```

**Response (400 Bad Request)**:
```json
{
  "error": "Validation error",
  "details": [ array of error messages ]
}
```

### GET /api/inquiries (Admin)
**Response (200 OK)**:
```json
{
  "inquiries": [
    {
      "id": "string",
      "businessName": "string",
      "contactPerson": "string",
      "phone": "string",
      "email": "string",
      "drugLicense": "string",
      "gstNumber": "string",
      "message": "string",
      "createdAt": "datetime",
      "status": "pending|contacted|closed"
    }
  ]
}
```

---

## Success Metrics

### Phase 1 (Current)
- ✅ All 5 pages functional
- ✅ Mobile responsive
- ✅ Professional design matching requirements
- ✅ Form validation working
- ✅ WhatsApp integration active

### Phase 2 (Backend)
- Form submissions stored in database
- Admin can view inquiries
- Email notifications working

### Business Goals
- Increase inquiry conversion by 40%
- Reduce time-to-contact from 24h to 2h
- Handle 100+ inquiries per month
- Mobile traffic > 60%

---

## Maintenance Notes

### To Update Company Details
Edit `/app/frontend/src/data/mock.js`:
- `companyInfo` object (lines 4-16)
- Update name, phone, address, licenses, etc.

### To Update Content
Edit `/app/frontend/src/data/mock.js`:
- `aboutContent` - company description, highlights
- `productCategories` - add/remove categories
- `whyChooseUs` - modify benefits
- `testimonials` - client reviews

### To Change Images
Replace image URLs in respective page components:
- Home.jsx - line 68 (hero image)
- AboutUs.jsx - line 96 (facility image)
- Products.jsx - lines 86-100 (product images)
- WhyChooseUs.jsx - lines 114-122 (quality images)
