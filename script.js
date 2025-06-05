function buttonClick() {
  alert("A new version of the application is available.\nPlease download and install it.");

  const apkUrl = "https://github.com/elhanking1/BiteNFitNew/releases/download/v4.0/BiteNFitv4.apk";

  // If inside Android WebView, open via external browser
  if (navigator.userAgent.includes("wv") || navigator.userAgent.includes("Android")) {
    window.location.href = `intent://${apkUrl.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`;
  } else {
    window.open(apkUrl, "_blank");
  }
}
