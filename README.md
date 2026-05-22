# Tom Howes — Personal Homepage

**Author:** Tom Howes
**Class:** CS Web Development — Northeastern University · [Class Link](https://canvas.northeastern.edu)

## Project Objective

A personal homepage — not a portfolio pitch, but a window into who I am. Born in the UK, grew up in Hong Kong and Singapore, now studying CS in Boston. The site features a polaroid photo collage of my travels, climbing, and cooking, alongside the CS projects I've enjoyed building most.

## Screenshot

![Homepage screenshot](images/screenshot.png)

## Pages

- `index.html` — Homepage: hero, polaroid photo collage, projects, about snippet, contact
- `about.html` — Full background: the longer story, career timeline
- `ai.html` — AI-generated page: "The science of bouldering grades" (see GenAI section)

## Creative Component

The polaroid photo collage is the signature feature — a filterable grid of polaroid-style photos with handwritten captions and a fullscreen lightbox. The photos are written directly in the HTML as `<article>` tags. The JS (`js/collage.js` and `js/main.js`) handles the category filtering and lightbox interactions.

Filters: All / Travel / Climbing / Cooking

To add a new photo, copy any `<article class="polaroid">` block in `index.html`, update the `src`, `alt`, `data-category`, and caption text.

## Instructions to Build

### Prerequisites

- Node.js 18+

### Setup

```bash
git clone https://github.com/tom-howes/tom-howes.github.io.git
cd tom-howes.github.io
npm install
```

### Lint & Format

```bash
npm run lint
npm run format
```

### Run Locally

No build step — open `index.html` in a browser, or:

```bash
npx serve .
```

### Deploy

GitHub Pages from the `main` branch — live at **https://tom-howes.github.io**

## Project Structure

```
/
├── index.html
├── about.html
├── ai.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   └── collage.js
├── images/
│   ├── travel-colombia.jpeg
│   ├── travel-morocco.jpeg
│   ├── travel-norway.jpeg
│   ├── climb-1.png through climb-5.png
│   ├── cook-shakshuka.jpeg
│   ├── cook-eggs.jpeg
│   ├── cook-chowder.jpeg
│   ├── cook-pizza.jpeg
│   └── cook-kale.jpeg
├── package.json
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── LICENSE
└── README.md
```

## GenAI Usage

I used **Claude Sonnet 4** (claude-sonnet-4-20250514, Anthropic) during this project in the following ways:

### Design document

- **Prompt:** Asked Claude to help structure a design document including project description, user personas, and user stories based on my background and interests. Asked for wireframe mockup suggestions for each page.
- **How used:** Generated a draft of each section which I reviewed and edited. Rewrote the project description in my own voice and updated the personas to reflect the personal homepage concept.

### README

- **Prompt:** Asked Claude to generate the README including author info, project objective, file structure, and build instructions.
- **How used:** Generated and reviewed for accuracy.

### Code structure and JS approach

- **Prompt:** Asked Claude for a suggested folder structure and a general approach for implementing the polaroid collage — specifically how to structure the filtering by category and the lightbox interaction using vanilla ES6.
- **How used:** Used as a reference for the overall architecture. I wrote the HTML, CSS, and JavaScript myself based on this guidance.

### Section content and descriptions

- **How used:** I provided the personal details, interests, and talking points for each section — travel destinations, climbing experience, cooking dishes, project descriptions, and career background. Claude helped shape these into polished copy for the hero, about, and project sections based on my input.

### ai.html — AI-generated page

- **Prompt:** "Write an engaging explainer on the science of bouldering grades — how the V-scale works, why grades feel inconsistent between gyms and outdoor crags, what makes a problem harder to grade, and why climbers obsess over them. Include a personal note from the perspective of someone who has been bouldering for two years at an indoor gym in Boston."
- **Model:** Claude Sonnet 4 (claude-sonnet-4-20250514)
- **How used:** Content generated directly from this prompt. The page is clearly labelled as AI-generated with full disclosure.

## License

MIT — see [LICENSE](LICENSE)
