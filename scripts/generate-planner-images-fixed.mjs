import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const OUTPUT_DIR = './public/images/products';

// Brand colors
const COLORS = {
  primary: '#2563eb',
  secondary: '#7c3aed',
  light: '#f3f4f6',
  white: '#ffffff',
  text: '#1f2937',
  textLight: '#6b7280',
};

// SVG for product thumbnail (1200x630) - with simple ASCII and better font embedding
const createThumbnailSVG = () => `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${COLORS.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.secondary};stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
      <feOffset dx="0" dy="2" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.3"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bgGradient)"/>

  <!-- Content -->
  <g transform="translate(600, 315)" text-anchor="middle">
    <!-- Badge -->
    <rect x="-140" y="-180" width="280" height="45" rx="22.5" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
    <text x="0" y="-150" font-family="Arial, sans-serif" font-size="18" font-weight="700" fill="white">
      PRODUCTIVITY SYSTEM
    </text>

    <!-- Main Title -->
    <text x="0" y="-80" font-family="Arial, sans-serif" font-size="72" font-weight="800" fill="white" filter="url(#shadow)">
      Digital Planner Bundle
    </text>

    <!-- Subtitle -->
    <text x="0" y="-20" font-family="Arial, sans-serif" font-size="32" fill="white" opacity="0.95">
      5 Essential Planners for Peak Productivity
    </text>

    <!-- Features -->
    <g transform="translate(-450, 50)">
      <rect x="0" y="0" width="180" height="60" rx="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
      <text x="90" y="38" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="white" text-anchor="middle">
        Daily Planner
      </text>
    </g>

    <g transform="translate(-225, 50)">
      <rect x="0" y="0" width="180" height="60" rx="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
      <text x="90" y="38" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="white" text-anchor="middle">
        Weekly Plan
      </text>
    </g>

    <g transform="translate(0, 50)">
      <rect x="0" y="0" width="180" height="60" rx="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
      <text x="90" y="38" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="white" text-anchor="middle">
        Monthly Goals
      </text>
    </g>

    <g transform="translate(-112.5, 130)">
      <rect x="0" y="0" width="180" height="60" rx="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
      <text x="90" y="38" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="white" text-anchor="middle">
        Habit Tracker
      </text>
    </g>

    <g transform="translate(112.5, 130)">
      <rect x="0" y="0" width="180" height="60" rx="12" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
      <text x="90" y="38" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="white" text-anchor="middle">
        Goal Tracker
      </text>
    </g>
  </g>
</svg>
`;

// SVG for daily planner preview (1200x800)
const createDailyPlannerSVG = () => `
<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="toolbarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${COLORS.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.secondary};stop-opacity:1" />
    </linearGradient>
    <filter id="cardShadow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="15"/>
      <feOffset dx="0" dy="10" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.15"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="800" fill="${COLORS.light}"/>

  <!-- Spreadsheet Card -->
  <g transform="translate(100, 100)" filter="url(#cardShadow)">
    <!-- Card Background -->
    <rect width="1000" height="600" rx="12" fill="white" stroke="#e5e7eb" stroke-width="1"/>

    <!-- Toolbar -->
    <rect width="1000" height="60" rx="12" fill="url(#toolbarGradient)"/>
    <rect y="12" width="1000" height="48" fill="url(#toolbarGradient)"/>
    <text x="24" y="42" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="white">
      Daily Planner - March 30, 2026
    </text>

    <!-- Content Area -->
    <g transform="translate(24, 84)">
      <!-- Priorities Section -->
      <rect width="952" height="45" fill="rgba(37, 99, 235, 0.08)" rx="4"/>
      <text x="12" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.text}">
        Top 3 Priorities
      </text>

      <text x="12" y="70" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="${COLORS.primary}">
        1. Complete product launch tasks
      </text>
      <text x="12" y="95" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="${COLORS.primary}">
        2. Review marketing materials
      </text>
      <text x="12" y="120" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="${COLORS.primary}">
        3. Plan content calendar
      </text>

      <!-- Time Block Section -->
      <rect y="145" width="952" height="45" fill="rgba(37, 99, 235, 0.08)" rx="4"/>
      <text x="12" y="173" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.text}">
        Time Block Schedule
      </text>

      <!-- Table Header -->
      <rect y="200" width="952" height="35" fill="${COLORS.light}"/>
      <line x1="0" y1="235" x2="952" y2="235" stroke="#d1d5db" stroke-width="2"/>

      <text x="12" y="222" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="${COLORS.text}">Time</text>
      <text x="140" y="222" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="${COLORS.text}">Task/Activity</text>
      <text x="550" y="222" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="${COLORS.text}">Status</text>
      <text x="680" y="222" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="${COLORS.text}">Notes</text>

      <!-- Table Rows -->
      <g transform="translate(0, 235)">
        <text x="12" y="28" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">8:00 AM</text>
        <text x="140" y="28" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">Morning routine &amp; planning</text>
        <text x="550" y="28" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.primary}">Done</text>
        <text x="680" y="28" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">Set daily intentions</text>
        <line x1="0" y1="38" x2="952" y2="38" stroke="#e5e7eb" stroke-width="1"/>

        <text x="12" y="68" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">9:00 AM</text>
        <text x="140" y="68" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">Deep work - Product development</text>
        <text x="550" y="68" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.secondary}">In Progress</text>
        <text x="680" y="68" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">Focus session</text>
        <line x1="0" y1="78" x2="952" y2="78" stroke="#e5e7eb" stroke-width="1"/>

        <text x="12" y="108" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">10:30 AM</text>
        <text x="140" y="108" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">Team standup meeting</text>
        <text x="680" y="108" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">30 min sync</text>
        <line x1="0" y1="118" x2="952" y2="118" stroke="#e5e7eb" stroke-width="1"/>

        <text x="12" y="148" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">11:00 AM</text>
        <text x="140" y="148" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">Content creation</text>
        <text x="680" y="148" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">Social media posts</text>
        <line x1="0" y1="158" x2="952" y2="158" stroke="#e5e7eb" stroke-width="1"/>

        <text x="12" y="188" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">12:00 PM</text>
        <text x="140" y="188" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">Lunch break</text>
        <text x="680" y="188" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">Take a walk</text>
        <line x1="0" y1="198" x2="952" y2="198" stroke="#e5e7eb" stroke-width="1"/>

        <text x="12" y="228" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">1:00 PM</text>
        <text x="140" y="228" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">Client calls &amp; emails</text>
        <text x="680" y="228" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">Follow up on leads</text>
      </g>
    </g>
  </g>
</svg>
`;

// SVG for habit tracker preview (1200x800)
const createHabitTrackerSVG = () => `
<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="toolbarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${COLORS.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.secondary};stop-opacity:1" />
    </linearGradient>
    <filter id="cardShadow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="15"/>
      <feOffset dx="0" dy="10" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.15"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1200" height="800" fill="${COLORS.light}"/>

  <g transform="translate(100, 100)" filter="url(#cardShadow)">
    <rect width="1000" height="600" rx="12" fill="white" stroke="#e5e7eb" stroke-width="1"/>

    <rect width="1000" height="60" rx="12" fill="url(#toolbarGradient)"/>
    <rect y="12" width="1000" height="48" fill="url(#toolbarGradient)"/>
    <text x="24" y="42" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="white">
      Habit Tracker - March 2026
    </text>

    <g transform="translate(24, 84)">
      <!-- Table Header -->
      <rect width="952" height="35" fill="${COLORS.light}"/>
      <text x="12" y="22" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="${COLORS.text}">Habit</text>

      <!-- Day numbers -->
      <text x="200" y="22" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="${COLORS.text}" text-anchor="middle">1</text>
      <text x="235" y="22" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="${COLORS.text}" text-anchor="middle">2</text>
      <text x="270" y="22" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="${COLORS.text}" text-anchor="middle">3</text>
      <text x="305" y="22" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="${COLORS.text}" text-anchor="middle">4</text>
      <text x="340" y="22" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="${COLORS.text}" text-anchor="middle">5</text>
      <text x="375" y="22" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="${COLORS.text}" text-anchor="middle">6</text>
      <text x="410" y="22" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="${COLORS.text}" text-anchor="middle">7</text>
      <text x="445" y="22" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="${COLORS.text}" text-anchor="middle">8</text>
      <text x="480" y="22" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="${COLORS.text}" text-anchor="middle">9</text>
      <text x="515" y="22" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="${COLORS.text}" text-anchor="middle">10</text>
      <text x="560" y="22" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="${COLORS.text}" text-anchor="middle">...</text>
      <text x="900" y="22" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="${COLORS.text}" text-anchor="middle">Total</text>

      <line x1="0" y1="35" x2="952" y2="35" stroke="#d1d5db" stroke-width="2"/>

      <!-- Habit Rows with X marks -->
      <g transform="translate(0, 35)">
        <!-- Morning routine -->
        <text x="12" y="28" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="${COLORS.text}">Morning routine</text>
        <text x="200" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="235" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="270" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="305" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="340" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="410" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="445" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="480" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="515" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="900" y="28" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="${COLORS.text}" text-anchor="middle">28</text>
        <line x1="0" y1="38" x2="952" y2="38" stroke="#e5e7eb" stroke-width="1"/>

        <!-- Exercise -->
        <text x="12" y="68" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="${COLORS.text}">Exercise</text>
        <text x="200" y="68" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="270" y="68" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="305" y="68" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="340" y="68" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="445" y="68" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="480" y="68" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="515" y="68" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="900" y="68" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="${COLORS.text}" text-anchor="middle">21</text>
        <line x1="0" y1="78" x2="952" y2="78" stroke="#e5e7eb" stroke-width="1"/>

        <!-- Meditation -->
        <text x="12" y="108" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="${COLORS.text}">Meditation</text>
        <text x="200" y="108" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="235" y="108" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="270" y="108" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="340" y="108" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="375" y="108" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="410" y="108" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="445" y="108" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="480" y="108" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="900" y="108" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="${COLORS.text}" text-anchor="middle">24</text>
        <line x1="0" y1="118" x2="952" y2="118" stroke="#e5e7eb" stroke-width="1"/>

        <!-- Reading -->
        <text x="12" y="148" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="${COLORS.text}">Reading</text>
        <text x="200" y="148" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="235" y="148" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="270" y="148" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="305" y="148" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="340" y="148" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="375" y="148" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="410" y="148" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="480" y="148" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="515" y="148" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="900" y="148" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="${COLORS.text}" text-anchor="middle">26</text>
        <line x1="0" y1="158" x2="952" y2="158" stroke="#e5e7eb" stroke-width="1"/>

        <!-- 8+ hours sleep -->
        <text x="12" y="188" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="${COLORS.text}">8+ hours sleep</text>
        <text x="200" y="188" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="235" y="188" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="305" y="188" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="340" y="188" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="375" y="188" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="410" y="188" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="445" y="188" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="515" y="188" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="900" y="188" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="${COLORS.text}" text-anchor="middle">25</text>
        <line x1="0" y1="198" x2="952" y2="198" stroke="#e5e7eb" stroke-width="1"/>

        <!-- Deep work session -->
        <text x="12" y="228" font-family="Arial, sans-serif" font-size="13" font-weight="600" fill="${COLORS.text}">Deep work session</text>
        <text x="200" y="228" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="235" y="228" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="270" y="228" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="305" y="228" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="340" y="228" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="445" y="228" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="480" y="228" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="515" y="228" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.primary}" text-anchor="middle">X</text>
        <text x="900" y="228" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="${COLORS.text}" text-anchor="middle">22</text>
      </g>
    </g>
  </g>
</svg>
`;

// SVG for goal tracker preview (1200x800) - same as before with Arial font
const createGoalTrackerSVG = () => `
<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="toolbarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${COLORS.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.secondary};stop-opacity:1" />
    </linearGradient>
    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${COLORS.primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${COLORS.secondary};stop-opacity:1" />
    </linearGradient>
    <filter id="cardShadow">
      <feGaussianBlur in="SourceAlpha" stdDeviation="15"/>
      <feOffset dx="0" dy="10" result="offsetblur"/>
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.15"/>
      </feComponentTransfer>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1200" height="800" fill="${COLORS.light}"/>

  <g transform="translate(100, 100)" filter="url(#cardShadow)">
    <rect width="1000" height="600" rx="12" fill="white" stroke="#e5e7eb" stroke-width="1"/>

    <rect width="1000" height="60" rx="12" fill="url(#toolbarGradient)"/>
    <rect y="12" width="1000" height="48" fill="url(#toolbarGradient)"/>
    <text x="24" y="42" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="white">
      Goal Tracker - Q1 2026
    </text>

    <g transform="translate(24, 84)">
      <!-- Section Header -->
      <rect width="952" height="45" fill="rgba(37, 99, 235, 0.08)" rx="4"/>
      <text x="12" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.text}">
        Quarterly Goals
      </text>

      <!-- Table Header -->
      <g transform="translate(0, 55)">
        <rect width="952" height="35" fill="${COLORS.light}"/>
        <text x="12" y="22" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="${COLORS.text}">Goal</text>
        <text x="500" y="22" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="${COLORS.text}">Progress</text>
        <text x="750" y="22" font-family="Arial, sans-serif" font-size="13" font-weight="700" fill="${COLORS.text}">Status</text>
        <line x1="0" y1="35" x2="952" y2="35" stroke="#d1d5db" stroke-width="2"/>
      </g>

      <!-- Goal 1 -->
      <g transform="translate(0, 90)">
        <text x="12" y="30" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="${COLORS.text}">
          Launch Digital Product Line
        </text>
        <rect x="500" y="15" width="200" height="20" rx="10" fill="#e5e7eb"/>
        <rect x="500" y="15" width="150" height="20" rx="10" fill="url(#progressGradient)"/>
        <text x="600" y="29" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">
          75%
        </text>
        <text x="750" y="30" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">
          On Track
        </text>
        <line x1="0" y1="45" x2="952" y2="45" stroke="#e5e7eb" stroke-width="1"/>
      </g>

      <!-- Goal 2 -->
      <g transform="translate(0, 135)">
        <text x="12" y="30" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="${COLORS.text}">
          Grow Email List to 1,000 Subscribers
        </text>
        <rect x="500" y="15" width="200" height="20" rx="10" fill="#e5e7eb"/>
        <rect x="500" y="15" width="120" height="20" rx="10" fill="url(#progressGradient)"/>
        <text x="560" y="29" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">
          60%
        </text>
        <text x="750" y="30" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">
          On Track
        </text>
        <line x1="0" y1="45" x2="952" y2="45" stroke="#e5e7eb" stroke-width="1"/>
      </g>

      <!-- Goal 3 -->
      <g transform="translate(0, 180)">
        <text x="12" y="30" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="${COLORS.text}">
          Generate $10K in Revenue
        </text>
        <rect x="500" y="15" width="200" height="20" rx="10" fill="#e5e7eb"/>
        <rect x="500" y="15" width="90" height="20" rx="10" fill="url(#progressGradient)"/>
        <text x="545" y="29" font-family="Arial, sans-serif" font-size="12" font-weight="700" fill="white" text-anchor="middle">
          45%
        </text>
        <text x="750" y="30" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">
          On Track
        </text>
        <line x1="0" y1="45" x2="952" y2="45" stroke="#e5e7eb" stroke-width="1"/>
      </g>

      <!-- Milestones Section -->
      <g transform="translate(0, 250)">
        <rect width="952" height="45" fill="rgba(37, 99, 235, 0.08)" rx="4"/>
        <text x="12" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="${COLORS.text}">
          Key Milestones
        </text>
      </g>

      <g transform="translate(0, 305)">
        <text x="12" y="25" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="${COLORS.text}">
          [Done] Complete website redesign
        </text>
        <text x="12" y="45" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">
          Completed - March 15
        </text>
        <line x1="0" y1="55" x2="952" y2="55" stroke="#e5e7eb" stroke-width="1"/>

        <text x="12" y="80" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="${COLORS.text}">
          [In Progress] Launch first digital product
        </text>
        <text x="12" y="100" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">
          In Progress - Due March 31
        </text>
        <line x1="0" y1="110" x2="952" y2="110" stroke="#e5e7eb" stroke-width="1"/>

        <text x="12" y="135" font-family="Arial, sans-serif" font-size="14" font-weight="600" fill="${COLORS.text}">
          [Done] Create 30-day content calendar
        </text>
        <text x="12" y="155" font-family="Arial, sans-serif" font-size="13" fill="${COLORS.textLight}">
          Completed - March 20
        </text>
      </g>
    </g>
  </g>
</svg>
`;

async function generateImages() {
  try {
    // Ensure output directory exists
    await mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`Created directory: ${OUTPUT_DIR}`);

    // Generate all SVG files
    await writeFile(join(OUTPUT_DIR, 'digital-planner-thumbnail.svg'), createThumbnailSVG());
    console.log('✓ Saved: digital-planner-thumbnail.svg (1200x630)');

    await writeFile(join(OUTPUT_DIR, 'digital-planner-daily.svg'), createDailyPlannerSVG());
    console.log('✓ Saved: digital-planner-daily.svg (1200x800)');

    await writeFile(join(OUTPUT_DIR, 'digital-planner-habits.svg'), createHabitTrackerSVG());
    console.log('✓ Saved: digital-planner-habits.svg (1200x800)');

    await writeFile(join(OUTPUT_DIR, 'digital-planner-goals.svg'), createGoalTrackerSVG());
    console.log('✓ Saved: digital-planner-goals.svg (1200x800)');

    console.log('\n✅ All product images generated successfully!');
    console.log(`\nImages saved to: ${OUTPUT_DIR}/`);

  } catch (error) {
    console.error('Error generating images:', error);
    throw error;
  }
}

generateImages().catch(console.error);
