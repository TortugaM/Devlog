import "./App.css";
import { useEffect, useState } from "react";
import headshot from "./assets/professional headshot.jpg";
import LogCard from "./Components/LogCard.jsx";
import Career from "./Components/Career.jsx";
import Tech from "./Components/Tech.jsx";
import BusinessLeadership from "./Components/Business&Leadership.jsx";
import Wellness from "./Components/Wellness.jsx";
import Resume from "./Components/Resume.jsx";
import PowerBi from "./Components/PowerBi.jsx";
import { Github, Linkedin, Star, Smile, Moon, Sun, Hand, X, PenSquare, Save } from "lucide-react";

function App() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch (e) {
      return false;
    }
  });

  const [currentView, setCurrentView] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [newEntryTitle, setNewEntryTitle] = useState("");
  const [newEntryContent, setNewEntryContent] = useState("");
  const [logCards, setLogCards] = useState(() => {
    // Load from localStorage or use defaults
    try {
      const saved = localStorage.getItem("devLogEntries");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Error loading log entries:", e);
    }
    // Default entries with more personal touch
    return [
      {
        id: 1,
        title: "Starting My Journey at i.c. Stars",
        date: "2025-07-09",
        content:
          "Today was my first day at i.c. Stars and honestly, I'm both excited and a bit nervous. The program looks intense but I know it's going to push me to grow. Can't wait to see where this takes me!",
      },
      {
        id: 2,
        title: "React is Actually Pretty Cool",
        date: "2025-20-09",
        content:
          "Spent the day diving into DAX formulas. At first it seemed complicated, but once it clicked, I realized how powerful this is. Still wrapping my head around DAX, but I'm getting there!",
      },
      {
        id: 3,
        title: "Small Wins Matter",
        date: "2025-30-09",
        content:
          "Got my first component working without errors today. It's a simple card component, but seeing it render exactly how I wanted felt amazing. These small victories keep me motivated to keep learning.",
      },
    ];
  });

  useEffect(() => {
    try {
      if (dark) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      }
    } catch (e) {
      // ignore storage errors
    }
  }, [dark]);

  function toggleTheme() {
    setDark((d) => !d);
  }

  function changeView(view) {
    setCurrentView(view);
    setSidebarOpen(false); // Close sidebar on mobile after navigation
  }

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  function handleAddEntry() {
    if (!newEntryTitle.trim() || !newEntryContent.trim()) {
      alert("Please fill in both title and content!");
      return;
    }
    
    const newCard = {
      id: Date.now(), // Use timestamp for unique ID
      title: newEntryTitle,
      date: new Date().toISOString().split("T")[0],
      content: newEntryContent,
    };
    
    const updatedCards = [newCard, ...logCards];
    setLogCards(updatedCards);
    
    // Save to localStorage
    try {
      localStorage.setItem("devLogEntries", JSON.stringify(updatedCards));
    } catch (e) {
      console.error("Error saving log entries:", e);
    }
    
    setNewEntryTitle("");
    setNewEntryContent("");
    setShowEntryForm(false);
  }

  function toggleEntryForm() {
    setShowEntryForm(!showEntryForm);
    if (showEntryForm) {
      setNewEntryTitle("");
      setNewEntryContent("");
    }
  }

  function showRandomJoke() {
    const techJokes = [
      "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
      "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
      "Why do Java developers wear glasses? Because they don't C#! 👓",
      "What's a programmer's favorite hangout place? The Foo Bar! 🍺",
      "Why did the programmer quit his job? Because he didn't get arrays! 📊",
      "What do you call a programmer from Finland? Nerdic! 🇫🇮",
      "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25! 🎃🎄",
      "What's the object-oriented way to become wealthy? Inheritance! 💰",
      "Why did the developer go broke? Because he used up all his cache! 💸",
      "What do you call 8 hobbits? A hobbyte! 🧙‍♂️",
      "Why don't programmers like nature? It has too many bugs! 🌳",
      "What's a programmer's favorite snack? Microchips! 🍟",
      "Why did the database administrator leave his wife? She had one-to-many relationships! 💔",
      "What do you get when you cross a computer and a lifeguard? A screensaver! 🏊",
      "Why was the JavaScript developer sad? Because he didn't Node how to Express himself! 😢"
    ];
    
    const randomJoke = techJokes[Math.floor(Math.random() * techJokes.length)];
    alert(randomJoke);
  }

  return (
    <div className="app-container">
      {/* Mobile Menu Toggle */}
      <button className="mobile-menu-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h1 className="sidebar-name">Charlie Mejia</h1>
          <p className="sidebar-title">Developer & Learner</p>
        </div>

        <nav className="sidebar-nav">
          <ul>
            <li>
              <a
                onClick={() => changeView("home")}
                className={currentView === "home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => changeView("career")}
                className={currentView === "career" ? "active" : ""}
              >
                Career
              </a>
            </li>
            <li>
              <a
                onClick={() => changeView("tech")}
                className={currentView === "tech" ? "active" : ""}
              >
                Tech Skills
              </a>
            </li>
            <li>
              <a
                onClick={() => changeView("business")}
                className={currentView === "business" ? "active" : ""}
              >
                Business & Leadership
              </a>
            </li>
            <li>
              <a
                onClick={() => changeView("wellness")}
                className={currentView === "wellness" ? "active" : ""}
              >
                Wellness
              </a>
            </li>
            <li>
              <a
                onClick={() => changeView("resume")}
                className={currentView === "resume" ? "active" : ""}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                onClick={() => changeView("powerbi")}
                className={currentView === "powerbi" ? "active" : ""}
              >
                PowerBI Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="social-links">
            <a
              href="https://github.com/TortugaM/Devlog"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.icstars.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="i.c. Stars"
            >
              <Star size={20} />
            </a>
            <button
              onClick={showRandomJoke}
              className="social-link"
              title="Tech Joke"
            >
              <Smile size={20} />
            </button>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
            <span style={{ marginLeft: '8px' }}>
              {dark ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Home View */}
        {currentView === "home" && (
          <>
            <div className="hero">
              <h1 className="hero-title">
                Hey! I'm Charlie <Hand className="inline-icon" size={40} style={{ verticalAlign: 'middle', marginLeft: '0.5rem', marginBottom: '0.5rem' }} />
              </h1>
              <p className="hero-subtitle">
                This is my personal devlog where I'm documenting everything I'm learning 
                at i.c. Stars. It's a mix of wins, struggles, random thoughts, and 
                everything in between. Feel free to look around!
              </p>
              <button className="hero-cta" onClick={toggleEntryForm}>
                {showEntryForm ? (
                  <>
                    <X size={20} style={{ marginRight: '8px' }} /> Never mind
                  </>
                ) : (
                  <>
                    <PenSquare size={20} style={{ marginRight: '8px' }} /> Write a new entry
                  </>
                )}
              </button>
            </div>

            {/* Add Entry Form */}
            {showEntryForm && (
              <div className="card mb-xl">
                <h3 className="card-title mb-md">What's on your mind?</h3>
                <div className="form-group mb-md">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="What did you work on today?"
                    value={newEntryTitle}
                    onChange={(e) => setNewEntryTitle(e.target.value)}
                  />
                </div>
                <div className="form-group mb-md">
                  <label className="form-label">Your thoughts</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Share what you learned, what clicked, what confused you, or just how you're feeling about your progress..."
                    rows="6"
                    value={newEntryContent}
                    onChange={(e) => setNewEntryContent(e.target.value)}
                  ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleAddEntry}>
                  <Save size={18} style={{ marginRight: '8px' }} /> Save this entry
                </button>
              </div>
            )}

            {/* About Me Section */}
            <div className="section">
              <h2 className="section-title">A bit about me</h2>
              <div className="about-section">
                <img 
                  src={headshot} 
                  alt="Charlie Mejia" 
                  className="about-image"
                />
                <div className="about-content">
                  <p className="mb-md">
                    So here's the deal - I'm currently wrapping up my time at i.c. Stars, 
                    where I've been learning everything from tech to business analysis to leadership. 
                    It's been quite the ride!
                  </p>
                  <p className="mb-md">
                    Before this, I spent years as an account manager at Allstate, plus some time 
                    in other industries. All that experience taught me how to solve problems and 
                    work with people - skills that translate surprisingly well to tech.
                  </p>
                  <p>
                    When I'm not coding, you'll probably find me playing sports (I'm pretty competitive), 
                    or thinking about my next adventure. This devlog is basically my way of keeping track 
                    of everything I'm learning and figuring out along the way.
                  </p>
                </div>
              </div>
            </div>

            <div className="section">
              <h2 className="section-title">Recent entries</h2>
              {logCards.map((card) => (
                <LogCard key={card.id} title={card.title} date={card.date}>
                  {card.content}
                </LogCard>
              ))}
            </div>
          </>
        )}

        {/* Career View */}
        {currentView === "career" && <Career />}

        {/* Tech View */}
        {currentView === "tech" && <Tech />}

        {/* Business & Leadership View */}
        {currentView === "business" && <BusinessLeadership />}

        {/* Wellness View */}
        {currentView === "wellness" && <Wellness />}

        {/* Resume View */}
        {currentView === "resume" && <Resume />}

        {/* PowerBI View */}
        {currentView === "powerbi" && <PowerBi />}
      </main>
    </div>
  );
}

export default App;
