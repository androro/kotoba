document.addEventListener("DOMContentLoaded", function () {
        const shareButton = document.getElementById("shareButton");

        shareButton.addEventListener("click", function () {
            const pageUrl = window.location.href;

            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    url: pageUrl
                }).catch((error) => console.log("Error sharing:", error));
            } else {
                // Jika tidak didukung, copy link ke clipboard
                navigator.clipboard.writeText(pageUrl).then(() => {
                    alert("Link disalin ke clipboard!");
                }).catch((err) => {
                    console.error("Gagal menyalin:", err);
                });
            }
        });
    });
