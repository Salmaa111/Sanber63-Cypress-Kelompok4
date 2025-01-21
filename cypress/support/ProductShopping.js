Cypress.Commands.add('selectRandomColor', () => {
    cy.get('.swatch-option.color').then(colors => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        cy.wrap(randomColor).click();
    });
});

Cypress.Commands.add('selectRandomSize', () => {
    cy.get('.swatch-option.text').then(sizes => {
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        cy.wrap(randomSize).click();
    });
});

Cypress.Commands.add('selectRandomQuantity', () => {
    const randomQuantity = Math.floor(Math.random() * 10) + 1; // Random quantity between 1 and 10
    cy.get('#qty').clear().type(randomQuantity);
});


  
  
  