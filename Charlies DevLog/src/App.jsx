import "./App.css";
import { useEffect, useState } from "react";
import logo from "./assets/HamsterPic.jpg";
// import LogCard from "src\Components\LogCard.jsx";
import LogCard from "./Components/LogCard.jsx";

function App() {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch (e) {
      return false;
    }
  });

  const [count, setCount] = useState(0);

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
      // ignore storage errors (e.g. private mode)
    }
  }, [dark]);

  function toggleTheme() {
    setDark((d) => !d);
  }

  function handleClick() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-brand">
          <h1 className="site-title">Charlie Mejia</h1>
          <p className="site-tag">
            Developer log — experiments, notes, and code
          </p>
        </div>
        <div className="header-actions">
          <nav className="navbar" aria-label="Primary">
            <ul>
              <li>
                <a href="https://www.icstars.org/" title="i.c. Stars website">
                  IC STARS
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" title="Visit my linkedIn">
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
          <button
            id="theme-toggle"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-pressed={dark}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <main id="main-content" className="container" role="main">
        <aside className="sidebar" aria-labelledby="about-heading">
          <img
            src={logo}
            alt="Hamster on a swing"
            width="120 "
            height="120"
            className="profile-img"
          />
          <section>
            <h2 id="about-heading">About Me</h2>
            <p>
              Hi, I will finish IC Stars soon. This devlog captures what I learn
              day-to-day.
            </p>
          </section>
        </aside>

        <section className="main-content">
          <h2 id="main-title">My Devlog</h2>
          
          <LogCard title="First Day at i.c. Stars" date="2025-09-10">
            Hey all, I just started learning at i.c. Stars and know this will
            be a great experience. I can't wait to see my end result!
          </LogCard>

          <LogCard title="Learning React Components" date="2025-12-10">
            Today I learned how to create reusable React components. I built a LogCard 
            component that accepts props like title, children, and date. It's amazing 
            how components make code more organized and reusable!
          </LogCard>

          <LogCard title="Working with Props" date="2025-12-10">
            Props are a powerful way to pass data between components. My LogCard 
            component uses destructuring to extract title, children, and date props, 
            making the code clean and easy to read.
          </LogCard>

          <article id="dev-log">
            <button
              className="myButton"
              onClick={handleClick}
              aria-pressed={false}
            >
              Click Me{count > 0 ? ` (${count})` : ""}
            </button>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container small">
          <p>
            © <span id="year">2025</span> Charlie Mejia — Built for learning and
            sharing.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  const logs = await prisma.log.findMany();
  console.log(logs);
}
main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());v 
