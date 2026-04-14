const apiKey = "AIzaSyDh36fG84ytVzgk2v9DUU0PZ968rWD9T_c";

export async function loadVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=runningmotivation&type=video&videoEmbeddable=true&maxResults=6&key=${apiKey}`;

  try {
    const response = await fetch (url);
    const data = await response.json();

    if (data.items) {
      displayVideos(data.items);
    } else {
      console.error("No videos found.");
    }
  } catch (error) {
    console.error("Error loading YouTube videos:", error);
  }
}

function displayVideos(videos) {
  const videosContainer = document.getElementById("videos");
  videosContainer.innerHTML = "";

  videos.forEach(video => {
    const videoId = video.id.videoId;

    const iframe = document.createElement("iframe");
    iframe.width = "300";
    iframe.height = "200";
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allowFullscreen = true;

    videosContainer.appendChild(iframe);
  });
}
