import puppeteer from 'puppeteer';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const OUTPUT_DIR = './public/images/products';

// Brand colors from RunDailyAI website
const COLORS = {
  primary: '#2563eb',
  secondary: '#7c3aed',
  light: '#f3f4f6',
  white: '#ffffff',
  text: '#1f2937',
  textLight: '#6b7280',
};

// HTML template for product thumbnail (1200x630)
const createThumbnailHTML = () => `
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1200px;
      height: 630px;
      background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      overflow: hidden;
    }
    .container {
      text-align: center;
      color: white;
      padding: 60px;
      max-width: 900px;
    }
    h1 {
      font-size: 72px;
      font-weight: 800;
      margin-bottom: 24px;
      text-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    p {
      font-size: 32px;
      opacity: 0.95;
      margin-bottom: 40px;
      line-height: 1.4;
    }
    .features {
      display: flex;
      gap: 30px;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 40px;
    }
    .feature {
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(10px);
      padding: 20px 30px;
      border-radius: 12px;
      font-size: 24px;
      font-weight: 600;
      border: 2px solid rgba(255,255,255,0.3);
    }
    .badge {
      display: inline-block;
      background: rgba(255,255,255,0.25);
      padding: 12px 24px;
      border-radius: 24px;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 30px;
      border: 2px solid rgba(255,255,255,0.4);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="badge">🎯 PRODUCTIVITY SYSTEM</div>
    <h1>Digital Planner Bundle</h1>
    <p>5 Essential Planners for Peak Productivity</p>
    <div class="features">
      <div class="feature">📅 Daily Planner</div>
      <div class="feature">📊 Weekly Planner</div>
      <div class="feature">🗓️ Monthly Planner</div>
      <div class="feature">✅ Habit Tracker</div>
      <div class="feature">🎯 Goal Tracker</div>
    </div>
  </div>
</body>
</html>
`;

// HTML template for daily planner preview
const createDailyPlannerHTML = () => `
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1200px;
      height: 800px;
      background: ${COLORS.light};
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 60px;
    }
    .spreadsheet {
      background: white;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
      width: 100%;
      max-width: 1000px;
      overflow: hidden;
      border: 1px solid #e5e7eb;
    }
    .toolbar {
      background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
      padding: 16px 24px;
      color: white;
      font-size: 20px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .table-container {
      padding: 24px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
    }
    th {
      background: ${COLORS.light};
      padding: 12px;
      text-align: left;
      font-weight: 700;
      color: ${COLORS.text};
      border-bottom: 2px solid #d1d5db;
    }
    td {
      padding: 10px 12px;
      border-bottom: 1px solid #e5e7eb;
      color: ${COLORS.textLight};
    }
    tr:hover {
      background: #f9fafb;
    }
    .header-row {
      background: linear-gradient(135deg, ${COLORS.primary}15 0%, ${COLORS.secondary}15 100%);
      font-weight: 700;
      color: ${COLORS.text};
    }
    .priority {
      color: ${COLORS.primary};
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="spreadsheet">
    <div class="toolbar">
      📅 Daily Planner - March 30, 2026
    </div>
    <div class="table-container">
      <table>
        <tr class="header-row">
          <td colspan="4" style="padding: 16px 12px; font-size: 16px;">
            <strong>Top 3 Priorities</strong>
          </td>
        </tr>
        <tr>
          <td colspan="4" class="priority">1. Complete product launch tasks</td>
        </tr>
        <tr>
          <td colspan="4" class="priority">2. Review marketing materials</td>
        </tr>
        <tr>
          <td colspan="4" class="priority">3. Plan content calendar</td>
        </tr>
        <tr class="header-row">
          <td colspan="4" style="padding: 16px 12px; font-size: 16px; margin-top: 20px;">
            <strong>Time Block Schedule</strong>
          </td>
        </tr>
        <tr>
          <th>Time</th>
          <th>Task/Activity</th>
          <th>Status</th>
          <th>Notes</th>
        </tr>
        <tr>
          <td>8:00 AM</td>
          <td>Morning routine & planning</td>
          <td>✅</td>
          <td>Set daily intentions</td>
        </tr>
        <tr>
          <td>9:00 AM</td>
          <td>Deep work - Product development</td>
          <td>⏳</td>
          <td>Focus session</td>
        </tr>
        <tr>
          <td>10:30 AM</td>
          <td>Team standup meeting</td>
          <td></td>
          <td>30 min sync</td>
        </tr>
        <tr>
          <td>11:00 AM</td>
          <td>Content creation</td>
          <td></td>
          <td>Social media posts</td>
        </tr>
        <tr>
          <td>12:00 PM</td>
          <td>Lunch break</td>
          <td></td>
          <td>Take a walk</td>
        </tr>
        <tr>
          <td>1:00 PM</td>
          <td>Client calls & emails</td>
          <td></td>
          <td>Follow up on leads</td>
        </tr>
        <tr>
          <td>3:00 PM</td>
          <td>Marketing campaign review</td>
          <td></td>
          <td>Analytics check</td>
        </tr>
      </table>
    </div>
  </div>
</body>
</html>
`;

// HTML template for habit tracker preview
const createHabitTrackerHTML = () => `
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1200px;
      height: 800px;
      background: ${COLORS.light};
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 60px;
    }
    .spreadsheet {
      background: white;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
      width: 100%;
      max-width: 1000px;
      overflow: hidden;
      border: 1px solid #e5e7eb;
    }
    .toolbar {
      background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
      padding: 16px 24px;
      color: white;
      font-size: 20px;
      font-weight: 700;
    }
    .table-container {
      padding: 24px;
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
    }
    th {
      background: ${COLORS.light};
      padding: 10px 8px;
      text-align: center;
      font-weight: 700;
      color: ${COLORS.text};
      border: 1px solid #d1d5db;
      min-width: 35px;
    }
    th:first-child {
      text-align: left;
      min-width: 180px;
    }
    td {
      padding: 10px 8px;
      border: 1px solid #e5e7eb;
      text-align: center;
      color: ${COLORS.textLight};
    }
    td:first-child {
      text-align: left;
      font-weight: 600;
      color: ${COLORS.text};
    }
    .check {
      color: ${COLORS.primary};
      font-size: 18px;
      font-weight: bold;
    }
    .header-month {
      background: linear-gradient(135deg, ${COLORS.primary}15 0%, ${COLORS.secondary}15 100%);
      font-size: 16px;
      padding: 14px 12px;
    }
  </style>
</head>
<body>
  <div class="spreadsheet">
    <div class="toolbar">
      ✅ Habit Tracker - March 2026
    </div>
    <div class="table-container">
      <table>
        <tr>
          <th>Habit</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
          <th>9</th>
          <th>10</th>
          <th>...</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>Morning routine</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td></td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td>...</td>
          <td><strong>28</strong></td>
        </tr>
        <tr>
          <td>Exercise</td>
          <td class="check">✓</td>
          <td></td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td></td>
          <td></td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td>...</td>
          <td><strong>21</strong></td>
        </tr>
        <tr>
          <td>Meditation</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td></td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td></td>
          <td>...</td>
          <td><strong>24</strong></td>
        </tr>
        <tr>
          <td>Reading</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td></td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td>...</td>
          <td><strong>26</strong></td>
        </tr>
        <tr>
          <td>8+ hours sleep</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td></td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td></td>
          <td class="check">✓</td>
          <td>...</td>
          <td><strong>25</strong></td>
        </tr>
        <tr>
          <td>Healthy eating</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td></td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td>...</td>
          <td><strong>27</strong></td>
        </tr>
        <tr>
          <td>Deep work session</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td></td>
          <td></td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td>...</td>
          <td><strong>22</strong></td>
        </tr>
        <tr>
          <td>Practice gratitude</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td class="check">✓</td>
          <td>...</td>
          <td><strong>30</strong></td>
        </tr>
      </table>
    </div>
  </div>
</body>
</html>
`;

// HTML template for goal tracker preview
const createGoalTrackerHTML = () => `
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1200px;
      height: 800px;
      background: ${COLORS.light};
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 60px;
    }
    .spreadsheet {
      background: white;
      border-radius: 12px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
      width: 100%;
      max-width: 1000px;
      overflow: hidden;
      border: 1px solid #e5e7eb;
    }
    .toolbar {
      background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
      padding: 16px 24px;
      color: white;
      font-size: 20px;
      font-weight: 700;
    }
    .table-container {
      padding: 24px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
    }
    th {
      background: ${COLORS.light};
      padding: 12px;
      text-align: left;
      font-weight: 700;
      color: ${COLORS.text};
      border-bottom: 2px solid #d1d5db;
    }
    td {
      padding: 12px;
      border-bottom: 1px solid #e5e7eb;
      color: ${COLORS.textLight};
    }
    .section-header {
      background: linear-gradient(135deg, ${COLORS.primary}15 0%, ${COLORS.secondary}15 100%);
      font-weight: 700;
      font-size: 16px;
      color: ${COLORS.text};
      padding: 16px 12px !important;
    }
    .goal-row {
      font-weight: 600;
      color: ${COLORS.text};
    }
    .progress-bar {
      background: #e5e7eb;
      height: 20px;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
    }
    .progress-fill {
      background: linear-gradient(90deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 12px;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="spreadsheet">
    <div class="toolbar">
      🎯 Goal Tracker - Q1 2026
    </div>
    <div class="table-container">
      <table>
        <tr class="section-header">
          <td colspan="3">Quarterly Goals</td>
        </tr>
        <tr>
          <th style="width: 50%;">Goal</th>
          <th style="width: 30%;">Progress</th>
          <th style="width: 20%;">Status</th>
        </tr>
        <tr>
          <td class="goal-row">Launch Digital Product Line</td>
          <td>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 75%;">75%</div>
            </div>
          </td>
          <td>On Track</td>
        </tr>
        <tr>
          <td class="goal-row">Grow Email List to 1,000 Subscribers</td>
          <td>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 60%;">60%</div>
            </div>
          </td>
          <td>On Track</td>
        </tr>
        <tr>
          <td class="goal-row">Generate $10K in Revenue</td>
          <td>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 45%;">45%</div>
            </div>
          </td>
          <td>On Track</td>
        </tr>
        <tr class="section-header">
          <td colspan="3" style="padding-top: 24px;">Key Milestones</td>
        </tr>
        <tr>
          <td class="goal-row">✅ Complete website redesign</td>
          <td colspan="2">Completed - March 15</td>
        </tr>
        <tr>
          <td class="goal-row">⏳ Launch first digital product</td>
          <td colspan="2">In Progress - Due March 31</td>
        </tr>
        <tr>
          <td class="goal-row">📅 Create 30-day content calendar</td>
          <td colspan="2">Completed - March 20</td>
        </tr>
        <tr>
          <td class="goal-row">📧 Set up email automation</td>
          <td colspan="2">Planned - Due April 5</td>
        </tr>
      </table>
    </div>
  </div>
</body>
</html>
`;

async function generateImages() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // Ensure output directory exists
    await mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`Created directory: ${OUTPUT_DIR}`);

    const page = await browser.newPage();

    // 1. Generate product thumbnail (1200x630)
    console.log('Generating product thumbnail...');
    await page.setContent(createThumbnailHTML());
    await page.setViewport({ width: 1200, height: 630 });
    const thumbnailBuffer = await page.screenshot({ type: 'png' });
    await writeFile(join(OUTPUT_DIR, 'digital-planner-thumbnail.png'), thumbnailBuffer);
    console.log('✓ Saved: digital-planner-thumbnail.png (1200x630)');

    // 2. Generate daily planner preview
    console.log('Generating daily planner preview...');
    await page.setContent(createDailyPlannerHTML());
    await page.setViewport({ width: 1200, height: 800 });
    const dailyBuffer = await page.screenshot({ type: 'png' });
    await writeFile(join(OUTPUT_DIR, 'digital-planner-daily.png'), dailyBuffer);
    console.log('✓ Saved: digital-planner-daily.png (1200x800)');

    // 3. Generate habit tracker preview
    console.log('Generating habit tracker preview...');
    await page.setContent(createHabitTrackerHTML());
    await page.setViewport({ width: 1200, height: 800 });
    const habitBuffer = await page.screenshot({ type: 'png' });
    await writeFile(join(OUTPUT_DIR, 'digital-planner-habits.png'), habitBuffer);
    console.log('✓ Saved: digital-planner-habits.png (1200x800)');

    // 4. Generate goal tracker preview
    console.log('Generating goal tracker preview...');
    await page.setContent(createGoalTrackerHTML());
    await page.setViewport({ width: 1200, height: 800 });
    const goalBuffer = await page.screenshot({ type: 'png' });
    await writeFile(join(OUTPUT_DIR, 'digital-planner-goals.png'), goalBuffer);
    console.log('✓ Saved: digital-planner-goals.png (1200x800)');

    console.log('\n✅ All product images generated successfully!');
    console.log(`\nImages saved to: ${OUTPUT_DIR}/`);
    console.log('\nGenerated files:');
    console.log('  - digital-planner-thumbnail.png (1200x630) - Main product card');
    console.log('  - digital-planner-daily.png (1200x800) - Daily planner preview');
    console.log('  - digital-planner-habits.png (1200x800) - Habit tracker preview');
    console.log('  - digital-planner-goals.png (1200x800) - Goal tracker preview');

  } catch (error) {
    console.error('Error generating images:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run the script
generateImages().catch(console.error);
