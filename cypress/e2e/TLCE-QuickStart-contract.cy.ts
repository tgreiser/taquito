/// <reference types='cypress' />
import 'cypress-wait-until';
import { base_url, disclaimer, runButton, playgroundPreview } from './base'

describe('Taquito Live Code Examples', () => {

  Cypress.config('defaultCommandTimeout', 30000);
  beforeEach(() => { cy.visit(base_url + 'quick_start').contains(disclaimer) })

  it('Get the current Tezos balance for an address', () => {
    cy.get(runButton).eq(0).click()
    cy.waitUntil(() => cy.get(playgroundPreview).eq(0).contains('ꜩ'))
  })

  it('Transfer - contract', () => {
    cy.get(runButton).eq(1).click()
    cy.waitUntil(() => cy.get(playgroundPreview).eq(1).contains('Operation injected'))
  })

  it('Interact with a smart contract - contract', () => {
    // requires contract: IncrementContract    
    cy.get(runButton).eq(3).click()
    cy.waitUntil(() => cy.get(playgroundPreview).eq(3).contains('Operation injected'))
  })
})