# Polar Setup Guide - Digital Planner Bundle

**Status:** Ready for board action (all agent work complete)
**Created:** 2026-03-31
**Owner:** Board (requires human action)

## Overview

All technical work is complete for the Digital Planner product launch. The ONLY remaining step is setting up the product in the Polar dashboard to enable purchases.

**Timeline after setup:** 30 minutes to test + deploy

---

## Step-by-Step Instructions

### 1. Access Polar Dashboard

1. Go to [https://polar.sh](https://polar.sh)
2. Log in to your RunDailyAI account
3. Navigate to **Products** section

### 2. Create New Product

Click **"Create Product"** and configure:

**Basic Info:**
- **Product Name:** `Daily AI Planner Bundle — 5 Productivity Templates`
- **Product Type:** Digital Product (one-time purchase)
- **Price:** `$19.00 USD`

**Description:**
Copy from `/digital-planner/MARKETING-COPY.md` (full product description is there)

Or use this short version:
```
Get organized and stay consistent with 5 essential CSV planner templates: daily, weekly, monthly, habit tracker, and goal tracker. Works with Google Sheets, Excel, and all major spreadsheet apps.
```

### 3. Upload Digital Files

In the **Digital Benefits** section, attach these 5 CSV files:

**File locations:** `/home/paperclip/rundailyai/website/digital-planner/`

1. `daily-planner.csv` - Daily time blocking and reflection template
2. `weekly-planner.csv` - Weekly planning overview
3. `monthly-planner.csv` - Monthly goals and milestones
4. `habit-tracker.csv` - 31-day habit consistency grid
5. `goal-tracker.csv` - Quarterly and annual goal breakdown

**Delivery method:** Immediate download after purchase

### 4. Product Images (Optional in Polar)

If Polar supports product images, upload the thumbnail:
- Location: `/public/images/products/digital-planner-thumbnail.png`

### 5. Get the Product ID

After saving the product:

1. Open the product in Polar dashboard
2. Copy the **Product ID** (format: `prod_xxxxxxxxx` or similar)
3. **Paste the Product ID** in a comment on issue **[RUN-20](/RUN/issues/RUN-20)**

Example comment:
```
Polar product created successfully.
Product ID: prod_abc123xyz456
```

---

## What Happens Next (Automatic)

Once you provide the Polar product ID:

1. **Builder** updates code with the ID (5 minutes)
2. **Ops** coordinates end-to-end testing (15 minutes)
3. **Deploy to production** (5 minutes)
4. **Launch announcement** sent to email list
5. **Monitor first 48 hours** for sales and support

**Total time to live:** ~30 minutes after Product ID is provided

---

## Support

Questions? Comment on [RUN-20](/RUN/issues/RUN-20) and tag:
- `@Atlas` (CEO) - Strategic decisions
- `@Ops` (COO) - Launch coordination
- `@Builder` (CTO) - Technical integration

---

## Verification Checklist

Before posting the Product ID, verify:

- [ ] Product price is **$19.00 USD**
- [ ] All **5 CSV files** are attached as digital benefits
- [ ] Product is set to **"Published"** or **"Live"**
- [ ] Digital delivery is **immediate** (no delay)
- [ ] Product ID copied correctly (starts with `prod_` usually)

---

**Next Action:** Complete steps 1-5 above, then comment Product ID on [RUN-20](/RUN/issues/RUN-20)
