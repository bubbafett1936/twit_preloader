function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

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
    var vid = '_h264m_1920x1080.mp4';
    var link = `${page}${vars}${vid}`;
    if (iOS) {
      window.open('vlc-x-callback://x-callback-url/stream?url=' + link);
    }
    else window.open(link);
  }
}

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    submit();
  }
});

window.onload = function() {
  now = Date.now() / 1000
  twit = Math.floor( (now - 1113782400) / 604800) - 16
  mbw = Math.floor( (now - 1155686400) / 604800) - 4
  aaa = Math.floor( (now - 1301457600) / 604800) - 4
  ww = Math.floor( (now - 1159387200) / 604800) - 39
  twig = Math.floor( (now - 1248919200) / 604800) - 4
  tnw = Math.floor( (now - 1507244400) / 604800) - 5
  document.getElementById("twit").innerHTML += " - " + twit;
  document.getElementById("mbw").innerHTML += " - " + mbw;
  document.getElementById("aaa").innerHTML += " - " + aaa;
  document.getElementById("ww").innerHTML += " - " + ww;
  document.getElementById("twig").innerHTML += " - " + twig;
  document.getElementById("tnw").innerHTML += " - " + tnw;

  document.getElementById("show").addEventListener("change", function() {
    let show = document.getElementById("show");
    if (show.value == "twit") document.getElementById("episode").value = twit;
    if (show.value == "mbw") document.getElementById("episode").value = mbw;
    if (show.value == "aaa") document.getElementById("episode").value = aaa;
    if (show.value == "ww") document.getElementById("episode").value = ww;
    if (show.value == "twig") document.getElementById("episode").value = twig;
    if (show.value == "tnw") document.getElementById("episode").value = tnw;
  });
}
