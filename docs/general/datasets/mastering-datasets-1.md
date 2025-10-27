# Data Analytics - Comprehensive User Guide

**Last Updated:** October 21, 2025
**Updated By:** Robert Smith
**Version:** 2.0
**Status:** Complete Feature Set

---

## Table of Contents

1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Core Features](#core-features)
   - Dataset Discovery
   - Column Inspection
   - Grouping & Aggregation
   - Sorting & Ranking
   - Filtering
   - Statistical Analysis
   - Percentages & Ratios
   - Calculated Columns
4. [Advanced Features](#advanced-features)
   - Fuzzy Value Matching
   - Temporal Analysis & Trending
   - Trending Analysis with Growth Rates
   - Forecasting & Predictions
   - Specialized Domain Use Cases (TRIFR, Win Rates, etc.)
   - Identifier Analysis
   - Ranking Analysis
   - Pivot Tables
   - Conditional Counting
5. [Query Examples by Use Case](#query-examples-by-use-case)
   - General Dataset Operations
   - Sales & CRM
   - HR & Employees
   - Inventory & Supply Chain
   - Customer Support
   - Safety & TRIFR
   - Financial & Accounting
   - Manufacturing & Production
   - Academic & Education
6. [Domain-Agnostic Design Principles](#domain-agnostic-design-principles)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)
9. [Summary](#summary)

---

## Overview

The Data Analytics tool provides **natural language access to your structured data** stored in datasets. It works with **ANY dataset** - sales, HR, inventory, support tickets, or custom data - without requiring SQL knowledge or manual configuration.

### Key Capabilities

✅ **Domain Agnostic** - Works with any dataset and column names
✅ **Natural Language** - Ask questions in plain English
✅ **Financial Accuracy** - All calculations verified with MathTool (50-digit precision)
✅ **Smart Matching** - Fuzzy column and value matching
✅ **Rich Analysis** - Grouping, ranking, trending, forecasting, and more

### What Makes This Different

- **No SQL Required** - Natural language queries work automatically
- **Zero Configuration** - Works with any dataset structure immediately
- **Financial Grade** - Precision calculations with audit trails
- **Intelligent** - Understands partial names, fuzzy values, context

---

## Getting Started

### Basic Query Structure

Simply ask questions about your data:

```
"show me records"
"list all datasets"
"what columns are available?"
"group by status"
```

### Query with Context (Advanced)

Add filters using the `|` separator:

```
"sum amount by salesperson | status=closed won"
"show top 10 deals | exclude status closed lost"
"count records | date=2024-01-01 to 2024-12-31"
```

---

## Core Features

### 1. Dataset Discovery

#### List Available Datasets

**What it does:** Shows all datasets you can query

**Examples:**
```
"list datasets"
"show all datasets"
"what datasets are available?"
"show me all available data"
```

**Sample Response:**
```markdown
## Available Datasets

**Total Datasets:** 3

### 1. sales_opportunities
- **Records:** 1,247
- **Columns:** 15
- **Last Updated:** 2024-10-20

### 2. employee_roster
- **Records:** 543
- **Columns:** 22
- **Last Updated:** 2024-10-15

### 3. inventory_items
- **Records:** 8,921
- **Columns:** 18
- **Last Updated:** 2024-10-21
```

---

### 2. Column Inspection

#### List Columns in Dataset

**What it does:** Shows all column names and data types

**Examples:**
```
"list columns"
"show columns"
"what fields are available?"
"describe dataset structure"
"show top 10 columns"
```

**Sample Response:**
```markdown
## Dataset Schema: sales_opportunities

**Total Columns:** 15
**Total Records:** 1,247

### Column List:
1. **Opportunity Name** (text) - 1,247 non-null
2. **Sales Person** (text) - 1,247 non-null
3. **Deal Amount** (float64) - 1,195 non-null (95.8% complete)
4. **Status** (text) - 1,247 non-null
5. **Close Date** (datetime) - 1,180 non-null (94.6% complete)
6. **Lead Source** (text) - 1,247 non-null
7. **Product Category** (text) - 1,230 non-null (98.6% complete)
...
```

#### Show Column Schema with Samples

**What it does:** Shows detailed column information with sample values

**Examples:**
```
"show dataset schema"
"describe columns with examples"
"what data types are in the dataset?"
```

**Sample Response:**
```markdown
## Detailed Column Schema

**Sales Person** (text)
- Non-null: 1,247 (100%)
- Unique Values: 45
- Sample Values: "Jordan Faas", "Sarah Miller", "John Smith"

**Deal Amount** (float64)
- Non-null: 1,195 (95.8%)
- Unique Values: 892
- Sample Values: "$125,000", "$87,500", "$250,000"
- Statistics: Min: $5,000 | Max: $2,500,000 | Avg: $156,432

**Status** (text)
- Non-null: 1,247 (100%)
- Unique Values: 7
- Sample Values: "Closed Won", "Lead", "Qualified", "Closed Lost"
```

---

### 3. Grouping & Aggregation

#### Group by Single Column

**What it does:** Counts or sums records by category

**Examples:**
```
"group by status"
"count by sales person"
"total by product category"
"breakdown by region"
"sum amount by status"
```

**Sample Response:**
```markdown
## Grouping Analysis: Total by Status

**Total Records:** 1,247
**Number of Groups:** 7

### Breakdown by Group:

#### Closed Won
- **Count:** 342 records (27.4%)
- **Total Deal Amount:** $52,450,000
- **Average Deal Amount:** $153,362

#### Lead
- **Count:** 485 records (38.9%)
- **Total Deal Amount:** $48,500,000
- **Average Deal Amount:** $100,000

#### Qualified
- **Count:** 280 records (22.5%)
- **Total Deal Amount:** $35,000,000
- **Average Deal Amount:** $125,000

**Grand Total:** $135,950,000
**Math Tool Verified:** ✅
```

#### Group by Multiple Columns (Pivot)

**Examples:**
```
"show sales by region and product"
"pivot amount by salesperson and status"
"breakdown by quarter and status"
```

---

### 4. Sorting & Ranking

#### Sort Records

**What it does:** Orders records by column values

**Examples:**
```
"sort by deal amount descending"
"show records ordered by close date"
"list by sales person ascending"
"rank by total amount"
```

**Sample Response:**
```markdown
## Dataset: sales_opportunities

**Sorted by:** Deal Amount (descending)
**Total Rows:** 1,247 | **Showing:** 50 rows

| Sales Person | Deal Amount | Status | Close Date |
|--------------|-------------|--------|------------|
| Jordan Faas | $2,500,000 | Closed Won | 2024-09-15 |
| Sarah Miller | $1,850,000 | Closed Won | 2024-08-22 |
| John Smith | $1,200,000 | Qualified | 2024-11-30 |
...
```

#### Top/Bottom N

**Examples:**
```
"show top 10 deals by amount"
"bottom 5 salespeople by revenue"
"highest 20 products by quantity"
"lowest 10 inventory items by value"
```

---

### 5. Filtering

#### Basic Filtering

**What it does:** Shows records matching criteria

**Examples:**
```
"show records where status = closed won"
"filter by sales person = jordan faas"
"show only active employees"
"exclude status closed lost"
```

**Query Format with Filters:**
```
"sum amount | status=closed won"
"group by salesperson | status=closed won, exclude status=lead"
"show records | date=2024-01-01 to 2024-12-31"
"count by category | status=active, region=west"
```

#### Comparison Filtering

**Examples:**
```
"show deals over $100,000"
"products with quantity below 10"
"employees with less than 2 years tenure"
"deals between $50,000 and $200,000"
```

#### Exclude Filters

**Examples:**
```
"group by status | exclude status=closed lost"
"sum amount | exclude salesperson=jane doe"
"show records | exclude category=inactive"
```

---

### 6. Statistical Analysis

#### Summary Statistics

**What it does:** Shows min, max, mean, median, standard deviation

**Examples:**
```
"summarize deal amounts"
"show distribution of salaries"
"statistics for product prices"
"what are the quartiles for deal sizes?"
```

**Sample Response:**
```markdown
## Statistical Summary: Deal Amount

**Total Records:** 1,247
**Valid Values:** 1,195 (95.8%)

| Statistic | Value |
|-----------|-------|
| Count | 1,195 |
| Mean | $156,432 |
| Median | $125,000 |
| Std Dev | $87,234 |
| Min | $5,000 |
| 25th Percentile | $85,000 |
| 50th Percentile | $125,000 |
| 75th Percentile | $200,000 |
| Max | $2,500,000 |

**Outliers Detected:** 23 records (1.9%)
**Math Tool Verified:** ✅
```

---

### 7. Percentages & Ratios

#### Percentage Breakdown

**What it does:** Calculates percentage of total for each group

**Examples:**
```
"what percent of deals are closed won?"
"show percentage breakdown by status"
"calculate win rate by salesperson"
"what's the distribution by category?"
```

**Sample Response:**
```markdown
## Percentage Breakdown by Status

**Total Records:** 1,247

| Status | Count | Percentage |
|--------|-------|------------|
| Lead | 485 | 38.9% |
| Qualified | 280 | 22.5% |
| Closed Won | 342 | 27.4% |
| Closed Lost | 95 | 7.6% |
| On Hold | 30 | 2.4% |
| Disqualified | 15 | 1.2% |

**Math Tool Verified:** ✅ Total: 100.0%
```

#### Win Rate / Conversion Rate

**Examples:**
```
"calculate win rate by salesperson"
"what's the conversion rate from lead to closed?"
"show success rate by product"
"completion rate by team"
```

---

### 8. Calculated Columns

#### Create New Columns with Formulas

**What it does:** Performs calculations across columns

**Examples:**
```
"calculate commission = deal amount * 0.15"
"compute total = quantity * price"
"add column for profit margin = (revenue - cost) / revenue"
"show daily rate = deal amount / days"
```

**Sample Response:**
```markdown
## Dataset with Calculated Column: Commission

**Formula:** Commission = Deal Amount × 0.15
**Total Rows:** 1,247 | **Showing:** 50 rows

| Sales Person | Deal Amount | Commission |
|--------------|-------------|------------|
| Jordan Faas | $500,000 | $75,000.00 |
| Sarah Miller | $350,000 | $52,500.00 |
| John Smith | $250,000 | $37,500.00 |
...

**Total Commission:** $20,392,500.00
**Math Tool Verified:** ✅
```

---

## Advanced Features

### 9. Fuzzy Value Matching

**What it does:** Matches partial names/values without exact spelling

**How it works:** When you mention a partial value, the system finds matching records

**Examples:**
```
"group by jordan"              → Matches "Jordan Faas"
"sum amount by faas"           → Matches "Jordan Faas"
"group by engineering"         → Matches "Engineering" department
"show records for smith"       → Finds all "Smith" employees
"total by tech"                → Matches "Tech Support" team
```

**Sample Response:**
```markdown
## Fuzzy Match Found

**Search Term:** "jordan"
**Matched Value:** "Jordan Faas"
**Column:** Sales Person
**Records Found:** 87

### Breakdown by Status:
- **Closed Won:** 24 deals ($3,450,000)
- **Qualified:** 31 deals ($3,875,000)
- **Lead:** 32 deals ($3,200,000)

**Total:** 87 deals | **$10,525,000**
```

**Multiple Match Handling:**

If "smith" matches multiple people:
```markdown
## Multiple Matches Found

**Search Term:** "smith"
**Matches Found:** 3 in Sales Person column

Please be more specific:
1. John Smith (45 records)
2. Jane Smith (38 records)
3. Bob Smith (22 records)

Try: "group by john smith" or "group by jane smith"
```

---

### 10. Temporal Analysis & Trending

**What it does:** Analyzes how your data changes over time - works with ANY dataset that has dates

#### Time Periods Supported:
- **Hourly** - Hour-by-hour analysis
- **Daily** - Day-by-day trends
- **Weekly** - Week-by-week patterns
- **Monthly** - Month-over-month trends
- **Quarterly** - Quarter-by-quarter analysis (Q1, Q2, Q3, Q4)
- **Yearly** - Year-over-year comparisons

#### Domain-Agnostic Examples:

**ANY Dataset:**
```
"show monthly trend"
"breakdown by quarter"
"weekly analysis"
"yearly comparison"
"temporal breakdown by month"
```

**Sales Data:**
```
"monthly revenue trend"
"quarterly deal count"
"sales by month"
```

**HR/Employee Data:**
```
"hiring trend by quarter"
"turnover rate by month"
"headcount by year"
```

**Inventory Data:**
```
"stock levels by week"
"inventory value trend monthly"
"product turnover quarterly"
```

**Support Tickets:**
```
"ticket volume by week"
"resolution time trend monthly"
"escalations by quarter"
```

**Safety/TRIFR Data:**
```
"TRIFR by quarter"
"injury rate trend"
"safety metrics by month"
"recordable incidents quarterly"
```

**Sample Response:**
```markdown
## Temporal Analysis: Monthly Breakdown

**Time Period:** Monthly
**Date Range:** Jan 2024 - Oct 2024
**Total Records:** 1,247

| Period | Record Count | Total Value | Avg Value | Unique Entities | Change MoM |
|--------|-------------|-------------|-----------|-----------------|------------|
| Jan 2024 | 95 | $12,450,000 | $131,053 | 42 | - |
| Feb 2024 | 102 | $13,875,000 | $136,029 | 45 | +11.4% ↑ |
| Mar 2024 | 118 | $15,200,000 | $128,814 | 48 | +9.5% ↑ |
| Apr 2024 | 89 | $11,650,000 | $130,899 | 40 | -23.4% ↓ |
| May 2024 | 125 | $16,800,000 | $134,400 | 52 | +44.2% ↑ |
...

**Total:** $135,950,000 across 10 months
**Average per Period:** 124.7 records | $13,595,000
**Trend:** Growing (+8.5% average per month)
**Math Tool Verified:** ✅

**Auto-Detected Columns:**
- Date: "Close Date"
- Value: "Deal Amount"
- Entity: "Sales Person"
```

#### Period-over-Period Comparisons

**Month-over-Month (MoM):**
```
"show MoM growth"
"month over month change"
"compare this month to last month"
```

**Quarter-over-Quarter (QoQ):**
```
"compare Q1 vs Q2"
"show quarterly growth"
"QoQ change"
"quarterly comparison"
```

**Year-over-Year (YoY):**
```
"show year over year change"
"compare 2023 vs 2024"
"YoY growth"
"annual comparison"
```

**Sample QoQ Response:**
```markdown
## Quarter-over-Quarter Analysis

| Quarter | Total Value | Change QoQ | Growth Rate |
|---------|-------------|------------|-------------|
| Q1 2024 | $41,525,000 | - | - |
| Q2 2024 | $47,350,000 | +$5,825,000 | +14.0% ↑ |
| Q3 2024 | $46,175,000 | -$1,175,000 | -2.5% ↓ |

**Best Quarter:** Q2 2024 ($47.35M)
**Growth Trend:** +5.6% average
**Math Tool Verified:** ✅
```

---

### 11. Trending Analysis with Growth Rates

**What it does:** Identifies trends, growth patterns, and momentum in your data

**Automatic Detection:**
- Trend direction (growing, declining, stable)
- Average growth rate per period
- Growth acceleration/deceleration
- Seasonal patterns
- Anomaly detection

**Domain-Agnostic Examples:**

```
"show trend"
"what's the growth rate?"
"trending analysis"
"identify trend direction"
"growth pattern"
```

**Sample Response:**
```markdown
## Trending Analysis: Monthly Pattern

**Analysis Period:** Jan 2024 - Oct 2024 (10 months)
**Trend Direction:** **Growing** ↑

### Growth Metrics:
- **Average Growth Rate:** +8.5% per month
- **Total Growth:** +127% (Jan to Oct)
- **Acceleration:** Increasing momentum
- **Volatility:** Moderate (±12% variation)

### Monthly Growth Rates:
| Month | Value | Growth | Rate |
|-------|-------|--------|------|
| Jan | $12.45M | - | - |
| Feb | $13.88M | +$1.43M | +11.4% |
| Mar | $15.20M | +$1.32M | +9.5% |
| Apr | $11.65M | -$3.55M | -23.4% |
| May | $16.80M | +$5.15M | +44.2% |
...

### Insights:
- **Peak Month:** May 2024 ($16.80M)
- **Lowest Month:** April 2024 ($11.65M)
- **Strongest Growth:** May 2024 (+44.2%)
- **Trend Confidence:** High (consistent pattern)

**Math Tool Verified:** ✅
```

---

### 12. Forecasting & Predictions

**What it does:** Projects future values based on historical trends

**Forecasting Methods:**
- Linear trend projection
- Moving average forecasting
- Seasonal adjustment
- Confidence intervals

**Domain-Agnostic Examples:**

```
"forecast next 3 months"
"predict next quarter"
"project next 6 periods"
"extrapolate next year"
"forecast future trend"
```

**With Time Periods:**
```
"forecast next 3 months monthly"
"predict next 4 quarters quarterly"
"project next year yearly"
```

**Sample Response:**
```markdown
## Forecast Analysis: Next 3 Months

**Historical Data:** Jan - Oct 2024 (10 months)
**Forecast Method:** Linear regression with seasonal adjustment
**Confidence Level:** 95%

### Forecast Results:

| Period | Forecasted Value | Lower Bound | Upper Bound | Confidence |
|--------|-----------------|-------------|-------------|------------|
| Nov 2024 | $17,250,000 | $15,120,000 | $19,380,000 | 95% |
| Dec 2024 | $18,100,000 | $15,540,000 | $20,660,000 | 95% |
| Jan 2025 | $18,800,000 | $15,850,000 | $21,750,000 | 93% |

### Forecast Summary:
- **Total Forecasted (3 months):** $54,150,000
- **Expected Growth:** +8.2% per month (continuing trend)
- **Confidence:** High (based on consistent historical pattern)

### Methodology:
- **Data Points:** 10 historical periods
- **Trend:** Linear growth (+$580k/month avg)
- **Seasonal Factor:** 1.15x (Q4 typically higher)
- **Model Accuracy:** R² = 0.92 (excellent fit)

### Assumptions:
- Historical growth pattern continues
- No major market disruptions
- Seasonal patterns remain consistent

**Math Tool Verified:** ✅
**Note:** Forecasts are estimates based on historical trends
```

#### Forecast with Different Periods:

**Short-term (1-3 periods):**
```
"forecast next month"
"predict next quarter"
```
- Higher accuracy
- Tighter confidence intervals

**Medium-term (4-6 periods):**
```
"forecast next 6 months"
"predict next 2 quarters"
```
- Good accuracy
- Moderate confidence intervals

**Long-term (7-12 periods):**
```
"forecast next year"
"predict next 4 quarters"
```
- Lower accuracy
- Wider confidence intervals

---

### 13. Specialized Domain Use Cases

The tool automatically detects domain-specific patterns and provides specialized analysis:

#### TRIFR (Total Recordable Injury Frequency Rate) Analysis

**What it does:** Calculates workplace safety metrics automatically when safety data is detected

**Auto-Detection:** System recognizes safety datasets by column patterns:
- Injury/incident columns
- Exposure hours columns
- Safety rate columns
- Recordable injury data

**Query Examples:**
```
"TRIFR by quarter"
"total recordable injury frequency rate"
"safety rate trend quarterly"
"injury frequency by business unit"
"TRIFR breakdown by quarter"
```

**Sample Response:**
```markdown
## TRIFR Analysis: Quarterly Breakdown

**Calculation:** (Total Recordable Injuries × 200,000) / Total Exposure Hours
**Analysis Period:** 2024 (Q1-Q4)

| Quarter | Recordable Injuries | Exposure Hours | TRIFR | Status |
|---------|-------------------|----------------|-------|--------|
| Q1 2024 | 3 | 520,000 | 1.15 | ⚠️ Above target |
| Q2 2024 | 2 | 535,000 | 0.75 | ✅ Meeting target |
| Q3 2024 | 1 | 542,000 | 0.37 | ✅ Exceeding target |
| Q4 2024 | 2 | 528,000 | 0.76 | ✅ Meeting target |

**Annual TRIFR:** 0.76 (8 injuries / 2,125,000 hours)
**Target TRIFR:** 1.00
**Status:** ✅ Below target (24% better than goal)

**Trend:** Improving ↓ (-68% from Q1 to Q3)

### Industry Comparison:
- **Your TRIFR:** 0.76
- **Industry Average:** 1.20
- **Performance:** 37% better than industry

**Math Tool Verified:** ✅
**Calculation Audit Trail:** Available in logs
```

**TRIFR by Business Unit:**
```markdown
## TRIFR by Business Unit - Q3 2024

| Business Unit | Injuries | Hours | TRIFR | vs Target |
|---------------|----------|-------|-------|-----------|
| Manufacturing | 3 | 350,000 | 1.71 | ⚠️ 71% above |
| Logistics | 1 | 125,000 | 1.60 | ⚠️ 60% above |
| Warehouse | 2 | 180,000 | 2.22 | 🔴 122% above |
| Office | 0 | 85,000 | 0.00 | ✅ Excellent |

**Action Required:**
- **Warehouse:** Immediate safety review needed
- **Manufacturing:** Monitor closely
- **Office:** Maintain current practices

**Math Tool Verified:** ✅
```

#### Win Rate / Conversion Rate Analysis

**Auto-Detection:** Recognizes status-based workflows (sales, recruiting, support)

**Query Examples:**
```
"win rate by salesperson"
"conversion rate by source"
"success rate by team"
"close rate analysis"
```

#### Churn Rate / Turnover Analysis

**Auto-Detection:** Recognizes employee or customer lifecycle data

**Query Examples:**
```
"employee turnover by department"
"churn rate by quarter"
"retention rate analysis"
```

#### Capacity Utilization

**Auto-Detection:** Recognizes resource usage data

**Query Examples:**
```
"utilization rate by resource"
"capacity analysis by month"
"occupancy rate trend"
```

---

### 14. Identifier Analysis

**What it does:** Detailed breakdown for specific person/entity

**Examples:**
```
"analyze jordan faas"
"breakdown for john smith"
"detailed view of sarah miller"
"show all data for product ABC"
```

**Sample Response:**
```markdown
## Identifier Analysis: Jordan Faas

**Total Records:** 87 deals
**Total Value:** $10,525,000
**Average Deal Size:** $121,034

### Breakdown by Status:
| Status | Count | Total Amount | Percentage |
|--------|-------|--------------|------------|
| Closed Won | 24 | $3,450,000 | 32.8% |
| Qualified | 31 | $3,875,000 | 37.5% |
| Lead | 32 | $3,200,000 | 29.7% |

### Breakdown by Product Category:
| Category | Count | Total Amount |
|----------|-------|--------------|
| Enterprise Software | 35 | $5,250,000 |
| Cloud Services | 28 | $3,150,000 |
| Professional Services | 24 | $2,125,000 |

### Performance Metrics:
- **Win Rate:** 32.8% (24 closed won / 73 closed total)
- **Average Days to Close:** 45 days
- **Largest Deal:** $450,000 (ABC Corp - Enterprise Software)
- **Most Recent Close:** $125,000 (Oct 15, 2024)

**Math Tool Verified:** ✅
```

---

### 13. Ranking Analysis

**What it does:** Ranks entities by performance metrics

**Examples:**
```
"who has the most deals?"
"rank salespeople by revenue"
"top performers by win rate"
"leaderboard by total closed won"
"highest win rate by salesperson"
```

**Sample Response:**
```markdown
## Leaderboard: Sales Performance

**Ranked by:** Total Closed Won Revenue
**Period:** 2024 YTD

| Rank | Sales Person | Closed Won | Total Revenue | Win Rate | Avg Deal |
|------|--------------|------------|---------------|----------|----------|
| 1 | Sarah Miller | 42 | $7,850,000 | 38.5% | $186,905 |
| 2 | Jordan Faas | 38 | $6,450,000 | 35.2% | $169,737 |
| 3 | John Smith | 35 | $5,250,000 | 32.1% | $150,000 |
| 4 | Alice Johnson | 31 | $4,875,000 | 30.4% | $157,258 |
| 5 | Bob Williams | 28 | $4,200,000 | 29.2% | $150,000 |
...

**Total Team Revenue:** $52,450,000
**Average Win Rate:** 32.8%
**Math Tool Verified:** ✅
```

---

### 14. Pivot Tables / Cross-Tabulation

**What it does:** Multi-dimensional analysis (rows × columns)

**Examples:**
```
"show sales by region and product"
"pivot amount by salesperson and status"
"cross-tab deals by quarter and category"
"breakdown by team and priority"
```

**Sample Response:**
```markdown
## Pivot Table: Deal Amount by Sales Person × Status

| Sales Person | Closed Won | Qualified | Lead | Total |
|--------------|------------|-----------|------|-------|
| Sarah Miller | $7,850,000 | $5,200,000 | $3,150,000 | $16,200,000 |
| Jordan Faas | $6,450,000 | $3,875,000 | $3,200,000 | $13,525,000 |
| John Smith | $5,250,000 | $4,100,000 | $2,850,000 | $12,200,000 |
| Alice Johnson | $4,875,000 | $3,650,000 | $2,950,000 | $11,475,000 |
...
| **Grand Total** | **$52,450,000** | **$35,000,000** | **$48,500,000** | **$135,950,000** |

**Math Tool Verified:** ✅ All row/column totals verified
```

---

### 15. Conditional Counting

**What it does:** Count records matching specific conditions

**Examples:**
```
"count where status = closed won"
"how many deals over $100,000?"
"count active employees in engineering"
"number of tickets with high priority"
```

**Sample Response:**
```markdown
## Conditional Count Analysis

**Condition:** Status = "Closed Won" AND Deal Amount > $100,000

**Result:** 287 records match

### Breakdown:
- **Total Records:** 1,247
- **Matches Condition:** 287 (23.0%)
- **Does Not Match:** 960 (77.0%)

### Additional Insights:
- **Average Deal Size (matched):** $215,432
- **Total Value (matched):** $61,829,000
- **Percentage of Total Revenue:** 45.5%

**Math Tool Verified:** ✅
```

---

## Query Examples by Use Case

### General Dataset Operations (ANY Data)

**Basic Exploration:**
```
"list all datasets"
"show columns"
"describe dataset schema"
"show me 10 records"
"what data is available?"
```

**Grouping & Counting:**
```
"group by [any column]"
"count by [category]"
"breakdown by [field]"
"total by [column]"
```

**Sorting & Ranking:**
```
"sort by [column] descending"
"show top 10 by [metric]"
"rank by [value]"
"highest [column] values"
```

**Filtering:**
```
"show records where [column] = [value]"
"exclude [category]"
"filter by [field]"
"show only [condition]"
```

**Time Analysis:**
```
"monthly trend"
"quarterly breakdown"
"yearly comparison"
"temporal analysis"
```

---

### Sales & CRM Data

**Pipeline Analysis:**
```
"show all deals"
"group by status"
"breakdown by stage"
"pipeline value by salesperson"
"deals by lead source"
```

**Performance Metrics:**
```
"win rate by salesperson"
"conversion rate by source"
"top performers by revenue"
"average deal size by product"
"close rate by quarter"
```

**Temporal Analysis:**
```
"monthly revenue trend"
"quarterly sales growth"
"forecast next quarter"
"deals closing this month"
"year over year growth"
```

**Calculated Metrics:**
```
"calculate commission = amount * 0.15"
"win rate = closed won / total closed"
"average days to close"
```

---

### HR & Employee Data

**Headcount Analysis:**
```
"count employees by department"
"headcount by location"
"group by level"
"breakdown by manager"
"employee distribution"
```

**Compensation Analysis:**
```
"average salary by level"
"compensation by department"
"salary distribution"
"group salary by role"
```

**Turnover & Retention:**
```
"turnover rate by department"
"employee tenure distribution"
"new hires by quarter"
"employees with less than 1 year"
"retention rate analysis"
```

**Temporal Trends:**
```
"hiring trend by month"
"quarterly headcount growth"
"turnover trend yearly"
"compensation growth rate"
```

---

### Inventory & Supply Chain

**Stock Analysis:**
```
"products below reorder point"
"stock levels by warehouse"
"items with zero quantity"
"low stock alerts"
"out of stock items"
```

**Value Analysis:**
```
"total inventory value by category"
"average price by supplier"
"most expensive items"
"inventory value trend"
```

**Movement & Turnover:**
```
"turnover rate by product"
"products expiring this month"
"fast-moving items"
"slow-moving inventory"
```

**Temporal Patterns:**
```
"weekly stock levels"
"monthly inventory value"
"quarterly turnover rate"
"seasonal demand patterns"
```

---

### Customer Support & Tickets

**Ticket Analysis:**
```
"tickets by priority"
"count by status"
"group by support agent"
"breakdown by category"
"escalated tickets"
```

**Performance Metrics:**
```
"average resolution time by team"
"response time by priority"
"customer satisfaction by agent"
"tickets per agent"
```

**Status & Workflow:**
```
"open vs closed tickets"
"unresolved tickets over 3 days"
"tickets in progress"
"completed this week"
```

**Temporal Trends:**
```
"ticket volume by week"
"monthly resolution time trend"
"quarterly escalation rate"
"forecast next month volume"
```

---

### Safety & TRIFR Data

**Safety Metrics:**
```
"TRIFR by quarter"
"injury rate by business unit"
"recordable incidents quarterly"
"safety rate trend"
"total recordable injury frequency rate"
```

**Temporal Analysis:**
```
"quarterly safety breakdown"
"monthly incident trend"
"yearly TRIFR comparison"
"safety improvement over time"
```

**Business Unit Comparison:**
```
"TRIFR by department"
"injury rate by location"
"safety performance by site"
"highest risk units"
```

**Exposure Hours:**
```
"total exposure hours by quarter"
"hours worked by business unit"
"exposure trend monthly"
```

---

### Financial & Accounting Data

**Revenue Analysis:**
```
"revenue by product line"
"sales by region"
"income by category"
"top revenue sources"
```

**Expense Analysis:**
```
"expenses by department"
"cost breakdown by category"
"top expenses this year"
"spending by vendor"
```

**Profitability:**
```
"profit margin by quarter"
"gross profit by product"
"calculate profit = revenue - cost"
"margin trend analysis"
```

**Budget & Variance:**
```
"budget vs actual by month"
"variance analysis by department"
"spending over budget"
"budget utilization rate"
```

**Temporal Financial Trends:**
```
"quarterly revenue growth"
"monthly expense trend"
"cash flow by quarter"
"forecast next quarter revenue"
"year over year comparison"
```

---

### Manufacturing & Production

**Production Metrics:**
```
"units produced by line"
"production by shift"
"output by machine"
"daily production trend"
```

**Quality Metrics:**
```
"defect rate by product"
"quality score by line"
"rework rate by department"
"first-pass yield"
```

**Efficiency:**
```
"cycle time by product"
"downtime by machine"
"utilization rate by line"
"efficiency trend monthly"
```

**Temporal Production:**
```
"weekly production volume"
"monthly output trend"
"quarterly quality metrics"
"forecast production capacity"
```

---

### Academic & Education Data

**Student Performance:**
```
"average grade by department"
"group by major"
"student count by program"
"GPA distribution"
```

**Course Analysis:**
```
"enrollment by course"
"completion rate by department"
"average score by instructor"
"course popularity trend"
```

**Temporal Education:**
```
"enrollment trend by semester"
"quarterly graduation rate"
"yearly performance comparison"
"student retention by year"
```

---

## Best Practices

### 1. Start Simple, Then Refine

**❌ Don't start with:**
```
"show me the total closed won deals by salesperson excluding closed lost for Q3 2024 with commission calculations"
```

**✅ Instead, build up:**
```
"group by salesperson | status=closed won"
"show results for Q3 2024"
"calculate commission = deal amount * 0.15"
```

### 2. Use Filters with Context

**Format:** `query | filter1=value1, filter2=value2`

**Examples:**
```
"sum amount | status=closed won"
"group by salesperson | status=closed won, date=2024-01-01 to 2024-12-31"
"show records | exclude status=closed lost, category=inactive"
```

### 3. Leverage Fuzzy Matching

You don't need exact spellings:

```
"group by jordan" instead of "group by Jordan Faas"
"sum by tech" instead of "sum by Tech Support"
"show engineering" instead of "show department=Engineering"
```

### 4. Ask for Schema First

When exploring new datasets:

```
"list columns"                    # See what's available
"show dataset schema"             # Get detailed view
"summarize deal amounts"          # Understand data distribution
"group by status"                 # See categories
```

### 5. Combine Operations

You can chain multiple operations:

```
"show top 20 sorted by amount with commission = amount * 0.15"
"group by status | exclude closed lost | sort by count descending"
"sum amount by salesperson | status=closed won | date=2024"
```

### 6. Use Explicit Exclusions

**❌ Unclear:**
```
"show active deals"
```

**✅ Explicit:**
```
"show records | exclude status=closed lost, exclude status=disqualified"
```

### 7. Verify Calculations

All calculations are automatically verified with MathTool, but you can request explicit verification:

```
"sum amount by status and verify totals"
"calculate commission and show verification"
"group by salesperson with math verification"
```

---

## Troubleshooting

### Problem: "No datasets available"

**Cause:** No data loaded in session

**Solution:**
1. Verify you have datasets uploaded
2. Check that `chat_with_content` includes dataset IDs
3. List datasets: "show all datasets"

---

### Problem: "Column not found"

**Cause:** Column name doesn't match dataset

**Solution:**
1. Check available columns: "list columns"
2. Try fuzzy matching: "amount" instead of "Deal Amount"
3. Use schema: "show dataset schema"

---

### Problem: "Multiple matches found for value"

**Cause:** Fuzzy value matching found ambiguous results

**Example:**
```
Query: "group by smith"
Error: Found 3 matches: "John Smith", "Jane Smith", "Bob Smith"
```

**Solution:**
Be more specific:
```
"group by john smith"
"group by jane smith"
```

---

### Problem: "No match found for value"

**Cause:** Value doesn't exist in any column

**Solution:**
1. Check spelling
2. View sample values: "show dataset schema"
3. List unique values: "group by [column]"

---

### Problem: Query times out

**Cause:** Query too complex or dataset too large

**Solution:**
1. Add filters to reduce dataset size
2. Break into smaller queries
3. Use specific column names instead of fuzzy matching
4. Limit results: "show top 100"

---

### Problem: Unexpected grouping column

**Cause:** Fuzzy matching selected wrong column

**Solution:**
Be explicit:
```
"group by status column"
"sum amount column by salesperson column"
```

---

### Problem: Calculation seems wrong

**Cause:** Possible data quality issues

**Solution:**
1. All calculations are MathTool-verified (50-digit precision)
2. Check for null values: "show dataset schema"
3. Verify filters applied correctly
4. Request explicit verification: "verify calculation"

---

## Domain-Agnostic Design Principles

### How It Works Automatically

The tool is **truly domain-agnostic** - it works with ANY dataset without hardcoded assumptions:

#### 1. **Auto-Detection of Column Types**
- **Date columns**: Any column with dates, timestamps, or "date" in the name
- **Numeric columns**: Amount, value, price, quantity, count, hours, etc.
- **Entity columns**: People, products, departments, categories, etc.
- **Status columns**: Active/inactive, open/closed, success/failure, etc.

#### 2. **Intelligent Column Selection**
When you don't specify columns, the system automatically:
- Finds the best date column for temporal analysis
- Selects the most meaningful numeric column for calculations
- Identifies the optimal grouping column based on cardinality (2-50 unique values)
- Avoids ID columns and high-cardinality fields

#### 3. **Context-Aware Analysis**
The tool adapts its analysis based on your data:
- **Sales Data**: Focuses on revenue, deals, win rates
- **HR Data**: Analyzes headcount, turnover, compensation
- **Safety Data**: Calculates TRIFR, injury rates, exposure hours
- **Inventory**: Tracks stock levels, turnover, values
- **ANY Custom Data**: Discovers patterns automatically

#### 4. **No Configuration Required**
- Works with any column names (not just "Amount" or "Status")
- Handles any date formats automatically
- Adapts to any business domain
- No setup, no schema definitions, no mappings

### Example: Same Query, Different Datasets

The query `"show monthly trend"` works across all datasets:

**Sales Dataset:**
- Groups by: Close Date
- Calculates: Total Deal Amount, Deal Count
- Shows: Revenue trend over time

**HR Dataset:**
- Groups by: Hire Date
- Calculates: Headcount, New Hires
- Shows: Hiring trend over time

**Safety Dataset:**
- Groups by: Incident Date
- Calculates: TRIFR, Injury Count, Exposure Hours
- Shows: Safety metrics over time

**Same query. Different insights. Zero configuration.**

---

## Summary

The Data Analytics tool transforms natural language questions into precise data analysis across **any dataset**. With features ranging from basic grouping to advanced forecasting, temporal trending, TRIFR calculations, fuzzy matching, and financial-grade accuracy, it provides powerful insights without requiring SQL knowledge or manual configuration.

### Key Strengths

✅ **Natural Language** - Ask questions in plain English
✅ **Truly Domain Agnostic** - Works with ANY dataset automatically (sales, HR, safety, inventory, custom)
✅ **Fuzzy Matching** - Understands partial names and values ("jordan" → "Jordan Faas")
✅ **Financial Precision** - 50-digit accuracy with MathTool verification
✅ **Temporal Analysis** - Trends, forecasts, growth rates (hourly to yearly)
✅ **Specialized Metrics** - Automatic TRIFR, win rates, turnover calculations
✅ **Smart Auto-Detection** - Automatically finds date, value, and entity columns
✅ **Rich Analysis** - 15+ analysis types including pivots, percentages, rankings
✅ **Clear Results** - Formatted markdown tables with audit trails

### Complete Feature List

**Basic Operations:**
1. Dataset Discovery
2. Column Inspection
3. Grouping & Aggregation
4. Sorting & Ranking
5. Filtering (basic, comparison, exclusion)

**Analysis Features:**
6. Statistical Analysis (min, max, mean, median, std dev)
7. Percentages & Ratios
8. Calculated Columns
9. Fuzzy Value Matching
10. Temporal Analysis (hourly, daily, weekly, monthly, quarterly, yearly)
11. Trending Analysis (growth rates, momentum, patterns)
12. Forecasting (1-12 periods ahead with confidence intervals)
13. Specialized Domain Metrics (TRIFR, win rates, churn, etc.)
14. Identifier Analysis (detailed entity breakdowns)
15. Ranking Analysis (leaderboards, performance metrics)
16. Pivot Tables (multi-dimensional analysis)
17. Conditional Counting

### What's Next?

Explore your data with natural language queries and discover insights instantly. The tool learns from your data structure and adapts automatically - no configuration needed!

**Quick Start:**
```
"list datasets"              # See what's available
"list columns"               # Understand the structure
"show monthly trend"         # See temporal patterns
"group by [column]"          # Get category insights
"forecast next 3 months"     # Predict future trends
"show top 10 by [metric]"    # Find top performers
```

**Advanced Queries:**
```
"TRIFR by quarter | exclude business unit=office"
"win rate by salesperson | status=closed"
"monthly revenue trend | exclude status=cancelled"
"forecast next 6 months quarterly"
"group by department with average salary"
```

---

**Questions? Issues?** All operations are logged to CloudWatch for debugging and audit trails with full MathTool verification.
