describe("Single UUID generation", () => {
    beforeEach(() => {
        cy.visit("/");
    })

    it("should have single mode selected by default", () => {
        cy.dataCy("single-mode-switcher").should("have.attr", "aria-selected", "true");
    });

    it("should open the page successfully", () => {
        cy.dataCy("uuid-value").should('exist');
    });

    it("should show the app version", () => {
        cy.dataCy("app-version").should("not.be.empty");
    });

    it("should generate new uuid", () => {
        cy.dataCy("uuid-value")
            .invoke("val")
            .then(val => {
                cy.dataCy("refresh-uuid").click();
                cy.dataCy("uuid-value").invoke("val").should("not.be.a", val)
            });
    });

    it("should copy the value with copy button", () => {
        cy.dataCy("uuid-value")
            .invoke("val")
            .then(val => {
                cy.dataCy("uuid-value").click();
                cy.dataCy("uuid-copy-btn").click();
                cy.get("[data-cy=uuid-copy-btn].uuid__toolbar-button--checked").should("exist");
                cy.window().then(win => {
                    cy.wrap(win.navigator.clipboard.readText()).should("eq", val);
                })
            });
    });

    it("should copy a proper value after the refresh", () => {
        cy.dataCy("refresh-uuid").click();
        cy.dataCy("uuid-value")
            .invoke("val")
            .then(val => {
                cy.dataCy("uuid-value").click();
                cy.dataCy("uuid-copy-btn").click();
                cy.get("[data-cy=uuid-copy-btn].uuid__toolbar-button--checked").should("exist");
                cy.window().then(win => {
                    cy.wrap(win.navigator.clipboard.readText()).should("eq", val);
                })
            });
    });

    it("should change the icon on refresh after copying", () => {
        cy.dataCy("uuid-value").click();
        cy.dataCy("uuid-copy-btn").click();
        cy.get("[data-cy=uuid-copy-btn].uuid__toolbar-button--checked").should("exist");

        cy.dataCy("refresh-uuid").click();
        cy.get("[data-cy=uuid-copy-btn].uuid__toolbar-button--checked").should("not.exist");
    });
});
