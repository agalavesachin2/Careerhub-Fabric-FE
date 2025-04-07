<#attempt>

<style>
html {
    scroll-behavior: smooth;
}

body {
    overflow-y: scroll;
}
</style>
<link rel="stylesheet" href="${asset.get('/html/assets/careerhub.css')}" />
<main id="careerhub_root">
</main>
<#assign HeroBannerData=coreNode.settings.name.get("customcontent.21_text")?url!"" />
<#assign LearnerJourneyData=coreNode.settings.name.get("customcontent.22_text")?url!"" />
<#assign GroupLearningData=coreNode.settings.name.get("customcontent.23_text")?url!"" />
<#assign AnnouncementsData=coreNode.settings.name.get("customcontent.24_text")?url!"" />
<#assign ModernDataRolesCC=coreNode.settings.name.get("customcontent.25_text")?url!"" />
<#assign BringingOppurtunityCC=coreNode.settings.name.get("customcontent.26_text")?url!"" />

<script>
var LearnerJourneyData = "${LearnerJourneyData}";
var GroupLearningData = "${GroupLearningData}";
var AnnouncementsData = "${AnnouncementsData}";
var HeroBannerData = "${HeroBannerData}";
var ModernDataRolesCC = "${ModernDataRolesCC}";
var BringingOppurtunityCC = "${BringingOppurtunityCC}";
</script>
<script src="${asset.get('/html/assets/careerhub.js')}"></script>

<#recover>
</#attempt>
