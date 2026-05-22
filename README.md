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

- **How used:** Generated a draft of each section which I reviewed and edited. Rewrote the project description in my own voice and updated the personas to reflect the personal homepage concept.
- **Prompt:** "I have a web development assignment where I need to create a personal homepage using vanilla HTML, CSS and JavaScript - no frameworks or libraries allowed. As part of the assignment I need to submit a design document that includes a project description, user personas, user stories and design mockups. Can you help me write this?Here is some background about me to make it feel personal and accurate: I was born in the UK, grew up in Hong Kong and Singapore, my family now lives in Bath. I'm currently doing an MS in Computer Science at Northeastern University in Boston with a 4.0 GPA. Before that I worked in enterprise SaaS sales for 4.5 years at Darktrace and Panopto - I hit 185% quota as an AE and generated $3M+ in pipeline as an SDR. I'm now looking for Sales Engineering roles at AI companies.The homepage is going to be a personal homepage rather than a professional portfolio - so it should feel like a window into who I am rather than a job application. The main feature is going to be a polaroid photo collage of my travels, climbing and cooking. I've been to Colombia, Morocco and Norway recently. I boulder at Rockspot in Boston. My favourite dishes are shakshuka, Chinese steamed eggs and clam chowder.For the user personas I need three: a tech recruiter, my professor John Alexis Guerra Gomez who is an expert in data visualisation and HCI, and a friend called Michael W. Can you write realistic personas and user stories for each of these?"

### README

- **Prompt:** Asked Claude to generate the README including author info, project objective, file structure, and build instructions.
- **How used:** Generated and reviewed for accuracy.

### Code structure and JS approach

- **How used:** Used as a reference for the overall architecture. I wrote the HTML, CSS, and JavaScript myself based on this guidance.
- **Prompt:** "I'm building a personal homepage for a web development class and I need help thinking through the JavaScript structure. The assignment requires ES6 modules with type=module in the script tag, so I need to use import and export. Please do not write any code - I just want you to explain the approach and structure so I can write it myself.
  The main feature I want to build is a polaroid photo collage. Each photo should look like a polaroid - white border, handwritten style caption below, slightly rotated at a random angle. There should be filter buttons at the top for All, Travel, Climbing and Cooking - when you click a filter button it should show only the photos in that category and hide the others. When you click a photo it should open a fullscreen lightbox showing the larger image and the caption, and you should be able to close it by clicking outside the image or pressing Escape.
  I want to keep the JavaScript as simple and readable as possible because this is a beginner class. I don't want to generate the photos dynamically from a data file - I want to write each photo directly in the HTML as an article tag so I can see them and edit them easily. The JavaScript should just add the interactivity on top of the existing HTML elements.
  Can you suggest a folder structure and explain in plain English how I should split the JavaScript across files using ES6 modules? What functions would I need, what would each one do, and how would the files talk to each other? Again please do not write any actual code - just explain the concepts and structure so I can implement it myself."

### Section content and descriptions

- **Prompt:** "I need help writing the text content for my personal homepage. I want it to feel fun and personality-forward - not like a CV or a job application. Here is all the personal information to work with:
  Background: Born in London, grew up in Hong Kong and Singapore, family now lives in Bath, currently in Boston doing MS CS at Northeastern.
  Interests: Rock climbing - I boulder at Rockspot in Boston, been doing it for about 2 years, working on V5s. Cooking - favourite dishes I've made are shakshuka, Chinese steamed eggs and clam chowder. Travel - recent trips to Colombia (Coffee Axis near Pereira), Morocco (Aït Benhaddou), Norway (Flåm fjord).
  Rugby: I'm a Bath Rugby fan, Finn Russell is my favourite player and I think he's the best fly half in the world.
  Professional: 4.5 years enterprise SaaS sales at Darktrace and Panopto before going back to do an MS in CS. I'm studying ML, distributed systems and deep learning.
  I need text for: the hero section headline and description, the about section on the homepage, the full about page opening paragraphs, the project descriptions for DanceMusicGPT, Otto PM, Distributed Kanban Board and Sales Intelligence Tool, and the fact cards in the about section. Please write everything in first person and make it sound like a real person wrote it, not a professional bio."

- **How used:** I provided the personal details, interests, and talking points for each section — travel destinations, climbing experience, cooking dishes, project descriptions, and career background. Claude helped shape these into polished copy for the hero, about, and project sections based on my input.

### ai.html — AI-generated page

- **Model:** Claude Sonnet 4
- **How used:** Content generated directly from this prompt. The page is clearly labelled as AI-generated with full disclosure.
- **Prompt:** "Write an engaging explainer on the science of bouldering grades — how the V-scale works, why grades feel inconsistent between gyms and outdoor crags, what makes a problem harder to grade, and why climbers obsess over them. Include a personal note from the perspective of someone who has been bouldering for two years at an indoor gym in Boston."

## License

MIT — see [LICENSE](LICENSE)
