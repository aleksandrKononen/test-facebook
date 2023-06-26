const title = `Test title with spaces \n\n`;

var metaTag = document.querySelector('meta[property="og:title"]');
metaTag.setAttribute("content", title);