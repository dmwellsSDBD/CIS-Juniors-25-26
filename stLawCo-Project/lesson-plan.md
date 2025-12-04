# St. Lawrence County Landing Page - Lesson Plan

**Grade Level:** 11th Grade Computer Science  
**Duration:** 90 minutes  
**Topic:** Responsive Landing Page with Flexbox Navigation, CSS Grid, and Hero Sections

## Learning Objectives

By the end of this lesson, students will be able to:
1. Create a responsive navigation bar using Flexbox
2. Implement responsive hero sections with call-to-action buttons
3. Build a responsive card grid system using CSS Grid
4. Design a footer layout using CSS Grid with multiple sections
5. Apply mobile-first responsive design principles
6. Create a functional contact form with email submission

## Standards Alignment

- **CSTA 3A-AP-16:** Design and iteratively develop computational artifacts for practical intent, personal expression, or to address a societal issue by using events to initiate instructions
- **CSTA 3A-AP-21:** Evaluate and refine computational artifacts to make them more usable and accessible

## Materials Needed

- Computers with internet access
- GitHub Codespaces account for each student
- Access to project starter files
- St. Lawrence County website for reference (https://www.stlawco.gov/)
- Example images (provided or student-sourced)

## Color Scheme (Based on St. Lawrence County Website)

- **Primary Blue:** #003366 (Dark Navy Blue)
- **Secondary Blue:** #0066CC (Bright Blue)
- **Accent Gold:** #FFB81C (Gold/Yellow)
- **Light Gray:** #F5F5F5 (Background)
- **Dark Gray:** #333333 (Text)
- **White:** #FFFFFF

## Lesson Timeline

### Introduction & Hook (10 minutes)

**Minute 0-5: Welcome Back & Context Setting**
- Welcome students back from Thanksgiving break
- Briefly discuss what they remember about responsive design
- Show the St. Lawrence County government website as inspiration
- Explain that they'll be creating a tourism/information landing page for our county

**Minute 5-10: Project Overview & Demonstration**
- Display the completed solution on the projector
- Point out key features:
  - Responsive navigation that collapses on mobile
  - Hero image sections with overlaid text and buttons
  - Card grid that adjusts from 1 to 2 to 3 columns
  - Professional footer with contact form
- Explain real-world application: Many local businesses and organizations need websites like this

### Direct Instruction (15 minutes)

**Minute 10-15: Flexbox Navigation Review**
- Review Flexbox basics: `display: flex`, `justify-content`, `align-items`
- Demonstrate how to create a horizontal navigation bar
- Show how to make navigation responsive with media queries
- Key concepts:
  - `flex-direction: row` vs `column`
  - `justify-content: space-between` for spacing
  - Responsive behavior with media queries

**Minute 15-20: Hero Section Design**
- Explain hero section purpose: immediate visual impact
- Demonstrate responsive image sizing (`width: 100%`, `height: auto`)
- Show how to position content over images using relative/absolute positioning
- Discuss call-to-action button styling and hover effects

**Minute 20-25: CSS Grid Review**
- Review CSS Grid fundamentals: `display: grid`, `grid-template-columns`
- Demonstrate responsive grid with `repeat()` and `minmax()`
- Show the mobile-first approach:
  - 1 column for mobile
  - 2 columns for tablet (768px)
  - 3 columns for desktop (1024px)
- Explain `gap` property for spacing between grid items

### Code-Along Demonstration (20 minutes)

**Minute 25-30: Setting Up the HTML Structure**
```html
<!-- Navigation Structure -->
<nav class="navbar">
  <div class="container">
    <div class="nav-brand">St. Lawrence County</div>
    <ul class="nav-menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#attractions">Attractions</a></li>
      <!-- etc. -->
    </ul>
  </div>
</nav>
```

**Minute 30-35: Creating the Hero Section**
- Code the hero HTML structure together
- Add the responsive image
- Position the hero content (heading, text, button)
- Style the call-to-action button

**Minute 35-40: Building the Card Grid**
- Create the grid container
- Set up individual card structure (image, heading, text, button)
- Apply CSS Grid properties
- Add responsive breakpoints

**Minute 40-45: Footer Construction**
- Create footer sections using CSS Grid
- Add navigation links, copyright info, fair use statement
- Build the contact form with proper input types
- Style the footer with the county color scheme

### Guided Practice (20 minutes)

**Minute 45-55: Students Begin Building**
- Students open the starter file in GitHub Codespaces
- Work through TODO comments in the starter file
- Teacher circulates to assist with:
  - Flexbox navigation alignment issues
  - Hero image positioning problems
  - CSS Grid column configuration
  - Form styling and mailto: functionality

**Minute 55-65: Checkpoint & Troubleshooting**
- Pause class for a quick check-in
- Address common issues on the projector:
  - Images not displaying correctly
  - Grid not responsive
  - Navigation items not aligning
- Students continue working with support

### Independent Practice (20 minutes)

**Minute 65-85: Complete the Project**
- Students work independently to finish all required sections
- Complete all TODO items in the starter code
- Test responsiveness by resizing browser window
- Customize content about St. Lawrence County locations
- Add personal touches while maintaining requirements

**Challenges for Advanced Students:**
- Add smooth scroll behavior to navigation links
- Implement a hamburger menu for mobile navigation
- Add CSS transitions to cards on hover
- Create additional card designs with different layouts
- Add a parallax scrolling effect to hero sections

**Support for Struggling Students:**
- Focus on completing the basic structure first
- Use the solution file as a reference (but encourage trying first)
- Work on one section at a time (navigation, then hero, then grid, then footer)
- Pair with a peer for collaborative troubleshooting

### Wrap-Up & Assessment (5 minutes)

**Minute 85-88: Class Share**
- 2-3 volunteers share their landing pages on the projector
- Class provides positive feedback
- Highlight creative implementations of the requirements

**Minute 88-90: Exit Ticket & Submission**
- Students complete the exit ticket (link provided)
- Submit their project URL for grading
- Preview: "Next class we'll add JavaScript interactivity to make the navigation even better!"

## Assessment

### Formative Assessment
- Observation during guided and independent practice
- Exit ticket responses
- Checkpoint questions during code-along

### Summative Assessment
- Completed landing page project (see rubric)
- All required elements present and functional
- Responsive design working at mobile, tablet, and desktop sizes

## Differentiation Strategies

### For Advanced Students
- Add hamburger menu functionality for mobile
- Implement smooth scrolling with CSS
- Add animation effects to cards and buttons
- Create additional unique sections
- Experiment with CSS Grid template areas

### For Struggling Students
- Provide completed code snippets for complex sections
- Allow use of solution file as reference
- Focus on core requirements before styling
- Pair programming with stronger student
- Extended time on basics before moving to advanced features

## Common Mistakes & Solutions

1. **Images too large or distorted**
   - Solution: Use `width: 100%` and `height: auto` on images
   - Use `object-fit: cover` for hero images

2. **Grid not responsive**
   - Solution: Check media query syntax and breakpoint values
   - Ensure `grid-template-columns` changes in each media query

3. **Navigation items stacking on desktop**
   - Solution: Check `flex-direction` property
   - Verify parent has `display: flex`

4. **Hero text not visible over image**
   - Solution: Add semi-transparent overlay or text shadow
   - Use high contrast colors

5. **Contact form not working**
   - Solution: Check `action="mailto:student-email@example.com"` format
   - Verify `method="POST"` attribute

## Extension Activities

- Research other county websites and compare design approaches
- Create additional pages (About, Attractions detail pages)
- Interview local business owners about their website needs
- Present landing pages to class and critique design choices

## Homework/Follow-Up

- Complete any unfinished sections of the landing page
- Find 3 examples of effective landing pages online
- Write a brief reflection: "What makes a good landing page?"
- Optional: Create a second landing page for a different North Country county

## Resources

- [MDN Web Docs - Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [MDN Web Docs - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS-Tricks Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS-Tricks Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [St. Lawrence County Official Website](https://www.stlawco.gov/)

## Teacher Notes

- **Before Class:** Ensure all students can access GitHub Codespaces
- **Setup Time:** Create a new repository or workspace for each student
- **Alternative:** If GitHub is unavailable, use CodePen or local HTML files
- **Images:** Have a backup folder of St. Lawrence County images ready
- **Pacing:** The independent practice section can extend into homework if needed
- **Substitute Friendly:** The starter code has clear TODO comments that guide students through the project independently

## Vocabulary

- **Landing Page:** A standalone web page created specifically for a marketing or advertising campaign
- **Hero Section:** Large banner image at the top of a webpage, typically with a call-to-action
- **Flexbox:** CSS layout method for arranging items in rows or columns
- **CSS Grid:** CSS layout system for creating two-dimensional layouts
- **Responsive Design:** Web design approach that makes pages render well on all devices
- **Mobile-First:** Design philosophy that starts with mobile layout, then scales up
- **Call-to-Action (CTA):** Element that prompts visitor to take action
- **Breakpoint:** Specific screen width where website layout changes
- **Media Query:** CSS technique to apply styles based on device characteristics

## Post-Lesson Reflection Questions

1. Did students successfully create all required sections?
2. Were the timing estimates accurate for this class?
3. What common errors should be addressed in future lessons?
4. Did the local context (St. Lawrence County) increase engagement?
5. What modifications would improve this lesson for next time?
