function clean() {
  text = document.getElementById("link")
  text_array = [
  	"You must select a show from the dropdown",
    "Episode Number must be an integer below 10000"
  ]
  if (text_array.includes(text.innerHTML)) {
    text.innerHTML = "";
  }
}

function submit() {
  var show = document.getElementById("show").value;
  var epNum = document.getElementById("episode").value;
  if (show == "default") {
    document.getElementById("link").innerHTML =
    	"You must select a show from the dropdown";
  } else if (epNum.length > 4 || isNaN(parseInt(epNum))) {
    document.getElementById("link").removeAttribute("href");
    document.getElementById("link").innerHTML =
    	"Episode Number must be an integer below 10000";
  } else {
    epNum = epNum.padStart(4, "0");
    var page = 'https://twit.cachefly.net/video/';
    var vars = `${show}/${show}${epNum}/${show}${epNum}`;
    var vid = '_h264b_640x368_256.mp4';
    var link = `${page}${vars}${vid}`;
    window.open(link);
  }
}

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    submit();
  }
});
