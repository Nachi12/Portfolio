// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setActiveTab } from "../store/slices/tabSlice";
// import {
//   showProjectPreview,
//   showCertificatePreview,
//   showResumePreview,
//   selectProjectPreview,
//   selectCertificatePreview,
//   selectResumePreview,
// } from "../store/slices/previewSlice";

// const Topbar = () => {
//   const dispatch = useDispatch();
//   const activeTab = useSelector((state) => state.tab.activeTab);
//   const projectPreview = useSelector(selectProjectPreview);
//   // const certificatePreview = useSelector(selectCertificatePreview);
//   const resumePreview = useSelector(selectResumePreview);

//   const handleTabClick = (tabId) => {
//     dispatch(setActiveTab(tabId));
//     handleShowRobot(); // 👈 robot comes back
//   };

//   // 🔹 Hide Robot when any preview opens
//   // 🔹 Hide Robot Function
//   const handleHideRobot = () => {
//     const robot = document.getElementById("robot");
//     if (robot) {
//       robot.style.zIndex = "-1";
//       robot.style.opacity = "0";
//       robot.style.transform = "scale(0.8) translateY(80px)";
//     }
//   };

//   // 🔹 Show Robot Again (when switching tabs)
//   const handleShowRobot = () => {
//     const robot = document.getElementById("robot");
//     if (robot) {
//       robot.style.zIndex = "50";
//       robot.style.opacity = "1";
//       robot.style.transform = "scale(1) translateY(0)";
//     }
//   };

//   // 🔹 Project Preview
//   const handleProjectPreview = (url) => {
//     handleHideRobot();
//     alert("Scroll down to see the project preview");
//     dispatch(showProjectPreview(url));
//   };

//   // 🔹 Certificate Preview
//   // const handleCertificatePreview = (url) => {
//   //   handleHideRobot();
//   //   alert("Scroll down to see the certificate preview");
//   //   dispatch(showCertificatePreview(url));
//   // };

//   // 🔹 Resume Preview
//   const handleResumePreview = (url) => {
//     handleHideRobot();
//     alert("Scroll down to see the resume preview");
//     dispatch(showResumePreview(url));
//   };

//   return (
//     <div className="pl-2 rounded-xl shadow-lg bg-gray-900 text-gray-200 ml-20 h-screen">
//       <div
//         className="editor bg-cover bg-center bg-no-repeat p-4 rounded-xl"
//         style={{ backgroundImage: "url('gradient.png')" }}
//       >
//         {/* Tabs */}
//         <div className="flex space-x-4 border-b border-gray-700 pb-2 mb-4 overflow-x-auto">
//           {[
//             { id: "home", label: "index.html" },
//             { id: "about", label: "about.html" },
//             { id: "projects", label: "projects.js" },
//             // { id: "certificates", label: "certificates.js" },
//             { id: "resume", label: "resume.js" },
//             { id: "contact", label: "contact.js" },
//           ].map((tab) => (
//             <div
//               key={tab.id}
//               className={`px-4 py-2 rounded-t-lg cursor-pointer transition-all duration-300 
//               ${
//                 activeTab === tab.id
//                   ? "bg-gray-800 text-green-400 border-b-2 border-green-400"
//                   : "text-gray-400 hover:text-gray-200"
//               }`}
//               onClick={() => handleTabClick(tab.id)}
//             >
//               {tab.label}
//             </div>
//           ))}
//         </div>

//         {/* Home Tab */}
//         <div
//           className={`code ${
//             activeTab === "home" ? "block" : "hidden"
//           } font-mono space-y-2`}
//           id="code-home"
//         >
//           <p className="text-green-400">&lt;h1&gt;</p>
//           <p>Welcome to MY VS-Code Theme Based Portfolio.</p>
//           <p className="text-blue-400 text-lg font-semibold">
//             I&apos;am NACHIKETA NR — I don&apos;t just build Websites, I elevate
//             them.
//           </p>
//           <p className="text-green-400">&lt;/h1&gt;</p>

//           <p className="text-green-400">&lt;p&gt;</p>
//           <p className="text-gray-300">
//             Strategist. Creator. Innovator — transforming ideas into impactful
//             digital experiences.
//           </p>
//           <p className="text-green-400">&lt;/p&gt;</p>

//           <p className="text-green-400">&lt;h2&gt;</p>
//           <p>
//             <span className="text-yellow-400">Specialized in:</span>
//             <span className="text-purple-300"> MERN STACK DEVELOPMENT</span> |
//             <span className="text-blue-300 ml-2">UX | UI Designing.</span>
//           </p>
//           <p className="text-green-400">&lt;/h2&gt;</p>
//         </div>

//         {/* About Tab */}
//         <div
//           className={`code ${
//             activeTab === "about" ? "block" : "hidden"
//           } font-mono text-sm leading-relaxed`}
//           id="code-about"
//         >
//           <span className="text-green-400">const</span> about = {"{"}
//           <br />
//           <span className="ml-4 text-blue-400">name:</span> "Nachiketa NR",
//           <br />
//           <span className="ml-4 text-blue-400">role:</span> "Full Stack Web
//           Developer [MERN]",
//           <br />
//           <span className="ml-4 text-blue-400">skills:</span> {"{"}
//           <br />
//           <span className="ml-8 text-yellow-400">Frontend:</span> ["HTML",
//           "CSS", "JavaScript", "Tailwind CSS"],
//           <br />
//           <span className="ml-8 text-yellow-400">Backend:</span> ["Node.js",
//           "Express.js"],
//           <br />
//           <span className="ml-8 text-yellow-400">JS Libraries:</span>{" "}
//           ["React.js", "Redux", "Ajax", "jQuery"],
//           <br />
//           <span className="ml-8 text-yellow-400">Database:</span> ["MongoDB",
//           "MariaDB"],
//           <br />
//           <span className="ml-8 text-yellow-400">UI/UX Tools:</span> ["Figma",
//           "Adobe XD"],
//           <br />
//           <span className="ml-8 text-yellow-400">Other Tools:</span> ["GitHub",
//           "Netlify", "ChatGPT"],
//           <br />
//           {"}"}
//         </div>

//         {/* Projects Tab */}
//         <div
//           className={`code ${
//             activeTab === "projects" ? "block" : "hidden"
//           } font-mono text-sm`}
//           id="code-projects"
//         >
//           <p className="text-green-400">const</p> projects = [<br />
//           &nbsp;&nbsp;{"{"}
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">Id:</span>1,
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">
//             Title:
//           </span>{" "}
//           "Meet Connect",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Frontend-Tech-Used:</span>{" "}
//           "React/JS/Tailwind CSS",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Backend-Tech-Used:</span> "Node.js,
//           Express.js, MongoDB, API",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Project Description:</span> "Designed,
//           built, tested, and deployed a full-stack mock interview platform based
//           on functional requirements.
//           <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Implemented secure JWT authentication,
//           role-based access control, and RESTful APIs.</p> 
//           <p> &nbsp;&nbsp;&nbsp;&nbsp;• Integrated scheduling,
//           interview tracking, and categorized resource management modules.</p>
//            <p> &nbsp;&nbsp;&nbsp;&nbsp;• Applied input validation, robust error handling, and automated testing to ensure reliability and performance".</p>
//           <br />
//           &nbsp;&nbsp;{"},"}
//           <br />
//           <button
//             onClick={() =>
//               handleProjectPreview("https://connect-frontend1.netlify.app/")
//             }
//             className="mt-3 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
//           >
//             Preview
//           </button>
//           <br />
//           {/* Second Project */}
//           <br />
//           &nbsp;&nbsp;{"{"}
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">Id:</span>2,
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">
//             Title:
//           </span>{" "}
//           "YouTube-Subscriber Fetching through API (Backend)",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Frontend-Tech-Used:</span>{" "}
//           "React/JS/Tailwind CSS",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Backend-Tech-Used:</span> "Node.js,
//           Express.js, MongoDB, API",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Project Description:</span> "• Developed a responsive dashboard using React.js and Tailwind CSS.
//           <p>&nbsp;&nbsp;&nbsp;&nbsp;• Integrated live data using CoinGecko API and managed application state with Redux.</p>
//           <p>&nbsp;&nbsp;&nbsp;&nbsp;• Optimized UI performance and ensured a user-friendly data visualization experience."</p>
//           <br />
//           &nbsp;&nbsp;{"},"}
//           <br />
//           <button
//             onClick={() =>
//               handleProjectPreview(
//                 "https://backend-youtube-subscribers-5fl7.onrender.com"
//               )
//             }
//             className="mt-3 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
//           >
//             Preview
//           </button>
//           <br />
//           {/* Third Project */}
//           <br />
//           &nbsp;&nbsp;{"{"}
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">Id:</span>3,
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">
//             Title:
//           </span>{" "}
//           "Cryptocurrency Dashboard (Frontend)",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Frontend-Tech-Used:</span>{" "}
//           "React/JS/Tailwind CSS",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Backend-Tech-Used:</span> "Node.js,
//           Express.js, MongoDB, API",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Project Description:</span> "Developed
//           the ",
//           <br />
//           &nbsp;&nbsp;{"},"}
//           <br />
//           <button
//             onClick={() =>
//               handleProjectPreview("https://connect-frontend1.netlify.app/")
//             }
//             className="mt-3 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
//           >
//             Preview
//           </button>
//           <br />
//           {projectPreview.isVisible && (
//             <div className="mt-6">
//               <h3 className="text-green-400 font-bold mb-2">
//                  Live Project Preview
//               </h3>
//               <iframe
//                 src={projectPreview.url}
//                 width="70%"
//                 height="500"
//                 className="border border-gray-700 rounded-lg"
//                 title="Project Preview"
//               ></iframe>
//             </div>
//           )}
//         </div>
//         {/* Certificates Tab
//         <div
//           className={`code ${
//             activeTab === "certificates" ? "block" : "hidden"
//           } font-mono text-sm`}
//           id="code-certificates"
//         >
//           <p className="text-green-400">const</p> Certificates = [<br />
//           &nbsp;&nbsp;{"{"}
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Course Certificates:</span> "Drive
//           Link",
//           <br />
//           <button
//             onClick={() =>
//               handleCertificatePreview(
//                 "https://drive.google.com/drive/folders/1XNbY_0b4zdaBay1WxuSQpTEACe-diFVw?usp=sharing"
//               )
//             }
//             className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//           >
//             Preview Certificate
//           </button>
//           <br />
//           &nbsp;&nbsp;{"}"},
//           <br />
//           ];
//           {certificatePreview.isVisible && (
//             <div className="mt-6">
//               <h3 className="text-green-400 font-bold mb-2">
//                 🎖️ Live Certificate Preview
//               </h3>
//               <iframe
//                 src={certificatePreview.url}
//                 width="70%"
//                 height="600"
//                 className="border border-gray-700 rounded-lg"
//                 title="Certificate Preview"
//               ></iframe>
//             </div>
//           )}
//         </div> */}

//         {/* Resume Tab */}
//         <div
//           className={`code ${
//             activeTab === "resume" ? "block" : "hidden"
//           } font-mono`}
//           id="code-resume"
//         >
//           <h1>Click Preview Button To See the Resume</h1>
//           <button
//             onClick={() =>
//               handleResumePreview(
//                 "Resume/NACHIKETA_NR_MERN_STACK_DEVELOPER (1).pdf"
//               )
//             }
//             className="px-6 py-2 m-14 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
//           >
//             Preview Resume
//           </button>

//           {resumePreview.isVisible && (
//             <div className="mt-6">
//               <h3 className="text-green-400 font-bold mb-2"></h3>
//               <iframe
//                 src={resumePreview.url}
//                 width="70%"
//                 height="730"
//                 className="border border-gray-700 rounded-lg"
//                 title="Resume Preview"
//               ></iframe>
//             </div>
//           )}
//         </div>

//         {/* Contact Tab */}
//         <div
//           className={`code ${
//             activeTab === "contact" ? "block" : "hidden"
//           } font-mono text-sm`}
//           id="code-contact"
//         >
//           <span className="text-green-400">const</span> contact = {"{"}
//           <br />
//           &nbsp;&nbsp;<span className="text-blue-400">email:</span>{" "}
//           "nrnachi34@gmail.com",
//           <br />
//           &nbsp;&nbsp;<span className="text-blue-400">github:</span>{" "}
//           "https://github.com/Nachi12",
//           <br />
//           &nbsp;&nbsp;<span className="text-blue-400">linkedin:</span>{" "}
//           "linkedin.com/in/nachiketa",
//           <br />
//           &nbsp;&nbsp;<span className="text-blue-400">behance:</span>{" "}
//           "https://www.behance.net/nachiappu",
//           <br />
//           {"}"};
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;




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
