# 💖 Be My Valentine (One-Page Version)

A romantic, interactive one-page Valentine web project with playful UI, animations, and music — all built in a **single HTML file**.

---

## 🌸 Overview

This project is designed as a **single-page experience** that smoothly transitions from a fun intro to a heartfelt Valentine message.

**Flow:**
1. User opens the page
2. Intro screen appears with a love question
3. Heartbeat music starts after first interaction
4. “No” button playfully avoids clicks 😄
5. User clicks “Yes”
6. Intro hides, main Valentine content appears
7. Background music starts
8. Valentine envelopes & messages are shown

All of this happens **inside one HTML page**.

---

## ✨ Features

### 💌 Intro Section
- Love question (“Do you want to open something from my heart?”)
- Yes / No buttons
- “No” button moves slightly and shakes
- Text changes after multiple attempts (“Nice try 😏”)
- Heartbeat music loops on intro

### 💝 Main Valentine Section
- Smooth transition from intro
- Valentine message / envelope content
- Background romantic music
- Clean UI with soft colors

### 🔊 Audio Handling
- Browser-safe (no autoplay errors)
- Music starts only after user interaction
- Intro heartbeat stops before main music starts

---

## 🗂 File Structure
BE-MY-VALENTINE/
│
├── index.html # One-page project (HTML + CSS + JS)
│
├── assets/
│ ├── audio/
│ │ ├── heart.mp3 # Heartbeat sound (intro)
│ │ └── bg_music.mp3# Background music (main section)
│ │
│ └── images/
│ ├── 1.jpeg
│ ├── 2.jpeg
│ └── ...
│
└── README.md

---

## 🚀 How to Run

### Recommended (VS Code)
1. Open the project folder in **VS Code**
2. Install the **Live Server** extension
3. Right-click `index.html`
4. Click **Open with Live Server**

### Alternative
- Open `index.html` directly in a browser  
  *(Audio works best with Live Server)*

---

## 🧠 Important Notes

- Audio autoplay is restricted by browsers  
- Music starts only after user interaction (click/tap)
- All logic is handled inside one page
- No external libraries used

---

## 🛠 Technologies Used
- HTML5
- CSS3 (animations & layout)
- JavaScript (DOM manipulation & audio control)

---

## ❤️ Author

Built with creativity, patience, and love 🤍  
A perfect mini front-end project for Valentine’s Day.

---

✨ *Enjoy spreading love with code!* ✨