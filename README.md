# 🤝 Keen Keeper

> **Your personal shelf of meaningful connections.**  
> Keen Keeper helps you stay intentional about the friendships that matter most — track when you last reached out, set contact goals, and log every interaction in one clean dashboard.

---

## 🚀 Live Demo

🔗 [keen-keeper.vercel.app](https://keen-keeper-nine-brown.vercel.app/) <!-- Replace with your actual link -->

---

## 🛠️ Technologies Used

| Technology          | Purpose                     |
| ------------------- | --------------------------- |
| **Next.js 15**      | Framework & App Router      |
| **React 19**        | UI Components               |
| **Tailwind CSS**    | Styling & Responsive Design |
| **DaisyUI**         | Component Library           |
| **Recharts**        | Friendship Analytics Chart  |
| **React Hot Toast** | Toast Notifications         |
| **React Icons**     | Icons throughout the UI     |
| **localStorage**    | Persisting interaction logs |

---

## ✨ Key Features

### 1. 📋 Friend Tracking Dashboard

View all your friends at a glance with status-colored cards showing days since last contact, tags, and relationship health. Friends are marked as **On Track**, **Almost Due**, or **Overdue** so you always know who needs attention.

### 2. ⚡ One-Click Check-In Logging

From any friend's detail page, log a **Call**, **Text**, or **Video** interaction in one click. Each check-in is instantly saved and shows up on the Timeline — with a toast notification confirming the log.

### 3. 📜 Filterable Interaction Timeline

The Timeline page shows your full history of interactions sorted by most recent. Filter by interaction type (Call, Text, Video) to quickly find what you're looking for.

---

## 📁 Project Structure

```
keen-keeper/
├── app/
│   ├── page.js               # Home page
│   ├── friends/[id]/         # Friend detail page
│   ├── timeline/             # Timeline page
│   ├── stats/                # Analytics page
│   └── not-found.jsx         # 404 page
├── components/
│   ├── shared/Navbar/        # Navbar with active link highlight
│   ├── Hero/                 # Banner + stats bar
│   ├── FriendsCard/          # Friend card component
│   ├── ActionBtn/            # Check-in buttons
│   ├── StatsBar/             # Summary stat cards
│   └── Footer/               # Footer
└── public/
    └── friends.json          # Friend data
```

## 👨‍💻 Author

**Prachir**  
MIS Student | Frontend Developer  
🔗 [GitHub](https://github.com/KAprachir) · [LinkedIn](https://linkedin.com/in/your-profile)

---

## 📄 License

This project was built as an academic assignment. Feel free to use it as a reference.
