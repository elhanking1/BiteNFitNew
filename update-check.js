const latestVersionUrl = "https://raw.githubusercontent.com/elhanking1/BiteNFitNew/main/latest_version.json";
const currentVersionCode = 9; // Apne app ka current version yahan set karo

fetch(latestVersionUrl)
  .then(response => response.json())
  .then(data => {
    const latestVersion = data.latest_version_code;
    const updateMessage = data.update_message;
    const downloadUrl = data.download_url;

    if (latestVersion > currentVersionCode) {
      const alertBox = document.createElement("div");
      alertBox.style.position = "fixed";
      alertBox.style.top = "0";
      alertBox.style.left = "0";
      alertBox.style.width = "100%";
      alertBox.style.height = "100%";
      alertBox.style.backgroundColor = "rgba(0,0,0,0.8)";
      alertBox.style.zIndex = "9999";
      alertBox.style.display = "flex";
      alertBox.style.justifyContent = "center";
      alertBox.style.alignItems = "center";
      alertBox.innerHTML = `
        <div style="background:white;padding:20px;border-radius:8px;text-align:center;max-width:300px;">
          <h3>🔥🚨 Big Update Alert! 🚨🔥<br>Get the New BiteNFit Experience Now! 🚀</h3>
          <p>${updateMessage}</p>
          <button id="updateNow" style="padding:10px 20px;background:#ff5722;color:#fff;border:none;border-radius:5px;font-size:16px;">Update Now</button>
        </div>
      `;
      document.body.appendChild(alertBox);

      document.getElementById("updateNow").onclick = () => {
        window.location.href = downloadUrl;
      };
    }
  })
  .catch(err => {
    console.error("Update check failed", err);
  });
