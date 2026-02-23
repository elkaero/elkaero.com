# Implementation Plan: elkaero Personal Web Space

## Project Structure

```
/
├── index.html          # Landing page
├── writing.html        # Articles
├── projects.html       # Projects
├── visuals.html        # Visuals
├── about.html          # About
├── contact.html        # Contact
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # Interactions
└── README.md
```

## Implementation Steps

### Phase 1: Base Setup

1. **Create CSS** (`css/style.css`)
   - Import Rubik font (300, 400 weights)
   - Define CSS variables for colors:
     - `--color-1: #8DBCC7`
     - `--color-2: #A4CCD9`
     - `--color-3: #C4E1E6`
     - `--color-4: #EBFFD8`
   - Reset & base styles
   - Typography: Rubik for headings/paragraphs
   - Layout: Flexbox/Grid for responsiveness
   - Mobile-first media queries (768px, 1024px breakpoints)

2. **Create Base HTML Template**
   - **Header with navigation** (top bar/menu)
   - Main content area
   - Footer with GitHub link
   - Shared across all pages

3. **Create JavaScript** (`js/main.js`)
   - Interactive elements
   - Smooth scrolling, animations, etc.

### Phase 2: Page Development

1. **Landing Page** (`index.html`)
   - Hero: "Hello, this is my Space"
   - Brief introduction (2-3 sentences)
   - Cards/links to Writing, Projects, Visuals, About, Contact

2. **Writing Page** (`writing.html`)
   - List of articles (placeholder content for now)
   - Article cards with title, date, excerpt

3. **Projects Page** (`projects.html`)
   - Grid of projects
   - Project cards with title, description, link

4. **Visuals Page** (`visuals.html`)
   - Gallery or visual content area
   - Placeholder for future visuals

5. **About Page** (`about.html`)
   - 2-3 paragraphs
   - Semi-personal, human tone

6. **Contact Page** (`contact.html`)
   - Email address
   - Simple contact info

7. **Footer** (shared component)
   - GitHub link (required)
   - Copyright

### Phase 3: Polish

- Verify responsive design at all breakpoints
- Check browser compatibility (Chrome, Firefox, Safari)
- Test language detection flow
- Verify all links work
- No spelling errors

### Phase 4: Deployment

- Deploy to Debian server
- Configure SSL/TLS
- Test production

## Technical Details

### Color Usage Suggestions
- `--color-1 (#8DBCC7)`: Primary accent, links, buttons
- `--color-2 (#A4CCD9)`: Secondary elements, hover states
- `--color-3 (#C4E1E6)`: Backgrounds, cards
- `--color-4 (#EBFFD8)`: Highlights, call-to-action

### Responsive Breakpoints
- Mobile: < 768px (default)
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Timeline

- Phase 1 (Base): Today
- Phase 2 (Pages): Today
- Phase 3 (Polish): Today
- Phase 4 (Deploy): Today

All targeted for completion 22.02.2026 as per requirements.
