var cinderella = { "vale.png": "vale", "kent.png": "kent", "hicks.png": "hicks", "villing.png": "villing", "chowning.png": "chowning", "jansen.png": "jansen", "becker.png": "becker" },
    pbj = { "collins.png": "collins", "hickey.png": "hickey", "hughes.png": "hughes", "roll.png": "roll" },
    bicycles = { "sweeney.png": "sweeney", "somers.png": "somers", "becker.png": "becker", "doherty.png": "doherty", "macke.png": "macke" },
    cleopatra = { "espich.png": "espich", "hickey.png": "hickey", "broxterman.png": "broxterman", "barsan.png": "barsan", "jansen.png": "jansen", "meyer.png": "meyer", "saupe.png": "saupe", "newland.png": "newland", "haverbusch.png": "haverbusch" },
    robot = { "macke.png": "macke", "doherty.png": "doherty", "vale.png": "vale", "kent.png": "kent", "degregorio.png": "degregorio", "sweeney.png": "sweeney", "edrich.png": "edrich" },
    crew = { "crew.png": "crew" },
    acts = [cinderella, pbj, bicycles, cleopatra, robot, crew],
    actTitles = ["CINDERELLA BLOODSUCKER", "PEANUT BUTTER AND JELLY", "BICYCLES WITH SQUARE WHEELS", "CLEOPATRA'S TALK SHOW", "ROBOT QUEEN", "STAGE CREW"];
const actFromUrl = window.location.search,
      params = new URLSearchParams(actFromUrl),
      actId = params.get('act');
window.onload = () => {
    console.log(actId);
    if (actId!=null) loadAct(actId);
    else history.pushState({}, document.title, window.location.pathname);
}

window.addEventListener('popstate', () => {
    if (actId==null) hamburger();
    else loadAct(actId);
})

function loadAct(act) {
    document.getElementById("acts").style.display = "none";
    document.getElementById("act-details").style.display = "block";
    document.getElementById("title").innerHTML = actTitles[act];
    history.pushState({ page: "home" }, "", `?act=${act}`);
    var imgs = Object.keys(acts[act]),
        stories = Object.values(acts[act]);
    for (i = 0; i < Object.keys(acts[act]).length; i++) {
        document.getElementById("people-card-container").innerHTML += `<div class="people-card" id="story-${stories[act]}" onclick='openStory("${stories[i]}");'><img src="images/${act}/${imgs[i]}"></div>`
    }
}

function hamburger() {
    window.history.pushState({}, document.title, window.location.pathname);
    document.getElementById("acts").style.display = "block";
    document.getElementById("act-details").style.display = "none";
    document.getElementById("people-card-container").innerHTML = "";
}

function openStory(url) {
    window.location.href = `/stories/${url}.html`
}