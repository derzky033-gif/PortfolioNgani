# Derick M. Morales - Portfolio Website

Personal portfolio website with animations, EN/TL language toggle, resume preview, and contact form.

## Project Structure

```
derick-portfolio/
├── index.html        → Main page (structure / HTML)
├── css/
│   └── style.css     → Design, colors, animations (CSS)
├── js/
│   └── main.js       → Interactivity, languages, form (JavaScript)
├── assets/
│   ├── photo.jpg     → Profile photo
│   └── resume.pdf    → Resume (preview only, no auto-download)
└── README.md         → This guide
```

## Features

- Typing animation, floating background shapes, spinning photo ring
- Scroll reveal animations and animated skill bars
- English / Tagalog language toggle (EN | TL button sa navbar)
- Resume "Preview" button: bumubukas sa loob ng page, walang automatic download
- Contact form: magbubukas ang email app na may laman na mensahe
- Social links: Facebook, TikTok, LinkedIn, Instagram
- Responsive: gumagana sa phone, tablet, at desktop

---

## GitHub Upload: Step-by-Step

### Step 1: Gumawa ng GitHub account
1. Pumunta sa https://github.com
2. Mag-sign up kung wala ka pang account, o mag-log in.

### Step 2: Gumawa ng bagong repository
1. I-click ang **+** sa kanang itaas, piliin ang **New repository**.
2. **Repository name:** `portfolio` (o kahit anong pangalan na gusto mo, halimbawa `derick-portfolio`).
3. Piliin ang **Public** (kailangan ito para ma-host sa GitHub Pages nang libre).
4. Huwag lagyan ng check ang "Add a README file" (mayroon na tayo).
5. I-click ang **Create repository**.

### Step 3: I-upload ang mga files
**Option A: Sa browser (pinakamadali)**
1. Sa bagong repository page, i-click ang **uploading an existing file**.
2. I-drag at i-drop ang buong laman ng `derick-portfolio` folder:
   - `index.html`
   - `css` folder
   - `js` folder
   - `assets` folder
   - `README.md`

   > Tandaan: i-drag ang MISMONG mga file at folder, hindi ang parent folder. Panatilihin ang structure.
3. Sa ibaba, i-type ang commit message: `Initial commit - portfolio website`
4. I-click ang **Commit changes**.

**Option B: Gamit ang Git (terminal)**
```bash
cd derick-portfolio
git init
git add .
git commit -m "Initial commit - portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```
Palitan ang `YOUR-USERNAME` ng username mo sa GitHub.

### Step 4: I-publish gamit ang GitHub Pages (para may live link ka)
1. Sa repository, pumunta sa **Settings** (tab sa itaas).
2. Sa kaliwa, i-click ang **Pages**.
3. Sa **Build and deployment**, piliin:
   - **Source:** Deploy from a branch
   - **Branch:** `main` at `/ (root)`
4. I-click ang **Save**.
5. Maghintay ng 1 to 3 minuto. Makikita mo ang link sa itaas ng page, halimbawa:
   `https://YOUR-USERNAME.github.io/portfolio/`

### Step 5: Pag-update ng website
Kapag may binago ka sa files:
1. Sa repository, i-click ang file (halimbawa `index.html`), tapos i-click ang ✏️ **Edit**, o i-upload ulit ang bagong file.
2. I-click ang **Commit changes**.
3. Hintayin ng ilang minuto, tapos i-refresh ang link.

---

## Mga Dapat Tandaan

- **Email form:** Gumagana ito gamit ang email app ng device mo (mailto). Kailangan may naka-set na email app (Gmail app, Outlook, atbp.) sa phone o computer. Kung gusto mo ng form na direktang nagpapadala sa email nang hindi binubuksan ang email app, puwede kang gumamit ng serbisyo tulad ng FormSubmit.co; sabihan mo lang ako at i-aayos ko.
- **Resume:** Walang download button. Preview lang ang nakalagay, para hindi basta ma-download ang file.
- **Photo at resume:** Kung papalitan mo ang litrato, palitan lang ang `assets/photo.jpg` gamit ang bagong file na may parehong pangalan.
- **Huwag i-upload ang sensitibong impormasyon** na hindi mo gustong makita ng publiko, kasama na ang buong address at petsa ng kapanganakan kung ayaw mo itong ilagay online.
