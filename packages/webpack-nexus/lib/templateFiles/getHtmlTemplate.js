/**
 * Returns the index.html content
 *
 * @param {Object} config
 * @param {string} config.projectName
 * @returns {string}
 */
function getHtmlTemplate({ projectName }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
     <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
    <title>${projectName}</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="rootApp"></div>
  </body>
</html>
`;
}

module.exports = getHtmlTemplate;
