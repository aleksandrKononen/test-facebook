const title = `Test title with spaces <br><br>`;

var metaTag = document.querySelector('meta[property="og:title"]');
var titleWithLineBreak = title.replace(/\n\n/g, '&nbsp;');
metaTag.setAttribute("content", titleWithLineBreak);