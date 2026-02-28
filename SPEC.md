# Trade Signal Bot - Specification

## Project Overview

**Project Name:** CryptoTradeSignal - Binance Futures Signal Bot  
**Type:** Single-page Web Application  
**Core Functionality:** A trading signal generator that displays 10 crypto signals per day for Binance Futures (30min trades), with market trend analysis and crypto news integration.  
**Target Users:** Crypto traders using Binance Futures platform

---

## UI/UX Specification

### Layout Structure

**Main Sections:**
1. **Header** (80px height)
   - Logo/Brand name on left
   - Current time and market status on right
   - Navigation tabs: Signals | Market Trends | News

2. **Stats Bar** (60px height)
   - Total signals today
   - Win rate (simulated)
   - Next signal countdown

3. **Main Content Area**
   - Signals Grid (10 signal cards)
   - Each card shows: Pair, Direction, Entry, Targets, Stop Loss

4. **Sidebar** (300px width on desktop)
   - Market Trend Indicator (Bullish/Bearish/Neutral)
   - Recent Crypto News Feed (5 items)
   - Top Movers

5. **Footer** (40px height)
   - Disclaimer
   - Data refresh indicator

**Responsive Breakpoints:**
- Desktop: 1200px+ (sidebar visible)
- Tablet: 768px-1199px (sidebar hidden, toggle button)
- Mobile: <768px (stacked layout, hamburger menu)

### Visual Design

**Color Palette:**
- Background Primary: `#0a0e17` (deep dark blue-black)
- Background Secondary: `#131a2a` (dark navy)
- Card Background: `#1a2235` (slate blue)
- Accent Green (Buy/Profit): `#00d4aa` (teal green)
- Accent Red (Sell/Loss): `#ff4757` (coral red)
- Accent Gold (Highlights): `#ffd32a` (golden yellow)
- Text Primary: `#e8eaed` (light gray)
- Text Secondary: `#8892a0` (muted gray)
- Border Color: `#2a3548` (subtle border)

**Typography:**
- Heading Font: "Orbitron" (Google Fonts) - 24px/20px/16px
- Body Font: "Rajdhani" (Google Fonts) - 16px/14px
- Monospace (prices): "JetBrains Mono" - 14px

**Spacing System:**
- Base unit: 8px
- Card padding: 20px
- Grid gap: 16px
- Section margins: 24px

**Visual Effects:**
- Cards: Subtle glow on hover, border color change
- Price changes: Pulse animation
- Targets: Color-coded progress dots
- Dark theme with neon accents
- Smooth transitions (0.3s ease)

### Components

**1. Signal Card**
- Size: 320px × 280px
- Contains:
  - Pair name (e.g., BTCUSDT)
  - Direction badge (LONG/SHORT)
  - Entry price
  - Target 1-4 with profit %
  - Stop Loss with loss %
  - Time remaining (30min countdown)
  - Signal strength indicator

**2. Market Trend Widget**
- Circular gauge showing trend direction
- Bullish/Bearish/Neutral label
- Dominant trend percentage

**3. News Feed Item**
- Headline (truncated)
- Source
- Time ago
- Sentiment indicator (bullish/bearish/neutral)

**4. Top Movers Table**
- Coin symbol
- Price
- 24h change % (colored)

---

## Functionality Specification

### Core Features

**1. Signal Generation (Simulated)**
- Generate 10 signals per day
- Each signal contains:
  - Trading pair (top 20 crypto pairs)
  - Direction: LONG or SHORT
  - Entry price (current market price simulation)
  - Target 1: +25% profit
  - Target 2: +50% profit
  - Target 3: +75% profit
  - Target 4: +100% profit
  - Stop Loss: -25% loss
  - Timeframe: 30 minutes

**2. Market Trend Analysis (Simulated)**
- Overall market sentiment
- Dominant trend (Bullish/Bearish/Neutral)
- Top gainers/losers

**3. News Feed (Simulated)**
- 5 recent crypto news items
- Auto-refresh every 5 minutes (simulated)
- Sentiment analysis indicator

**4. Signal Management**
- Countdown timer for each signal (30 minutes)
- Signal expiry handling
- Active/Expired status

### User Interactions

- Click signal card for detailed view
- Hover effects on all interactive elements
- Tab navigation between sections
- Mobile menu toggle

### Data Handling

- All data is simulated/mocked for demonstration
- Data stored in JavaScript objects
- Auto-refresh simulation every 30 seconds

### Edge Cases

- Handle signal expiry gracefully
- Display "No signals" state if needed
- Responsive layout adjustments
- Loading states

---

## Acceptance Criteria

### Visual Checkpoints
- [ ] Dark theme with neon accents visible
- [ ] 10 signal cards displayed on homepage
- [ ] Each card shows all 5 targets + stop loss
- [ ] Market trend widget visible
- [ ] News feed with 5 items
- [ ] Responsive on mobile/tablet/desktop
- [ ] Smooth animations and transitions

### Functional Checkpoints
- [ ] 10 signals displayed per day
- [ ] Countdown timers working
- [ ] Tab navigation functional
- [ ] Mobile menu works
- [ ] Hover effects on cards

### Technical
- [ ] Single HTML file with embedded CSS/JS
- [ ] No external dependencies except Google Fonts
- [ ] No console errors
