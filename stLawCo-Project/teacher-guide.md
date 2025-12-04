# St. Lawrence County Landing Page - Teacher Guide

## Table of Contents
1. [Overview](#overview)
2. [Pre-Class Setup](#pre-class-setup)
3. [File Structure](#file-structure)
4. [Timing Guide](#timing-guide)
5. [Common Student Issues & Solutions](#common-student-issues--solutions)
6. [Differentiation Strategies](#differentiation-strategies)
7. [Assessment Guide](#assessment-guide)
8. [Extension Activities](#extension-activities)
9. [Substitute Teacher Instructions](#substitute-teacher-instructions)
10. [Standards Alignment](#standards-alignment)

---

## Overview

### Project Summary
Students create a responsive landing page for St. Lawrence County featuring:
- Flexbox navigation bar
- Two hero sections with call-to-action buttons
- Responsive CSS Grid with 6 cards (1/2/3 column layout)
- Footer with CSS Grid layout including contact form

### Learning Objectives
1. Apply Flexbox for navigation layout
2. Implement CSS Grid for responsive card layouts
3. Create hero sections with overlaid content
4. Use media queries for responsive breakpoints
5. Build functional contact forms

### Key Technologies
- HTML5 semantic elements
- CSS3 Flexbox and Grid
- Responsive design with media queries
- Form handling with mailto:

### Local Context
The project focuses on St. Lawrence County, NY, incorporating:
- St. Lawrence River and fishing
- Adirondack wilderness and state parks
- Five local colleges
- North Country attractions
- Seasonal recreation

---

## Pre-Class Setup

### 1. GitHub Codespaces Setup (Recommended)

**Option A: Create Template Repository**
1. Create a new repository called `stlawrence-landing-page-template`
2. Add `index-starter.html` and `styles-starter.css`
3. Set repository to "Template repository" in settings
4. Share template link with students

**Option B: Individual Student Workspaces**
1. Each student creates a new Codespace
2. Students create two files: `index.html` and `styles.css`
3. Copy starter code from shared document or slides

### 2. Alternative: Local Development
If GitHub is unavailable:
- Students create files in a local text editor
- Use Live Server extension in VS Code
- Or simply open HTML files in browser (refresh to see changes)

### 3. Image Resources

**Prepare Image Links:**
- Bookmark Unsplash collections: "Adirondacks", "rivers", "upstate New York"
- Create a document with suggested image URLs
- Consider downloading a few backup images

**Placeholder Images:**
- Students can use `https://picsum.photos/1200/600` for heroes
- Use `https://picsum.photos/400/250` for card images
- Replace with real images as time permits

### 4. Materials to Prepare
- [ ] Starter code files accessible to all students
- [ ] Solution files (for teacher reference only)
- [ ] Printed or digital rubric
- [ ] Exit ticket (digital form or paper)
- [ ] Bell ringer for next class
- [ ] Backup images folder

---

## File Structure

### Student Files
```
student-project/
├── index.html              (Student creates from starter)
├── styles.css              (Student creates from starter)
└── README.md              (Optional)
```

### Teacher Resource Files
```
teacher-resources/
├── lesson-plan.md
├── index-starter.html
├── styles-starter.css
├── index-solution.html
├── styles-solution.css
├── rubric.md
├── exit-ticket.md
├── bell-ringer.md
└── teacher-guide.md
```

---

## Timing Guide

### Detailed Minute-by-Minute Breakdown

**0-10 minutes: Introduction**
- Welcome back, Thanksgiving reflection (2 min)
- Project overview and demo (5 min)
- Questions and clarifications (3 min)

**10-25 minutes: Direct Instruction**
- Flexbox navigation (5 min)
- Hero sections (5 min)
- CSS Grid review (5 min)

**25-45 minutes: Code-Along**
- HTML structure (5 min)
- Hero section together (5 min)
- Card grid setup (5 min)
- Footer structure (5 min)

**45-65 minutes: Guided Practice**
- Students work with teacher support (20 min)
- Teacher circulates, helps troubleshoot

**65-85 minutes: Independent Practice**
- Students complete remaining sections (20 min)
- Advanced students work on bonus features
- Struggling students focus on core requirements

**85-90 minutes: Wrap-Up**
- Quick share (3 min)
- Exit ticket (5 min)
- Preview next class (2 min)

### Flexible Pacing Options

**If Running Ahead of Schedule:**
- Add more detailed instruction on specific topics
- Have students explore bonus features
- Peer review and feedback session
- Start on extension activities

**If Running Behind Schedule:**
- Reduce code-along time (show more, type less)
- Assign completing the project as homework
- Focus on core requirements only
- Skip bonus features for now

---

## Common Student Issues & Solutions

### Issue 1: Images Not Displaying

**Symptoms:**
- Broken image icon appears
- Empty space where image should be

**Common Causes:**
- Incorrect file path
- URL typo
- Image blocked by school firewall

**Solutions:**
1. Check image URL in browser first
2. Verify `<img src="URL">` syntax
3. Use alternative image source
4. Try placeholder: `https://picsum.photos/1200/600`

**Prevention:**
- Provide tested image URLs
- Demonstrate URL copying technique
- Have backup image folder ready

---

### Issue 2: Grid Not Responsive

**Symptoms:**
- Grid stays in one column on all screens
- Grid doesn't change at breakpoints

**Common Causes:**
- Media query syntax error
- Wrong breakpoint values
- Missing or incorrect grid-template-columns

**Solutions:**
1. Check media query format:
```css
@media screen and (min-width: 768px) {
    /* Note: min-width, not max-width */
}
```

2. Verify grid-template-columns in each media query

3. Test by resizing browser window (not just responsive mode)

**Check This Code:**
```css
/* This is WRONG */
@media (max-width: 768px) {  /* Don't use max-width for mobile-first */
    .cards-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* This is RIGHT */
@media screen and (min-width: 768px) {  /* Use min-width */
    .cards-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

---

### Issue 3: Navigation Items Stacking Vertically

**Symptoms:**
- Menu items appear in a column instead of row
- Logo and menu not on same line

**Common Causes:**
- Missing `display: flex` on parent
- Wrong `flex-direction`
- Not applied to correct element

**Solutions:**
1. Verify Flexbox on `.navbar .container`:
```css
.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

2. Check `flex-direction` on `.nav-menu`:
```css
.nav-menu {
    display: flex;
    flex-direction: row;  /* Not column! */
    gap: 2rem;
}
```

**Student Action Steps:**
1. Inspect element in browser DevTools
2. Check if `display: flex` is applied
3. Verify flex-direction is `row`, not `column`

---

### Issue 4: Hero Text Not Visible

**Symptoms:**
- Can't see heading or button on hero image
- Text blends into image background

**Common Causes:**
- Missing text color (should be white)
- No text shadow for contrast
- Poor image choice (too light)

**Solutions:**
1. Add text styling to `.hero-content`:
```css
.hero-content {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}
```

2. Try darker hero image

3. Add semi-transparent overlay:
```css
.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
}

.hero-content {
    z-index: 2;  /* Above overlay */
}
```

---

### Issue 5: Hero Content Not Centered

**Symptoms:**
- Text appears in corner or odd position
- Not vertically centered

**Common Causes:**
- Missing position: relative on parent
- Missing position: absolute on content
- Incorrect transform values

**Solution - The Complete Centering Code:**
```css
.hero {
    position: relative;  /* Parent must be relative */
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  /* Must be -50%, -50% */
}
```

**Student Checklist:**
- [ ] Parent has `position: relative`
- [ ] Content has `position: absolute`
- [ ] `top: 50%` and `left: 50%`
- [ ] `transform: translate(-50%, -50%)`

---

### Issue 6: Contact Form Not Working

**Symptoms:**
- Clicking submit does nothing
- Email client doesn't open

**Common Causes:**
- Missing or incorrect `action` attribute
- Wrong email format in `mailto:`
- Missing `method="POST"`

**Solution:**
```html
<form action="mailto:student@example.com" method="POST" enctype="text/plain">
    <!-- form fields -->
</form>
```

**Important Notes:**
- Students must use their real email address
- `mailto:` links open default email client
- May not work on school computers with restricted email
- Alternative: Use FormSpree or similar service

---

### Issue 7: Cards Not Having Equal Height

**Symptoms:**
- Cards with less text are shorter
- Bottom buttons not aligned

**This is Expected Behavior** (not an error)

**Optional Solution (Advanced):**
```css
.card {
    display: flex;
    flex-direction: column;
}

.card-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.card-content p {
    flex-grow: 1;
}
```

**Simpler Alternative:**
- Make card descriptions roughly the same length
- This is acceptable for this project

---

## Differentiation Strategies

### For Struggling Students

**Strategy 1: Reduce Scope**
- Focus on 4 cards instead of 6
- Skip second hero section initially
- Simplify footer to 2 sections instead of 4

**Strategy 2: Pre-Built Components**
- Provide completed navigation code
- Give finished button CSS
- Offer pre-styled cards to modify

**Strategy 3: Step-by-Step Checklist**
```
□ Step 1: Add navigation HTML
□ Step 2: Style navigation with Flexbox
□ Step 3: Add first hero HTML
□ Step 4: Style first hero
□ ... continue with detailed steps
```

**Strategy 4: Pair Programming**
- Partner struggling student with stronger peer
- Switch "driver" role every 10 minutes
- Both must explain what code does

**Strategy 5: Focus on One Section**
- Perfect one card before making others
- Master navigation before moving on
- Complete and test each section individually

---

### For Advanced Students

**Challenge 1: Hamburger Menu**
Create a mobile hamburger menu that:
- Shows hamburger icon on mobile
- Expands/collapses on click
- Uses CSS transitions for smooth animation

**Challenge 2: Smooth Scrolling**
```css
html {
    scroll-behavior: smooth;
}
```
Make navigation links scroll smoothly to sections

**Challenge 3: Advanced Grid Layouts**
Use CSS Grid template areas:
```css
.footer-grid {
    grid-template-areas:
        "nav copyright"
        "disclaimer contact"
        "disclaimer contact";
}
```

**Challenge 4: Parallax Effect**
Add parallax scrolling to hero images

**Challenge 5: Additional Pages**
Create separate pages:
- Attractions detail page
- Events calendar page
- About St. Lawrence County page

**Challenge 6: JavaScript Enhancements**
- Form validation
- Image slideshow in hero
- Animated counters for statistics
- Interactive map integration

**Challenge 7: Accessibility Improvements**
- Add ARIA labels
- Ensure keyboard navigation works
- Check color contrast ratios
- Add alt text to all images

---

### For Visual Learners

**Strategy 1: Visual Aids**
- Show grid overlay diagrams
- Use colored boxes to demonstrate Flexbox
- Draw the responsive breakpoint changes

**Strategy 2: Live Browser DevTools**
- Show element inspector in real-time
- Toggle CSS properties on/off
- Demonstrate responsive design mode

**Strategy 3: Before/After Comparisons**
- Show page without CSS vs with CSS
- Display mobile, tablet, desktop side-by-side

---

### For English Language Learners

**Strategy 1: Vocabulary Support**
- Pre-teach key terms: grid, flex, responsive, breakpoint
- Provide terminology sheet with visuals
- Use consistent vocabulary throughout

**Strategy 2: Visual Instructions**
- Use screenshots heavily in instructions
- Create video demonstrations
- Provide annotated code examples

**Strategy 3: Bilingual Support**
- Allow use of translation tools
- Provide key terms in native language
- Pair with bilingual student if possible

---

## Assessment Guide

### Formative Assessment During Class

**Quick Checks (Every 15 minutes):**
1. "Raise your hand if your navigation is working"
2. "Show me your responsive grid on mobile"
3. "Who needs help with the hero section?"

**Exit Ticket Analysis:**
- Review responses same day
- Identify concepts needing reteach
- Group students by support needs
- Plan interventions for next class

**Observation Checklist:**
While circulating, note:
- [ ] Can create HTML structure
- [ ] Understands Flexbox properties
- [ ] Can implement CSS Grid
- [ ] Uses media queries correctly
- [ ] Tests responsive design
- [ ] Debugs issues independently

---

### Summative Assessment with Rubric

**Using the Rubric Effectively:**

1. **Grade Section by Section**
   - Don't grade entire project at once
   - Check navigation first, then hero, then grid, etc.
   - Mark rubric as you go

2. **Common Point Deductions**
   - Navigation not using Flexbox: -5
   - Grid not responsive: -10
   - Missing sections: -5 each
   - No St. Lawrence County content: -5

3. **Awarding Bonus Points**
   - Be generous with bonus points for extra effort
   - Recognize creative implementations
   - Reward problem-solving and debugging

4. **Feedback Comments**
   - Be specific: "Great use of hover effects on cards"
   - Provide growth path: "Next, try adding smooth scrolling"
   - Recognize effort: "I can see you worked hard on the footer layout"

---

### Portfolio Assessment

**Student Portfolio Requirements:**
1. Screenshot of completed landing page
2. Link to live project
3. Brief reflection answering:
   - What was challenging?
   - What are you proud of?
   - What would you improve?

---

## Extension Activities

### Activity 1: County Comparison
Create landing pages for other North Country counties:
- Franklin County
- Clinton County
- Jefferson County
- Lewis County

Compare features, attractions, design approaches

---

### Activity 2: Business Landing Page
Apply same techniques to create landing page for:
- Local business (real or fictional)
- School club or sports team
- Personal portfolio site
- Non-profit organization

---

### Activity 3: Design Critique
Analyze professional landing pages:
- What makes them effective?
- How do they use color and space?
- Identify Flexbox and Grid usage
- Present findings to class

---

### Activity 4: Accessibility Audit
Using browser tools and checklists:
- Test with keyboard navigation only
- Check color contrast
- Validate HTML
- Add ARIA labels
- Test with screen reader

---

### Activity 5: Performance Optimization
Learn about web performance:
- Optimize images for web
- Minimize CSS
- Check page load speed
- Implement lazy loading
- Use CDNs for libraries

---

## Substitute Teacher Instructions

### Overview for Sub
This is a hands-on web development project. Students are building a landing page about St. Lawrence County using HTML and CSS. Most work is independent following starter code with TODO comments.

### What Students Should Be Doing
- Working in GitHub Codespaces or local editor
- Following TODO comments in starter files
- Building navigation, hero sections, cards, and footer
- Testing responsive design by resizing browser

### Your Role
- Take attendance
- Ensure students are on task
- Help with basic troubleshooting (see guide below)
- Collect exit tickets at end of class

### If Students Say "It's Not Working"

**Step 1: Ask These Questions**
1. "What are you trying to do?"
2. "What's happening instead?"
3. "Have you checked the TODO comments?"
4. "Did you save your file?"

**Step 2: Basic Checks**
- Did they save the file? (Ctrl+S or Cmd+S)
- Did they refresh the browser? (F5)
- Are there typos in their code?
- Are they looking at the right file?

**Step 3: Common Issues Quick Fix**
- **Images not showing:** Check the image URL
- **Nothing displays:** Look for missing closing tags `</div>`
- **Styles not working:** Check if CSS file is linked in HTML
- **Grid not responsive:** They need media queries (refer to starter code)

### Emergency Contact
- Regular teacher: [Your email/phone]
- Tech support: [School tech contact]
- Department head: [Department contact]

### Collect These Items
- Exit tickets (paper or digital link provided)
- Note any students who were absent
- Note any technical issues that prevented work

### Behavior Management
- Students should be working independently or in pairs
- Headphones OK for focus music
- Redirect off-task behavior to project work
- Major issues: Send to [discipline contact]

---

## Standards Alignment

### CSTA Computer Science Standards

**3A-AP-16:** Design and iteratively develop computational artifacts
- Students design and build a multi-section landing page
- Iterative development through TODO-guided workflow
- Practical intent: tourism/information website

**3A-AP-21:** Evaluate and refine computational artifacts
- Test responsive design at multiple breakpoints
- Debug layout and styling issues
- Refine based on rubric criteria

**3A-DA-12:** Create computational models
- Model real-world St. Lawrence County information
- Organize data into structured card components
- Represent content in accessible web format

**3A-IC-24:** Assess impacts of computing
- Consider accessibility of web designs
- Evaluate effectiveness of different layouts
- Discuss real-world applications for local businesses

---

### Common Core ELA Standards (Integrated)

**CCSS.ELA-LITERACY.RST.11-12.3:** Follow complex procedures
- Multi-step coding process
- Debugging systematic approach

**CCSS.ELA-LITERACY.RST.11-12.4:** Determine technical vocabulary
- HTML, CSS terminology
- Web design concepts

**CCSS.ELA-LITERACY.WHST.11-12.2:** Write informative/explanatory texts
- Documentation in code comments
- Project reflections

---

### 21st Century Skills

**Critical Thinking:**
- Debug code issues
- Choose appropriate CSS properties
- Evaluate design effectiveness

**Creativity:**
- Design visual layouts
- Select color schemes
- Craft engaging content

**Communication:**
- Present work to peers
- Write clear code comments
- Explain technical concepts

**Collaboration:**
- Peer coding support
- Shared troubleshooting
- Class discussions

---

## Notes for Success

### Before Teaching This Lesson

**Technical Prep:**
- Test all URLs and links
- Verify GitHub Codespaces works
- Have backup plan if internet fails
- Know how to use browser DevTools

**Content Prep:**
- Familiarize yourself with St. Lawrence County
- Review Flexbox and Grid concepts
- Practice the code-along sections
- Anticipate student questions

**Classroom Prep:**
- Projector and screen working
- All student computers functional
- Seating arrangement allows circulation
- Materials ready to distribute

---

### During the Lesson

**Keep Energy Up:**
- This is post-Thanksgiving, students may be tired
- Use local context to maintain interest
- Celebrate small wins publicly
- Show enthusiasm for student work

**Circulate Constantly:**
- Don't stay at teacher desk
- Check in with every student
- Catch issues early
- Provide encouragement

**Adjust as Needed:**
- If class is struggling, slow down
- If ahead of schedule, add challenges
- Skip sections if running behind
- Focus on learning, not perfect timing

---

### After the Lesson

**Immediate:**
- Review exit tickets for understanding
- Note successful strategies
- Identify students needing support
- Plan follow-up instruction

**Next Day:**
- Start with bell ringer quiz
- Reteach concepts as needed
- Allow time to complete project
- Begin grading with rubric

**Long Term:**
- Save exemplary student work
- Document lesson improvements
- Update starter code if needed
- Share successes with department

---

## Conclusion

This lesson successfully combines multiple responsive design techniques with local, relevant content. Students gain practical skills while creating something meaningful about their community.

The scaffolding provided through TODO comments allows students of varying abilities to succeed, while bonus challenges keep advanced students engaged.

Remember: The goal isn't perfection—it's learning and growth. Celebrate effort, creativity, and problem-solving throughout the process.

---

## Quick Reference

### Helpful Commands
- **Save file:** Ctrl+S (Windows) / Cmd+S (Mac)
- **Refresh browser:** F5 or Ctrl+R
- **Open DevTools:** F12 or Right-click > Inspect
- **View responsive mode:** Ctrl+Shift+M (Chrome)

### Important URLs
- GitHub Codespaces: https://github.com/codespaces
- Unsplash (images): https://unsplash.com
- Color picker: https://htmlcolorcodes.com
- MDN Web Docs: https://developer.mozilla.org

### Color Codes (St. Lawrence County)
- Primary Blue: `#003366`
- Secondary Blue: `#0066CC`
- Accent Gold: `#FFB81C`
- Light Gray: `#F5F5F5`
- Dark Gray: `#333333`

---

**Last Updated:** December 2024  
**Teacher:** [Your Name]  
**Course:** 11th Grade Computer Science  
**School:** Norwood-Norfolk High School
