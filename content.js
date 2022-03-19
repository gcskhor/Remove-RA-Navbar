const navBarSelector = "[data-testid='page.desktopTableOfContents']";
const outlineSelector = "[data-testid='page.outline']";
const FLEX = "flex";
const NONE = "none";
const H = "h";

const getDisplay = (selector) => document.querySelector(selector).style.display;
const setDisplay = (selector, target) => {
  document.querySelector(selector).style.display = target; 
}

const hideNavbars = () => { 
  setDisplay(navBarSelector, NONE);
  setDisplay(outlineSelector, NONE);
}

const showNavbars = () => { 
  setDisplay(navBarSelector, FLEX);
  setDisplay(outlineSelector, FLEX);
}

document.addEventListener("keypress", function(event) {
  if (event.key === H ) {
    if (getDisplay(navBarSelector) === NONE) {
      console.log('showing navbar')
      showNavbars();
    } else {
      console.log('hiding navbar')
      hideNavbars();
    }
  } 
});