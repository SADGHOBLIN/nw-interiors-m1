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

Upon performing audits, I realised that I had not converted two images from `.jpg` to `.webP`. I proceeded to convert these images to `.webP` before re-running the audit tests.
![screenshot](documentation/lighthouse/lighthouse-jpg-images.png)

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues. Some warnings are outside of my control, and mobile results tend to be lower than desktop.

The performance results for the main index page are acceptable, as the lower scores are a result of the image sizes. Since this is a portfolio website, it is necessary for the images to be of high quality, and therefore it is acceptable to sacrifice the load time at the expense of ensuring the images are crisp. They have been reduced and converted to webp to optimise them as much as possible.

| Page | Mobile | Desktop |
| --- | --- | --- |
| index | ![screenshot](documentation/lighthouse/mobile-index.png) | ![screenshot](documentation/lighthouse/desktop-index.png) |
| success | ![screenshot](documentation/lighthouse/mobile-success.png) | ![screenshot](documentation/lighthouse/desktop-success.png) |
| 404 | ![screenshot](documentation/lighthouse/mobile-404.png) | ![screenshot](documentation/lighthouse/desktop-404.png) |


## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

| Page / Feature | Expectation | Test | Result | Screenshot |
| --- | --- |  --- |  --- |  --- |
| Navbar | Feature is expected to have working and accessible navigation links. | Checked navigation links for functionality and accessibility. | Links are accessible, fully functional, and direct user to expected section. | ![screenshot](documentation/defensive/nav-default.png) ![screenshot](documentation/defensive/nav-clicked.png) |
| Home | Site is expected to be fully responsive. | Resized the browser window and tested on multiple devices, and browsers. See [Responsiveness](#responsiveness) and [Browser Compatibility](#browser-compatibility) for details. | The site is responsive across all tested screen sizes. | See [Responsiveness](#responsiveness) and [Browser Compatibility](#browser-compatibility). |
| Hero | Hero landing page is expected to clearly demonstrate the purpose of the site, and encourage further user exploration whilst illustrating the designer's style. Scroll arrow is expected to take user to the next section upon clicking. | Tested that hovering over hero image reveals a scroll-down arrow, and contains a call to action button to emphasise suggested user action. Test scroll arrow functionality. | Hero image loads appropriately and responsiveness still captures a striking image across screen sizes. Scroll arrow animation works as expected, moving the user to the next section. | ![screenshot](documentation/defensive/hero-mobile.png) ![screenshot](documentation/defensive/hero-desktop.png) ![screenshot](documentation/defensive/hero-arrow.png) |
| Call to Action | Feature is expected to encourage user navigation to the site's main portfolio content, inline with the site's primary purpose. | Test CTA button is visible, accessible, and navigates to the intended section. | Button works as intended and takes the user to the portfolio section. | ![screenshot](documentation/defensive/cta-home.png) ![screenshot](documentation/defensive/cta-portfolio.png) |
| About | Section is expected to clearly inform the user about the designer's professional background and experience. | Confirmed that the page has an accessible about section with concise information that is laid out effectively. | About details are displayed as expected, with multiple information formats (Large tagline, informative paragraphs, visual icons with keywords) to appeal to multiple user types of the designer's background and style. | ![screenshot](documentation/defensive/about.png) |
| Portfolio | Section is expected to display high quality images of the designer's work. Images should be fully responsive across all screen sizes and be optimised for the specific device that the user is viewing on. | Test across screen sizes to ensure the appropriate images are replaced with suitable sized alternatives. | Images are fully responsive, and behave as expected. The layout adapts to device to optimise the space on the screen, replacing the images where appropriate. | ![screenshot](documentation/defensive/portfolio-layout-tablet.png) ![screenshot](documentation/defensive/portfolio-layout-desktop.png) |
| Portfolio Links | In the portfolio section, each project should contain project information with clickable links to navigate the user to the client's site in a new tab. | Tested all links to ensure they open the url in a new tab and function as expected. | Links are clear and accessible, clearly indicating to users their purpose. They work as expected, opening client websites in a new tab. | ![screenshot](documentation/defensive/portfolio-link-home.png) ![screenshot](documentation/defensive/portfolio-link-external.png) |
| Contact Form | Form is expected to not let the user submit an empty form. | Attempted to submit a blank form. | Form submission attempt was blocked as expected, and encouraged user to input information. | ![screenshot](documentation/defensive/contact-required.png) |
|  | Form is expected to enforce valid input types for the required fields. | Entered invalid data (e.g., random text in an email field, numbers in a name field, etc.). | Error messages were displayed appropriately, and submission was blocked. | ![screenshot](documentation/defensive/contact-required-email.png) ![screenshot](documentation/defensive/contact-required-phone.png) ![screenshot](documentation/defensive/contact-required-dropdown.png) ![screenshot](documentation/defensive/contact-required-message.png) |
|  | Form is expected to allow the user to submit their form without entering a phone number, as this is optional. | Tested submiting a valid form with the number field empty. | Form submission was accepted, and user is taken to the success page to indicate a successful form submission. | ![screenshot](documentation/defensive/contact-required-optional.png) ![screenshot](documentation/defensive/contact-success.png) |
| Social Links | Feature is expected to include working links to the appropriate social platforms (Instagram, Facebook, etc.). | Clicked each social link to verify redirection to the correct platform page. | All links redirected to the correct platform pages, opening in new browser tabs. | ![screenshot](documentation/defensive/social-site.png) ![screenshot](documentation/defensive/social-instagram.png) ![screenshot](documentation/defensive/social-facebook.png) ![screenshot](documentation/defensive/social-pinterest.png) ![screenshot](documentation/defensive/social-whatsapp.png) |
| 404 Error Page | Feature is expected to display a 404 error page for non-existent pages. | Navigated to an invalid URL (e.g., `/test`) to test error handling. | A custom 404 error page was displayed as expected. | ![screenshot](documentation/defensive/404.png) |


## User Story Testing

| User Story | Target | Expectation | Outcome | Screenshot | 
| --- | --- | --- | --- | --- |
| [Responsive Design](https://github.com/SADGHOBLIN/nw-interiors-m1/issues/2) | As a user | I would like the website to be fully responsive | so that I can easily navigate and access information from mobile, tablet, or desktop. (see [Responsiveness](#responsiveness)) | ![screenshot](documentation/responsiveness/desktop-home.png) ![screenshot](documentation/responsiveness/mobile-home.png) |
| [About](https://github.com/SADGHOBLIN/nw-interiors-m1/issues/3) | As a user / client / employer | I would like to learn more about the designer's background and skills | so that I can gauge whether the designer is qualified, or a good match for my needs. | ![screenshot](documentation/features/about.png) |
| [Portfolio](https://github.com/SADGHOBLIN/nw-interiors-m1/issues/1) | As a user / client / employer | I would like to see examples of the designer's work | so that I can learn more about their style and skill. I could also use this to determine whether the designer would be suitable to hire for my project / company. | ![screenshot](documentation/features/portfolio-1.png) ![screenshot](documentation/features/portfolio-2.png) |
| [Contact Form](https://github.com/SADGHOBLIN/nw-interiors-m1/issues/8) | As a user | I would like to be able to contact the designer directly | so that I can inquire about their services, ask questions, or try to book them for work. | ![screenshot](documentation/features/contact.png) ![screenshot](documentation/features/footer.png) |
| [Social Media Links](https://github.com/SADGHOBLIN/nw-interiors-m1/issues/4) | As a user | I would like to connect with the designer on other social media platforms | so that I can stay up to date with their work, or keep them in mind for future projects / inspiration. | ![screenshot](documentation/features/footer.png) |
| [Submission Confirmation](https://github.com/SADGHOBLIN/nw-interiors-m1/issues/5) | As a user | I would like to receive confirmation that my form has been submitted | so that I know that my details have been inputted correctly, and were received by the designer. | ![screenshot](documentation/features/success.png) |
| [404](https://github.com/SADGHOBLIN/nw-interiors-m1/issues/12) | As a user | I want to see a 404 error page if I get lost | so that it's obvious that I have come across a page that doesn't exist, and be redirected back to the main site. | ![screenshot](documentation/features/error404.png) |