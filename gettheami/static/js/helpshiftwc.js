(function () {
    var PLATFORM_ID = "amits-demo_platform_20191206215417695-311dd0dd4141146",
    DOMAIN = "amits-demo",
    LANGUAGE = "en";

    window.helpshiftConfig = {
      platformId: PLATFORM_ID,
      domain: DOMAIN,
      language: LANGUAGE
    };
  }) ();

  !function(t,e){if("function"!=typeof window.Helpshift){var n=function(){n.q.push(arguments)};n.q=[],window.Helpshift=n;var i,a=t.getElementsByTagName("script")[0];if(t.getElementById(e))return;i=t.createElement("script"),i.async=!0,i.id=e,i.src="https://webchat.helpshift.com/webChat.js";var o=function(){window.Helpshift("init")};window.attachEvent?i.attachEvent("onload",o):i.addEventListener("load",o,!1),a.parentNode.insertBefore(i,a)}else window.Helpshift("update")}(document,"hs-chat");
