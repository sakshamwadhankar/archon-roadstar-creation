# Multi-Model Specifications Component

## Overview
The Technical Specifications section has been redesigned as a multi-model, data-driven component that allows users to switch between different Archon vehicle models and view their specifications with unit conversion capabilities.

## Components Created

### 1. `SpecsByModel.tsx` - Main Component
- **Location**: `src/components/SpecsByModel.tsx`
- **Purpose**: Main component that renders the multi-model specifications interface
- **Features**:
  - Model selector (tabs on desktop, horizontal scroll on mobile)
  - Unit toggle (Imperial ↔ Metric)
  - Animated transitions between models
  - Scroll-based reveal animations
  - Accessible keyboard navigation
  - Responsive design

### 2. `specsData.ts` - Data Source
- **Location**: `src/data/specsData.ts`
- **Purpose**: Centralized data source for all vehicle specifications
- **Structure**:
  ```typescript
  interface SpecsData {
    id: string;
    name: string;
    heroTagline: string;
    thumbnail?: string;
    specs: {
      engine: { type, powerHP, powerKW, torqueLbFt, torqueNm, accel0to60s };
      performance: { topSpeedMph, topSpeedKmh, quarterMileS, rangeMiles, charging10to80Min };
      design: { weightLbs, weightKg, lengthIn, lengthMm, widthIn, widthMm, heightIn, heightMm };
      technology: { infotainment, audio, connectivity, autonomousLevel };
    };
  }
  ```

### 3. `useUnitToggle.ts` - Unit Conversion Hook
- **Location**: `src/hooks/useUnitToggle.ts`
- **Purpose**: Manages unit system state and provides conversion functions
- **Functions**:
  - `toggleUnits()`: Switch between imperial and metric
  - `formatSpeed()`: Convert mph ↔ km/h
  - `formatTorque()`: Convert lb-ft ↔ Nm
  - `formatWeight()`: Convert lbs ↔ kg
  - `formatLength()`: Convert inches ↔ mm
  - `formatPower()`: Display HP or kW

## Data Management

### Adding New Models
To add a new vehicle model, add an entry to the `specsData` array in `src/data/specsData.ts`:

```typescript
{
  id: "new-model-id",
  name: "ARC New Model",
  heroTagline: "Your tagline here",
  thumbnail: "/cars/new-model.jpg", // optional
  specs: {
    engine: {
      type: "Engine description",
      powerHP: 500,
      powerKW: 373,
      torqueLbFt: 600,
      torqueNm: 813,
      accel0to60s: 4.0,
    },
    // ... other spec categories
  },
}
```

### Modifying Specifications
All specifications are stored in the `specsData` array. Simply update the relevant values in the data file - no component changes needed.

## Features

### Model Selection
- **Desktop**: Tab-based interface with 4-column grid
- **Mobile**: Horizontal scrollable chips with touch-friendly targets
- **Accessibility**: Full keyboard navigation with ARIA labels

### Unit Conversion
- **Toggle**: Button to switch between Imperial and Metric units
- **Instant**: All values update immediately when units are changed
- **Persistent**: Unit preference maintained during session

### Animations
- **Scroll-based reveal**: Components animate in when scrolled into view
- **Model transitions**: Smooth fade and slide effects when switching models
- **Hover effects**: Subtle interactions on cards and buttons
- **Respect motion preferences**: Uses `prefers-reduced-motion` media query

### Performance Optimizations
- **Lightweight**: No heavy animation libraries
- **GPU-friendly**: CSS transforms and opacity changes
- **Semantic HTML**: Proper landmarks and heading structure
- **Tree-shakable**: Only used icons are imported

## Accessibility Features

### Keyboard Navigation
- Tab through model selector
- Arrow keys for tab navigation
- Enter/Space to activate buttons

### Screen Readers
- Proper ARIA labels and roles
- Live regions for dynamic content updates
- Semantic HTML structure

### Visual Accessibility
- High contrast ratios (AA compliant)
- Focus indicators
- Clear typography hierarchy

## Usage Example

```tsx
import SpecsByModel from '@/components/SpecsByModel';

// Replace the existing Specifications component
const Specifications = () => {
  return <SpecsByModel />;
};
```

## Customization

### Styling
The component uses the existing design system tokens from `index.css` and follows the site's black-gold color palette. All colors use HSL values and respect the current theme.

### Icons
Icons are from Lucide React and can be easily changed by modifying the icon imports and assignments in the spec categories.

### Layout
The component is fully responsive:
- **Mobile**: Single column, horizontal model selector
- **Tablet**: 2-column grid
- **Desktop**: 4-column grid with tab selector

## Browser Support
- Modern browsers with CSS Grid support
- Graceful degradation for older browsers
- Responsive design tested across devices
