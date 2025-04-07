<head>
    <meta name="description" content="Take part in our community contests and show off your skills. Whether you're a pro or a beginner, there's a contest for everyone." />
    
  <style>
html {
    scroll-behavior: smooth;
    }

body {
    overflow-y: scroll;
  }

img {
    max-width: 100%;
    height: auto;
    display: block;
}
</style>


    <link rel="stylesheet" href="${asset.get('/html/assets/careerhub.css')}" />
    <link rel="stylesheet" href="${asset.get('/html/assets/careerhubfresh.css')}" />
</head>

<main id="careerhub_root">
</main>
<#assign HeroBannerData=coreNode.settings.name.get("customcontent.11_text")?url!"" />
<#assign SuperUserData=coreNode.settings.name.get("customcontent.19_text")?url!"" />
<#assign CustomCardData=coreNode.settings.name.get("customcontent.30_text")?url!"" />

<script>
var HeroBannerData = "${HeroBannerData}";
var SuperUserData = "${SuperUserData}";
var CustomCardData = "${CustomCardData}";

document.title = "Fabric Community Contests";
window.addEventListener("pageshow", function(event) {
    if (event.persisted) {
        console.log("Page was restored from BFCache!");
        // Apply fixes (e.g., reload styles)
        document.body.classList.remove("powerbi_rebranding");
    }
});

</script>
<script src="${asset.get("/html/assets/careerhubnewfresh.js")}"></script>
