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
//   const certificatePreview = useSelector(selectCertificatePreview);
//   const resumePreview = useSelector(selectResumePreview);

//   const handleTabClick = (tabId) => {
//     dispatch(setActiveTab(tabId));
//   };

//   const handleProjectPreview = (url) => {
//     alert("Scroll down to see the project preview");
//     dispatch(showProjectPreview(url));
//   };

//   const handleCertificatePreview = (url) => {
//     alert("Scroll down to see the certificate preview");
//     dispatch(showCertificatePreview(url));
//   };

//   const handleResumePreview = (url) => {
//     alert("Scroll down to see the resume preview");
//     dispatch(showResumePreview(url));
//   };

//   return (
//     <div className=" pl-2 rounded-xl shadow-lg bg-gray-900 text-gray-200 ml-20 h-screen">
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
//             { id: "certificates", label: "certificates.js" },
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
//             I&apos;am NACHIKETA NR — I don&apos;t just build, I elevate.
//           </p>
//           <p className="text-green-400">&lt;/h1&gt;</p>

//           <p className="text-green-400">&lt;p&gt;</p>
//           <p className="text-gray-300">
//             Strategist. Creator. Innovator — transforming ideas into impactful
//             digital experiences. From vision to execution, I bridge creativity
//             with results — beautifully and boldly.
//           </p>
//           <p className="text-green-400">&lt;/p&gt;</p>

//           <p className="text-green-400">&lt;h2&gt;</p>
//           <p>
//             <span className="text-yellow-400">🔍 Specialized in:</span>
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
//           "Connect",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Frontend-Tech-Used:</span>{" "}
//           "React/JS/Tailwind CSS",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Description:</span> "A responsive site
//           with live previews, categorized projects, transparent pricing, and
//           unique ideas.",
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
//           &nbsp;&nbsp;{"},"}
//           <br />

//           {/* This is second Project */}
//           &nbsp;&nbsp;{"{"}
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">Id:</span>2,
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">
//             Title:
//           </span>{" "}
//           "Crypto-currency Dashboard",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Frontend-Tech-Used:</span>{" "}
//           "React/JS/Tailwind CSS",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Description:</span> "A responsive site
//           with live previews, categorized projects, transparent pricing, and
//           unique ideas.",
//           <br />
//           <button
//             onClick={() =>
//               handleProjectPreview("https://crypto-currencydashboard1.netlify.app/")
//             }
//             className="mt-3 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
//           >
//             Preview
//           </button>
//           <br />
//            &nbsp;&nbsp;{"},"}


// {/* Third Project */}
// <br /><br />
// &nbsp;&nbsp;{"{"}
//  <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">Id:</span>3,
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">
//             Title:
//           </span>{" "}
//           "Youtube Subscribers",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Frontend-Tech-Used:</span>{" "}
//           "React/JS/Tailwind CSS",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Description:</span> "A responsive site
//           with live previews, categorized projects, transparent pricing, and
//           unique ideas.",
//           <br />
//           <button
//             onClick={() =>
//               handleProjectPreview("https://backend-youtube-subscribers-5fl7.onrender.com")
//             }
//             className="mt-3 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
//           >
//             Preview
//           </button>
//  &nbsp;&nbsp;{"}"}
//           <br />




//           {projectPreview.isVisible && (
//             <div className="mt-6">
//               <h3 className="text-green-400 font-bold mb-2">
//                 🔍 Live Project Preview
//               </h3>
//               <iframe
//                 src={projectPreview.url}
//                 width="100%"
//                 height="500"
//                 className="border border-gray-700 rounded-lg"
//                 title="Project Preview"
//               ></iframe>
//             </div>
//           )}
//         </div>

//         {/* Certificates Tab */}
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
//           <span className="text-blue-400">Company:</span> "Dave Brothers",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">
//             Role:
//           </span>{" "}
//           "UX/UI Design Intern",
//           <br />
//           <button
//             onClick={() =>
//               handleCertificatePreview(
//                 "Certificate/_Experience Letter of Nachiketa.pdf"
//               )
//             }
//             className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//           >
//             Preview Certificate
//           </button>
//           <br />
//           &nbsp;&nbsp;{"}"},
//           <br />
//           &nbsp;&nbsp;{"{"}
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;
//           <span className="text-blue-400">Company:</span> "E-Patrakar",
//           <br />
//           &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">
//             Role:
//           </span>{" "}
//           "UX/UI Design Intern",
//           <br />
//           <button
//             onClick={() =>
//               handleCertificatePreview("Certificate/epatrakar.png")
//             }
//             className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//           >
//             Preview Certificate
//           </button>
//           <br />
//           &nbsp;&nbsp;{"}"}
//           <br />
//           ];
//           {certificatePreview.isVisible && (
//             <div className="mt-6">
//               <h3 className="text-green-400 font-bold mb-2">
//                 🎖️ Live Certificate Preview
//               </h3>
//               <iframe
//                 src={certificatePreview.url}
//                 width="100%"
//                 height="500"
//                 className="border border-gray-700 rounded-lg"
//                 title="Certificate Preview"
//               ></iframe>
//             </div>
//           )}
//         </div>

//         {/* Resume Tab */}
//         {/* <div
//           className={`code ${
//             activeTab === "resume" ? "block" : "hidden"
//           } font-mono`}
//           id="code-resume"
//         >
//           <button
//             onClick={() =>
//               handleResumePreview(
//                 "src/Documents/NACHIKETA_NR_MERN_STACK_DEVELOPER.pdf"
//               )
//             }
//             className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
//           >
//             Preview Resume
//           </button>

//           {resumePreview.isVisible && (
//             <div className="mt-6">
//               <h3 className="text-green-400 font-bold mb-2">
//                 📝 Live Resume Preview
//               </h3>
//               <iframe
//                 src={resumePreview.url}
//                 width="100%"
//                 height="800"
//                 className="border border-gray-700 rounded-lg"
//                 title="Resume Preview"
//               ></iframe>
//             </div>
//           )}
//         </div> */}


// <div
//   className={`code ${activeTab === "resume" ? "block" : "hidden"} font-mono`}
//   id="code-resume"
// >
//   <button
//     onClick={() => {
//       // Hide the robot when previewing resume
//       const robot = document.getElementById("robot");
//       if (robot) robot.classList.add("hide-robot");

//       handleResumePreview(
//         "src/Documents/NACHIKETA_NR_MERN_STACK_DEVELOPER.pdf"
//       );
//     }}
//     className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
//   >
//     Preview Resume
//   </button>

//   {resumePreview.isVisible && (
//     <div className="mt-6">
//       <h3 className="text-green-400 font-bold mb-2">
//         📝 Live Resume Preview
//       </h3>
//       <iframe
//         src={resumePreview.url}
//         width="100%"
//         height="800"
//         className="border border-gray-700 rounded-lg"
//         title="Resume Preview"
//       ></iframe>
//     </div>
//   )}
// </div>

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
  showCertificatePreview,
  showResumePreview,
  selectProjectPreview,
  selectCertificatePreview,
  selectResumePreview,
} from "../store/slices/previewSlice";

const Topbar = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tab. activeTab);
  const projectPreview = useSelector(selectProjectPreview);
  const certificatePreview = useSelector(selectCertificatePreview);
  const resumePreview = useSelector(selectResumePreview);

const handleTabClick = (tabId) => {
  dispatch(setActiveTab(tabId));
  handleShowRobot(); // 👈 robot comes back
};


  // 🔹 Hide Robot when any preview opens
  // 🔹 Hide Robot Function
const handleHideRobot = () => {
  const robot = document.getElementById("robot");
  if (robot) {
    robot.style.zIndex = "-1";
    robot.style.opacity = "0";
    robot.style.transform = "scale(0.8) translateY(80px)";
  }
};

// 🔹 Show Robot Again (when switching tabs)
const handleShowRobot = () => {
  const robot = document.getElementById("robot");
  if (robot) {
    robot.style.zIndex = "50";
    robot.style.opacity = "1";
    robot.style.transform = "scale(1) translateY(0)";
  }
};

  // 🔹 Project Preview
  const handleProjectPreview = (url) => {
    handleHideRobot();
    alert("Scroll down to see the project preview");
    dispatch(showProjectPreview(url));
  };

  // 🔹 Certificate Preview
  const handleCertificatePreview = (url) => {
    handleHideRobot();
    alert("Scroll down to see the certificate preview");
    dispatch(showCertificatePreview(url));
  };

  // 🔹 Resume Preview
  const handleResumePreview = (url) => {
    handleHideRobot();
    alert("Scroll down to see the resume preview");
    dispatch(showResumePreview(url));
  };

  return (
    <div className="pl-2 rounded-xl shadow-lg bg-gray-900 text-gray-200 ml-20 h-screen">
      <div
        className="editor bg-cover bg-center bg-no-repeat p-4 rounded-xl"
        style={{ backgroundImage: "url('gradient.png')" }}
      >
        {/* Tabs */}
        <div className="flex space-x-4 border-b border-gray-700 pb-2 mb-4 overflow-x-auto">
          {[
            { id: "home", label: "index.html" },
            { id: "about", label: "about.html" },
            { id: "projects", label: "projects.js" },
            { id: "certificates", label: "certificates.js" },
            { id: "resume", label: "resume.js" },
            { id: "contact", label: "contact.js" },
          ].map((tab) => (
            <div
              key={tab.id}
              className={`px-4 py-2 rounded-t-lg cursor-pointer transition-all duration-300 
              ${
                activeTab === tab.id
                  ? "bg-gray-800 text-green-400 border-b-2 border-green-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        {/* Home Tab */}
        <div
          className={`code ${
            activeTab === "home" ? "block" : "hidden"
          } font-mono space-y-2`}
          id="code-home"
        >
          <p className="text-green-400">&lt;h1&gt;</p>
          <p>Welcome to MY VS-Code Theme Based Portfolio.</p>
          <p className="text-blue-400 text-lg font-semibold">
            I&apos;am NACHIKETA NR — I don&apos;t just build, I elevate.
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
            <span className="text-yellow-400">🔍 Specialized in:</span>
            <span className="text-purple-300"> MERN STACK DEVELOPMENT</span> |
            <span className="text-blue-300 ml-2">UX | UI Designing.</span>
          </p>
          <p className="text-green-400">&lt;/h2&gt;</p>
        </div>

        {/* About Tab */}
        <div
          className={`code ${
            activeTab === "about" ? "block" : "hidden"
          } font-mono text-sm leading-relaxed`}
          id="code-about"
        >
          <span className="text-green-400">const</span> about = {"{"}
          <br />
          <span className="ml-4 text-blue-400">name:</span> "Nachiketa NR",
          <br />
          <span className="ml-4 text-blue-400">role:</span> "Full Stack Web
          Developer [MERN]",
          <br />
          <span className="ml-4 text-blue-400">skills:</span> {"{"}
          <br />
          <span className="ml-8 text-yellow-400">Frontend:</span> ["HTML",
          "CSS", "JavaScript", "Tailwind CSS"],
          <br />
          <span className="ml-8 text-yellow-400">Backend:</span> ["Node.js",
          "Express.js"],
          <br />
          <span className="ml-8 text-yellow-400">JS Libraries:</span>{" "}
          ["React.js", "Redux", "Ajax", "jQuery"],
          <br />
          <span className="ml-8 text-yellow-400">Database:</span> ["MongoDB",
          "MariaDB"],
          <br />
          <span className="ml-8 text-yellow-400">UI/UX Tools:</span> ["Figma",
          "Adobe XD"],
          <br />
          <span className="ml-8 text-yellow-400">Other Tools:</span> ["GitHub",
          "Netlify", "ChatGPT"],
          <br />
          {"}"}
          <br />
          {"}"}
        </div>

        {/* Projects Tab */}
        <div
          className={`code ${
            activeTab === "projects" ? "block" : "hidden"
          } font-mono text-sm`}
          id="code-projects"
        >
          <p className="text-green-400">const</p> projects = [<br />
          &nbsp;&nbsp;{"{"}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">Id:</span>1,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">Title:</span>{" "}
          "Connect",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-blue-400">Frontend-Tech-Used:</span>{" "}
          "React/JS/Tailwind CSS",
          <br />
          <button
            onClick={() =>
              handleProjectPreview("https://connect-frontend1.netlify.app/")
            }
            className="mt-3 px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Preview
          </button>
          <br />
          &nbsp;&nbsp;{"},"}
          <br />

          {projectPreview.isVisible && (
            <div className="mt-6">
              <h3 className="text-green-400 font-bold mb-2">
                🔍 Live Project Preview
              </h3>
              <iframe
                src={projectPreview.url}
                width="70%"
                height="500"
                className="border border-gray-700 rounded-lg"
                title="Project Preview"
              ></iframe>
            </div>
          )}
        </div>

        {/* Certificates Tab */}
        <div
          className={`code ${
            activeTab === "certificates" ? "block" : "hidden"
          } font-mono text-sm`}
          id="code-certificates"
        >
          <p className="text-green-400">const</p> Certificates = [<br />
          &nbsp;&nbsp;{"{"}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-blue-400">Company:</span> "Dave Brothers",
          <br />
          <button
            onClick={() =>
              handleCertificatePreview(
                "Certificate/_Experience Letter of Nachiketa.pdf"
              )
            }
            className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Preview Certificate
          </button>
          <br />
          &nbsp;&nbsp;{"}"},
          <br />
          ];

          {certificatePreview.isVisible && (
            <div className="mt-6">
              <h3 className="text-green-400 font-bold mb-2">
                🎖️ Live Certificate Preview
              </h3>
              <iframe
                src={certificatePreview.url}
                width="70%"
                height="600"
                className="border border-gray-700 rounded-lg"
                title="Certificate Preview"
              ></iframe>
            </div>
          )}
        </div>

        {/* Resume Tab */}
        <div
          className={`code ${
            activeTab === "resume" ? "block" : "hidden"
          } font-mono`}
          id="code-resume"
        >
          <button
            onClick={() =>
              handleResumePreview(
                "src/Documents/NACHIKETA_NR_MERN_STACK_DEVELOPER.pdf"
              )
            }
            className="px-6 py-2 m-14 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Preview Resume
          </button>

          {resumePreview.isVisible && (
            <div className="mt-6">
              <h3 className="text-green-400 font-bold mb-2">
                📝 Live Resume Preview
              </h3>
              <iframe
                src={resumePreview.url}
                width="70%"
                height="730"
                className="border border-gray-700 rounded-lg"
                title="Resume Preview"
              ></iframe>
            </div>
          )}
        </div>

        {/* Contact Tab */}
        <div
          className={`code ${
            activeTab === "contact" ? "block" : "hidden"
          } font-mono text-sm`}
          id="code-contact"
        >
          <span className="text-green-400">const</span> contact = {"{"}
          <br />
          &nbsp;&nbsp;<span className="text-blue-400">email:</span>{" "}
          "nrnachi34@gmail.com",
          <br />
          &nbsp;&nbsp;<span className="text-blue-400">github:</span>{" "}
          "https://github.com/Nachi12",
          <br />
          &nbsp;&nbsp;<span className="text-blue-400">linkedin:</span>{" "}
          "linkedin.com/in/nachiketa",
          <br />
          &nbsp;&nbsp;<span className="text-blue-400">behance:</span>{" "}
          "https://www.behance.net/nachiappu",
          <br />
          {"}"};
        </div>
      </div>
    </div>
  );
};

export default Topbar;


