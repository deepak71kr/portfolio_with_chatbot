import avatarUrl from "./assets/deepak_photo.jpg";
import {
  achievements,
  education,
  experience,
  profile,
  projects,
  skillIcons,
  skills,
} from "./data";

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (name) {
    case "github":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M12 2C6.477 2 2 6.635 2 12.35c0 4.57 2.865 8.448 6.84 9.815.5.098.684-.224.684-.497 0-.246-.009-.9-.014-1.767-2.782.622-3.368-1.387-3.368-1.387-.455-1.196-1.11-1.515-1.11-1.515-.907-.646.069-.633.069-.633 1.003.073 1.53 1.065 1.53 1.065.892 1.578 2.341 1.122 2.912.857.092-.668.35-1.122.636-1.38-2.22-.263-4.555-1.15-4.555-5.114 0-1.129.39-2.053 1.03-2.776-.103-.263-.447-1.322.098-2.754 0 0 .84-.279 2.75 1.06A9.24 9.24 0 0 1 12 7.64c.84.004 1.685.118 2.474.345 1.908-1.339 2.747-1.06 2.747-1.06.547 1.432.203 2.491.1 2.754.642.723 1.028 1.647 1.028 2.776 0 3.974-2.339 4.848-4.566 5.105.36.32.681.95.681 1.916 0 1.383-.012 2.498-.012 2.838 0 .276.18.6.69.497 3.97-1.37 6.832-5.245 6.832-9.81C22 6.635 17.523 2 12 2Z"
            fill="currentColor"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M6.2 6.7a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4ZM4.4 21.7V9h3.6v12.7H4.4Zm6.2 0V9h3.45v1.73h.05c.48-.91 1.66-1.87 3.41-1.87 3.64 0 4.31 2.49 4.31 5.73V21.7h-3.6v-5.95c0-1.42-.03-3.24-1.92-3.24-1.93 0-2.23 1.57-2.23 3.14v6.05h-3.47Z"
            fill="currentColor"
          />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M4 6.8h16c.66 0 1.2.54 1.2 1.2v9.6c0 .66-.54 1.2-1.2 1.2H4c-.66 0-1.2-.54-1.2-1.2V8c0-.66.54-1.2 1.2-1.2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="m4.3 8.2 7.2 6.1c.3.26.74.26 1.04 0l7.2-6.1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M8.3 3.9 6.6 5.6c-.6.6-.84 1.48-.6 2.3 1.1 3.83 4.1 6.83 7.93 7.93.82.24 1.7 0 2.3-.6l1.7-1.7c.5-.5.5-1.3 0-1.8l-2-2c-.4-.4-1.1-.5-1.6-.2l-1.1.65a1.6 1.6 0 0 1-1.7-.17l-2.4-2.4c-.47-.47-.54-1.2-.17-1.7l.65-1.1c.3-.5.2-1.2-.2-1.6l-2-2c-.5-.5-1.3-.5-1.8 0Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pin":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
    case "user":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M12 12.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M4.5 21c1.3-3.3 4.1-5.3 7.5-5.3s6.2 2 7.5 5.3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "code":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="m9 18-6-6 6-6M15 6l6 6-6 6M13 4l-2 16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M9 6.5V5.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4.2 8.3h15.6c.66 0 1.2.54 1.2 1.2v8.3c0 .66-.54 1.2-1.2 1.2H4.2c-.66 0-1.2-.54-1.2-1.2V9.5c0-.66.54-1.2 1.2-1.2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M3 12.2c2.8 1.8 5.9 2.7 9 2.7s6.2-.9 9-2.7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "cap":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M12 4 2.8 8.7 12 13.4l9.2-4.7L12 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M6.3 10.7v4.9c0 .6.34 1.14.88 1.38 1.44.63 3.05.97 4.82.97 1.77 0 3.38-.34 4.82-.97.54-.24.88-.78.88-1.38v-4.9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "trophy":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M8 4.5h8v3.2c0 2.5-1.9 4.6-4 4.6s-4-2.1-4-4.6V4.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 21h5M10.5 16.2h3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M16 6.5h2.3c.94 0 1.7.76 1.7 1.7 0 1.88-1.52 3.4-3.4 3.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M8 6.5H5.7c-.94 0-1.7.76-1.7 1.7 0 1.88 1.52 3.4 3.4 3.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg {...common} aria-hidden="true">
          <path
            d="M12 2.6 13.4 7l4.4 1.4-4.4 1.4L12 14.2l-1.4-4.4L6.2 8.4 10.6 7 12 2.6Z"
            fill="currentColor"
          />
          <path
            d="M18.8 12.2 19.6 14.7 22 15.5l-2.4.8-.8 2.5-.8-2.5-2.4-.8 2.4-.8.8-2.5Z"
            fill="currentColor"
            opacity=".9"
          />
        </svg>
      );
    default:
      return null;
  }
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function SkillPill({ label }) {
  const iconUrl = skillIcons[label];
  const fallback = label
    .replaceAll(".", "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  return (
    <span className="skill-pill" title={label}>
      {iconUrl ? (
        <img className="skill-icon" src={iconUrl} alt={`${label} icon`} loading="lazy" />
      ) : (
        <span className="skill-fallback" aria-hidden="true">
          {fallback || "•"}
        </span>
      )}
      <span className="skill-label">{label}</span>
    </span>
  );
}

function highlightText(text) {
  const raw = String(text);
  const pattern =
    /(OAuth 2\.0|JWT|MERN|OpenCV|Socket\.io|GitHub Actions|Docker|React\.js|Node\.js|MongoDB|MySQL|REST APIs|\b\d+(?:\.\d+)?(?:%|\+)?\b)/g;

  const out = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(raw)) !== null) {
    const start = match.index;
    const end = start + match[0].length;

    if (start > lastIndex) out.push(raw.slice(lastIndex, start));
    out.push(
      <span className="hl" key={`${match[0]}-${start}`}>
        {match[0]}
      </span>
    );
    lastIndex = end;
  }

  if (lastIndex < raw.length) out.push(raw.slice(lastIndex));
  return out;
}

function ProjectLinks({ links }) {
  const github = links?.github?.trim();
  const live = links?.live?.trim();

  if (!github && !live) return null;

  return (
    <div className="project-links">
      {github ? (
        <a className="btn btn-ghost" href={github} target="_blank" rel="noreferrer">
          <Icon name="github" /> <span>GitHub</span>
        </a>
      ) : null}
      {live ? (
        <a className="btn btn-primary" href={live} target="_blank" rel="noreferrer">
          <span>Live Demo</span>
        </a>
      ) : null}
    </div>
  );
}

function App() {
  return (
    <main className="page">
      <header className="header">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            DV
          </span>
          <span className="brand-name">Deep Voyager</span>
        </a>
        <nav>
          <a href="#about">
            <Icon name="user" /> <span>About</span>
          </a>
          <a href="#experience">
            <Icon name="briefcase" /> <span>Experience</span>
          </a>
          <a href="#projects">
            <Icon name="code" /> <span>Projects</span>
          </a>
          <a href="#contact">
            <Icon name="mail" /> <span>Contact</span>
          </a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Hi, I'm</p>
            <h1>{profile.name}</h1>
            <p className="aka">aka Deep Voyager</p>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-copy">{highlightText(profile.summary)}</p>

            <div className="hero-cta">
              <a className="btn btn-primary" href="/Deepak_Kumar_Resume.pdf" download>
                <span>Download Resume</span>
              </a>
            </div>

            <div className="hero-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="github" /> <span>GitHub</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" /> <span>LinkedIn</span>
              </a>
              {profile.leetcode ? (
                <a href={profile.leetcode} target="_blank" rel="noreferrer">
                  <Icon name="code" /> <span>LeetCode</span>
                </a>
              ) : null}
              <a href={`mailto:${profile.email}`}>
                <Icon name="mail" /> <span>Email</span>
              </a>
            </div>
          </div>

          <div className="hero-avatar">
            <img src={avatarUrl} alt="Deepak profile avatar" width="240" height="240" />
          </div>
        </div>
      </section>

      <Section
        id="about"
        title={
          <span className="section-title">
            <Icon name="user" /> About Me
          </span>
        }
      >
        <div className="grid two-column">
          <div className="card">
            <h3 className="card-title">
              <Icon name="cap" /> {education.school}
            </h3>
            <p>{education.degree}</p>
            <p>{education.score}</p>
            <p>{education.date}</p>
          </div>
          <div className="card">
            <h3 className="card-title">
              <Icon name="code" /> Relevant Coursework
            </h3>
            <ul>
              {education.coursework.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="experience"
        title={
          <span className="section-title">
            <Icon name="briefcase" /> Experience
          </span>
        }
      >
        {experience.map((job) => (
          <article className="card" key={`${job.role}-${job.company}`}>
            <div className="job-heading">
              <div>
                <h3>{job.role}</h3>
                <p>{job.company}</p>
              </div>
              <p className="muted">
                {job.period} | {job.location}
              </p>
            </div>
            <ul>
              {job.points.map((point, idx) => (
                <li key={idx}>{highlightText(point)}</li>
              ))}
            </ul>
          </article>
        ))}
      </Section>

      <Section
        id="projects"
        title={
          <span className="section-title">
            <Icon name="code" /> Projects
          </span>
        }
      >
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.name}>
              <div className="project-head">
                <div>
                  <h3>{project.name}</h3>
                  <p className="muted">{project.stack}</p>
                </div>
                <ProjectLinks links={project.links} />
              </div>
              <p>{project.description}</p>
              <ul>
                {project.highlights.map((item, idx) => (
                  <li key={idx}>{highlightText(item)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        title={
          <span className="section-title">
            Technologies
          </span>
        }
      >
        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillPill key={skill} label={skill} />
          ))}
        </div>
      </Section>

      <Section
        id="achievements"
        title={
          <span className="section-title">
            <Icon name="trophy" /> Achievements
          </span>
        }
      >
        <div className="card">
          <ul>
            {achievements.map((achievement, idx) => (
              <li key={idx}>{highlightText(achievement)}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        id="contact"
        title={
          <span className="section-title">
            <Icon name="mail" /> Let's Connect
          </span>
        }
      >
        <div className="contact">
          <p>
            Interested in backend engineering, product development, or research-driven
            software work? Feel free to reach out.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Icon name="mail" /> <span>{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone}`}>
              <Icon name="phone" /> <span>{profile.phone}</span>
            </a>
            <span className="contact-item">
              <Icon name="pin" /> <span>{profile.location}</span>
            </span>
          </div>
        </div>
      </Section>
    </main>
  );
}

export default App;
