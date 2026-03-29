# Review Tracking System

## Overview
This document outlines how we monitor, track, and respond to customer feedback and reviews for RunDaily.ai products.

## Review Sources

### Primary Channels
1. **Polar Store Reviews** - Direct product reviews on our store
2. **Email Feedback** - Customer responses to support emails
3. **Social Media** - Twitter, LinkedIn mentions and comments
4. **Direct Messages** - DMs on social platforms
5. **Reddit/Community Forums** - Mentions in AI/productivity communities

### Monitoring Frequency
- Polar Store: Check 3x daily (9 AM, 2 PM, 6 PM EST)
- Email: Continuous monitoring during business hours
- Social Media: Check 2x daily (10 AM, 5 PM EST)
- Forums: Weekly scan on Mondays

## Review Classification System

### Star Rating Categories
**5 Stars - Excellent**
- Highly satisfied customer
- Strong testimonial candidate
- Share on social media

**4 Stars - Good**
- Generally satisfied
- Minor improvement suggestions
- Monitor for patterns

**3 Stars - Neutral**
- Mixed experience
- Requires investigation
- Respond promptly

**2 Stars - Poor**
- Dissatisfied customer
- Immediate response needed
- Refund consideration

**1 Star - Critical**
- Very dissatisfied
- Urgent response required
- Review for refund/resolution

### Sentiment Categories
- **Positive**: Happy with product, recommends to others
- **Neutral**: Acknowledges value but notes limitations
- **Negative**: Disappointed, requests improvements
- **Critical**: Angry, demands refund or solution

### Feedback Type
- **Product Quality**: Content, accuracy, usefulness
- **Usability**: Download, access, format issues
- **Pricing**: Value perception, too expensive/cheap
- **Support**: Response time, helpfulness
- **Feature Request**: Suggestions for improvement
- **Bug Report**: Technical issues

## Tracking Spreadsheet Structure

### Google Sheets Template

**Sheet 1: Active Reviews**
| Date | Source | Product | Customer | Rating | Sentiment | Type | Status | Assigned To | Notes |
|------|--------|---------|----------|--------|-----------|------|--------|-------------|-------|
| 3/29 | Polar | Guide X | john@... | 5★ | Positive | Quality | Responded | Ops | Great testimonial |

**Sheet 2: Monthly Summary**
| Month | Total Reviews | Avg Rating | % Positive | % Neutral | % Negative | Top Issues |
|-------|---------------|------------|------------|-----------|------------|------------|
| Mar   | 24 | 4.5 | 80% | 15% | 5% | Download speed |

**Sheet 3: Product Performance**
| Product | Total Reviews | Avg Rating | Trend | Last Review | Action Items |
|---------|---------------|------------|-------|-------------|--------------|
| Guide 1 | 15 | 4.7 | ↑ | 3/28 | None |
| Guide 2 | 9 | 4.2 | → | 3/25 | Address formatting feedback |

## Response Protocols

### Response Time Targets
- 5-Star Reviews: 24 hours (thank you)
- 4-Star Reviews: 48 hours (thank you + address concerns)
- 3-Star Reviews: 12 hours (investigate + resolve)
- 1-2 Star Reviews: 4 hours (urgent response)

### Response Templates

#### 5-Star Review Response
```
Hi [Name],

Thank you so much for the amazing review! I'm thrilled that [Product Name] is helping you [specific benefit they mentioned].

[Optional: Address specific point they raised]

Customers like you are the reason we do this work. If you ever need anything, just reach out!

Best,
[Your Name]
RunDaily.ai
```

#### 4-Star Review Response
```
Hi [Name],

Thank you for your thoughtful review of [Product Name]! I'm glad it's been helpful for [benefit they mentioned].

I noticed you mentioned [concern/suggestion]. [Address the concern or explain why/acknowledge limitation].

[If applicable: We're actually working on this for a future update!]

Thanks again for your feedback - it helps us improve!

Best,
[Your Name]
RunDaily.ai
```

#### 3-Star Review Response
```
Hi [Name],

Thank you for taking the time to review [Product Name]. I appreciate your honest feedback.

I'm sorry that [specific issue] affected your experience. Let me [explain/fix/make this right]:

[Specific response to their concern]

I'd love to make this right. Would you be open to [solution]? I'm also happy to process a refund if this isn't the right fit.

Please let me know how I can help!

Best,
[Your Name]
RunDaily.ai
```

#### 1-2 Star Review Response
```
Hi [Name],

I'm really sorry to hear about your experience with [Product Name]. This is not the standard we aim for.

I understand your frustration about [specific issue]. Let me address this immediately:

[Specific action plan]

Here's what I'd like to do:
1. [Immediate solution]
2. [Refund offer if appropriate]
3. [Future update/fix if applicable]

I'd like to personally ensure this is resolved. Can I call/email you directly to discuss?

My sincerest apologies,
[Your Name]
RunDaily.ai
```

## Weekly Review Process

### Monday Morning (9:00 AM)
1. Compile all reviews from previous week
2. Update tracking spreadsheet
3. Calculate weekly metrics
4. Identify trending issues
5. Flag critical reviews for immediate action

### Review Team Meeting (10:00 AM)
1. Review metrics vs. targets
2. Discuss critical reviews
3. Analyze feedback patterns
4. Prioritize product improvements
5. Assign action items

### Metrics to Track
- Total reviews received
- Average rating per product
- Response rate and time
- Resolution rate
- Refund rate
- Customer satisfaction trend

## Feedback Analysis

### Monthly Deep Dive (First Monday of Month)

**1. Quantitative Analysis**
- Total reviews: [X]
- Average rating: [X.X]
- Rating distribution: 5★:[X%], 4★:[X%], 3★:[X%], 2★:[X%], 1★:[X%]
- Comparison to last month: [+/- X%]

**2. Qualitative Analysis**
- Top 3 positive themes:
  1. [Theme]
  2. [Theme]
  3. [Theme]

- Top 3 negative themes:
  1. [Issue]
  2. [Issue]
  3. [Issue]

**3. Product-Specific Insights**
- Best performing product: [Product] ([X.X] rating)
- Needs improvement: [Product] ([X.X] rating)
- Fastest growing: [Product] ([X%] increase)

**4. Action Items**
- Product updates needed: [List]
- Marketing message adjustments: [List]
- Support process improvements: [List]
- New product ideas: [List]

## Review Solicitation Strategy

### When to Ask for Reviews
- 7 days after purchase (automated email)
- After positive support interaction
- When customer shares success story
- After product update (for existing customers)

### How to Ask

**Email Template**
```
Subject: How's [Product Name] working for you?

Hi [Name],

I hope [Product Name] is helping you [achieve goal]!

I'd love to hear how it's going. Your feedback helps us improve and helps other customers decide if it's right for them.

Would you mind leaving a quick review? It takes just 2 minutes:
[Review Link]

As a thank you, here's a 15% discount code for your next purchase: THANKS15

Thanks for being a customer!

Best,
[Your Name]
RunDaily.ai
```

### Incentivizing Reviews
- Discount on next purchase (10-15%)
- Entry into monthly giveaway
- Early access to new products
- Exclusive content/bonus

**Important**: Never incentivize positive reviews only - ask for honest feedback

## Crisis Management Protocol

### Negative Review Spike (3+ negative reviews in 24 hours)

**Immediate Actions (Within 1 hour):**
1. Notify team via Slack/email
2. Investigate common thread
3. Pause new product sales if critical bug
4. Draft public response

**Within 4 Hours:**
1. Respond to all negative reviews
2. Offer refunds/solutions
3. Fix underlying issue if technical
4. Update product page if expectations mismatch

**Within 24 Hours:**
1. Publish transparency update
2. Email all recent customers
3. Post plan to fix issue
4. Implement solution

**Follow-up:**
1. Re-contact affected customers
2. Offer re-review opportunity
3. Document learnings
4. Update processes to prevent recurrence

## Review Metrics Dashboard

### Key Performance Indicators (KPIs)

**Health Metrics:**
- Overall Average Rating: Target ≥ 4.5/5.0
- % 5-Star Reviews: Target ≥ 70%
- % 1-2 Star Reviews: Target ≤ 5%
- Review Volume: Target 15+ per month

**Engagement Metrics:**
- Response Rate: Target 100%
- Average Response Time: Target < 12 hours
- Resolution Rate: Target ≥ 95%

**Trend Metrics:**
- Month-over-month rating change
- Review volume growth
- Sentiment trend
- Product rating rankings

## Tools & Resources

### Current Tools
- **Tracking**: Google Sheets (manual)
- **Alerts**: Email notifications from Polar
- **Social Listening**: Manual checks
- **Analytics**: Polar dashboard

### Future Tools (When Revenue Allows)
- Review monitoring software (e.g., Mention, Brand24)
- Customer feedback platform (e.g., Typeform)
- Automated sentiment analysis
- Integrated dashboard (e.g., Mixpanel)

## Best Practices

1. **Always Respond**: Every review deserves a response
2. **Be Personal**: Use customer's name, reference specifics
3. **Be Timely**: Respond quickly, especially to negative reviews
4. **Be Grateful**: Thank every reviewer
5. **Be Honest**: Admit mistakes, explain limitations
6. **Be Solution-Oriented**: Offer fixes, not excuses
7. **Learn**: Use feedback to improve products
8. **Share**: Highlight great reviews on social media
9. **Close the Loop**: Follow up to ensure resolution
10. **Stay Professional**: Even with difficult customers

## Contact Escalation

### When to Escalate
- Multiple 1-star reviews for same product
- Angry customer demanding legal action
- Public social media crisis
- Technical issue affecting multiple customers
- Safety/security concerns

### Escalation Path
1. **Tier 1**: Ops/Support (Initial response)
2. **Tier 2**: COO (Complex issues, refunds over $100)
3. **Tier 3**: CEO (Legal threats, major crisis)

## Reporting Schedule

**Daily**: Flag critical reviews to team
**Weekly**: Update tracking sheet, send metrics summary
**Monthly**: Full analysis report, team review meeting
**Quarterly**: Trend analysis, strategy review

## Template Links

- Google Sheets Tracking Template: [Link to template]
- Response Template Doc: [Link to doc]
- Review Request Email: [Link to email template]
- Weekly Report Template: [Link to report]

---

## Quick Reference Checklist

**Daily Review Routine:**
- [ ] Check Polar store (9 AM, 2 PM, 6 PM)
- [ ] Monitor email feedback
- [ ] Scan social media mentions
- [ ] Respond to urgent reviews
- [ ] Update tracking sheet
- [ ] Flag issues to team

**Weekly Review Process:**
- [ ] Compile week's reviews
- [ ] Calculate metrics
- [ ] Identify patterns
- [ ] Send team summary
- [ ] Update action items

**Monthly Deep Dive:**
- [ ] Full analysis report
- [ ] Team review meeting
- [ ] Product improvement priorities
- [ ] Update response templates
- [ ] Review solicitation campaign
