import { When } from 'cypress-cucumber-preprocessor/steps';
import getUrlMapping from '../../mappings/url';

When(`I visit the {string} page`, (urlMapping) => {
  const url = getUrlMapping(urlMapping);
  cy.visit(url);
});
