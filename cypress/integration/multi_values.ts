describe("Multi value generation", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.dataCy("multi-mode-switcher").click();
        cy.dataCy("multi-mode-switcher").should("have.attr", "aria-selected", "true");
    });

    it("should be able to switch back to single mode", () => {
        cy.dataCy("single-mode-switcher").click();
        cy.dataCy("single-mode-switcher").should("have.attr", "aria-selected", "true");
    });

    it("should have default options selected", () => {
        cy.dataCy("radio_quotes_nothing").should("be.checked");
        cy.dataCy("checkbox_comma").should("be.not.checked");
        cy.dataCy("checkbox_newline").should("be.not.checked");
        cy.dataCy("size-selector").should("have.value", "10");
        cy.dataCy("multi-uuid-value").invoke("val").should("match", /([0-9a-f\-]+\s){9}([0-9a-f\-]+)/)
    });

    it("should generate uuid with single and double quotes", () => {
        cy.dataCy("radio_quotes_single").check();
        cy.dataCy("multi-uuid-value").invoke("val").should("match", /('[0-9a-f\-]+'\s){9}('[0-9a-f\-]+')/)

        cy.dataCy("radio_quotes_double").check();
        cy.dataCy("multi-uuid-value").invoke("val").should("match", /("[0-9a-f\-]+"\s){9}("[0-9a-f\-]+")/)
    });

    it("should generate uuids separated by commas and new lines", () => {
        cy.dataCy("checkbox_comma").check();
        cy.dataCy("multi-uuid-value").invoke("val").should("match", /([0-9a-f\-]+,\s){9}([0-9a-f\-]+)/);

        cy.dataCy("checkbox_newline").check();
        cy.dataCy("multi-uuid-value").invoke("val").should("match", /([0-9a-f\-]+,\s\n){9}([0-9a-f\-]+)/);

        cy.dataCy("checkbox_comma").uncheck();
        cy.dataCy("multi-uuid-value").invoke("val").should("match", /([0-9a-f\-]+\n){9}([0-9a-f\-]+)/);
    });

    it("should define the size of the list", () => {
        cy.dataCy("size-selector").clear().type("15");
        cy.dataCy("multi-uuid-value").invoke("val").should("match", /([0-9a-f\-]+\s){14}([0-9a-f\-]+)/);
    });

    it("should use different options together", () => {
        cy.dataCy("radio_quotes_single").check();
        cy.dataCy("checkbox_comma").check();
        cy.dataCy("checkbox_newline").check();
        cy.dataCy("size-selector").clear().type("5");

        cy.dataCy("multi-uuid-value").invoke("val").should("match", /('[0-9a-f\-]+',\s\n){4}'[0-9a-f\-]+'/);
    });

    it("should regenerate the uuid list on clicking the refresh button", () => {
        cy.dataCy("multi-uuid-value")
            .invoke("val")
            .then(val => {
                cy.dataCy("refresh-uuid").click();
                cy.dataCy("multi-uuid-value").invoke("val").should("not.be.a", val)
            });
    });

    it("should regenerate the uuid list on changing the size", () => {
        cy.dataCy("multi-uuid-value")
            .invoke("val")
            .then(val => {
                cy.dataCy("size-selector").clear().type("5");
                cy.dataCy("multi-uuid-value").invoke("val").should("not.be.a", val)
            });
    });

    it("should copy the uuid list with copy button", () => {
        cy.dataCy("multi-uuid-value")
            .invoke("val")
            .then(val => {
                cy.dataCy("multi-uuid-value").click();
                cy.dataCy("multi-uuid-copy-btn").click();
                cy.get("[data-cy=multi-uuid-copy-btn].multi-uuid__toolbar-button--checked").should("exist");
                cy.window().then(win => {
                    cy.wrap(win.navigator.clipboard.readText()).should("eq", val);
                })
            });
    });

    it("should copy a proper value after the refresh", () => {
        cy.dataCy("refresh-uuid").click();
        cy.dataCy("multi-uuid-value")
            .invoke("val")
            .then(val => {
                cy.dataCy("multi-uuid-value").click();
                cy.dataCy("multi-uuid-copy-btn").click();
                cy.get("[data-cy=multi-uuid-copy-btn].multi-uuid__toolbar-button--checked").should("exist");
                cy.window().then(win => {
                    cy.wrap(win.navigator.clipboard.readText()).should("eq", val);
                })
            });
    });
});
