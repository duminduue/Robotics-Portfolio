import { useState } from "react";
import "./App.css";

const projects = [
  {
    id: "01",
    category: "ROBOTICS / CONTROL",
    title: "Self-Balancing Mobile Robot",
    short:
      "Two-wheel self-balancing platform engineered around IMU sensing, PID control, encoder feedback and wireless motion control.",
    media: "/projects/self-balancing.png",
    specs: [
      ["Controller", "ESP32"],
      ["IMU", "MPU6050"],
      ["Control", "PID"],
      ["Feedback", "Encoder"],
      ["Drive", "Encoder DC Motors + Motor Driver"],
      ["Communication", "Wireless Web Control"],
      ["Safety", "Ultrasonic Obstacle Detection"],
    ],
    stack: [
      "ESP32",
      "MPU6050",
      "PID Control",
      "Encoder Feedback",
      "Motor Control",
      "Wireless Web Control",
      "Ultrasonic Obstacle Detection",
    ],
    process: [
      "Mechanical chassis and drivetrain design",
      "ESP32 embedded controller development",
      "MPU6050 orientation sensing and filtering",
      "PID balance control and tuning",
      "Encoder feedback for movement, damping and position holding",
      "Wireless web-based control interface",
      "Ultrasonic obstacle detection and warning",
      "Disturbance, load and surface performance testing",
    ],
    caseStudy: {
      overview:
        "The project developed and experimentally evaluated a self-balancing mobile robotic platform using PID control. The system combines inertial sensing, encoder feedback, embedded control, wireless user interaction and obstacle detection in a single physical platform.",
      objective:
        "Design and develop a mobile platform capable of dynamically maintaining balance, responding to external disturbances and operating under different loads and surface conditions while providing wireless control and obstacle awareness.",
      architecture: [
        "MPU6050 IMU → ESP32 balancing controller → PID control → Motor driver → Encoder DC motors",
        "Wheel encoders → ESP32 → speed damping / position holding",
        "Wireless web interface → ESP32 → motion commands",
        "Ultrasonic sensor → ESP32 → distance monitoring / warning",
      ],
      development: [
        "Designed and constructed the mechanical chassis for a two-wheel self-balancing platform.",
        "Integrated the MPU6050 IMU with the ESP32 for real-time orientation feedback.",
        "Implemented and tuned PID control to reduce oscillation and maintain the upright equilibrium state.",
        "Added encoder feedback to improve movement control, reduce drift and support speed damping and position holding.",
        "Implemented a distributed architecture with balancing and interface functions separated across ESP32 controllers.",
        "Integrated wireless web-based control and ultrasonic obstacle detection for improved usability and safety.",
      ],
      testing: [
        "Continuous balancing tests were used to evaluate whether the robot could remain upright without falling.",
        "Transient response and oscillation behaviour were analysed during startup and disturbance events.",
        "PID parameters were tuned experimentally to balance responsiveness, damping and steady-state behaviour.",
        "Disturbance tests included direct physical pushing, tilting and movement of the supporting surface.",
        "Load tests increased the applied load from 0 g to 250 g; no falls were recorded during the tested loads.",
        "Surface tests evaluated behaviour under different friction conditions and showed stable balance across the tested surfaces, while mobility was affected by surface traction.",
      ],
      results: [
        "Stable upright operation was achieved with only slight oscillation around equilibrium after settling.",
        "The robot recovered its upright position after external disturbances and maintained balance when the supporting surface was disturbed.",
        "Encoder feedback reduced drift and improved motion/position control compared with operation without encoder feedback.",
        "The system maintained its upright posture throughout the tested load range up to 250 g, with increased oscillation at higher loads.",
        "The report concludes that the completed platform performed well across stability, disturbance, load, surface and integration tests.",
      ],
      limitations: [
        "Wheel traction and surface friction affected mobility performance.",
        "Higher loads introduced some increase in oscillatory movement and required greater control input.",
        "Further work can focus on advanced control techniques and improved mechanical design.",
      ],
      takeaway:
        "The project demonstrates practical closed-loop robotics engineering: sensing, control, actuation, mechanical design, embedded implementation and experimental validation were developed as one integrated system.",
    },
  },
  {
    id: "02",
    category: "EMBEDDED / IoT",
    title: "IoT Health Monitoring System",
    short:
      "Multi-sensor ESP32 monitoring platform combining physiological sensing, environmental measurement, local display and IoT connectivity.",
    media: "/projects/health-monitoring.png",
    specs: [
      ["Controller", "ESP32"],
      ["Heart Rate / SpO₂", "MAX30102"],
      ["Body Temperature", "DS18B20"],
      ["Room Temperature / Humidity", "DHT11"],
      ["Local Output", "20×4 LCD"],
      ["IoT", "Blynk via Wi-Fi"],
      ["Power", "7.4 V Battery → Buck Converter → 5 V"],
    ],
    stack: [
      "ESP32",
      "MAX30102",
      "DS18B20",
      "DHT11",
      "I2C / OneWire / GPIO",
      "Blynk IoT",
      "20×4 LCD",
      "SolidWorks Enclosure",
    ],
    process: [
      "Embedded system architecture and wiring",
      "MAX30102, DS18B20 and DHT11 integration",
      "Real-time sensor data acquisition",
      "Filtering and range validation",
      "State-based software implementation",
      "Local LCD guidance and output",
      "Wi-Fi and Blynk IoT integration",
      "SolidWorks enclosure design and assembly",
    ],
    caseStudy: {
      overview:
        "The project developed an ESP32-based IoT monitoring system for collecting physiological and environmental parameters and presenting them locally and remotely through Blynk.",
      objective:
        "Build a compact embedded monitoring platform capable of measuring heart rate, SpO₂, body temperature, room temperature and humidity in real time, with both local LCD output and Wi-Fi-based Blynk visualization.",
      architecture: [
        "MAX30102 → ESP32 → filtering / processing → Heart Rate + SpO₂",
        "DS18B20 → ESP32 → processing → Body Temperature",
        "DHT11 → ESP32 → processing → Room Temperature + Humidity",
        "ESP32 → 20×4 LCD → Local monitoring / user guidance",
        "ESP32 → Wi-Fi → Blynk IoT → Remote monitoring",
        "7.4 V battery → Buck converter → regulated 5 V → ESP32 + sensors + LCD",
      ],
      development: [
        "Designed a modular architecture in which the sensors act as inputs and the ESP32 performs acquisition, processing and communication.",
        "Integrated MAX30102 through I2C, DS18B20 through OneWire and DHT11 through GPIO.",
        "Implemented averaging-based filtering and range validation to reduce fluctuations and reject invalid readings.",
        "Developed a state-based workflow covering welcome display, room-condition monitoring, finger detection, vital measurement and final result transmission.",
        "Implemented local 20×4 LCD output and Wi-Fi communication with the Blynk IoT platform.",
        "Designed a SolidWorks enclosure with openings for the LCD and sensors and provisions for organised internal wiring.",
      ],
      testing: [
        "The experimental environment was controlled for room temperature and light intensity, while the subject remained still during measurements.",
        "Multiple readings were recorded for each parameter to evaluate the system output.",
        "Filtering was evaluated for reducing irrelevant fluctuations in sensor readings.",
        "Blynk graphs were used to observe heart rate, SpO₂ and body-temperature trends over time.",
        "The complete system was tested through component setup, hardware integration, programming, IoT integration and bug fixing stages.",
      ],
      results: [
        "Recorded sample values were 72 BPM heart rate, 98% SpO₂, 36.7°C body temperature, 29°C room temperature and 65% humidity.",
        "The measured values were reported within the corresponding normal/acceptable ranges used in the project evaluation.",
        "The system provided real-time local output and Blynk IoT visualization, with little delay reported during IoT data transfer.",
        "Filtering improved stability of displayed measurements, although the report notes a trade-off between filtering and response latency.",
      ],
      limitations: [
        "The low-cost sensors do not provide medically accurate readings comparable with clinical equipment.",
        "Sensor placement, user movement and lighting conditions can affect measurements.",
        "IoT performance depends on Wi-Fi stability and may experience transfer delay when the network is poor.",
      ],
      takeaway:
        "The project demonstrates end-to-end embedded IoT development: multi-protocol sensor integration, real-time processing, state-based software, local HMI, wireless communication and physical enclosure design.",
    },
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Robotics & Embedded",
    description: "Building and integrating embedded robotic systems.",
    skills: [
      "Robotics",
      "Embedded Systems",
      "ESP32",
      "Arduino",
      "Sensor Integration",
      "IoT",
    ],
  },
  {
    number: "02",
    title: "Automation & Control",
    description: "Control systems and industrial automation technologies.",
    skills: [
      "PLC",
      "HMI",
      "PID Control",
      "Motor Control",
      "VFD",
      "Industrial Automation",
    ],
  },
  {
    number: "03",
    title: "Mechanical Engineering",
    description: "Mechanical systems, maintenance and machine design.",
    skills: [
      "SOLIDWORKS",
      "Mechanical Maintenance",
      "Electric Motors",
      "Hydraulics",
      "Pumps",
      "Gearboxes",
      "Conveyors",
    ],
  },
  {
    number: "04",
    title: "Software & Electronics",
    description: "Programming, electronics and engineering development tools.",
    skills: [
      "C++",
      "Python",
      "MATLAB",
      "Arduino IDE",
      "PCB Design",
      "Circuit Design",
    ],
  },
];

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeEvidenceProject, setActiveEvidenceProject] = useState(null);
  const [activeEvidence, setActiveEvidence] = useState(null);
  const [activeExperienceSection, setActiveExperienceSection] = useState(null);
  const [menu, setMenu] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <div className="site">

      {/* ================= NAV ================= */}

      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo" onClick={closeMenu}>
            DE<span>.</span>
          </a>

          <nav className={menu ? "nav-menu active" : "nav-menu"}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#evidence" onClick={closeMenu}>Evidence</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#education" onClick={closeMenu}>Education</a>
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="nav-button nav-talk">
              Let's Talk <span>↗</span>
            </a>
            <a
              href="/cv/Dumindu-Ekanayaka-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="nav-cv"
            >
              <span>▣</span> View CV
            </a>
          </div>

          <button
            className="mobile-menu"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
          >
            <i></i>
            <i></i>
          </button>

        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">
        <div className="hero-container">

          <div className="hero-main">

            <div className="hero-status">
              <span></span>
              MECHATRONICS & ROBOTICS ENGINEER
            </div>

            <h1>
              Building
              <br />
              <em>intelligent</em>
              <br />
              machines.
            </h1>

            <p className="hero-copy">
              Engineer focused on robotics, embedded systems, automation
              and control — turning engineering concepts into working
              physical systems.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                View Projects
                <span>↗</span>
              </a>

              <a
                href="/cv/Dumindu-Ekanayaka-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="outline-btn"
              >
                View CV
              </a>
            </div>

          </div>

          <div className="hero-panel">

            <div className="panel-header">
              <span>ENGINEERING PROFILE</span>
              <span>DE / 2026</span>
            </div>

            <div className="panel-body">

              <div className="engineering-symbol">
                <div className="symbol-ring ring-1"></div>
                <div className="symbol-ring ring-2"></div>
                <div className="symbol-core"></div>

                <div className="symbol-line line-a"></div>
                <div className="symbol-line line-b"></div>
                <div className="symbol-line line-c"></div>

                <span className="axis x">X</span>
                <span className="axis y">Y</span>
                <span className="axis z">Z</span>
              </div>

              <div className="panel-label label-top">
                EMBEDDED
              </div>

              <div className="panel-label label-right">
                CONTROL
              </div>

              <div className="panel-label label-bottom">
                ROBOTICS
              </div>

              <div className="coordinates">
                <span>X 01.284</span>
                <span>Y 04.921</span>
                <span>Z 02.110</span>
              </div>

            </div>

            <div className="panel-footer">
              <div>
                <small>DEGREE</small>
                <strong>BEng (Hons)</strong>
              </div>

              <div>
                <small>CLASS</small>
                <strong>Upper Second</strong>
              </div>

              <div>
                <small>FOCUS</small>
                <strong>Robotics</strong>
              </div>
            </div>

          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL</span>
          <div></div>
          <span>01 / 09</span>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="section about" id="about">

        <SectionTitle number="01" title="ENGINEERING PROFILE" />

        <div className="about-layout">

          <div className="large-heading">
            <h2>
              Engineering
              <br />
              <span>that works.</span>
            </h2>
          </div>

          <div className="about-content">

            <p className="large-text">
              I am a Mechatronics and Robotics Engineer interested in
              designing and building intelligent machines through the
              integration of mechanical systems, electronics, embedded
              computing and control.
            </p>

            <p>
              My approach is practical and system-oriented. I focus on
              understanding the engineering problem, designing the system,
              integrating hardware and software, testing real behaviour
              and improving performance.
            </p>

            <div className="discipline-grid">

              <Discipline
                number="01"
                title="MECHANICAL"
                text="Machine design, mechanisms, maintenance & CAD."
              />

              <Discipline
                number="02"
                title="ELECTRONICS"
                text="Sensors, circuits, PCB design & embedded hardware."
              />

              <Discipline
                number="03"
                title="CONTROL"
                text="PID, motor control, feedback & automation."
              />

            </div>

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section className="section projects" id="projects">

        <SectionTitle number="02" title="SELECTED PROJECTS" />

        <div className="section-intro">

          <h2>
            Designed.
            <br />
            <span>Built. Tested.</span>
          </h2>

          <p>
            Selected engineering projects showing how I combine mechanical
            design, embedded electronics, sensing, control and software to
            build and validate working physical systems.
          </p>

        </div>

        <div className="project-stack">

          {projects.map((project) => (

            <article className="project" key={project.id}>

              <div className="project-visual">

                <img
                  src={project.media}
                  alt={project.title}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div className="project-placeholder">
                  <div className="placeholder-cross">+</div>

                  <span>PROJECT MEDIA</span>

                  <strong>{project.id}</strong>

                  <small>
                    REAL PROJECT PHOTOS WILL BE ADDED
                  </small>
                </div>

                <div className="project-index">
                  {project.id}
                </div>

                <div className="project-category">
                  {project.category}
                </div>

              </div>

              <div className="project-details">

                <div className="project-top">
                  <span>{project.id === "01" ? "FEATURED PROJECT" : `PROJECT ${project.id}`}</span>

                  <button
                    onClick={() => setActiveProject(project)}
                  >
                    VIEW CASE STUDY <b>↗</b>
                  </button>
                </div>

                <h3>{project.title}</h3>

                <p>{project.short}</p>

                <div className="project-tech">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-arrow">
                  ↗
                </div>

              </div>

            </article>

          ))}

        </div>
      </section>

      {/* ================= ENGINEERING EVIDENCE ================= */}

      <section className="section evidence" id="evidence">

        <SectionTitle number="03" title="ENGINEERING EVIDENCE" />

        <div className="section-intro">
          <h2>
            Project by
            <br />
            <span>project.</span>
          </h2>

          <p>
            A project-by-project record of the engineering evidence behind
            each build — from system architecture and CAD to testing,
            measurements and interface development.
          </p>
        </div>

        <div className="evidence-projects evidence-project-select-grid">

          <EvidenceProject
            number="01"
            category="ROBOTICS / CONTROL"
            title="Self-Balancing Mobile Robot"
            description="Explore the engineering evidence behind the self-balancing platform — control, mechanical design, validation, wireless interface and safety."
            items={[
              ["01", "SYSTEM ARCHITECTURE", "Distributed Control Architecture", "ESP32-based architecture integrating inertial sensing, PID balance control, encoder feedback, wireless control and ultrasonic safety functions."],
              ["02", "CONTROL / TESTING", "PID & Dynamic Response", "Control development supported by tilt-angle, transient-response, control-output, error-reduction and disturbance-response analysis."],
              ["03", "MECHANICAL / CAD", "Chassis & Hardware Layout", "SolidWorks chassis development and physical component arrangement used to integrate the drivetrain, electronics and balancing mechanism."],
              ["04", "VALIDATION", "Load & Surface Testing", "Experimental validation included load testing from 0 g to 250 g, disturbance recovery and surface-performance evaluation."],
              ["05", "INTERFACE / SAFETY", "Wireless UI & Obstacle Detection", "Web-based robot control together with ultrasonic distance monitoring and warning behaviour for safer operation."]
            ]}
            onOpen={setActiveEvidenceProject}
          />

          <EvidenceProject
            number="02"
            category="EMBEDDED / IoT"
            title="IoT-Based Health Monitoring System"
            description="Explore the engineering evidence behind the multi-sensor monitoring platform — sensing, processing, IoT communication, measurements and physical integration."
            items={[
              ["01", "SYSTEM ARCHITECTURE", "Sensor → ESP32 → Output", "MAX30102, DS18B20 and DHT11 provide physiological and environmental inputs to the ESP32, with local LCD and Blynk IoT outputs."],
              ["02", "DATA ACQUISITION", "Multi-Protocol Sensor Integration", "The system uses I2C, OneWire and GPIO communication to acquire sensor data continuously."],
              ["03", "DATA PROCESSING", "Filtering & Validation", "Averaging-based filtering and range validation were applied to improve stability and reliability of sensor readings."],
              ["04", "MEASUREMENTS", "Recorded Test Readings", "Sample results included 72 BPM, 98% SpO₂, 36.7°C body temperature, 29°C room temperature and 65% humidity."],
              ["05", "CAD / INTEGRATION", "Enclosure & Physical Integration", "SolidWorks enclosure development demonstrates the transition from the electronic prototype to an integrated physical monitoring system."]
            ]}
            onOpen={setActiveEvidenceProject}
          />

        </div>

        <div className="evidence-note">
          <span>MEDIA STATUS</span>
          <p>
            Real project photographs, CAD screenshots, circuit diagrams,
            graphs and interface captures can be attached to each evidence
            item as the portfolio media library is built.
          </p>
        </div>

      </section>

      {/* ================= ENGINEERING PROCESS ================= */}

      <section className="section process">

        <SectionTitle number="04" title="ENGINEERING PROCESS" />

        <div className="process-layout">

          <div className="large-heading">
            <h2>
              From idea
              <br />
              to <span>machine.</span>
            </h2>
          </div>

          <div className="process-list">

            <ProcessItem
              number="01"
              title="DEFINE"
              text="Understand the engineering problem, requirements and expected system behaviour."
            />

            <ProcessItem
              number="02"
              title="DESIGN"
              text="Develop mechanical, electrical and software architecture around the requirements."
            />

            <ProcessItem
              number="03"
              title="BUILD"
              text="Integrate hardware, sensors, actuators, controllers and embedded software."
            />

            <ProcessItem
              number="04"
              title="TEST"
              text="Validate real system behaviour, identify limitations and improve performance."
            />

          </div>

        </div>
      </section>

      {/* ================= INDUSTRIAL EXPERIENCE ================= */}

      <section className="section experience" id="experience">
        <SectionTitle number="05" title="INDUSTRIAL EXPERIENCE" />

        <div className="experience-select-wrap">
          <button
            className="experience-select-card"
            type="button"
            onClick={() => setActiveExperienceSection({
              company: "ROCELL",
              location: "EHELIYAGODA",
              role: "Engineer Intern",
              period: "MAR 2025 — SEP 2025",
            })}
          >
            <div className="experience-card-visual">
              <span className="experience-card-index">01</span>
              <div className="experience-card-grid"></div>
              <div className="experience-card-mark">+</div>
              <span className="experience-card-label">INDUSTRIAL PLACEMENT</span>
            </div>

            <div className="experience-card-content">
              <div className="experience-card-top">
                <span>ENGINEER INTERN</span>
                <span>MAR 2025 — SEP 2025</span>
              </div>

              <h2>
                Engineering
                <br />
                <em>in industry.</em>
              </h2>

              <p>
                Industrial engineering exposure across factory maintenance,
                production analysis, engineering drawings and improvement
                activities at Rocell, Eheliyagoda.
              </p>

              <div className="experience-card-tags">
                <span>MAINTENANCE</span>
                <span>MECHANICAL SYSTEMS</span>
                <span>SOLIDWORKS</span>
                <span>PROCESS IMPROVEMENT</span>
              </div>

              <div className="experience-card-action">
                <span>VIEW INDUSTRIAL EXPERIENCE</span>
                <b>↗</b>
              </div>
            </div>
          </button>
        </div>

        <div className="experience-note">
          <span>EXPERIENCE RECORD</span>
          <p>
            Select the industrial placement to explore the engineering areas,
            responsibilities and practical learning from the placement.
          </p>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section className="section skills" id="skills">

        <SectionTitle number="06" title="TECHNICAL CAPABILITIES" />

        <div className="section-intro">

          <h2>
            Tools for
            <br />
            <span>building.</span>
          </h2>

          <p>
            A multidisciplinary engineering foundation covering robotics,
            embedded systems, industrial automation, mechanical engineering,
            programming and electronics.
          </p>

        </div>

        <div className="skills-grid">

          {skillGroups.map((group) => (

            <div className="skill-card" key={group.number}>

              <div className="skill-number">
                {group.number}
              </div>

              <h3>{group.title}</h3>

              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= EDUCATION ================= */}

      <section className="section education" id="education">

        <SectionTitle number="07" title="EDUCATION & CERTIFICATIONS" />

        <div className="education-layout">

          <div>

            <h3 className="column-title">EDUCATION</h3>

            <EducationItem
              date="2025 — 2026"
              title="BEng (Hons) Mechatronics & Robotics Engineering"
              institution="Anglia Ruskin University — UK"
              result="Upper Second Class Honours"
            />

            <EducationItem
              date="2023 — 2025"
              title="Pearson BTEC HND Mechanical Engineering"
              institution="CINEC Campus"
              result="Merit Pass"
            />

          </div>

          <div>

            <h3 className="column-title">CERTIFICATIONS</h3>

            <div className="cert-list">

              <Certificate
                number="01"
                title="Robotics"
                institution="Southern IRAA Pvt Ltd"
              />

              <Certificate
                number="02"
                title="Artificial Intelligence"
                institution="Southern IRAA Pvt Ltd"
              />

              <Certificate
                number="03"
                title="Industrial Automation Engineering"
                institution="EPIC Campus — PLC & HMI Programming"
              />

              <Certificate
                number="04"
                title="Diploma in English"
                institution=""
              />

            </div>

          </div>

        </div>
      </section>

      {/* ================= CURRENT FOCUS ================= */}

      <section className="section future">

        <div className="future-box">

          <div className="future-top">
            <span>
              <i></i>
              CURRENT ENGINEERING DIRECTION
            </span>

            <span>08</span>
          </div>

          <div className="future-content">

            <h2>
              Building toward
              <br />
              <span>intelligent robotics.</span>
            </h2>

            <p>
              Continuing to develop deeper capability in advanced embedded
              control, autonomous robotics, computer vision, AI and
              intelligent robotic systems.
            </p>

          </div>

          <div className="future-tags">

            <span>ADVANCED EMBEDDED</span>
            <span>REAL-TIME CONTROL</span>
            <span>ROS 2</span>
            <span>AUTONOMOUS ROBOTICS</span>
            <span>COMPUTER VISION</span>
            <span>AI & ROBOTICS</span>

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="section contact contact-premium" id="contact">

        <div className="contact-layout">

          <div className="contact-portrait">
            <img src="/projects/contact-portrait.png" alt="Professional engineering portrait" />
            <div className="portrait-overlay"></div>
            <div className="portrait-caption">
              <strong>Dumindu Ekanayaka</strong>
              <span>ENGINEER · INNOVATOR · PROBLEM SOLVER</span>
            </div>
          </div>

          <div className="contact-content">
            <div className="contact-topline">
              <span><b>09</b> / CONTACT</span>
              <span className="availability"><i></i> OPEN TO OPPORTUNITIES</span>
            </div>

            <h2>
              Let's build
              <br />
              <span>something intelligent.</span>
            </h2>

            <p className="contact-intro">
              Open to engineering opportunities in robotics, mechatronics,
              automation, embedded systems and industrial engineering.
            </p>

            <div className="contact-list contact-cards">
              <a href="mailto:duminduudakara0421@gmail.com" className="contact-card">
                <span className="contact-icon">✉</span>
                <span className="contact-card-copy"><small>EMAIL</small><strong>duminduudakara0421@gmail.com</strong></span>
                <b>↗</b>
              </a>

              <a href="tel:+94764124201" className="contact-card">
                <span className="contact-icon">⌕</span>
                <span className="contact-card-copy"><small>PHONE</small><strong>+94 76 412 4201</strong></span>
                <b>↗</b>
              </a>

              <a href="https://www.linkedin.com/in/dumindu-ekanayak" target="_blank" rel="noreferrer" className="contact-card">
                <span className="contact-icon contact-icon-text">in</span>
                <span className="contact-card-copy"><small>LINKEDIN</small><strong>linkedin.com/in/dumindu-ekanayak</strong></span>
                <b>↗</b>
              </a>

              <a href="https://github.com/duminduue" target="_blank" rel="noreferrer" className="contact-card">
                <span className="contact-icon contact-icon-text">GH</span>
                <span className="contact-card-copy"><small>GITHUB</small><strong>github.com/duminduue</strong></span>
                <b>↗</b>
              </a>
            </div>
          </div>

        </div>

        <div className="contact-highlights">
          <div><span>⚙</span><p><strong>REAL PROJECTS</strong><small>Practical Engineering Solutions</small></p></div>
          <div><span>▥</span><p><strong>HANDS-ON EXPERIENCE</strong><small>From Concept to Real-world</small></p></div>
          <div><span>♧</span><p><strong>CONTINUOUS LEARNING</strong><small>Adapting to New Technologies</small></p></div>
          <div><span>♧</span><p><strong>LET'S COLLABORATE</strong><small>Build a Smarter Tomorrow</small></p></div>
        </div>

      </section>

      <ExperienceExplorer
        experience={activeExperienceSection}
        section={activeExperienceSection?.selectedSection || null}
        onClose={() => {
          setActiveExperienceSection(null);
        }}
        onSelectSection={(section) =>
          setActiveExperienceSection((current) => ({ ...current, selectedSection: section }))
        }
        onBack={() =>
          setActiveExperienceSection((current) => ({ ...current, selectedSection: null }))
        }
      />

      <EvidenceExplorer
        project={activeEvidenceProject}
        evidence={activeEvidence}
        onClose={() => {
          setActiveEvidence(null);
          setActiveEvidenceProject(null);
        }}
        onSelectEvidence={setActiveEvidence}
        onBackToProject={() => setActiveEvidence(null)}
      />

      {/* ================= FOOTER ================= */}

      <footer>

        <div className="footer-inner">

          <div>
            <div className="footer-logo">
              DE<span>.</span>
            </div>

            <p>
              Mechatronics & Robotics Engineer
            </p>
          </div>

          <div className="footer-meta">
            <span>© 2026 Dumindu Ekanayaka</span>
            <span>ENGINEER / BUILDER / LEARNER</span>
          </div>

        </div>

      </footer>

      {/* ================= DETAILED CASE STUDY ================= */}
      {activeProject && (
        <div
          className="modal-overlay case-study-overlay"
          onClick={() => setActiveProject(null)}
        >
          <article
            className="modal case-study-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setActiveProject(null)}
              aria-label="Close case study"
            >
              ×
            </button>

            <div className="case-study-header">
              <div className="case-study-meta">
                <span>PROJECT {activeProject.id}</span>
                <span>{activeProject.category}</span>
              </div>

              <h2>{activeProject.title}</h2>
              <p className="modal-description">{activeProject.short}</p>
            </div>

            <div className="case-study-hero">
              <img
                src={activeProject.media}
                alt={`${activeProject.title} project`}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="case-study-hero-overlay">
                <span>ENGINEERING CASE STUDY</span>
                <strong>{activeProject.id}</strong>
              </div>
            </div>

            <div className="case-study-grid">
              <CaseStudySection number="01" title="PROJECT OVERVIEW">
                <p>{activeProject.caseStudy.overview}</p>
              </CaseStudySection>

              <CaseStudySection number="02" title="PROBLEM / OBJECTIVE">
                <p>{activeProject.caseStudy.objective}</p>
              </CaseStudySection>
            </div>

            <CaseStudySection number="03" title="SYSTEM ARCHITECTURE" wide>
              <div className="architecture-flow">
                {activeProject.caseStudy.architecture.map((line, index) => (
                  <div className="architecture-line" key={line}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{line}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <div className="case-study-grid">
              <CaseStudySection number="04" title="SYSTEM SPECIFICATION">
                <div className="spec-table case-study-specs">
                  {activeProject.specs.map(([name, value]) => (
                    <div key={name}>
                      <span>{name}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </CaseStudySection>

              <CaseStudySection number="05" title="ENGINEERING DEVELOPMENT">
                <div className="case-study-list">
                  {activeProject.caseStudy.development.map((item, index) => (
                    <div key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </CaseStudySection>
            </div>

            <div className="case-study-grid">
              <CaseStudySection number="06" title="TESTING & VALIDATION">
                <div className="case-study-list">
                  {activeProject.caseStudy.testing.map((item, index) => (
                    <div key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </CaseStudySection>

              <CaseStudySection number="07" title="RESULTS">
                <div className="case-study-list">
                  {activeProject.caseStudy.results.map((item, index) => (
                    <div key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </CaseStudySection>
            </div>

            <div className="case-study-grid">
              <CaseStudySection number="08" title="LIMITATIONS / NEXT IMPROVEMENTS">
                <div className="case-study-list">
                  {activeProject.caseStudy.limitations.map((item, index) => (
                    <div key={item}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </CaseStudySection>

              <CaseStudySection number="09" title="TECHNOLOGY STACK">
                <div className="case-study-stack">
                  {activeProject.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </CaseStudySection>
            </div>

            <div className="engineering-takeaway">
              <span>ENGINEERING OUTCOME</span>
              <p>{activeProject.caseStudy.takeaway}</p>
            </div>
          </article>
        </div>
      )}

    </div>
  );
}


function ExperienceExplorer({ experience, onClose, section, onSelectSection, onBack }) {
  if (!experience) return null;

  const sections = [
    {
      id: "01",
      category: "ENGINEERING ENVIRONMENT",
      title: "Industrial Engineering Exposure",
      text: "Industrial engineering experience supporting factory maintenance, production analysis, engineering drawings and improvement activities.",
    },
    {
      id: "02",
      category: "MAINTENANCE",
      title: "Maintenance & Machinery",
      text: "Supported maintenance activities involving conveyors, electric motors, hydraulics, pumps and gearboxes.",
    },
    {
      id: "03",
      category: "PRODUCTION / RELIABILITY",
      title: "Problem Analysis",
      text: "Assisted production-stoppage analysis together with preventive and corrective maintenance activities.",
    },
    {
      id: "04",
      category: "MECHANICAL DESIGN",
      title: "SOLIDWORKS Engineering Drawings",
      text: "Developed 3D machine and engineering drawings using SOLIDWORKS.",
    },
    {
      id: "05",
      category: "PROCESS IMPROVEMENT",
      title: "Pallet-Loading Efficiency",
      text: "Contributed to pallet-loading efficiency improvement while maintaining industrial safety practices.",
    },
  ];

  return (
    <div className="modal-overlay experience-explorer-overlay" onClick={onClose}>
      <article className="modal experience-explorer-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose} aria-label="Close industrial experience">×</button>

        {!section ? (
          <>
            <div className="experience-explorer-header">
              <button className="experience-back" type="button" onClick={onClose}>
                ← ALL EXPERIENCE
              </button>
              <div className="experience-explorer-meta">
                <span>INDUSTRIAL PLACEMENT</span>
                <span>{experience.location}</span>
              </div>
              <h2>{experience.role}</h2>
              <p>{experience.company} — {experience.location}</p>
              <strong>{experience.period}</strong>
            </div>

            <div className="experience-explorer-intro">
              <span>SELECT AN ENGINEERING AREA</span>
              <p>Explore the practical engineering exposure and responsibilities from the industrial placement.</p>
            </div>

            <div className="experience-section-list">
              {sections.map((item) => (
                <button
                  className="experience-section-item"
                  type="button"
                  key={item.id}
                  onClick={() => onSelectSection(item)}
                >
                  <span>{item.id}</span>
                  <div>
                    <small>{item.category}</small>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <b>↗</b>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="experience-detail-header">
              <button className="experience-back" type="button" onClick={onBack}>
                ← INDUSTRIAL EXPERIENCE
              </button>
              <div className="experience-detail-meta">
                <span>{section.id}</span>
                <span>{section.category}</span>
              </div>
              <h2>{section.title}</h2>
            </div>

            <div className="experience-detail-layout">
              <div className="experience-detail-media">
                <div className="experience-media-cross">+</div>
                <span>INDUSTRIAL EVIDENCE</span>
                <strong>MEDIA TO BE ADDED</strong>
                <p>Actual workplace photographs, drawings or supporting evidence can be placed here.</p>
              </div>

              <div className="experience-detail-content">
                <span>ENGINEERING DESCRIPTION</span>
                <p>{section.text}</p>

                <div className="experience-detail-record">
                  <div>
                    <small>COMPANY</small>
                    <strong>{experience.company}</strong>
                  </div>
                  <div>
                    <small>LOCATION</small>
                    <strong>{experience.location}</strong>
                  </div>
                  <div>
                    <small>ROLE</small>
                    <strong>{experience.role}</strong>
                  </div>
                  <div>
                    <small>PERIOD</small>
                    <strong>{experience.period}</strong>
                  </div>
                </div>

                <div className="experience-detail-source">
                  <span>EXPERIENCE RECORD</span>
                  <p>Content is based on the industrial experience record; supporting media can be added later.</p>
                </div>
              </div>
            </div>
          </>
        )}
      </article>
    </div>
  );
}


function EvidenceProject({ number, category, title, description, items, onOpen }) {
  return (
    <button
      className="evidence-project evidence-project-card"
      onClick={() => onOpen({ number, category, title, description, items })}
      type="button"
    >
      <div className="evidence-project-card-top">
        <span className="evidence-project-number">{number}</span>
        <span className="evidence-project-category">{category}</span>
      </div>

      <div className="evidence-project-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="evidence-project-card-bottom">
        <span>{items.length} EVIDENCE ITEMS</span>
        <strong>VIEW PROJECT EVIDENCE <b>↗</b></strong>
      </div>
    </button>
  );
}


function EvidenceExplorer({
  project,
  evidence,
  onClose,
  onSelectEvidence,
  onBackToProject,
}) {
  if (!project) return null;

  return (
    <div className="modal-overlay evidence-explorer-overlay" onClick={onClose}>
      <article className="modal evidence-explorer-modal" onClick={(e) => e.stopPropagation()}>

        <button className="close-modal" onClick={onClose} aria-label="Close engineering evidence">
          ×
        </button>

        {!evidence ? (
          <>
            <div className="evidence-explorer-header">
              <button className="evidence-back" type="button" onClick={onClose}>
                ← ALL PROJECTS
              </button>
              <div className="case-study-meta">
                <span>PROJECT {project.number}</span>
                <span>{project.category}</span>
              </div>
              <h2>{project.title}</h2>
              <p className="modal-description">{project.description}</p>
            </div>

            <div className="evidence-list-view">
              <div className="evidence-list-heading">
                <span>SELECT EVIDENCE</span>
                <span>{project.items.length} ITEMS</span>
              </div>

              {project.items.map(([itemNumber, type, itemTitle, text]) => (
                <button
                  className="evidence-list-card"
                  key={itemNumber}
                  type="button"
                  onClick={() => onSelectEvidence({ itemNumber, type, itemTitle, text })}
                >
                  <span className="evidence-list-number">{itemNumber}</span>
                  <span className="evidence-list-main">
                    <small>{type}</small>
                    <strong>{itemTitle}</strong>
                    <p>{text}</p>
                  </span>
                  <span className="evidence-list-arrow">↗</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="evidence-detail-header">
              <button className="evidence-back" type="button" onClick={onBackToProject}>
                ← PROJECT EVIDENCE
              </button>
              <div className="case-study-meta">
                <span>PROJECT {project.number}</span>
                <span>EVIDENCE {evidence.itemNumber}</span>
              </div>
              <span className="evidence-detail-type">{evidence.type}</span>
              <h2>{evidence.itemTitle}</h2>
              <p className="modal-description">{evidence.text}</p>
            </div>

            <div className="evidence-detail-media">
              <div className="evidence-detail-cross">+</div>
              <span>ENGINEERING EVIDENCE MEDIA</span>
              <strong>MEDIA TO BE ADDED</strong>
              <p>Real project photographs, CAD screenshots, diagrams, graphs or interface captures can be placed here.</p>
            </div>

            <div className="evidence-detail-footer">
              <span>SOURCE</span>
              <p>Project documentation and engineering development evidence.</p>
            </div>
          </>
        )}

      </article>
    </div>
  );
}


function CaseStudySection({ number, title, children, wide = false }) {
  return (
    <section className={`case-study-section ${wide ? "case-study-section-wide" : ""}`}>
      <div className="case-study-section-heading">
        <span>{number}</span>
        <h4>{title}</h4>
      </div>
      <div className="case-study-section-content">{children}</div>
    </section>
  );
}


/* ================= COMPONENTS ================= */

function SectionTitle({ number, title }) {
  return (
    <div className="section-title">

      <span className="section-number">
        {number}
      </span>

      <span className="section-name">
        {title}
      </span>

      <div></div>

    </div>
  );
}

function Discipline({ number, title, text }) {
  return (
    <div className="discipline">

      <span>{number}</span>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

    </div>
  );
}

function ProcessItem({ number, title, text }) {
  return (
    <div className="process-item">

      <span>{number}</span>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

    </div>
  );
}

function ExperienceItem({ number, text }) {
  return (
    <div className="experience-item">

      <span>{number}</span>

      <p>{text}</p>

    </div>
  );
}

function EducationItem({ date, title, institution, result }) {
  return (
    <div className="education-item">

      <span>{date}</span>

      <h3>{title}</h3>

      <p>{institution}</p>

      <strong>{result}</strong>

    </div>
  );
}

function Certificate({ number, title, institution }) {
  return (
    <div className="certificate">

      <span>{number}</span>

      <div>
        <strong>{title}</strong>
        {institution && <small>{institution}</small>}
      </div>

    </div>
  );
}

export default App;