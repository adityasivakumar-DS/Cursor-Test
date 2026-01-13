# Product Detail Page (PDP)

## Overview

This Product Detail Page is built according to the layout schema defined in `pdp-layout-schema.md`. It implements a two-column layout with all required components in their specified positions.

## File Structure

- `pdp.html` - Main HTML file containing the complete PDP implementation
- `PDP_README.md` - This documentation file

## Layout Structure

### Header Region
- **Header base** (high priority) - Navigation header with logo and menu items
- **Breadcrumbs** (medium priority) - Hierarchical navigation path

### Left Column (65% width)
- **Product Media Section** (high priority)
  - Main product image with navigation arrows
  - Thumbnail gallery (4 thumbnails)
  - Interactive image switching

### Right Column (35% width)
1. **Product brand rating** (high priority) - Brand name, wishlist icon, and star rating
2. **product_title** (high priority) - Product name heading
3. **Product Price** (high priority) - Price with strikeout and discount percentage
4. **Size & Color Selector** (high priority) - Dropdown selectors with size chart link
5. **Card Selector** (medium priority) - Selectable card with pricing
6. **IconWithTextText** (low priority) - Icon with text component
7. **Button** (high priority) - Primary CTA button "Add to Cart"

## Features

- ✅ Two-column layout (65% / 35%)
- ✅ Responsive design (stacks on mobile)
- ✅ All components from schema implemented
- ✅ Interactive product media gallery
- ✅ All required constraints met:
  - CTA button included
  - Product media required
  - Responsive breakpoint (stacked on mobile)

## Usage

Simply open `pdp.html` in any modern web browser. No build process or server required.

## Component Dependencies

The page uses:
- React 18 (via CDN)
- ReactDOM 18 (via CDN)
- Babel Standalone (for JSX transformation)
- Tailwind CSS (via CDN)
- Custom CSS variables matching the design system

## Responsive Behavior

- **Desktop**: Two-column layout (65% / 35%)
- **Mobile (< 768px)**: Single column, stacked layout

## Browser Support

Works in all modern browsers that support:
- ES6+ JavaScript
- React 18
- CSS Grid and Flexbox
