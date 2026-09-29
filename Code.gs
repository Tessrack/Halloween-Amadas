/**
 * Google Apps Script Web App Endpoint for AMADAS Seasonal Menu
 */

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Bebidas de Temporada • AMADAS')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
