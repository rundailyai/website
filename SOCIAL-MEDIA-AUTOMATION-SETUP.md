# Social Media Scheduling Automation Setup Guide
**RunDailyAI - Marketing Infrastructure**
**Created**: April 4, 2026 by Voice (CMO)
**Status**: Ready for Implementation

---

## Executive Summary

This guide provides complete instructions for setting up social media scheduling automation to support RunDailyAI's Month 1 launch campaign. The recommended solution enables bulk scheduling across 5+ platforms and supports our 300+ posts/month volume outlined in the 30-Day Social Media Calendar.

**Recommended Tool**: **Buffer** (Essentials Plan)
**Monthly Cost**: ~$60/month for 5 channels
**Setup Time**: 2-3 hours
**Platforms**: Twitter/X, LinkedIn, Instagram, Facebook, Pinterest

---

## 1. Tool Selection & Comparison

### Requirements Checklist
- ✅ Twitter/X support
- ✅ LinkedIn support
- ✅ Instagram support (with first-comment scheduling)
- ✅ Facebook support
- ✅ Pinterest support
- ✅ Bulk CSV import for scheduling
- ✅ Analytics & reporting
- ✅ Team collaboration
- ✅ Content calendar view
- ✅ Free or affordable tier

### Top 3 Options Compared

| Feature | Buffer Essentials | Metricool Free | Hootsuite Professional |
|---------|-------------------|----------------|------------------------|
| **Price** | $6/mo per channel | Free (3 socials) | $99/mo |
| **Platforms** | All 5 ✅ | All 5 ✅ | All 5 ✅ |
| **Bulk Upload** | CSV ✅ | Limited ❌ | CSV ✅ |
| **Posts/Month** | Unlimited | 50 posts | Unlimited |
| **Analytics** | Good ✅ | Basic | Advanced |
| **Team Members** | Unlimited | 1 | 1 |
| **Queue Scheduling** | Yes ✅ | Yes | Yes |
| **First Comment** | Yes ✅ | No | Yes |
| **Pinterest Boards** | Yes ✅ | Yes | Yes |
| **Mobile App** | Excellent | Good | Good |
| **Learning Curve** | Easy | Medium | Complex |

### Recommended Solution: **Buffer Essentials**

**Why Buffer?**
1. **Affordable scaling**: Start with 3 free channels, add more as needed
2. **Bulk CSV scheduling**: Critical for our 300+ posts/month
3. **Instagram first-comment**: Required for our link strategy
4. **Proven reliability**: Industry standard since 2010
5. **Clean UX**: Minimal training required
6. **Strong analytics**: Track what's working

**Total Cost**:
- Essentials: 1 channel = $6/mo
- **Our needs**: 5 channels = $30/mo (paid annually) or $60/mo (monthly)
- **Recommendation**: Start with 3-channel free tier, upgrade to paid after launch validation

**Alternative**: If budget is tight, use **Metricool Free** for first 3 platforms and schedule Pinterest/Facebook manually. Upgrade once revenue hits $1K/month.

---

## 2. Account Setup Process

### Step 1: Create Buffer Account

1. Go to https://buffer.com
2. Click "Get Started Free"
3. Use company email: **marketing@rundailyai.com** (or team@rundailyai.com)
4. Choose **Essentials Plan** (14-day free trial, no credit card required)
5. Verify email address

### Step 2: Connect Social Media Accounts

#### A. Twitter/X (Priority: High)
1. In Buffer: Click "Channels" → "Connect Channel" → "Twitter"
2. Authenticate with RunDailyAI Twitter account
3. Grant Buffer permissions (posting, analytics)
4. Set default posting schedule:
   - Post 1: 9:00 AM EST (engagement peak)
   - Post 2: 4:00 PM EST (afternoon peak)

#### B. LinkedIn (Priority: High)
1. Click "Connect Channel" → "LinkedIn"
2. Choose **Company Page** (not personal profile)
3. Authenticate as page admin
4. Set default posting time: 10:00 AM EST (B2B engagement peak)
5. Enable "Share as article" for long-form posts

#### C. Instagram (Priority: Medium)
1. Click "Connect Channel" → "Instagram"
2. **Must be Business/Creator account** (convert if needed)
3. Connect via Facebook (Instagram requires Facebook Page link)
4. Grant Buffer permission for posting
5. Set default posting time: 12:00 PM EST (lunch scroll peak)
6. **Enable "First Comment" feature** for links (Instagram doesn't allow links in captions)

#### D. Facebook (Priority: Medium)
1. Click "Connect Channel" → "Facebook"
2. Select **RunDailyAI Page** (create if doesn't exist)
3. Authenticate as page admin
4. Set default posting time: 11:00 AM EST
5. Enable link previews

#### E. Pinterest (Priority: Critical - #1 Traffic Source)
1. Click "Connect Channel" → "Pinterest"
2. Authenticate RunDailyAI Business account
3. Grant Buffer permission for Boards and Pins
4. Create/verify these boards:
   - "AI Tools & Resources"
   - "Productivity Hacks"
   - "Tech News & Trends"
   - "AI for Business"
   - "Free Templates & Tools"
5. Set pin frequency: 5 pins/day (stagger: 8am, 10am, 12pm, 2pm, 5pm EST)

**Pinterest Setup Checklist**:
- ✅ Business account (not personal)
- ✅ Website claimed (rundailyai.com)
- ✅ Rich Pins enabled (auto-pulls meta data)
- ✅ 5 target boards created
- ✅ Board descriptions include keywords
- ✅ Profile optimized with keywords

### Step 3: Configure Posting Preferences

1. **Timezone**: Set to **EST (Eastern Time)** - company HQ timezone
2. **Queue Times**: Configure default posting slots per platform
3. **Link Shortening**: Enable **Buffer's link shortener** for tracking clicks
4. **Image Defaults**: Set default image sizes per platform
5. **Notifications**: Enable email notifications for:
   - Failed posts
   - Posts going live (first week only)
   - Weekly analytics report

---

## 3. Bulk Scheduling Workflow

### Preparing the CSV Import File

Buffer accepts CSV files with these columns:
```csv
text,profile_id,scheduled_at,media_url,media_alt_text,link,first_comment
```

**Template for our 30-Day Calendar**:
1. Export calendar to CSV (use `SOCIAL-MEDIA-CALENDAR-SUMMARY.csv` as base)
2. Add Buffer-specific columns:
   - `profile_id`: Get from Buffer settings for each channel
   - `scheduled_at`: Format as `YYYY-MM-DD HH:MM:SS`
   - `media_url`: Direct link to hosted images
   - `link`: Destination URL
   - `first_comment`: For Instagram links

**Example Row**:
```csv
"Information overload is real. AI news moves faster than you can read. 3,000+ AI articles published daily. You need 5 minutes to stay ahead. That's why we built RunDailyAI.","twitter_profile_123","2026-04-01 09:00:00","https://rundailyai.com/images/quote-card-1.png","Quote card with stat about 3000 daily articles","https://rundailyai.com",""
```

### CSV Import Process

1. **Navigate to**: Buffer Dashboard → "Publishing" → "Import"
2. **Upload CSV**: Drag and drop prepared file
3. **Map Columns**: Buffer auto-detects, verify mapping
4. **Preview**: Check first 5 posts for formatting
5. **Schedule**: Confirm import (all posts enter queue)
6. **Verify**: Check calendar view for conflicts

**Pro Tips**:
- Start with **Week 1 only** (35 posts) to test
- Review calendar view after import
- Check for timezone accuracy
- Verify image links load correctly
- Test Instagram first-comment on 1-2 posts

### Manual Scheduling (Alternative)

If CSV import has issues:
1. Use Buffer's "Compose" tool
2. Write post → Select platforms → Choose time → Add to queue
3. **Keyboard shortcuts**:
   - `CMD/CTRL + ENTER`: Add to queue
   - `CMD/CTRL + SHIFT + ENTER`: Schedule next slot
4. Use "Reorder Queue" to adjust timing

---

## 4. Content Calendar Management

### Daily Workflow

**Morning (5 minutes)**:
1. Open Buffer dashboard
2. Check "Queue" tab - verify today's posts are scheduled
3. Approve any pending posts (if using approval workflow)
4. Quick scan of analytics from previous day

**Weekly (30 minutes)**:
1. Review analytics report (emailed Mondays)
2. Identify top-performing posts
3. Schedule next week's content (if not bulk-scheduled)
4. Respond to comments/engagement (via Buffer's "Engagement" tab)
5. Refill queue if running low

**Monthly (2 hours)**:
1. Export analytics for Month-End report
2. Analyze:
   - Best posting times (by platform)
   - Top content types (quotes, tips, visuals)
   - Click-through rates
   - Engagement rates
3. Adjust next month's strategy based on data
4. Bulk schedule next month's content

### Queue Management Strategy

Buffer's "Queue" feature auto-posts at set times:

**Recommended Queue Setup**:
- **Twitter**: 2 slots (9am, 4pm)
- **LinkedIn**: 1 slot (10am)
- **Instagram**: 1 slot (12pm)
- **Facebook**: 1 slot (11am)
- **Pinterest**: 5 slots (8am, 10am, 12pm, 2pm, 5pm)

**How it works**:
1. Add posts to queue (no specific time)
2. Buffer auto-assigns next available slot
3. Queue refills as posts publish
4. Set queue to "Pause" if needed (holidays, news events)

**Benefits**:
- No manual time-picking for each post
- Consistent posting rhythm
- Easy to bulk-add content
- Prevents double-posting

---

## 5. Analytics & Performance Tracking

### Key Metrics to Monitor (Weekly)

**Engagement Rate**:
- Target: >2% for Twitter, >1% for LinkedIn, >3% for Instagram
- Formula: (Likes + Comments + Shares) / Impressions

**Click-Through Rate (CTR)**:
- Target: >1.5% for all platforms
- Formula: Clicks / Impressions
- **Most important metric** - tracks website traffic

**Best Posting Times**:
- Buffer shows when YOUR audience is most active
- Adjust queue times based on this data (after 2 weeks)

**Top Content Types**:
- Track: Tips, Stats, Questions, Visuals, Threads
- Double down on what works

### Buffer Analytics Dashboard

**Navigate to**: Analytics → Overview

**What to check**:
1. **Reach**: How many people saw posts (impressions)
2. **Engagement**: How many interacted (likes, comments, shares)
3. **Clicks**: How many visited website
4. **Top Posts**: Best performers this week
5. **Audience Growth**: Follower count change

**Export Reports**:
- Click "Export" → Choose CSV or PDF
- Use for monthly stakeholder reports
- Share with Atlas (CEO) in [RUN-41](/RUN/issues/RUN-41) updates

### Google Analytics Integration

**Track campaign effectiveness**:
1. Add UTM parameters to all Buffer links:
   - `?utm_source=social&utm_medium=buffer&utm_campaign=month1_launch`
2. Buffer can auto-append UTMs (Settings → Link Shortening)
3. Check Google Analytics → Acquisition → Campaigns
4. Measure: Traffic, conversions, revenue from social

---

## 6. Pinterest-Specific Strategy (Priority #1)

Pinterest is our **top traffic driver** - requires special attention:

### Why Pinterest Matters
- Avg pin lifespan: **3-4 months** (vs 18 min on Twitter)
- SEO-friendly: Pins index in Google
- High-intent audience: Looking for solutions
- Evergreen traffic: Content compounds over time

### Optimization Checklist

**✅ Pin Design Requirements**:
- **Size**: 1000x1500px (2:3 ratio) - vertical format
- **Text overlay**: Clear, readable on mobile
- **Brand logo**: Bottom corner (subtle)
- **Colors**: Use BRAND_KIT.md color palette
- **Font**: Brand fonts only (see BRAND_GUIDELINES.md)
- **CTA**: Include clear action ("Read More", "Download Free")

**✅ Pin Description Formula**:
```
[Compelling Headline]

[2-3 sentence explanation with benefits]

[Clear CTA with link]

#Hashtag1 #Hashtag2 #Hashtag3 (max 5)
```

**✅ Board Strategy**:
- Create 5-10 niche boards (not just "AI")
- Board titles must include keywords (e.g., "AI Productivity Tools for Professionals")
- Board descriptions: 150-500 words, keyword-rich
- Pin to most relevant board + 1-2 secondary boards (max)
- **Never spam**: Quality > quantity

**✅ Scheduling in Buffer**:
1. Add all Pinterest pins to queue with staggered times
2. Use "Pin to Multiple Boards" feature (max 2-3 boards per pin)
3. Wait 2-3 weeks before re-pinning same content
4. Track which boards drive most traffic (Buffer shows this)

### Pinterest Analytics (Built-in)

Access: pinterest.com/business/hub → Analytics

**Monthly KPIs**:
- **Impressions**: Target 50K+ by Month 2
- **Saves**: Target 500+ (most important - signals intent)
- **Clicks**: Target 1,000+ website visits
- **Top Pins**: Identify patterns, create more similar content

---

## 7. TikTok & Reddit (Manual - Outside Buffer)

**TikTok** and **Reddit** are NOT supported by Buffer - requires manual posting:

### TikTok Strategy
- **Frequency**: 3 videos/week (not daily - quality over quantity)
- **Content**: Behind-the-scenes, quick AI tips, founder story
- **Posting Tool**: TikTok Creator Studio (desktop) or mobile app
- **Scheduling**: TikTok Creator Studio allows advance scheduling (up to 10 posts)
- **Analytics**: Check TikTok Creator Studio → Analytics

**Action**: Create separate TikTok calendar (low priority Month 1)

### Reddit Strategy
- **Frequency**: 3 value posts/week
- **Approach**: **Value-first, NO self-promotion** in first 30 days
- **Subreddits**: r/artificial, r/ChatGPT, r/productivity, r/Entrepreneur
- **Content**: Answer questions, share insights, contribute to discussions
- **Link sharing**: Only when directly relevant and helpful (not every post)
- **Scheduling**: Use Postpone.app ($12/month) or manual posting

**Action**: Manual engagement - set calendar reminders for Reddit posting days

---

## 8. Team Collaboration Setup

### Adding Team Members to Buffer

1. Navigate to: Settings → Team Members
2. Click "Invite Team Member"
3. Enter email address
4. Choose permission level:
   - **Admin**: Full access (CEO, CMO)
   - **Contributor**: Create & schedule posts (content team)
   - **Commenter**: Respond to comments only (community manager)

**Recommended Setup**:
- **Voice (CMO)**: Admin
- **Atlas (CEO)**: Admin (view-only access)
- Future content hires: Contributor

### Approval Workflow (Optional)

Enable if you want CEO/manager approval before posts go live:

1. Settings → Approval Workflow → Enable
2. Set approvers (e.g., Atlas must approve all posts)
3. Posts enter "Pending Approval" queue
4. Approver gets email notification
5. Approve via email or Buffer dashboard

**Recommendation**: Skip for Month 1 (slows velocity). Enable Month 2+ if quality issues arise.

---

## 9. Success Metrics & KPIs

### Month 1 Targets (April 2026)

| Metric | Target | How to Track |
|--------|--------|--------------|
| Posts Published | 300+ | Buffer queue completion |
| Total Impressions | 100K+ | Buffer Analytics |
| Website Clicks | 2,000+ | Buffer + Google Analytics |
| Engagement Rate | >2% | Buffer Analytics |
| Follower Growth | +500 across all | Platform analytics |
| Pinterest Saves | 200+ | Pinterest Analytics |
| Email Signups from Social | 100+ | Google Analytics → Goals |

**Weekly Check-in**:
- Every Monday: Review previous week's Buffer analytics
- Update [RUN-41](/RUN/issues/RUN-41) with progress
- Flag any failing campaigns to Atlas

**Month-End Report** (deliver to Atlas by May 5):
- Total reach & engagement across all platforms
- Top 10 performing posts (with links)
- Click-through rates & website traffic
- Lessons learned & Month 2 recommendations
- Budget spent vs results (ROI)

---

## 10. Troubleshooting & Common Issues

### Issue: Post Failed to Publish

**Causes**:
- Platform API changes (common on Instagram)
- Account disconnected (need to reauthorize)
- Image file too large (max 5MB)
- Link blocked by platform (spam filters)

**Fix**:
1. Check Buffer notifications for error details
2. Reconnect account: Channels → Settings → Reconnect
3. Optimize image size (use TinyPNG.com)
4. Manually post the content, update queue

### Issue: Instagram First-Comment Not Posting

**Cause**: Instagram limits automation on comments

**Fix**:
1. Post publishes, but Buffer can't always add first comment via API
2. **Workaround**: Enable Buffer mobile notifications → manually add comment within 1 minute
3. **Alternative**: Put link in bio, reference in caption ("Link in bio")

### Issue: Pinterest Pins Not Getting Impressions

**Causes**:
- New account (Pinterest needs 2-4 weeks to index)
- Poor image quality or text overlay
- Not using keywords in descriptions
- Not claiming website

**Fix**:
1. Verify website is claimed: Settings → Claimed Accounts
2. Enable Rich Pins: pinterest.com/business/rich-pins
3. Improve pin design (use templates from Canva)
4. Add more keyword-rich descriptions
5. Be patient - Pinterest is slow to start, compounds over time

### Issue: Bulk CSV Upload Failing

**Causes**:
- Incorrect date format
- Missing required columns
- Invalid profile IDs
- Character encoding issues

**Fix**:
1. Download Buffer's CSV template (Import page)
2. Match column names exactly
3. Use `YYYY-MM-DD HH:MM:SS` date format
4. Save as UTF-8 CSV (not Excel CSV)
5. Test with 5 posts first, then upload all

---

## 11. Next Steps & Action Items

### For Board/Human Implementation

- [ ] **Create Buffer account** (marketing@rundailyai.com)
- [ ] **Connect all 5 social accounts** (Twitter, LinkedIn, Instagram, Facebook, Pinterest)
- [ ] **Set up posting queue times** (per schedule above)
- [ ] **Enable UTM tracking** (Settings → Link Shortening)
- [ ] **Claim Pinterest website** (crucial for Rich Pins)
- [ ] **Prepare Week 1 CSV** (35 posts) from 30-DAY-SOCIAL-MEDIA-CALENDAR.md
- [ ] **Test bulk upload** (Week 1 only)
- [ ] **Verify calendar view** (check for scheduling conflicts)
- [ ] **Set up email notifications** (failed posts, weekly analytics)
- [ ] **Invite Voice (CMO) as admin** to Buffer (once account created)
- [ ] **Schedule TikTok separately** (TikTok Creator Studio)
- [ ] **Set Reddit calendar reminders** (Mondays, Wednesdays, Fridays)
- [ ] **Export profile IDs** (needed for CSV) → send to Voice
- [ ] **Take screenshots** of setup progress → attach to [RUN-42](/RUN/issues/RUN-42)

### For Voice (CMO) - Post-Setup

- [ ] **Review Buffer calendar** after human completes setup
- [ ] **Verify image assets** are hosted and accessible (all media URLs work)
- [ ] **QA first week's posts** (typos, link tests, image formatting)
- [ ] **Monitor Day 1-3** closely for any API failures
- [ ] **Create performance dashboard** (Google Sheet with weekly snapshots)
- [ ] **Set up Slack/email alerts** (Buffer → integrations → Slack webhook)
- [ ] **Document lessons learned** after Week 1
- [ ] **Prepare Month 2 content calendar** based on Month 1 data

---

## 12. Resources & References

### Internal Documents
- [30-DAY-SOCIAL-MEDIA-CALENDAR.md](/home/paperclip/rundailyai/website/30-DAY-SOCIAL-MEDIA-CALENDAR.md) - Full content calendar
- [SOCIAL-MEDIA-CALENDAR-SUMMARY.csv](/home/paperclip/rundailyai/website/SOCIAL-MEDIA-CALENDAR-SUMMARY.csv) - CSV export
- [SOCIAL_MEDIA_TEMPLATES.md](/home/paperclip/rundailyai/website/SOCIAL_MEDIA_TEMPLATES.md) - Post templates
- [BRAND_GUIDELINES.md](/home/paperclip/rundailyai/website/BRAND_GUIDELINES.md) - Brand voice
- [BRAND_KIT.md](/home/paperclip/rundailyai/website/BRAND_KIT.md) - Visual assets

### External Tools
- **Buffer**: https://buffer.com (main scheduling tool)
- **Canva**: https://canva.com (pin & image design)
- **TinyPNG**: https://tinypng.com (image compression)
- **TikTok Creator Studio**: https://www.tiktok.com/creator-tools/
- **Pinterest Business Hub**: https://pinterest.com/business/hub
- **Postpone** (Reddit scheduler): https://postpone.app

### Buffer Help Center
- CSV Import Guide: https://support.buffer.com/article/465-import
- Instagram First Comment: https://support.buffer.com/article/512-instagram-first-comment
- Pinterest Best Practices: https://support.buffer.com/article/647-pinterest-tips
- Analytics Guide: https://support.buffer.com/article/119-analytics

---

## Approval & Sign-Off

**Document Status**: ✅ Ready for Implementation
**Estimated Setup Time**: 2-3 hours (human-in-the-loop required for account auth)
**Estimated Monthly Cost**: $30-60/month (Buffer Essentials)
**Expected ROI**: 2,000+ website visitors Month 1 (cost per visitor: $0.015-0.03)

**Created by**: Voice (CMO)
**Date**: April 4, 2026
**Review by**: Atlas (CEO) - pending
**Implementation by**: Board (human) - accounts require manual OAuth

---

**Questions or issues?** Post in [RUN-42](/RUN/issues/RUN-42) comments or assign back to Voice.
