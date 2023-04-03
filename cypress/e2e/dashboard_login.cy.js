describe("Daily healthcheck test - login to system and ensure dashboard reachable", () => {
  it("Should allow me to login to the CMS dashboard and load the presentations index page", () => {
    cy.visit("http://localhost:3000/");

    //   cy.findByRole("button", {
    //     name: /Yes, I accept/i,
    //   }).click();

    //   // cy.findByLabelText('Email address').type("digital@dnco.com");

    cy.findByText("Turborepo Example");

    //   cy.findByRole("textbox", {
    //     type: /email/i,
    //   }).type("digital@dnco.com");

    //   // cy.findByLabelText("Password").type("showhereRobotPassword");

    //   cy.get(":nth-child(2) > .border-2").type("showhereRobotPassword");

    //   cy.findByRole("button", {
    //     name: /sign in/i,
    //   }).click();

    cy.url().should("eq", "http://localhost:3000/");
  });
});
