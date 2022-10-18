/// <reference types='cypress' />
import 'cypress-wait-until';
import { base_url, disclaimer, runButton, playgroundPreview } from './base'

describe('Taquito Live Code Examples - Working with contracts having complex storage/parameters', () => {

  Cypress.config('defaultCommandTimeout', 50000);
  beforeEach(() => { cy.visit(base_url + 'complex_parameters').contains(disclaimer) })

  describe('Working with contracts having complex storage/parameters', () => {

    it('Origination of a contract with complex storage', () => {
      cy.get(runButton).eq(0).click()
      cy.waitUntil(() => cy.get(playgroundPreview).eq(0).contains('Origination completed'))
    })

    it('Calling the function of a contract having a complex object as a parameter', () => {
      // requires Contract "BigMapsComplexStorageContract"       
      cy.get(runButton).eq(1).click()
      cy.waitUntil(() => cy.get(playgroundPreview).eq(1).contains('set_child_record'))
    })

    it('Call the set_child_record function when all the arguments are defined', () => {
      // requires Contract "BigMapsComplexStorageContract"       
      cy.get(runButton).eq(2).click()
      cy.waitUntil(() => cy.get(playgroundPreview).eq(2).contains('Operation injected'))
    })

    it('Call the set_child_record function when optional arguments are null', () => {
      // requires Contract "BigMapsComplexStorageContract"       
      cy.get(runButton).eq(3).click()
      cy.waitUntil(() => cy.get(playgroundPreview).eq(3).contains('Operation injected'))
    })
  })
})