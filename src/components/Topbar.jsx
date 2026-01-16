import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../store/slices/tabSlice";
import {
  showProjectPreview,
  showResumePreview,
  selectProjectPreview,
  selectResumePreview,
} from "../store/slices/previewSlice";

const Topbar = () => {
  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.tab.activeTab);
  const projectPreview = useSelector(selectProjectPreview);
  const resumePreview = useSelector(selectResumePreview);

  /* ----------------------- Robot Visibility ----------------------- */

  const hideRobot = () => {
    const robot = document.getElementById("robot");
    if (!robot) return;

    robot.style.zIndex = "-1";
    robot.style.opacity = "0";
    robot.style.transform = "scale(0.8) translateY(80px)";
  };

  const showRobot = () => {
    const robot = document.getElementById("robot");
    if (!robot) return;

    robot.style.zIndex = "50";
    robot.style.opacity = "1";
    robot.style.transform = "scale(1) translateY(0)";
  };

  /* ----------------------- Tab Handlers ----------------------- */

  const handleTabClick = (tabId) => {
    dispatch(setActiveTab(tabId));
    showRobot();
  };

  const handleProjectPreview = (url) => {
    hideRobot();
    alert("Scroll down to view the project preview.");
    dispatch(showProjectPreview(url));
  };

  const handleResumePreview = (url) => {
    hideRobot();
    alert("Scroll down to view the resume.");
    dispatch(showResumePreview(url));
  };

  /* ----------------------- UI ----------------------- */

  return (
    <div className="ml-20 h-screen rounded-xl bg-gray-900 text-gray-200 shadow-lg pl-2">
      <div
        className="editor rounded-xl bg-cover bg-center bg-no-repeat p-4"
        style={{ backgroundImage: "url('gradient.png')" }}
      >
        {/* Tabs */}
        <div className="mb-4 flex space-x-4 overflow-x-auto border-b border-gray-700 pb-2">
          {[
            { id: "home", label: "index.html" },
            { id: "about", label: "about.html" },
            { id: "projects", label: "projects.js" },
            { id: "resume", label: "resume.js" },
            { id: "contact", label: "contact.js" },
          ].map(({ id, label }) => (
            <div
              key={id}
              onClick={() => handleTabClick(id)}
              className={`cursor-pointer rounded-t-lg px-4 py-2 transition-all duration-300 ${
                activeTab === id
                  ? "border-b-2 border-green-400 bg-gray-800 text-green-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        {/* ----------------------- HOME ----------------------- */}
        {activeTab === "home" && (
          <div className="space-y-2 font-mono">
            <p className="text-green-400">&lt;h1&gt;</p>
            <p>Welcome to my VS Code–themed portfolio.</p>
            <p className="text-lg font-semibold text-blue-400">
              I&apos;m Nachiketa NR — I don&apos;t just build websites, I elevate
              them.
            </p>
            <p className="text-green-400">&lt;/h1&gt;</p>

            <p className="text-green-400">&lt;p&gt;</p>
            <p className="text-gray-300">
              Strategist. Creator. Innovator — transforming ideas into impactful
              digital experiences.
            </p>
            <p className="text-green-400">&lt;/p&gt;</p>

            <p className="text-green-400">&lt;h2&gt;</p>
            <p>
              <span className="text-yellow-400">Specialized in:</span>
              <span className="ml-1 text-purple-300">
                MERN Stack Development
              </span>{" "}
              |
              <span className="ml-2 text-blue-300">UI / UX Design</span>
            </p>
            <p className="text-green-400">&lt;/h2&gt;</p>
          </div>
        )}

        {/* ----------------------- ABOUT ----------------------- */}
        {activeTab === "about" && (
          <div className="font-mono text-sm leading-relaxed">
            <span className="text-green-400">const</span> about = {"{"}
            <br />
            <span className="ml-4 text-blue-400">name:</span> "Nachiketa NR",
            <br />
            <span className="ml-4 text-blue-400">role:</span> "Full Stack MERN
            Developer",
            <br />
            <span className="ml-4 text-blue-400">skills:</span> {"{"}
            <br />
            <span className="ml-8 text-yellow-400">Frontend:</span> ["HTML",
            "CSS", "JavaScript", "Tailwind CSS"],
            <br />
            <span className="ml-8 text-yellow-400">Backend:</span> ["Node.js",
            "Express.js"],
            <br />
            <span className="ml-8 text-yellow-400">Libraries:</span> ["React",
            "Redux"],
            <br />
            <span className="ml-8 text-yellow-400">Database:</span> ["MongoDB",
            "MariaDB"],
            <br />
            <span className="ml-8 text-yellow-400">Tools:</span> ["Git",
            "Netlify", "Figma"],
            <br />
            {"}"}
          </div>
        )}

        {/* ----------------------- PROJECTS ----------------------- */}
        {activeTab === "projects" && (
          <div className="font-mono text-sm space-y-6">
            <div>
        <span className="text-green-400">const</span> Projects = {"{"}
              <p className="text-blue-400">Meet Connect</p>
               {"{"}
              <p>
         - Full-stack mock interview platform with JWT authentication,
                role-based access control, scheduling, and REST APIs.

                <p>
                 - Implemented secure JWT-based authentication, role-based access control (RBAC), and scalable RESTful APIs.
                </p>
                <p>
                  - Integrated interview scheduling, progress tracking, and categorized resource management modules.
                </p>
                 {"}"}
              </p>
              <button
                onClick={() =>
                  handleProjectPreview(
                    "https://connect-frontend1.netlify.app/"
                  )
                }
                className="mt-2 rounded-md bg-green-600 px-3 py-1 text-white hover:bg-green-700"
              >
                Preview
              </button>
            </div>

            <div>
              <p className="text-blue-400">
                Cryptocurrency Dashboard — Frontend Application
              </p>
               {"{"}
              <p>
              - Developed a responsive and interactive cryptocurrency dashboard using React.js and Tailwind CSS.

                <p>- Integrated real-time market data via the CoinGecko API with centralized state management using Redux.</p>
                <p>
                  - Optimized UI performance and component rendering to deliver a smooth, user-friendly data visualization experience
                </p>
                 {"}"}
              </p>
              <button
                onClick={() =>
                  handleProjectPreview(
                    "https://backend-youtube-subscribers-5fl7.onrender.com"
                  )
                }
                className="mt-2 rounded-md bg-green-600 px-3 py-1 text-white hover:bg-green-700"
              >
                Preview
              </button>
            </div>

                <div>
              <p className="text-blue-400">
                YouTube Subscriber Fetch (Backend)
              </p> {"{"}
              <p>
                  - Backend API service for fetching and managing subscriber data
                with optimized endpoints.

                <p>- Designed well-structured REST API endpoints to ensure reliable and efficient data flow.</p>

                <p>- Followed clean coding principles and modular architecture to enhance scalability, maintainability, and performance.</p>
              </p>
               {"}"} <br />
              <button
                onClick={() =>
                  handleProjectPreview(
                    "https://backend-youtube-subscribers-5fl7.onrender.com"
                  )
                }
                className="mt-2 rounded-md bg-green-600 px-3 py-1 text-white hover:bg-green-700"
              >
                Preview
              </button>
              
            </div>

            
            {projectPreview.isVisible && (
              <iframe
                src={projectPreview.url}
                title="Project Preview"
                width="70%"
                height="500"
                className="rounded-lg border border-gray-700"
              />
            )}
            {"}"}
          </div>
        )}

        {/* ----------------------- RESUME ----------------------- */}
        {activeTab === "resume" && (
          <div className="font-mono">
            <button
              onClick={() =>
                handleResumePreview(
                  "Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER.pdf"
                )
              }
              className="m-10 rounded-md bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
            >
              Preview Resume
            </button>

            {resumePreview.isVisible && (
              <iframe
                src={resumePreview.url}
                title="Resume Preview"
                width="70%"
                height="730"
                className="rounded-lg border border-gray-700"
              />
            )}
          </div>
        )}

        {/* ----------------------- CONTACT ----------------------- */}
        {activeTab === "contact" && (
          <div className="font-mono text-sm">
            <span className="text-green-400">const</span> contact = {"{"}
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">email:</span>{" "}
            "nrnachi34@gmail.com",
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">github:</span>{" "}
            "github.com/Nachi12",
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">linkedin:</span>{" "}
            "linkedin.com/in/nachiketa",
            <br />
            {"}"};
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
