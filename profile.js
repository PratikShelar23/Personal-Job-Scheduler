document.addEventListener("DOMContentLoaded", function () {
    // Get the form and file input elements
    const uploadForm = document.getElementById("uploadForm");
    const resumeUpload = document.getElementById("resumeUpload");

    // Listen for the change event on the file input
    resumeUpload.addEventListener("change", function (event) {
        // Get the selected files
        const selectedFiles = event.target.files;

        // Log the names of selected files (for demonstration purposes)
        for (let i = 0; i < selectedFiles.length; i++) {
            console.log("Selected File:", selectedFiles[i].name);
        }

        // Here, you would typically send the files to the server for processing and storage
        // This example logs the file names, but you need server-side logic to handle actual file storage
        // You may use XMLHttpRequest, Fetch API, or other methods to send files to the server.
    });
});
