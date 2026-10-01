import { useEffect, useState } from "react";
import robotLogo from "./assets/robot-logo.png";
import "./App.css";

/* =========================================================
   DEFAULT DATA
========================================================= */

const DEFAULT_DATA = {
  robotics: {
    courses: [
      {
        name: "Robo Champ",
        price: "₹9,999",
        tags: ["Robotics", "Sensors", "Motors"],
        desc: "Build robots and learn robotics through practical school projects.",
        learn: [
          "Robotics fundamentals",
          "Sensors and motors",
          "Robot assembly",
          "Obstacle avoiding robots",
          "Practical robotics projects",
        ],
      },
      {
        name: "IoT",
        price: "₹9,999",
        tags: ["IoT", "Sensors", "Automation"],
        desc: "Learn smart devices, sensors, automation and connected systems.",
        learn: [
          "IoT fundamentals",
          "Sensors",
          "Smart devices",
          "Automation",
          "IoT projects",
        ],
      },
      {
        name: "AI",
        price: "₹4,999",
        tags: ["AI", "Machine Learning"],
        desc: "Explore Artificial Intelligence through simple and engaging activities.",
        learn: [
          "AI fundamentals",
          "Machine learning basics",
          "AI activities",
          "AI applications",
          "Mini AI projects",
        ],
      },
      {
        name: "App Developer",
        price: "₹4,999",
        tags: ["Apps", "UI", "Logic"],
        desc: "Create simple applications and understand app development concepts.",
        learn: [
          "App development",
          "UI concepts",
          "App logic",
          "Mini applications",
        ],
      },
      {
        name: "Game Developer",
        price: "₹4,999",
        tags: ["Games", "Creative"],
        desc: "Learn game logic, characters, interactions and creative game building.",
        learn: [
          "Game development basics",
          "Game logic",
          "Characters",
          "Game interactions",
          "Mini games",
        ],
      },
      {
        name: "Web Developer",
        price: "₹4,999",
        tags: ["HTML", "CSS", "Web"],
        desc: "Learn to design and build creative websites.",
        learn: [
          "HTML",
          "CSS",
          "Website structure",
          "Responsive design",
          "Creative websites",
        ],
      },
      {
        name: "Python Programmer",
        price: "₹4,999",
        tags: ["Python", "Coding"],
        desc: "Learn Python programming using practical coding exercises.",
        learn: [
          "Python basics",
          "Variables",
          "Conditions",
          "Loops",
          "Python projects",
        ],
      },
      {
        name: "Scratch Programmer",
        price: "₹4,999",
        tags: ["Scratch", "Creative"],
        desc: "Learn programming logic through visual and interactive Scratch projects.",
        learn: [
          "Scratch basics",
          "Loops",
          "Conditions",
          "Animations",
          "Interactive projects",
        ],
      },
      {
        name: "Electronics",
        price: "₹4,999",
        tags: ["Circuits", "Hardware"],
        desc: "Understand electronic components, circuits and practical hardware.",
        learn: [
          "Electronic components",
          "Circuit basics",
          "Sensors",
          "Connections",
          "Practical circuits",
        ],
      },
    ],

    events: [
      {
        emoji: "🤖",
        status: "upcoming",
        title: "School Technology Exhibition",
        date: "To be announced",
        school: "Connected School",
        desc: "A showcase of student-built technology projects.",
      },
    ],

    schools: [
      {
        name: "School Name",
        loc: "Hyderabad",
        progs: "Robo Champ, AI",
        status: "Active",
      },
      {
        name: "School Name",
        loc: "Hyderabad",
        progs: "IoT, Electronics",
        status: "Active",
      },
    ],

    testimonials: [
      {
        name: "Parent",
        role: "Parent",
        quote: "Students get a great opportunity to learn technology practically.",
      },
      {
        name: "Teacher",
        role: "Teacher",
        quote: "The project-based approach makes technology interesting for students.",
      },
    ],
  },

  crt: {
    courses: [
      {
        name: "CRT Training",
        price: "Contact Us",
        tags: ["Aptitude", "Reasoning"],
        desc: "Career Readiness Training designed for college students.",
        learn: [
          "Quantitative aptitude",
          "Logical reasoning",
          "Verbal ability",
          "Interview preparation",
        ],
      },
      {
        name: "Technical Skills",
        price: "Contact Us",
        tags: ["Technical", "IT"],
        desc: "Build technical fundamentals required for entry-level IT opportunities.",
        learn: [
          "Programming fundamentals",
          "Problem solving",
          "Technical communication",
          "IT career preparation",
        ],
      },
      {
        name: "Soft Skills",
        price: "Contact Us",
        tags: ["Communication", "Career"],
        desc: "Develop communication, presentation and professional skills.",
        learn: [
          "Communication",
          "Presentation skills",
          "Group discussions",
          "Interview skills",
        ],
      },
    ],

    events: [
      {
        emoji: "🎓",
        status: "upcoming",
        title: "CRT Career Readiness Workshop",
        date: "To be announced",
        school: "Partner College",
        desc: "Career preparation workshop for college students.",
      },
    ],

    schools: [],

    testimonials: [
      {
        name: "Student",
        role: "College Student",
        quote: "CRT training helped me improve my confidence and interview preparation.",
      },
    ],
  },
};

/* =========================================================
   STORAGE
========================================================= */

function loadWebsiteData() {
  try {
    const saved = localStorage.getItem("ashvomWebsiteData");

    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error(error);
  }

  return DEFAULT_DATA;
}

function loadArray(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

/* =========================================================
   CONSTANTS
========================================================= */

const ADMIN_USER = "admin";
const ADMIN_PASSWORD = "RoboChamp@2026";

/* =========================================================
   APP
========================================================= */

function App() {
  const [portal, setPortal] = useState("robotics");

  const [page, setPage] = useState("home");

  const [data, setData] = useState(loadWebsiteData);

  const [mobileMenu, setMobileMenu] = useState(false);

  const [selectedCourse, setSelectedCourse] = useState(null);

  const [authPage, setAuthPage] = useState(null);

  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  const [studentLoggedIn, setStudentLoggedIn] = useState(false);

  const [adminTab, setAdminTab] = useState("courses");

  const [loginRecords, setLoginRecords] = useState(() =>
    loadArray("ashvomLoginRecords")
  );

  const [enquiries, setEnquiries] = useState(() =>
    loadArray("ashvomEnquiries")
  );

  useEffect(() => {
    localStorage.setItem(
      "ashvomWebsiteData",
      JSON.stringify(data)
    );
  }, [data]);

  useEffect(() => {
    localStorage.setItem(
      "ashvomLoginRecords",
      JSON.stringify(loginRecords)
    );
  }, [loginRecords]);

  useEffect(() => {
    localStorage.setItem(
      "ashvomEnquiries",
      JSON.stringify(enquiries)
    );
  }, [enquiries]);

  /* =====================================================
     NAVIGATION
  ===================================================== */

  function navigate(newPage) {
    setPage(newPage);
    setAuthPage(null);
    setMobileMenu(false);
    setSelectedCourse(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function switchPortal(newPortal) {
    setPortal(newPortal);
    setPage("home");
    setAuthPage(null);
    setMobileMenu(false);
    setSelectedCourse(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /* =====================================================
     STUDENT LOGIN
  ===================================================== */

  function submitStudentLogin(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    const name = form.get("name");
    const institution = form.get("institution");
    const mobile = form.get("mobile");

    const record = {
      id: Date.now(),
      name,
      institution,
      mobile,
      portal,
      portalName:
        portal === "robotics"
          ? "AI & Robotics"
          : "CRT",
      date: new Date().toLocaleString(),
    };

    setLoginRecords((previous) => [
      ...previous,
      record,
    ]);

    setStudentLoggedIn(true);
    setAuthPage(null);

    alert(
      `Welcome ${name}! Your ${
        portal === "robotics"
          ? "AI & Robotics"
          : "CRT"
      } login has been recorded.`
    );
  }

  function logoutStudent() {
    setStudentLoggedIn(false);
    navigate("home");
  }

  /* =====================================================
     ADMIN LOGIN
  ===================================================== */

  function submitAdminLogin(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    const username = form.get("username");
    const password = form.get("password");

    if (
      username === ADMIN_USER &&
      password === ADMIN_PASSWORD
    ) {
      setAdminLoggedIn(true);
      setAuthPage(null);
      setPage("admin");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      alert("Invalid admin username or password.");
    }
  }

  function logoutAdmin() {
    setAdminLoggedIn(false);
    setPage("home");
    setPortal("robotics");
  }

  /* =====================================================
     ENQUIRY
  ===================================================== */

  function submitEnquiry(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const enquiry = {
      id: Date.now(),
      ...Object.fromEntries(formData.entries()),
      portal:
        portal === "robotics"
          ? "AI & Robotics"
          : "CRT",
      date: new Date().toLocaleString(),
    };

    setEnquiries((previous) => [
      ...previous,
      enquiry,
    ]);

    event.target.reset();

    alert(
      "Your enquiry has been submitted successfully!"
    );
  }

  /* =====================================================
     AUTH SCREEN
  ===================================================== */

  if (authPage === "admin") {
    return (
      <>
        <AdminLogin
          submitAdminLogin={submitAdminLogin}
          back={() => setAuthPage(null)}
        />

        <Footer />
      </>
    );
  }

  if (authPage === "student") {
    return (
      <>
        <StudentLogin
          portal={portal}
          submitStudentLogin={submitStudentLogin}
          back={() => setAuthPage(null)}
          switchPortal={switchPortal}
        />

        <Footer />
      </>
    );
  }

  /* =====================================================
     ADMIN
  ===================================================== */

  if (page === "admin" && adminLoggedIn) {
    return (
      <AdminDashboard
        data={data}
        setData={setData}
        adminTab={adminTab}
        setAdminTab={setAdminTab}
        loginRecords={loginRecords}
        setLoginRecords={setLoginRecords}
        enquiries={enquiries}
        setEnquiries={setEnquiries}
        logoutAdmin={logoutAdmin}
      />
    );
  }

  /* =====================================================
     MAIN WEBSITE
  ===================================================== */

  const currentData = data[portal];

  return (
    <>
      <Header
        portal={portal}
        page={page}
        navigate={navigate}
        setAuthPage={setAuthPage}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        studentLoggedIn={studentLoggedIn}
        logoutStudent={logoutStudent}
      />

      <PortalSwitch
        portal={portal}
        switchPortal={switchPortal}
      />

      {page === "home" && (
        <Home
          portal={portal}
          navigate={navigate}
          setAuthPage={setAuthPage}
        />
      )}

      {page === "courses" && (
        <Courses
          portal={portal}
          courses={currentData.courses}
          setSelectedCourse={setSelectedCourse}
        />
      )}

      {page === "events" && (
        <Events
          events={currentData.events}
          portal={portal}
        />
      )}

      {page === "schools" && (
        <Schools
          schools={currentData.schools}
          portal={portal}
        />
      )}

      {page === "about" && (
        <About
          portal={portal}
          navigate={navigate}
        />
      )}

      {page === "contact" && (
        <Contact
          portal={portal}
          courses={currentData.courses}
          submitEnquiry={submitEnquiry}
        />
      )}

      <Footer />

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          close={() => setSelectedCourse(null)}
          navigate={navigate}
        />
      )}
    </>
  );
}

/* =========================================================
   HEADER
========================================================= */

function Header({
  portal,
  page,
  navigate,
  setAuthPage,
  mobileMenu,
  setMobileMenu,
  studentLoggedIn,
  logoutStudent,
}) {
  const roboticsLinks = [
    ["home", "Home"],
    ["courses", "Courses"],
    ["events", "Events"],
    ["schools", "Connected Schools"],
    ["about", "About"],
    ["contact", "Contact"],
  ];

  const crtLinks = [
    ["home", "Home"],
    ["courses", "Courses"],
    ["events", "Events"],
    ["about", "About"],
    ["contact", "Contact"],
  ];

  const links =
    portal === "robotics"
      ? roboticsLinks
      : crtLinks;

  return (
    <header className="header">
      <div className="nav wrap">

        <button
          className="brand"
          onClick={() => navigate("home")}
        >
          <img
            src={robotLogo}
            alt="Ashvom Technologies"
            className="brand-icon"
          />

          <span>
            <b>ASHVOM TECHNOLOGIES</b>

            <small>
              {portal === "robotics"
                ? "AI & ROBOTICS"
                : "CRT"}
            </small>
          </span>
        </button>

        <nav className="desktop-nav">
          {links.map(([id, label]) => (
            <button
              key={id}
              className={
                page === id
                  ? "active"
                  : ""
              }
              onClick={() => navigate(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="header-actions">

          {studentLoggedIn ? (
            <button
              className="login-user-button"
              onClick={logoutStudent}
            >
              👤 Logout
            </button>
          ) : (
            <button
              className="login-button"
              onClick={() => setAuthPage("student")}
            >
              Login
            </button>
          )}

          <button
            className="admin-link"
            onClick={() => setAuthPage("admin")}
          >
            Admin
          </button>

          <button
            className="hamburger"
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div className="mobile-nav">

          {links.map(([id, label]) => (
            <button
              key={id}
              onClick={() => navigate(id)}
            >
              {label}
            </button>
          ))}

          <button
            onClick={() =>
              setAuthPage("student")
            }
          >
            🔐 Student Login
          </button>

          <button
            onClick={() =>
              setAuthPage("admin")
            }
          >
            ⚙️ Admin
          </button>
        </div>
      )}
    </header>
  );
}

/* =========================================================
   PORTAL SWITCH
========================================================= */

function PortalSwitch({
  portal,
  switchPortal,
}) {
  return (
    <div className="portal-switch-wrap">
      <div className="portal-switch">

        <button
          className={
            portal === "robotics"
              ? "portal-active"
              : ""
          }
          onClick={() =>
            switchPortal("robotics")
          }
        >
          🤖 AI & Robotics
        </button>

        <button
          className={
            portal === "crt"
              ? "portal-active"
              : ""
          }
          onClick={() =>
            switchPortal("crt")
          }
        >
          🎓 CRT
        </button>

      </div>
    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

function Home({
  portal,
  navigate,
  setAuthPage,
}) {
  const robotics = portal === "robotics";

  return (
    <main>

      <section
        className={
          robotics
            ? "hero robotics-hero"
            : "hero crt-hero"
        }
      >
        <div className="wrap hero-grid">

          <div className="hero-content">

            <span className="hero-badge">
              {robotics
                ? "● OFFLINE AI & ROBOTICS EDUCATION"
                : "● CAREER READINESS TRAINING"}
            </span>

            <h1>
              {robotics ? (
                <>
                  Where Young Minds
                  <span>
                    Build the Future.
                  </span>
                </>
              ) : (
                <>
                  Prepare Today.
                  <span>
                    Succeed Tomorrow.
                  </span>
                </>
              )}
            </h1>

            <p className="hero-description">
              {robotics
                ? "Practical AI, robotics, coding, IoT and electronics learning delivered through connected schools."
                : "Practical career readiness, technical skills, aptitude, communication and interview preparation for college students."}
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() =>
                  navigate("courses")
                }
              >
                Explore Programs →
              </button>

              <button
                className="secondary-button"
                onClick={() =>
                  setAuthPage("student")
                }
              >
                Student Login
              </button>

            </div>

            <div className="hero-points">

              {robotics ? (
                <>
                  <span>🛠️ Hands-On</span>
                  <span>🏫 School-Based</span>
                  <span>🤖 Robotics</span>
                  <span>🧠 AI</span>
                </>
              ) : (
                <>
                  <span>🎯 Career Focused</span>
                  <span>💻 Technical Skills</span>
                  <span>🗣️ Communication</span>
                  <span>🚀 Placement Ready</span>
                </>
              )}

            </div>
          </div>

          <div className="hero-visual">

            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="main-visual-card">
              <div className="visual-icon">
                {robotics ? "🤖" : "🎓"}
              </div>

              <h3>
                {robotics
                  ? "Build • Experiment • Create"
                  : "Learn • Prepare • Achieve"}
              </h3>

              <p>
                {robotics
                  ? "Future technology skills through practical projects."
                  : "Career-ready skills for college students."}
              </p>
            </div>

            <div className="floating-card floating-card-one">
              {robotics
                ? "⚙️ Robotics"
                : "💻 Technical"}
            </div>

            <div className="floating-card floating-card-two">
              {robotics
                ? "🧠 AI Learning"
                : "🎯 Aptitude"}
            </div>

            <div className="floating-card floating-card-three">
              {robotics
                ? "💡 Build Projects"
                : "🗣️ Interviews"}
            </div>

          </div>

        </div>
      </section>

      <section className="stats-section">
        <div className="wrap stats-grid">

          <Stat
            number="01"
            title={
              robotics
                ? "School Based"
                : "College Based"
            }
          />

          <Stat
            number="02"
            title="Practical"
          />

          <Stat
            number="03"
            title={
              robotics
                ? "Future Skills"
                : "Career Skills"
            }
          />

          <Stat
            number="04"
            title="Project Focused"
          />

        </div>
      </section>

      <section className="content-section">
        <div className="wrap">

          <SectionTitle
            title={
              robotics
                ? "Why AI & Robotics?"
                : "Why CRT?"
            }
            text={
              robotics
                ? "Students learn technology by building, testing and experimenting."
                : "College students develop the skills needed to move confidently toward careers."
            }
          />

          <div className="feature-grid">

            {(robotics
              ? [
                  ["🛠️", "Practical Learning", "Learn by doing real projects."],
                  ["🤖", "Robotics", "Build and understand robots."],
                  ["🧠", "AI Skills", "Explore AI through activities."],
                  ["💡", "Creative Thinking", "Turn ideas into projects."],
                  ["🏫", "School Learning", "Offline learning through schools."],
                  ["🚀", "Future Ready", "Develop technology skills early."],
                ]
              : [
                  ["🎯", "Career Focus", "Training aligned to career preparation."],
                  ["💻", "Technical Skills", "Build useful technical foundations."],
                  ["🧮", "Aptitude", "Improve quantitative problem solving."],
                  ["🗣️", "Communication", "Improve professional communication."],
                  ["👥", "Group Discussions", "Develop confidence in discussions."],
                  ["🚀", "Interview Ready", "Prepare for recruitment processes."],
                ]
            ).map(([icon, title, desc]) => (
              <div
                className="feature-card"
                key={title}
              >
                <div className="feature-icon">
                  {icon}
                </div>

                <h3>{title}</h3>

                <p>{desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="dark-feature-section">
        <div className="wrap dark-feature-grid">

          <div>
            <span className="section-label">
              {robotics
                ? "LEARN BY DOING"
                : "BUILD YOUR CAREER"}
            </span>

            <h2>
              {robotics
                ? "From curiosity to creation."
                : "From classroom knowledge to career confidence."}
            </h2>

            <p>
              {robotics
                ? "Students move from understanding concepts to building practical projects."
                : "Students strengthen aptitude, technical knowledge, communication and interview confidence."}
            </p>

            <button
              className="light-button"
              onClick={() =>
                navigate("courses")
              }
            >
              View Programs
            </button>
          </div>

          <div className="process-visual">

            <div className="process-circle">
              {robotics
                ? "BUILD"
                : "GROW"}
            </div>

            <div className="process-pill process-pill-one">
              {robotics
                ? "EXPLORE"
                : "LEARN"}
            </div>

            <div className="process-pill process-pill-two">
              {robotics
                ? "EXPERIMENT"
                : "PRACTICE"}
            </div>

            <div className="process-pill process-pill-three">
              {robotics
                ? "CREATE"
                : "ACHIEVE"}
            </div>

          </div>

        </div>
      </section>

      <section className="cta-section">
        <div className="wrap">

          <span>
            ASHVOM TECHNOLOGIES
          </span>

          <h2>
            {robotics
              ? "Bring practical technology learning to your school."
              : "Help your students become career ready."}
          </h2>

          <p>
            Connect with Ashvom Technologies
            to learn more about our programs.
          </p>

          <button
            className="primary-button"
            onClick={() =>
              navigate("contact")
            }
          >
            Contact Ashvom →
          </button>

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   STAT
========================================================= */

function Stat({ number, title }) {
  return (
    <div className="stat-item">
      <strong>{number}</strong>
      <span>{title}</span>
    </div>
  );
}

/* =========================================================
   COURSES
========================================================= */

function Courses({
  portal,
  courses,
  setSelectedCourse,
}) {
  return (
    <main>

      <PageHero
        title={
          portal === "robotics"
            ? "AI & Robotics Programs"
            : "CRT Programs"
        }
        text={
          portal === "robotics"
            ? "Practical technology programs delivered through connected schools."
            : "Career readiness programs designed for college students."
        }
        dark={portal === "robotics"}
      />

      <section className="program-section">
        <div className="wrap">

          <div className="program-grid">

            {courses.map((course, index) => (
              <div
                className="program-card"
                key={course.name}
              >

                <div className="program-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="program-top">
                  <h3>{course.name}</h3>

                  <strong>
                    {course.price}
                  </strong>
                </div>

                <p>
                  {course.desc}
                </p>

                <div className="program-tags">
                  {(course.tags || []).map(
                    (tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <button
                  className="program-link"
                  onClick={() =>
                    setSelectedCourse(course)
                  }
                >
                  View Program →
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   EVENTS
========================================================= */

function Events({ events, portal }) {
  return (
    <main>

      <PageHero
        title="Events & Updates"
        text={
          portal === "robotics"
            ? "Workshops, exhibitions and technology activities across connected schools."
            : "Workshops, career programs and training activities."
        }
      />

      <section className="content-section">
        <div className="wrap">

          {events.length === 0 ? (
            <EmptyState
              icon="📅"
              title="No events yet"
              text="New events and updates will appear here."
            />
          ) : (
            <div className="event-grid">

              {events.map((event, index) => (
                <div
                  className="event-card-new"
                  key={index}
                >

                  <div className="event-icon">
                    {event.emoji || "📌"}
                  </div>

                  <div className="event-content">

                    <span className="event-status">
                      {event.status || "Update"}
                    </span>

                    <h3>
                      {event.title}
                    </h3>

                    <div className="event-meta">
                      📅 {event.date}
                    </div>

                    <div className="event-meta">
                      🏫 {event.school}
                    </div>

                    <p>
                      {event.desc}
                    </p>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   SCHOOLS
========================================================= */

function Schools({ schools, portal }) {
  return (
    <main>

      <PageHero
        title="Connected Schools"
        text="Our partner schools where practical learning programs are delivered."
        dark
      />

      <section className="school-section">
        <div className="wrap">

          {schools.length === 0 ? (
            <EmptyState
              icon="🏫"
              title={
                portal === "crt"
                  ? "College partners coming soon"
                  : "Connected schools coming soon"
              }
              text="Partner institutions will be displayed here."
            />
          ) : (
            <div className="school-grid">

              {schools.map((school, index) => (
                <div
                  className="school-card-new"
                  key={index}
                >

                  <div className="school-card-top">
                    <span>🏫</span>

                    <strong>
                      {school.status}
                    </strong>
                  </div>

                  <h3>
                    {school.name}
                  </h3>

                  <p>
                    📍 {school.loc}
                  </p>

                  <div className="school-programs">
                    {school.progs}
                  </div>

                </div>
              ))}

            </div>
          )}

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   ABOUT
========================================================= */

function About({
  portal,
  navigate,
}) {
  const robotics = portal === "robotics";

  return (
    <main>

      <PageHero
        title={
          robotics
            ? "About AI & Robotics"
            : "About CRT"
        }
        text={
          robotics
            ? "Building future-ready technology skills through practical learning."
            : "Helping college students build career-ready skills."
        }
      />

      <section className="content-section">
        <div className="wrap about-layout">

          <div>
            <span className="section-label purple-label">
              ABOUT ASHVOM
            </span>

            <h2>
              {robotics
                ? "Learning should be something students experience."
                : "Career preparation should be practical."}
            </h2>

            <p>
              {robotics
                ? "Ashvom Technologies focuses on practical technology education where students can explore AI, robotics, coding, IoT, electronics and creative technology."
                : "Ashvom Technologies provides career readiness training that combines technical preparation, aptitude, communication and professional development."}
            </p>

            <button
              className="primary-button"
              onClick={() =>
                navigate("contact")
              }
            >
              Connect With Us
            </button>
          </div>

          <div className="about-panel">

            <div>
              <span>01</span>
              <h3>Practical</h3>
              <p>Learning through action.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Guided</h3>
              <p>Structured instructor support.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Future Ready</h3>
              <p>Skills for tomorrow.</p>
            </div>

            <div>
              <span>04</span>
              <h3>Project Focused</h3>
              <p>Knowledge converted into practice.</p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   CONTACT
========================================================= */

function Contact({
  portal,
  courses,
  submitEnquiry,
}) {
  return (
    <main>

      <PageHero
        title="Contact Ashvom Technologies"
        text={
          portal === "robotics"
            ? "Interested in bringing AI & Robotics learning to your school?"
            : "Interested in CRT programs for your college?"
        }
      />

      <section className="content-section">
        <div className="wrap contact-layout">

          <div className="contact-card">

            <span className="section-label purple-label">
              GET IN TOUCH
            </span>

            <h2>
              Let's build the
              <span> future together.</span>
            </h2>

            <div className="contact-detail">
              <b>📞 Mobile</b>
              <span>9392002871</span>
            </div>

            <div className="contact-detail">
              <b>📍 Location</b>
              <span>Dilshnagar, Hyderabad</span>
            </div>

            <div className="contact-detail">
              <b>🌐 Website</b>
              <span>
                www.ashvomairoboticslabs.com
              </span>
            </div>

          </div>

          <form
            className="modern-form"
            onSubmit={submitEnquiry}
          >

            <h2>
              Send an Enquiry
            </h2>

            <p>
              Tell us how we can help.
            </p>

            <div className="form-two">

              <Field
                name="name"
                label="Name"
              />

              <Field
                name="institution"
                label={
                  portal === "robotics"
                    ? "School Name"
                    : "College Name"
                }
              />

              <Field
                name="phone"
                label="Mobile Number"
                type="tel"
              />

              <Field
                name="email"
                label="Email"
                type="email"
              />

              <Field
                name="city"
                label="City"
              />

              <div>
                <label>Program</label>

                <select
                  name="program"
                  required
                >
                  {courses.map((course) => (
                    <option
                      key={course.name}
                      value={course.name}
                    >
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            <div>
              <label>Message</label>

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your requirements"
              />
            </div>

            <button
              className="primary-button"
              type="submit"
            >
              Submit Enquiry →
            </button>

          </form>

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   FIELD
========================================================= */

function Field({
  name,
  label,
  type = "text",
}) {
  return (
    <div>
      <label>{label}</label>

      <input
        name={name}
        type={type}
        placeholder={label}
        required
      />
    </div>
  );
}

/* =========================================================
   STUDENT LOGIN
========================================================= */

function StudentLogin({
  portal,
  submitStudentLogin,
  back,
  switchPortal,
}) {
  const robotics = portal === "robotics";

  return (
    <main className="student-login-page">

      <div className="login-background-circle circle-one" />
      <div className="login-background-circle circle-two" />

      <div className="student-login-layout">

        <div className="student-login-intro">

          <button
            className="back-button"
            onClick={back}
          >
            ← Back to Website
          </button>

          <span className="section-label">
            ASHVOM TECHNOLOGIES
          </span>

          <h1>
            {robotics
              ? "Welcome, Future Builder."
              : "Welcome, Future Professional."}
          </h1>

          <p>
            {robotics
              ? "Enter your details to access the AI & Robotics learning portal."
              : "Enter your details to access the CRT student portal."}
          </p>

          <div className="login-benefits">

            <span>
              ✓ Student learning access
            </span>

            <span>
              ✓ Program information
            </span>

            <span>
              ✓ Events and updates
            </span>

          </div>

        </div>

        <div className="student-login-card">

          <div className="login-card-icon">
            {robotics ? "🤖" : "🎓"}
          </div>

          <div className="login-tabs">

            <button
              className={
                robotics
                  ? "login-tab-active"
                  : ""
              }
              onClick={() =>
                switchPortal("robotics")
              }
            >
              AI & Robotics
            </button>

            <button
              className={
                !robotics
                  ? "login-tab-active"
                  : ""
              }
              onClick={() =>
                switchPortal("crt")
              }
            >
              CRT
            </button>

          </div>

          <h2>
            Student Login
          </h2>

          <p>
            Please enter your basic details.
          </p>

          <form
            onSubmit={submitStudentLogin}
            className="student-login-form"
          >

            <Field
              name="name"
              label="Student Name"
            />

            <Field
              name="institution"
              label={
                robotics
                  ? "School Name"
                  : "College Name"
              }
            />

            <Field
              name="mobile"
              label="Mobile Number"
              type="tel"
            />

            <button
              className="login-submit"
              type="submit"
            >
              Continue to Portal →
            </button>

          </form>

          <small className="login-note">
            🔒 Your details are used for portal
            access and administration.
          </small>

        </div>

      </div>

    </main>
  );
}

/* =========================================================
   ADMIN LOGIN
========================================================= */

function AdminLogin({
  submitAdminLogin,
  back,
}) {
  return (
    <main className="admin-login-page-new">

      <div className="admin-grid-background" />

      <div className="admin-floating-icon admin-icon-one">
        ⚙️
      </div>

      <div className="admin-floating-icon admin-icon-two">
        🔐
      </div>

      <div className="admin-floating-icon admin-icon-three">
        📊
      </div>

      <div className="admin-login-layout">

        <div className="admin-brand-panel">

          <button
            className="back-button light-back"
            onClick={back}
          >
            ← Back to Website
          </button>

          <span className="section-label">
            ASHVOM TECHNOLOGIES
          </span>

          <h1>
            Control.
            <span>
              Manage.
            </span>
            Grow.
          </h1>

          <p>
            Secure administration area for
            managing Ashvom Technologies
            website content.
          </p>

          <div className="admin-feature-list">

            <span>✓ Manage courses</span>
            <span>✓ Manage events</span>
            <span>✓ Manage connected schools</span>
            <span>✓ View login information</span>
            <span>✓ Manage enquiries</span>

          </div>

        </div>

        <div className="admin-login-card-new">

          <div className="admin-lock-new">
            🔐
          </div>

          <span className="secure-badge">
            SECURE ADMIN AREA
          </span>

          <h2>
            Admin Login
          </h2>

          <p>
            Authorized personnel only
          </p>

          <form
            onSubmit={submitAdminLogin}
            className="admin-login-form-new"
          >

            <div>
              <label>Admin Username</label>

              <input
                name="username"
                placeholder="Enter username"
                autoComplete="username"
                required
              />
            </div>

            <div>
              <label>Password</label>

              <input
                name="password"
                type="password"
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
            </div>

            <button
              type="submit"
              className="admin-submit-new"
            >
              Login to Dashboard →
            </button>

          </form>

          <div className="admin-security-note">
            🛡️ Protected Administration Area
          </div>

        </div>

      </div>

    </main>
  );
}

/* =========================================================
   ADMIN DASHBOARD
========================================================= */

function AdminDashboard({
  data,
  setData,
  adminTab,
  setAdminTab,
  loginRecords,
  setLoginRecords,
  enquiries,
  setEnquiries,
  logoutAdmin,
}) {
  const [portal, setPortal] = useState("robotics");

  const [form, setForm] = useState({});

  const currentData = data[portal];

  const tabs = [
    "courses",
    "events",
    "schools",
    "testimonials",
    "logins",
    "enquiries",
  ];

  function updateForm(name, value) {
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function addItem(event) {
    event.preventDefault();

    if (
      adminTab === "logins" ||
      adminTab === "enquiries"
    ) {
      return;
    }

    const newItem = {
      ...form,
    };

    if (adminTab === "courses") {
      newItem.tags = form.tags
        ? form.tags
            .split(",")
            .map((x) => x.trim())
            .filter(Boolean)
        : [];

      newItem.learn = form.learn
        ? form.learn
            .split("\n")
            .map((x) => x.trim())
            .filter(Boolean)
        : [];
    }

    setData({
      ...data,
      [portal]: {
        ...currentData,
        [adminTab]: [
          ...currentData[adminTab],
          newItem,
        ],
      },
    });

    setForm({});

    alert(
      `${adminTab} added successfully!`
    );
  }

  function deleteItem(index) {
    const newList =
      currentData[adminTab].filter(
        (_, i) => i !== index
      );

    setData({
      ...data,
      [portal]: {
        ...currentData,
        [adminTab]: newList,
      },
    });
  }

  function deleteLogin(id) {
    const updated = loginRecords.filter(
      (item) => item.id !== id
    );

    setLoginRecords(updated);
  }

  function deleteEnquiry(id) {
    const updated = enquiries.filter(
      (item) => item.id !== id
    );

    setEnquiries(updated);
  }

  return (
    <main className="admin-dashboard-new">

      <div className="admin-topbar">

        <div className="wrap admin-topbar-inner">

          <div className="admin-dashboard-brand">
            <div className="admin-dashboard-logo">
              🤖
            </div>

            <div>
              <small>
                ASHVOM TECHNOLOGIES
              </small>

              <h1>
                Admin Control Center
              </h1>
            </div>
          </div>

          <button
            className="admin-logout"
            onClick={logoutAdmin}
          >
            Logout
          </button>

        </div>

      </div>

      <div className="wrap admin-dashboard-content">

        {/* PORTAL SELECTOR */}

        <div className="admin-portal-selector">

          <div>
            <small>
              MANAGE PORTAL
            </small>

            <h2>
              Website Management
            </h2>
          </div>

          <div className="portal-selector-buttons">

            <button
              className={
                portal === "robotics"
                  ? "selected"
                  : ""
              }
              onClick={() => {
                setPortal("robotics");
                setAdminTab("courses");
                setForm({});
              }}
            >
              🤖 AI & Robotics
            </button>

            <button
              className={
                portal === "crt"
                  ? "selected"
                  : ""
              }
              onClick={() => {
                setPortal("crt");
                setAdminTab("courses");
                setForm({});
              }}
            >
              🎓 CRT
            </button>

          </div>

        </div>

        {/* STATS */}

        <div className="admin-stats-new">

          <AdminStat
            icon="📚"
            value={currentData.courses.length}
            title="Programs"
          />

          <AdminStat
            icon="🎉"
            value={currentData.events.length}
            title="Events"
          />

          <AdminStat
            icon="🏫"
            value={currentData.schools.length}
            title="Schools"
          />

          <AdminStat
            icon="🔐"
            value={loginRecords.length}
            title="Logins"
          />

          <AdminStat
            icon="📩"
            value={enquiries.length}
            title="Enquiries"
          />

        </div>

        {/* TABS */}

        <div className="admin-tabs-new">

          {tabs.map((tab) => (
            <button
              key={tab}
              className={
                adminTab === tab
                  ? "active"
                  : ""
              }
              onClick={() => {
                setAdminTab(tab);
                setForm({});
              }}
            >
              {tab === "courses" && "📚 "}
              {tab === "events" && "🎉 "}
              {tab === "schools" && "🏫 "}
              {tab === "testimonials" && "💬 "}
              {tab === "logins" && "🔐 "}
              {tab === "enquiries" && "📩 "}

              {tab}
            </button>
          ))}

        </div>

        {/* LOGIN INFORMATION */}

        {adminTab === "logins" && (
          <LoginRecords
            loginRecords={loginRecords}
            deleteLogin={deleteLogin}
          />
        )}

        {/* ENQUIRIES */}

        {adminTab === "enquiries" && (
          <EnquiryRecords
            enquiries={enquiries}
            deleteEnquiry={deleteEnquiry}
          />
        )}

        {/* CONTENT MANAGEMENT */}

        {!["logins", "enquiries"].includes(
          adminTab
        ) && (
          <div className="admin-content-panel">

            <form
              className="admin-management-form"
              onSubmit={addItem}
            >

              <div className="management-heading">
                <span>
                  ADD NEW
                </span>

                <h2>
                  Add {adminTab}
                </h2>

                <p>
                  Changes are saved to the
                  website data.
                </p>
              </div>

              {adminTab === "courses" && (
                <CourseAdminForm
                  form={form}
                  updateForm={updateForm}
                />
              )}

              {adminTab === "events" && (
                <EventAdminForm
                  form={form}
                  updateForm={updateForm}
                />
              )}

              {adminTab === "schools" && (
                <SchoolAdminForm
                  form={form}
                  updateForm={updateForm}
                />
              )}

              {adminTab === "testimonials" && (
                <TestimonialAdminForm
                  form={form}
                  updateForm={updateForm}
                />
              )}

              <button
                className="admin-add-new"
                type="submit"
              >
                + Add {adminTab}
              </button>

            </form>

            <div className="existing-items">

              <div className="existing-title">
                <div>
                  <span>
                    CURRENT DATA
                  </span>

                  <h2>
                    Existing {adminTab}
                  </h2>
                </div>

                <strong>
                  {currentData[adminTab].length}
                </strong>
              </div>

              {currentData[adminTab].length ===
              0 ? (
                <EmptyState
                  icon="📋"
                  title={`No ${adminTab}`}
                  text="Add your first item above."
                />
              ) : (
                currentData[adminTab].map(
                  (item, index) => (
                    <AdminItemRow
                      key={index}
                      item={item}
                      type={adminTab}
                      onDelete={() =>
                        deleteItem(index)
                      }
                    />
                  )
                )
              )}

            </div>

          </div>
        )}

      </div>
    </main>
  );
}

/* =========================================================
   ADMIN STAT
========================================================= */

function AdminStat({
  icon,
  value,
  title,
}) {
  return (
    <div className="admin-stat-new">

      <span>{icon}</span>

      <div>
        <strong>{value}</strong>
        <small>{title}</small>
      </div>

    </div>
  );
}

/* =========================================================
   COURSE ADMIN FORM
========================================================= */

function CourseAdminForm({
  form,
  updateForm,
}) {
  return (
    <>
      <AdminField
        label="Course Name"
        value={form.name || ""}
        onChange={(value) =>
          updateForm("name", value)
        }
        required
      />

      <AdminField
        label="Price"
        value={form.price || ""}
        onChange={(value) =>
          updateForm("price", value)
        }
      />

      <AdminField
        label="Tags"
        value={form.tags || ""}
        onChange={(value) =>
          updateForm("tags", value)
        }
        placeholder="Robotics, AI, Coding"
        full
      />

      <AdminTextArea
        label="Description"
        value={form.desc || ""}
        onChange={(value) =>
          updateForm("desc", value)
        }
        full
      />

      <AdminTextArea
        label="What Students Learn"
        value={form.learn || ""}
        onChange={(value) =>
          updateForm("learn", value)
        }
        placeholder="One item per line"
        full
      />
    </>
  );
}

/* =========================================================
   EVENT ADMIN FORM
========================================================= */

function EventAdminForm({
  form,
  updateForm,
}) {
  return (
    <>
      <AdminField
        label="Event Name"
        value={form.title || ""}
        onChange={(value) =>
          updateForm("title", value)
        }
        required
      />

      <AdminField
        label="Date"
        value={form.date || ""}
        onChange={(value) =>
          updateForm("date", value)
        }
      />

      <AdminField
        label="School / College"
        value={form.school || ""}
        onChange={(value) =>
          updateForm("school", value)
        }
      />

      <AdminSelect
        label="Status"
        value={form.status || "upcoming"}
        onChange={(value) =>
          updateForm("status", value)
        }
        options={[
          ["upcoming", "Upcoming"],
          ["completed", "Completed"],
        ]}
      />

      <AdminField
        label="Emoji"
        value={form.emoji || "🤖"}
        onChange={(value) =>
          updateForm("emoji", value)
        }
      />

      <AdminTextArea
        label="Description"
        value={form.desc || ""}
        onChange={(value) =>
          updateForm("desc", value)
        }
        full
      />
    </>
  );
}

/* =========================================================
   SCHOOL ADMIN FORM
========================================================= */

function SchoolAdminForm({
  form,
  updateForm,
}) {
  return (
    <>
      <AdminField
        label="School / College Name"
        value={form.name || ""}
        onChange={(value) =>
          updateForm("name", value)
        }
        required
      />

      <AdminField
        label="Location"
        value={form.loc || ""}
        onChange={(value) =>
          updateForm("loc", value)
        }
      />

      <AdminField
        label="Programs"
        value={form.progs || ""}
        onChange={(value) =>
          updateForm("progs", value)
        }
      />

      <AdminSelect
        label="Status"
        value={form.status || "Active"}
        onChange={(value) =>
          updateForm("status", value)
        }
        options={[
          ["Active", "Active"],
          ["Inactive", "Inactive"],
        ]}
      />
    </>
  );
}

/* =========================================================
   TESTIMONIAL FORM
========================================================= */

function TestimonialAdminForm({
  form,
  updateForm,
}) {
  return (
    <>
      <AdminField
        label="Name"
        value={form.name || ""}
        onChange={(value) =>
          updateForm("name", value)
        }
      />

      <AdminField
        label="Role"
        value={form.role || ""}
        onChange={(value) =>
          updateForm("role", value)
        }
      />

      <AdminTextArea
        label="Testimonial"
        value={form.quote || ""}
        onChange={(value) =>
          updateForm("quote", value)
        }
        full
      />
    </>
  );
}

/* =========================================================
   ADMIN FIELD
========================================================= */

function AdminField({
  label,
  value,
  onChange,
  placeholder,
  required,
  full,
}) {
  return (
    <div className={full ? "form-full" : ""}>
      <label>{label}</label>

      <input
        value={value}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
        required={required}
      />
    </div>
  );
}

function AdminTextArea({
  label,
  value,
  onChange,
  placeholder,
  full,
}) {
  return (
    <div className={full ? "form-full" : ""}>
      <label>{label}</label>

      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
      />
    </div>
  );
}

function AdminSelect({
  label,
  value,
  onChange,
  options,
}) {
  return (
    <div>
      <label>{label}</label>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
      >
        {options.map(([value, label]) => (
          <option
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

/* =========================================================
   ADMIN ITEM ROW
========================================================= */

function AdminItemRow({
  item,
  type,
  onDelete,
}) {
  const title =
    item.name ||
    item.title ||
    "Untitled";

  const secondary =
    item.price ||
    item.date ||
    item.loc ||
    item.role ||
    "";

  return (
    <div className="admin-item-row">

      <div className="admin-item-icon">
        {type === "courses" && "📚"}
        {type === "events" && "🎉"}
        {type === "schools" && "🏫"}
        {type === "testimonials" && "💬"}
      </div>

      <div className="admin-item-info">

        <strong>{title}</strong>

        <span>{secondary}</span>

      </div>

      <button
        className="delete-button"
        onClick={onDelete}
      >
        🗑 Delete
      </button>

    </div>
  );
}

/* =========================================================
   LOGIN RECORDS
========================================================= */

function LoginRecords({
  loginRecords,
  deleteLogin,
}) {
  return (
    <div className="records-panel">

      <div className="records-heading">

        <div>
          <span>
            STUDENT ACCESS
          </span>

          <h2>
            Login Information
          </h2>

          <p>
            Student login records collected
            from the website.
          </p>
        </div>

        <strong>
          {loginRecords.length}
        </strong>

      </div>

      {loginRecords.length === 0 ? (
        <EmptyState
          icon="🔐"
          title="No student logins"
          text="Student login information will appear here."
        />
      ) : (
        loginRecords
          .slice()
          .reverse()
          .map((record) => (
            <div
              className="record-card"
              key={record.id}
            >

              <div className="record-avatar">
                {record.portal ===
                "AI & Robotics"
                  ? "🤖"
                  : "🎓"}
              </div>

              <div className="record-info">

                <h3>
                  {record.name}
                </h3>

                <p>
                  {record.institution}
                </p>

                <div className="record-tags">

                  <span>
                    📱 {record.mobile}
                  </span>

                  <span>
                    {record.portal}
                  </span>

                  <span>
                    {record.date}
                  </span>

                </div>

              </div>

              <button
                className="delete-button"
                onClick={() =>
                  deleteLogin(record.id)
                }
              >
                🗑
              </button>

            </div>
          ))
      )}

    </div>
  );
}

/* =========================================================
   ENQUIRIES
========================================================= */

function EnquiryRecords({
  enquiries,
  deleteEnquiry,
}) {
  return (
    <div className="records-panel">

      <div className="records-heading">

        <div>
          <span>
            WEBSITE ENQUIRIES
          </span>

          <h2>
            School / College Enquiries
          </h2>

          <p>
            Enquiries submitted through
            the contact form.
          </p>
        </div>

        <strong>
          {enquiries.length}
        </strong>

      </div>

      {enquiries.length === 0 ? (
        <EmptyState
          icon="📩"
          title="No enquiries"
          text="New enquiries will appear here."
        />
      ) : (
        enquiries
          .slice()
          .reverse()
          .map((item) => (
            <div
              className="record-card enquiry-record"
              key={item.id}
            >

              <div className="record-avatar">
                📩
              </div>

              <div className="record-info">

                <h3>
                  {item.name}
                </h3>

                <p>
                  {item.institution}
                </p>

                <div className="record-tags">

                  <span>
                    📱 {item.phone}
                  </span>

                  <span>
                    ✉️ {item.email}
                  </span>

                  <span>
                    📚 {item.program}
                  </span>

                  <span>
                    {item.portal}
                  </span>

                </div>

                {item.message && (
                  <div className="record-message">
                    {item.message}
                  </div>
                )}

              </div>

              <button
                className="delete-button"
                onClick={() =>
                  deleteEnquiry(item.id)
                }
              >
                🗑
              </button>

            </div>
          ))
      )}

    </div>
  );
}

/* =========================================================
   COURSE MODAL
========================================================= */

function CourseModal({
  course,
  close,
  navigate,
}) {
  return (
    <div
      className="modal-overlay-new"
      onClick={close}
    >

      <div
        className="course-modal-new"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        <button
          className="modal-close"
          onClick={close}
        >
          ×
        </button>

        <span className="modal-price">
          {course.price}
        </span>

        <h2>
          {course.name}
        </h2>

        <p>
          {course.desc}
        </p>

        <h3>
          What students learn
        </h3>

        <ul>
          {(course.learn || []).map(
            (item, index) => (
              <li key={index}>
                ✓ {item}
              </li>
            )
          )}
        </ul>

        <div className="modal-notice">
          Available through Ashvom
          Technologies programs.
        </div>

        <button
          className="primary-button full-button"
          onClick={() => {
            close();
            navigate("contact");
          }}
        >
          Enquire Now →
        </button>

      </div>

    </div>
  );
}

/* =========================================================
   PAGE HERO
========================================================= */

function PageHero({
  title,
  text,
  dark,
}) {
  return (
    <section
      className={
        dark
          ? "page-hero-new page-hero-dark"
          : "page-hero-new"
      }
    >
      <div className="wrap">

        <span className="section-label">
          ASHVOM TECHNOLOGIES
        </span>

        <h1>{title}</h1>

        <p>{text}</p>

      </div>
    </section>
  );
}

/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
  title,
  text,
}) {
  return (
    <div className="section-heading">

      <span className="section-label purple-label">
        ASHVOM TECHNOLOGIES
      </span>

      <h2>{title}</h2>

      <p>{text}</p>

    </div>
  );
}

/* =========================================================
   EMPTY STATE
========================================================= */

function EmptyState({
  icon,
  title,
  text,
}) {
  return (
    <div className="empty-state-new">

      <span>{icon}</span>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="footer-new">

      <div className="wrap footer-main">

        <div>
          <div className="footer-logo">
            <img
              src={robotLogo}
              alt="Ashvom"
            />

            <div>
              <b>
                ASHVOM TECHNOLOGIES
              </b>

              <small>
                AI • ROBOTICS • CRT
              </small>
            </div>
          </div>

          <p>
            Practical technology and
            career education for the
            next generation.
          </p>
        </div>

        <div>
          <h4>Programs</h4>

          <p>AI & Robotics</p>
          <p>IoT</p>
          <p>AI</p>
          <p>CRT</p>
        </div>

        <div>
          <h4>Contact</h4>

          <p>📞 9392002871</p>
          <p>📍 Dilshnagar, Hyderabad</p>
          <p>
            www.ashvomairoboticslabs.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Ashvom Technologies Pvt Ltd.
        All Rights Reserved.
      </div>

    </footer>
  );
}

export default App;