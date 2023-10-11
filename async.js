const urlInput = document.getElementById("url");
const downloadButton = document.getElementById("btn");

downloadButton.addEventListener("click", handleDownloadButton);

async function handleDownloadButton() {
  try {
    const response = await fetch(urlInput.value);
    const downloadFile = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(downloadFile);
    link.download = new Date().getTime();
    link.click();
    alert("Downloading.....");
  } catch (error) {
    console.error("unable to download, it could be:", error);
  }
  urlInput.value = "";
}
