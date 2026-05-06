#  E-Commerce

A streetwear e-commerce built with  HTML, CSS, and JavaScript — no frameworks, no dependencies.

In build

---

## 📁 Project Structure

```
/
├── index.html                  # Home page (slider, new arrivals, category sections)
├── top.html                    # TOP collection listing page
├── acessories.html             # Accessories page (in progress)
├── men.html                    # Men's category (in progress)
├── women.html                  # Women's category (in progress)
├── kids.html                   # Kids' category (in progress)
├── login.html                  # Login / Sign In page
│
├── whitebluetshit.html         # Product page — White With Blue Zip Hoodie
├── whitecemeterytshirt.html    # Product page — White Cemetery Edition
├── whitemiamitshirt.html       # Product page — White Miami Edition
├── commetshirt.html            # Product page — Comme Des Garçons Edition
│
├── style.css                   # Global stylesheet
├── script.js                   # Global JavaScript
│
└── images/                     # All image assets (not included in repo)
    ├── pngwing.com.png          # Brand logo
    ├── camisa11.png – camisa18.png  # Product images
    ├── top2.png – top6.png      # TOP collection images
    ├── i1.jpg – i5.jpg          # Hero slider images
    ├── photo1.jpg, photo2.jpg   # Category banner images
    ├── model1.jpg – model3.jpg  # Gender category models
    ├── instagram (1).png        # Footer social icon
    └── youtube.png              # Footer social icon
```

---

## ✨ Features

- **Image slider** on the homepage with auto-advance every 4 seconds
- **Slide-in sidebar menu** with dropdown sub-navigation
- **Scroll animations** — elements fade in as you scroll down
- **Product pages** with thumbnail gallery switcher (click to change main image)
- **Size selector** with out-of-stock states (crossed out buttons)
- **Accordion** for product details and materials
- **Filter dropdown** on the TOP collection page (Type + Color)
- **Login page** with a clean sign-in form
- **Hover effects** on product cards (image swap), category photos (zoom + darken), and nav links

---

## 🚧 Pages In Progress

| Page | Status |
|------|--------|
| `men.html` | 🔨 Empty — to be built |
| `women.html` | 🔨 Empty — to be built |
| `kids.html` | 🔨 Empty — to be built |
| `acessories.html` | 🔨 Empty — to be built |
| Login (functional) | 🔨 UI done, logic pending |

---

## 🗺️ Roadmap

- [ ] Complete `men.html`, `women.html`, `kids.html`, `acessories.html`
- [ ] Login authentication (backend or localStorage)
- [ ] Shopping cart functionality
- [ ] Checkout flow
- [ ] Mobile responsiveness improvements
- [ ] Add more products to the TOP collection page
- [ ] Connect product pages from the TOP listing

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, flexbox, transitions) |
| Logic | Vanilla JavaScript (ES6) |
| Fonts | Arial / Helvetica (system) |
| No build tools | ✅ Zero dependencies |

---

## 🚀 Running Locally

No setup needed. Just open `index.html` in any modern browser:

```bash
# Option 1 — open directly
open index.html

# Option 2 — use a local server (recommended to avoid CORS issues with images)
npx serve .
# or
python -m http.server 8000
```

Then visit `http://localhost:8000`.

> ⚠️ **Note:** The `images/` folder is required for the site to display correctly. Make sure all image assets are present before running.

---

## 📸 Image Assets

Images are not included in the repository. The following files are expected inside the `/images` folder:

- Logo: `pngwing.com.png`
- Product shots: `camisa11.png`, `camisa 12.png`, `camista13.png`, `camisteta14.png`, `camisa15.png` through `camisa18.png`
- TOP collection: `top2.png` through `top6.png`
- Hero slides: `i1.jpg` through `i5.jpg`
- Category banners: `photo1.jpg`, `photo2.jpg`
- Models: `model1.jpg`, `model2.jpg`, `model3.jpg`
- Icons: `126510-removebg-preview.png`, `png-clipart-computer-icons-user-login-gender-miscellaneous-desktop-wallpaper-thumbnail-removebg-preview.png`, `instagram (1).png`, `youtube.png`

---

## 📄 License

Private project. All rights reserved.
