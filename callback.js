const urlInput = document.getElementById("url");
const downloadButton = document.getElementById("btn");

function fetchFile(url, callback) {
  fetch(url)
    .then((res) => res.blob())
    .then((downloadFile) => {
      callback(null, downloadFile);
    })
    .catch((error) => {
      callback(error);
    });
}

function downloadBlob(blob, filename) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

downloadButton.addEventListener("click", () => {
  const url = urlInput.value;
  const filename = new Date().getTime().toString();

  fetchFile(url, (error, downloadFile) => {
    if (error) {
      console.error("An error occurred:", error);
    } else {
      downloadBlob(downloadFile, filename);
    }
  });
  alert("Downloading...");
  urlInput.value = "";
});
