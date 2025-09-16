# Testing

> [!NOTE]  
> Return back to the [README.md](README.md) file.

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| root | [404.html](https://github.com/SADGHOBLIN/nw-interiors-m1/blob/main/404.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://sadghoblin.github.io/nw-interiors-m1/404.html) | ![screenshot](documentation/validation/html--404.png) | No warnings / errors |
| root | [index.html](https://github.com/SADGHOBLIN/nw-interiors-m1/blob/main/index.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://sadghoblin.github.io/nw-interiors-m1/index.html) | ![screenshot](documentation/validation/html--index.png) | No warnings / errors |
| root | [success.html](https://github.com/SADGHOBLIN/nw-interiors-m1/blob/main/success.html) | [HTML Validator](https://validator.w3.org/nu/?doc=https://sadghoblin.github.io/nw-interiors-m1/success.html) | ![screenshot](documentation/validation/html--success.png) | No warnings / errors |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets/css | [styles.css](https://github.com/SADGHOBLIN/nw-interiors-m1/blob/main/assets/css/styles.css) | [CSS Validator](https://jigsaw.w3.org/css-validator/validator?uri=https://sadghoblin.github.io/nw-interiors-m1) | ![screenshot](documentation/validation/css-assets-styles.png) | No errors, and warnings only relate to external libraries |

### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.

| Directory | File | URL | Screenshot | Notes |
| --- | --- | --- | --- | --- |
| assets/js | [script.js](https://github.com/SADGHOBLIN/nw-interiors-m1/blob/main/assets/js/script.js) | n/a | ![screenshot](documentation/validation/js-assets-script.png) | No warnings / errors |

## Responsiveness

I've tested my deployed project to check for responsiveness issues across mobile, tablet, and desktop on the suitable devices. There were no major issues found and everything works as intended.

| Page | Mobile | Tablet | Desktop | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/responsiveness/mobile-home.png) | ![screenshot](documentation/responsiveness/tablet-home.png) | ![screenshot](documentation/responsiveness/desktop-home.png) | Works as expected |
| About | ![screenshot](documentation/responsiveness/mobile-about.png) | ![screenshot](documentation/responsiveness/tablet-about.png) | ![screenshot](documentation/responsiveness/desktop-about.png) | Works as expected |
| Portfolio | ![screenshot](documentation/responsiveness/mobile-portfolio.png) | ![screenshot](documentation/responsiveness/tablet-portfolio-1.png) ![screenshot](documentation/responsiveness/tablet-portfolio-2.png) | ![screenshot](documentation/responsiveness/desktop-portfolio-1.png) ![screenshot](documentation/responsiveness/desktop-portfolio-2.png) | Works as expected |
| Contact | ![screenshot](documentation/responsiveness/mobile-contact.png) | ![screenshot](documentation/responsiveness/tablet-contact.png) | ![screenshot](documentation/responsiveness/desktop-contact.png) | Works as expected |
| Footer | ![screenshot](documentation/responsiveness/mobile-footer.png) | ![screenshot](documentation/responsiveness/tablet-footer.png) | ![screenshot](documentation/responsiveness/desktop-footer.png) | Works as expected |
| Success | ![screenshot](documentation/responsiveness/mobile-success.png) | ![screenshot](documentation/responsiveness/tablet-success.png) | ![screenshot](documentation/responsiveness/desktop-success.png) | Works as expected |
| 404 | ![screenshot](documentation/responsiveness/mobile-404.png) | ![screenshot](documentation/responsiveness/tablet-404.png) | ![screenshot](documentation/responsiveness/desktop-404.png) | Works as expected |


## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues. There are no known issues, and site also behave responsively as expected.

| Page | Chrome | Firefox | Edge | Notes |
| --- | --- | --- | --- | --- |
| Home | ![screenshot](documentation/browsers/chrome-home.png) | ![screenshot](documentation/browsers/firefox-home.png) | ![screenshot](documentation/browsers/edge-home.png) | Works as expected |
| About | ![screenshot](documentation/browsers/chrome-about.png) | ![screenshot](documentation/browsers/firefox-about.png) | ![screenshot](documentation/browsers/edge-about.png) | Works as expected |
| Portfolio | ![screenshot](documentation/browsers/chrome-portfolio-1.png) ![screenshot](documentation/browsers/chrome-portfolio-2.png) | ![screenshot](documentation/browsers/firefox-portfolio-1.png) ![screenshot](documentation/browsers/firefox-portfolio-2.png) | ![screenshot](documentation/browsers/edge-portfolio-1.png) ![screenshot](documentation/browsers/edge-portfolio-2.png) | Works as expected |
| Contact (w/ Footer) | ![screenshot](documentation/browsers/chrome-contact.png) | ![screenshot](documentation/browsers/firefox-contact.png) | ![screenshot](documentation/browsers/edge-contact.png) | Works as expected |
| Success | ![screenshot](documentation/browsers/chrome-success.png) | ![screenshot](documentation/browsers/firefox-success.png) | ![screenshot](documentation/browsers/edge-success.png) | Works as expected |
| 404 | ![screenshot](documentation/browsers/chrome-404.png) | ![screenshot](documentation/browsers/firefox-404.png) | ![screenshot](documentation/browsers/edge-404.png) | Works as expected |


## Lighthouse Audit

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues. Some warnings are outside of my control, and mobile results tend to be lower than desktop.

The performance results for the main index page are acceptable, as the lower scores are a result of the image sizes. Since this is a portfolio website, it is necessary for the images to be of high quality, and therefore it is acceptable to sacrifice the load time at the expense of ensuring the images are crisp. They have been reduced and converted to webp to optimise them as much as possible.

| Page | Mobile | Desktop |
| --- | --- | --- |
| index | ![screenshot](documentation/lighthouse/mobile-index.png) | ![screenshot](documentation/lighthouse/desktop-index.png) |
| success | ![screenshot](documentation/lighthouse/mobile-success.png) | ![screenshot](documentation/lighthouse/desktop-success.png) |
| 404 | ![screenshot](documentation/lighthouse/mobile-404.png) | ![screenshot](documentation/lighthouse/desktop-404.png) |