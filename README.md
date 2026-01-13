# 💻 VS Code–Themed Portfolio — Nachiketa NR

A **VS Code–inspired interactive portfolio** built with **React, Redux, and Tailwind CSS**, designed to showcase projects, certificates, and resume previews in a clean developer-centric UI.

This portfolio is not just a static site — it behaves like a code editor with tabs, previews, and dynamic interactions.

---

## 🚀 Live Features

* 🧠 **VS Code–style tab system**
* 🤖 **Animated Robot Assistant**

  * Hides automatically when previews open
  * Reappears when switching tabs
* 📂 **Project, Certificate & Resume Previews**

  * Embedded iframe previews
  * Scroll-to-preview alerts for better UX
* 🧩 **Redux-powered state management**
* 🎨 **Dark editor theme with Tailwind CSS**
* 📱 **Responsive & scrollable tab layout**

---

## 🧑‍💻 Tech Stack

**Frontend**

* React.js
* Redux Toolkit
* Tailwind CSS

**State Management**

* Redux (Tabs & Preview handling)

**UI / UX**

* VS Code–inspired editor layout
* Animated transitions
* Embedded live previews

---
## 🧭 Tabs Available

| Tab               | Description                       |
| ----------------- | --------------------------------- |
| `index.html`      | Intro & personal branding         |
| `about.html`      | Skills, role, and tech stack      |
| `projects.js`     | Live project previews             |
| `certificates.js` | Google Drive certificate previews |
| `resume.js`       | Embedded resume PDF               |
| `contact.js`      | Contact & social links            |

---

## 🔍 Preview System (Key Feature)

Each preview:

* Opens inside the same page
* Automatically hides the robot animation
* Uses Redux to control visibility and URL
* Scrolls user attention to preview section

Supported previews:

* 🌐 Live Projects
* 🎖️ Certificates (Google Drive)
* 📄 Resume (PDF)

---

## 🤖 Robot Interaction Logic

* **Hidden** when:

  * Project preview opens
  * Certificate preview opens
  * Resume preview opens
* **Shown again** when:

  * Switching tabs

This keeps the focus on the preview content.

---

## 🧠 Redux Slices Used

### `tabSlice`

* Manages active editor tab

### `previewSlice`

* Controls:

  * Project preview visibility
  * Certificate preview visibility
  * Resume preview visibility
  * Preview URLs

---

## 📸 UI Inspiration

* Visual Studio Code
* Developer-first interfaces
* Code-as-content presentation

---

## 📬 Contact

* **Email:** `nrnachi34@gmail.com`
* **GitHub:** [github.com/Nachi12](https://github.com/Nachi12)
* **LinkedIn:** linkedin.com/in/nachiketa
* **Behance:** [https://www.behance.net/nachiappu](https://www.behance.net/nachiappu)

---

## 📌 Future Enhancements

* Syntax highlighting per tab
* File tree explorer
* Terminal-style command input
* Mobile-first optimizations
* Dark/light theme toggle

---

## ⭐ Why This Portfolio Stands Out

> This portfolio doesn’t *describe* development skills —
> **it demonstrates them through interaction.**
