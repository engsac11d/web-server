# Notes App Pro 📝

Notes App Pro is a command-line notes management application built with Node.js.  
It allows users to create, read, search, and organize notes directly from the terminal.

---

## 🚀 Features

- Add notes
- Remove notes
- Read saved notes
- Search notes by keyword
- Organize notes using categories
- Colorful terminal output
- JSON file storage

---

## 🛠 Technologies Used

- Node.js
- JavaScript
- yargs
- chalk
- File System (fs)

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/notes-app-pro.git
```

Move into the project directory:

```bash
cd notes-app-pro
```

Install dependencies:

```bash
npm install
```

---

## ▶ Usage

### Add a Note

```bash
node app.js add --title="Study" --body="Learn Node.js modules"
```

### List Notes

```bash
node app.js list
```

### Read a Note

```bash
node app.js read --title="Study"
```

### Remove a Note

```bash
node app.js remove --title="Study"
```

### Search Notes

```bash
node app.js search --keyword="Node"
```

---

## 📁 Project Structure

```txt
notes-app-pro/
│
├── app.js
├── notes.js
├── notes.json
├── package.json
└── node_modules/
```

---

## 🔥 Future Improvements

- Edit existing notes
- Better filtering system
- MongoDB integration
- User authentication
- Web application version

---

## 👨‍💻 Author

Built with Node.js by Your Name.
