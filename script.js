
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
function showPreview(url) {
  alert("Scroll down to see the preview");
  const previewFrame = document.getElementById("preview-frame");
  previewFrame.src = url;
  document.getElementById("preview-console").style.display = "block";
}
