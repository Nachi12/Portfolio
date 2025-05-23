
function showTab(tabId) {
  // Tabs
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });
  document.getElementById("tab-" + tabId).classList.add("active");

  // Code sections
  document.querySelectorAll(".code").forEach((code) => {
    code.classList.remove("active");
  });
  document.getElementById("code-" + tabId).classList.add("active");

  // Sidebar icons
  document.querySelectorAll(".sidebar img").forEach((icon) => {
    icon.classList.remove("active-icon");
  });
  document.getElementById("icon-" + tabId).classList.add("active-icon");





  // Show about-console only for about tab and fill content
  const aboutConsole = document.getElementById("about-console");
  if (tabId === "about") {
    aboutConsole.style.display = "block";

    // You can customize this content as you want
    
    aboutConsole.textContent = aboutContent;
  } else {
    aboutConsole.style.display = "none";
    aboutConsole.textContent = "";
  }
}
function showProjectPreview(url) {
  alert("Scroll down to see the project preview");
  const previewFrame = document.getElementById("preview-frame");
  previewFrame.src = url;
  document.getElementById("preview-console").style.display = "block";
}

function showCertificatePreview(url) {
  alert("Scroll down to see the certificate preview");
  const certFrame = document.getElementById("preview-certificates-frame");
  certFrame.src = url;
  document.getElementById("preview-certificates-console").style.display = "block";
}

function showResumePreview(url) {
  alert("Scroll down to see the resume preview");
  const resumeFrame = document.getElementById("preview-resume-frame");
  resumeFrame.src = url;
  document.getElementById("preview-resume-console").style.display = "block";
}

