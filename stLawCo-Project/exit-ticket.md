# St. Lawrence County Landing Page - Exit Ticket

**Name:** _____________________  
**Date:** _____________________  
**Period:** _____________________

---

## Directions
Please answer the following questions honestly. This will help me understand what you learned today and where you might need additional support. This is not graded for correctness, only for completion.

---

## Question 1: Flexbox Navigation (Multiple Choice)
Which CSS property do you use to arrange navigation items horizontally in Flexbox?

- [ ] A) `flex-direction: column`
- [ ] B) `flex-direction: row`
- [ ] C) `display: inline`
- [ ] D) `float: left`

---

## Question 2: CSS Grid Columns (Fill in the Blank)
To create a responsive grid that has **3 equal columns**, you would use:

```css
.cards-grid {
    display: grid;
    grid-template-columns: ____________________________;
}
```

---

## Question 3: Hero Section Positioning (Multiple Choice)
To overlay text content on top of a hero image, which positioning method should you use for the content?

- [ ] A) `position: static`
- [ ] B) `position: relative`
- [ ] C) `position: absolute`
- [ ] D) `position: fixed`

---

## Question 4: Responsive Breakpoints (Short Answer)
In your own words, explain what a **media query** does and why it's important for responsive design.

**Your Answer:**

---

---

## Question 5: Code Analysis
Look at this CSS code:

```css
.card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
```

What visual effect will this create when a user hovers over a card?

**Your Answer:**

---

---

## Question 6: Self-Reflection (1-5 Scale)

On a scale of 1-5, how confident do you feel about today's topics?

| Topic | Not Confident | | | | Very Confident |
|-------|---------------|---|---|---|----------------|
| Flexbox Navigation | 1 | 2 | 3 | 4 | 5 |
| CSS Grid Layout | 1 | 2 | 3 | 4 | 5 |
| Hero Sections | 1 | 2 | 3 | 4 | 5 |
| Responsive Design | 1 | 2 | 3 | 4 | 5 |
| Overall Project | 1 | 2 | 3 | 4 | 5 |

---

## Question 7: Challenge Question (Optional Bonus)

How would you change the grid layout to have **2 columns on tablet** (768px and up)?

**Your Answer:**

---

---

## Question 8: Real-World Application

Name one way you could use the skills from today's lesson in a real-world scenario (personal project, business, etc.):

**Your Answer:**

---

---

## Question 9: Questions & Support

What topic from today would you like more practice with or clarification on?

**Your Answer:**

---

---

## Question 10: Project Completion Status

Check the sections you completed today:

- [ ] Navigation Bar
- [ ] First Hero Section
- [ ] Responsive Card Grid (at least 4 cards)
- [ ] Second Hero Section
- [ ] Footer with Contact Form

**If you didn't complete all sections, what prevented you from finishing?**

---

---

## Teacher Use Only

**Completion:** _____ / 10 questions answered  
**Notes:**

---

---

## Answer Key (For Teacher Reference)

1. **B)** `flex-direction: row`
2. `repeat(3, 1fr)` or `1fr 1fr 1fr`
3. **C)** `position: absolute`
4. Sample answer: "A media query applies different CSS styles based on screen size or device characteristics. It's important because it allows websites to look good on mobile phones, tablets, and desktop computers."
5. Sample answer: "The card will lift up 10 pixels and gain a stronger shadow, creating a 3D lifting effect when you hover over it."
6. Self-assessment (no correct answer)
7. Sample answer:
```css
@media screen and (min-width: 768px) {
    .cards-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```
8. Various answers accepted
9. Various answers accepted
10. Checklist (no correct answer)
