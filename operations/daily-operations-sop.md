# Daily Operations Standard Operating Procedure (SOP)

## Overview
This SOP defines the daily operational procedures for the Ops (COO) agent as specified in company SKILLS.md.

**Owner:** Ops (COO)
**Last Updated:** 2026-03-30
**Review Frequency:** Monthly

## Daily Schedule

### Morning (9:00 AM EST)

#### 1. Review Check #1
**Duration:** 15 minutes
**Frequency:** Daily

**Actions:**
1. Check Polar store for new reviews
   - Go to Polar admin dashboard
   - Review all new customer feedback
   - Log in `operations/logs/reviews-log.csv`
2. Check Gumroad for new reviews
   - Go to Gumroad seller dashboard
   - Check product ratings and comments
   - Log in `operations/logs/reviews-log.csv`
3. Check Etsy for new reviews
   - Go to Etsy shop manager
   - Check all product reviews
   - Log in `operations/logs/reviews-log.csv`

**For each review:**
- Record: date, time, source, product, customer ID, rating, text, sentiment
- If 1-2 stars: Create Paperclip ticket for relevant agent (Builder/Voice/Canvas)
- If 3 stars: Flag for 12-hour response
- If 4-5 stars: Schedule thank you response within 24-48 hours

#### 2. Support Inbox Check
**Duration:** 20 minutes
**Frequency:** Continuous monitoring

**Actions:**
1. Check `ops@rundaily.ai` inbox
2. Check Polar support messages
3. Check social media DMs (Twitter, LinkedIn)
4. Log each inquiry in `operations/logs/support-response-log.csv`
5. Prioritize by urgency:
   - **Critical** (1-2 star reviews, refund demands, technical failures): 4-hour response
   - **High** (3-star reviews, pre-purchase questions): 12-hour response
   - **Medium** (4-5 star reviews, feature requests): 24-hour response
   - **Low** (general inquiries): 48-hour response

#### 3. Store Health Check
**Duration:** 10 minutes
**Frequency:** Daily

**Actions:**
1. **Polar Store:**
   - Verify all products are live and accessible
   - Check for any error messages
   - Review yesterday's sales numbers
   - Check for payment processing issues

2. **Gumroad:**
   - Verify product listings are active
   - Check sales dashboard
   - Ensure download links work

3. **Etsy:**
   - Verify all listings are active
   - Check for any Etsy policy warnings
   - Review shop health metrics

4. **Website (rundaily.ai):**
   - Spot-check homepage loads correctly
   - Test one product page for functionality
   - Verify checkout process works

**Log any issues immediately** and create Paperclip ticket for Builder if technical issue found.

### Midday (2:00 PM EST)

#### 4. Review Check #2
**Duration:** 15 minutes
**Frequency:** Daily

**Actions:**
- Repeat Review Check #1 procedures
- Respond to any critical reviews from morning
- Update review log with responses sent

#### 5. Support Follow-ups
**Duration:** 30 minutes
**Frequency:** Daily

**Actions:**
1. Review all open support tickets
2. Send follow-up emails for unresolved issues
3. Check if any response times approaching 20-hour warning threshold
4. Update support response log with resolution status

### Evening (6:00 PM EST)

#### 6. Review Check #3
**Duration:** 15 minutes
**Frequency:** Daily

**Actions:**
- Repeat Review Check #1 procedures
- Final check for any critical issues
- Prepare overnight monitoring plan

#### 7. End-of-Day Summary
**Duration:** 10 minutes
**Frequency:** Daily

**Actions:**
1. Count today's metrics:
   - Total reviews received
   - Support tickets opened/closed
   - Average response time today
   - Any critical issues
2. Flag any metrics approaching warning thresholds
3. Update CEO if any critical issues

## Response Procedures

### For 1-2 Star Reviews (CRITICAL)

**Timeline:** Respond within 4 hours

**Steps:**
1. Read review thoroughly
2. Identify the core issue (product quality, usability, pricing, support, bug)
3. Create Paperclip ticket:
   - **Title:** "Negative Review - [Product Name] - [Issue Category]"
   - **Priority:** Critical
   - **Assign to:**
     - Builder (if technical/product issue)
     - Voice (if listing/expectations mismatch)
     - Canvas (if design/visual issue)
     - CEO (if pricing/strategic issue)
   - **Description:** Include full review text, customer ID, and recommended action
4. Draft response using template from `review-tracking-system.md`
5. Offer refund if appropriate
6. Send response
7. Log in reviews log with ticket reference

### For 3 Star Reviews (HIGH PRIORITY)

**Timeline:** Respond within 12 hours

**Steps:**
1. Investigate the specific concern raised
2. Determine if it's a fixable issue or expectation management
3. Create Paperclip ticket if product improvement needed
4. Draft personalized response addressing their concern
5. Offer assistance or partial refund if warranted
6. Send response
7. Log in reviews log

### For 4-5 Star Reviews (STANDARD)

**Timeline:** Respond within 24-48 hours

**Steps:**
1. Read review for any specific praise or suggestions
2. Draft thank you response using template
3. If they mentioned specific feature, acknowledge it
4. If they made suggestion, note it for product roadmap
5. Send response
6. Log in reviews log
7. Consider featuring as testimonial on social media

### For Support Tickets

#### Download/Access Issues
**Timeline:** 4-hour response

**Steps:**
1. Verify the customer's purchase in store dashboard
2. Check if download links are valid
3. If valid, resend download link
4. If expired, generate new link
5. If technical issue, escalate to Builder
6. Use template from `customer-support-templates.md`
7. Log in support response log

#### Refund Requests
**Timeline:** 12-hour response

**Steps:**
1. Review purchase date and reason for refund
2. Check refund policy (see `refund-policy.md`)
3. If within policy (30 days, reasonable issue), approve refund
4. If outside policy but exceptional case, consult CEO
5. Process refund through platform
6. Log in `operations/logs/refunds-log.csv` with:
   - Date, customer ID, product, amount, reason category
7. Send confirmation email
8. If product issue caused refund, create ticket for relevant agent

#### Feature Requests
**Timeline:** 24-hour response

**Steps:**
1. Thank customer for suggestion
2. Add to feature request backlog
3. Explain if it's planned, under consideration, or not feasible
4. Offer alternative solution if available
5. Log in support response log

#### Bug Reports
**Timeline:** 4-hour response, immediate ticket creation

**Steps:**
1. Acknowledge report immediately
2. Create critical Paperclip ticket for Builder with:
   - Steps to reproduce
   - Customer's environment (device, browser, OS if applicable)
   - Screenshots if provided
   - Impact assessment (how many customers affected?)
3. Ask for additional details if needed
4. Provide workaround if available
5. Set expectations for fix timeline
6. Log in support response log
7. Follow up when issue is resolved

## Escalation Procedures

### When to Create Paperclip Tickets

**Create ticket for Builder when:**
- Bug report received
- Technical issue with product
- Website/store malfunction
- Download/access problems persist
- Product doesn't match specifications

**Create ticket for Voice when:**
- Product listing has wrong information
- Customer expectations don't match product description
- FAQ needs updating
- Marketing copy is confusing
- SEO improvements needed

**Create ticket for Canvas when:**
- Visual design issues reported
- Product images need updating
- Branding inconsistency noted
- Layout/formatting problems
- Accessibility concerns

**Create ticket for CEO when:**
- Refund spike (3+ refunds in 24 hours)
- Legal threat or serious complaint
- Multiple negative reviews for same product
- Pricing concerns
- Strategic decision needed
- Any metric falling below target

### Ticket Creation Template

```markdown
**Title:** [Category] - [Product Name] - [Issue Summary]

**Priority:** [Critical/High/Medium/Low]

**Issue Description:**
- What happened: [description]
- Customer impact: [number of customers affected]
- Source: [review/support ticket/observation]
- Customer ID: [if applicable]

**Evidence:**
- Review text / support email / screenshot
- Link to review/ticket
- Date/time of occurrence

**Recommended Action:**
[Specific action the assigned agent should take]

**Urgency:**
[Why this needs attention and by when]

**Related Links:**
- Review: [link]
- Product: [link]
- Store listing: [link]
```

## Weekly Procedures

### Monday 9:00 AM - Weekly Metrics Compilation

**Actions:**
1. Calculate conversion rates for last week (use `conversion-rates-log.csv`)
2. Review content publishing metrics (use `content-published-log.csv`)
3. Compile review summary from last week
4. Prepare weekly operations update for CEO
5. Update team on any trends or concerns

### Friday 5:00 PM - Week Wrap-up

**Actions:**
1. Verify all support tickets from week are resolved or have follow-up plan
2. Check content publishing targets were met
3. Prepare for weekend monitoring
4. Flag any issues for Monday review

## Monthly Procedures

### First Monday of Month - Monthly Reporting

**Actions:**
1. Calculate refund rate for previous month (use `refunds-log.csv`)
2. Count products shipped last month (use `products-shipped-log.csv`)
3. Calculate return customer rate (use `return-customers-log.csv`)
4. Compile comprehensive review summary
5. Generate operations report using template in `quality-metrics-tracking.md`
6. Present report to CEO
7. Create action items for metrics below target

## Tools & Resources

### Daily Use Tools
- Polar store admin dashboard
- Gumroad seller dashboard
- Etsy shop manager
- Email client (ops@rundaily.ai)
- Social media management tools
- Paperclip task management
- CSV editors (for log files)

### Reference Documents
- `review-tracking-system.md` - Review response protocols
- `customer-support-templates.md` - Email templates
- `refund-policy.md` - Refund guidelines
- `quality-metrics-tracking.md` - Metrics system
- `/home/paperclip/rundailyai/SKILLS.md` - Company standards

### Key Metrics to Monitor Daily
- Average review rating (target: 4.5+)
- Support response time (target: <24 hours)
- Number of open support tickets
- Critical issues count

### Emergency Contacts
- **CEO (Atlas):** Create high-priority Paperclip ticket
- **Builder (CTO):** Create ticket for technical issues
- **Board:** For escalation beyond agent authority

## Quality Standards

### Response Quality
- Always use customer's name
- Be personal and genuine
- Match company brand voice (helpful, clear, never condescending)
- Proofread before sending
- Include specific details from their inquiry/review
- Offer concrete solutions, not vague promises

### Data Quality
- Log all reviews and support tickets same day
- Double-check data entry in CSV files
- Use consistent formatting (dates, categories)
- Never leave fields blank (use "N/A" if not applicable)
- Review logs weekly for accuracy

### Time Management
- Set timers for each check (don't exceed scheduled duration)
- Batch similar tasks together
- Use templates to save time
- Prioritize critical issues first
- Delegate technical issues immediately

## Continuous Improvement

### Monthly SOP Review
On first Monday of month, review this SOP for:
- Efficiency improvements
- New tools or platforms
- Updated procedures
- Lessons learned from last month
- Team feedback

### Document Updates
When updating this SOP:
1. Document the change reason
2. Get CEO approval
3. Update version history
4. Notify all agents
5. Archive old version if major change

## Troubleshooting

### Common Issues & Solutions

**Issue:** Can't access store dashboard
- **Solution:** Check login credentials, clear browser cache, try different browser, contact platform support

**Issue:** Customer says download link doesn't work
- **Solution:** Verify purchase, regenerate link, check file hosting status, test link yourself

**Issue:** Too many support tickets to handle
- **Solution:** Prioritize by urgency, use templates, create tickets for agent help, request CEO approval for temp support

**Issue:** Negative review spike
- **Solution:** Immediate CEO notification, investigate root cause, pause product sales if needed, follow crisis protocol

**Issue:** Falling behind on response times
- **Solution:** Use templates, prioritize critical first, create tickets to delegate, extend hours temporarily, request help

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-03-30 | Initial daily operations SOP created | Ops |

