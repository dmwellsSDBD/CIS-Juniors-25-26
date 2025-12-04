# St. Lawrence County Landing Page - Bell Ringer Quiz

**Name:** _____________________  
**Date:** _____________________  
**Period:** _____________________

---

## Directions
Answer the following questions about the St. Lawrence County Landing Page project from our previous class. You have 10 minutes. Close notes and work independently.

**Points: 20 points**

---

## Question 1: Flexbox Navigation (4 points)

**Part A (2 points):** What are the TWO main Flexbox properties you need to use in the `.navbar .container` to arrange the logo and menu horizontally with space between them?

1. _____________________

2. _____________________

**Part B (2 points):** Circle the correct CSS property to make navigation items appear horizontally:

```css
.nav-menu {
    display: flex;
    flex-direction: _______;
}
```

- [ ] column
- [ ] row
- [ ] inline
- [ ] block

---

## Question 2: Hero Section Structure (4 points)

**Part A (2 points):** What positioning value should the `.hero` container have to allow the content to be positioned absolutely inside it?

Answer: `position: __________________;`

**Part B (2 points):** To perfectly center the hero content both vertically and horizontally, you use:

```css
.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(___%, ___%);
}
```

Fill in the blanks: (___%, ___%)

---

## Question 3: CSS Grid Responsive Layout (6 points)

Write the CSS code to create a responsive grid that has:
- **1 column** on mobile (default)
- **2 columns** on tablet (768px and up)
- **3 columns** on desktop (1024px and up)

```css
/* Mobile - Default */
.cards-grid {
    display: grid;
    grid-template-columns: _______________________;
    gap: 2rem;
}

/* Tablet - 768px and up */
@media screen and (min-width: 768px) {
    .cards-grid {
        grid-template-columns: _______________________;
    }
}

/* Desktop - 1024px and up */
@media screen and (min-width: 1024px) {
    .cards-grid {
        grid-template-columns: _______________________;
    }
}
```

---

## Question 4: St. Lawrence County Color Scheme (3 points)

Match the color with its use in the landing page:

| Color | Use |
|-------|-----|
| 1. #003366 (Dark Blue) | ____ A. Call-to-action buttons |
| 2. #0066CC (Bright Blue) | ____ B. Navigation and footer background |
| 3. #FFB81C (Gold) | ____ C. Secondary buttons |

**Answers:** 1-___, 2-___, 3-___

---

## Question 5: Hover Effects (3 points)

Look at this CSS code for a button hover effect:

```css
.btn-primary:hover {
    background-color: #E5A818;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

**Part A (1 point):** What does `translateY(-2px)` do?

- [ ] Moves button 2px to the left
- [ ] Moves button 2px down
- [ ] Moves button 2px up
- [ ] Rotates button 2 degrees

**Part B (2 points):** In your own words, describe the overall visual effect this hover state creates:

---

---

## BONUS Question (2 points)

What is the maximum width of the container in the St. Lawrence County landing page project, and why is it important to set a maximum width?

**Maximum width:** ___________

**Why it's important:**

---

---

## Teacher Grading

| Question | Points Possible | Points Earned |
|----------|-----------------|---------------|
| Question 1 | 4 | |
| Question 2 | 4 | |
| Question 3 | 6 | |
| Question 4 | 3 | |
| Question 5 | 3 | |
| **Subtotal** | **20** | |
| Bonus | +2 | |
| **Total** | **20 (+2)** | |

---

## Answer Key (For Teacher Reference)

**Question 1:**
- Part A: `display: flex` and `justify-content: space-between` (or `align-items: center`)
- Part B: **row**

**Question 2:**
- Part A: `relative`
- Part B: `-50%, -50%`

**Question 3:**
```css
/* Mobile - Default */
.cards-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

/* Tablet - 768px and up */
@media screen and (min-width: 768px) {
    .cards-grid {
        grid-template-columns: repeat(2, 1fr);  /* or 1fr 1fr */
    }
}

/* Desktop - 1024px and up */
@media screen and (min-width: 1024px) {
    .cards-grid {
        grid-template-columns: repeat(3, 1fr);  /* or 1fr 1fr 1fr */
    }
}
```

**Question 4:**
- 1-B (Navigation and footer background)
- 2-C (Secondary buttons)
- 3-A (Call-to-action buttons)

**Question 5:**
- Part A: **Moves button 2px up**
- Part B: Sample answer: "The button lifts up slightly and gains a shadow, creating a 3D effect that makes it look like it's being raised off the page when you hover over it."

**Bonus:**
- Maximum width: **1400px**
- Why: Sample answer: "It prevents content from stretching too wide on large screens, which makes text easier to read and maintains a good visual layout."

---

## Scoring Guide

- **18-20 points:** Excellent retention and understanding
- **15-17 points:** Good understanding, minor gaps
- **12-14 points:** Adequate, needs review
- **9-11 points:** Requires re-teaching
- **Below 9 points:** Needs significant intervention

---

## Follow-Up Actions

Based on quiz results:
- [ ] Re-teach Flexbox concepts
- [ ] Review CSS Grid syntax
- [ ] Additional practice with positioning
- [ ] One-on-one support needed for: _________________
