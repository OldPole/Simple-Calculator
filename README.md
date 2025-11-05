# Calculator

A simple calculator developed in pure JavaScript.

## Main Task Link

https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f

## Project Links

- `Project Demo` https://oldpole.github.io/Simple-Calculator/
- `Repository` https://github.com/OldPole/Simple-Calculator
- `Developer` https://github.com/OldPole

## How to run the app

```bash
# Install
npm i                    # install dependencies
```

```bash
# General
npm run start            # run app in the development mode
npm run build            # build project for production
npm run deploy           # deploy app on Github Pages
```

## Project File Structure

### `husky/`

**Purpose:** Git hooks for automatic code checking  
**File Type:** _Pre-commit_ hook configuration file

---

### `dist/`

**Purpose:** Production build of the application  
**File Type:** Optimized _HTML_ and _JS_ file

---

### `node_modules/`

**Purpose:** External project dependencies  
**File Type:** Installed _npm_ packages

---

### `public/`

**Purpose:** Static template files  
**File Type:** _HTML_

**Main File:**

- `index.html` — main HTML template of the app

---

### `src/`

**Purpose:** Source code of the application

---

### `components/` — components of the application

#### Example: `App/` — root component of the app

- `App.js` — component logic
- `App.module.css` — component styles
- `index.js` — re-export of the component for shorter imports

#### Other components (similar structure)

- `Button/` — calculator button component
- `ButtonPanel/` — calculator button panel
- `Calculator/` — main calculator component
- `ChooseTheme/` — theme selection component
- `ChooseThemeItem/` — theme item element
- `Display/` — calculator display

---

### `services/`

**Purpose:** Service functions

- `calculate.js` — mathematical calculations
- `changeCssVars.js` — CSS variable switching for themes

---

### `styles/`

**Purpose:** Global styles of the application

- `index.css` — main CSS variables and base styles

---

### `utils/`

**Purpose:** Utility functions

- `localStorage.js` — local storage management

---

### `index.js`

**Purpose:** Application entry point

- `index.js` — main entry file of the app

---

## ⚙️ Configuration Files

| File                | Purpose                     |
| ------------------- | --------------------------- |
| `.gitignore`        | Files ignored by Git        |
| `.prettierrc`       | Prettier configuration      |
| `eslint.config.mjs` | ESLint configuration        |
| `package.json`      | Project dependencies        |
| `package-lock.json` | Locked dependency versions  |
| `webpack.config.js` | Webpack build configuration |
