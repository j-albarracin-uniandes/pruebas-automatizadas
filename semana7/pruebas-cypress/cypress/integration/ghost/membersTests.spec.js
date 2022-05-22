import gC from "./parameters.json";

context("Actions", () => {
  beforeEach(() => {
    cy.login_simple();
    cy.visit(gC.host + "#/members");
  });

  it("TEST-MEMBERS, no email, random", () => {
    cy.get("section.gh-canvas").find("a[href='#/members/new/']").click();
    cy.get("header.gh-canvas-header-content").find("button[type='button']").click();
    cy.get("div.gh-cp-member-email-name").find("div.error").should("have.length", 1);
  });

  it("TEST-MEMBERS, invalid email, random", () => {
    cy.get("section.gh-canvas").find("a[href='#/members/new/']").click();
    cy.get("input[name='email']").type(cy.faker.internet.userName());
    cy.get("header.gh-canvas-header-content").find("button[type='button']").click();
    cy.get("div.gh-cp-member-email-name").find("div.error").should("have.length", 1);
  });

  it("TEST-MEMBERS, just a valid email, random", () => {
    cy.get("section.gh-canvas").find("a[href='#/members/new/']").click();
    const email = cy.faker.internet.exampleEmail();
    cy.get("input[name='email']").type(email);
    cy.get("header.gh-canvas-header-content").find("button[type='button']").click();
    cy.get("div.gh-member-details-identity").find("h3").should("have.length", 1);
    // cy.get("div.gh-member-details-identity").find("h3").should("have.text", email);
  });

  it("TEST-MEMBERS, a valid email long name, random", () => {
    cy.get("section.gh-canvas").find("a[href='#/members/new/']").click();
    cy.get("input[name='email']").type(cy.faker.internet.exampleEmail());
    cy.get("div.gh-cp-member-email-name").find("#member-name").type(cy.faker.random.alpha(200));
    cy.get("header.gh-canvas-header-content").find("button[type='button']").click();
    cy.get("div.gh-cp-member-email-name").find("p.response").first().should("have.text", "\n    Name cannot be longer than 191 characters.\n");
  });

  it("TEST-MEMBERS, a valid email and valid name, random", () => {
    cy.get("section.gh-canvas").find("a[href='#/members/new/']").click();
    const name = cy.faker.name.findName();
    cy.get("input[name='email']").type(cy.faker.internet.exampleEmail());
    cy.get("div.gh-cp-member-email-name").find("#member-name").type(name);
    cy.get("header.gh-canvas-header-content").find("button[type='button']").click();
    cy.get("div.gh-member-details-identity").find("h3").should("have.length", 1);
    cy.get("div.gh-member-details-identity").find("h3").should("have.text", "\n                    "+name+"\n                ");
  });

  it("TEST-MEMBERS, a valid email and valid name but long note, random", () => {
    cy.get("section.gh-canvas").find("a[href='#/members/new/']").click();
    cy.get("input[name='email']").type(cy.faker.internet.exampleEmail());
    cy.get("div.gh-cp-member-email-name")
      .find("#member-name")
      .type(cy.faker.name.findName());
    cy.get("div.gh-member-note")
      .find("#member-note")
      .type(cy.faker.random.alphaNumeric(510));
    cy.get("header.gh-canvas-header-content")
      .find("button[type='button']")
      .click();
    cy.get("div.gh-member-note.error").should("have.length", 1);
    cy.get("div.gh-member-note.error").should(
      "have.text",
      "\n                        Note (not visible to member)\n                        \n                        \n    Note is too long.\n\n\n                         Maximum: 500 characters. You’ve used\n                            510\n                    "
    );
  });

  it("TEST-MEMBERS, a valid email, valid name and valid note, random", () => {
    cy.get("section.gh-canvas").find("a[href='#/members/new/']").click();
    const name = cy.faker.name.findName();
    cy.get("input[name='email']").type(cy.faker.internet.exampleEmail());
    cy.get("div.gh-cp-member-email-name")
      .find("#member-name")
      .type(name);
    cy.get("div.gh-member-note")
      .find("#member-note")
      .type(cy.faker.random.alphaNumeric(50));
    cy.get("header.gh-canvas-header-content")
      .find("button[type='button']")
      .click();
    cy.get("div.gh-member-details-identity").find("h3").should("have.length", 1);
    cy.get("div.gh-member-details-identity").find("h3").should("have.text", "\n                    "+name+"\n                ");
  });


  it("TEST-MEMBERS, a valid email, valid name, valid note, and a valid label, random", () => {
    cy.get("section.gh-canvas").find("a[href='#/members/new/']").click();
    const name = cy.faker.name.findName();
    cy.get("input[name='email']").type(cy.faker.internet.exampleEmail());
    cy.get("div.gh-cp-member-email-name")
      .find("#member-name")
      .type(name);
    cy.get("div.gh-member-labels")
      .find(".ember-power-select-trigger-multiple-input")
      .type(cy.faker.name.jobType()+'{enter}');
    cy.get("div.gh-member-note")
      .find("#member-note")
      .type(cy.faker.random.alphaNumeric(50));
    cy.get("header.gh-canvas-header-content")
      .find("button[type='button']")
      .click();
    cy.get("div.gh-member-details-identity").find("h3").should("have.length", 1);
    cy.get("div.gh-member-details-identity").find("h3").should("have.text", "\n                    "+name+"\n                ");
  });


  it("TEST-MEMBERS, a valid email, valid name, valid note, and a valid label, no newsletter subscription, random", () => {
    cy.get("section.gh-canvas").find("a[href='#/members/new/']").click();
    const name = cy.faker.name.findName();
    cy.get("input[name='email']").type(cy.faker.internet.exampleEmail());
    cy.get("div.gh-cp-member-email-name")
      .find("#member-name")
      .type(name);
    cy.get("div.gh-member-labels")
      .find(".ember-power-select-trigger-multiple-input")
      .type(cy.faker.name.jobType()+'{enter}');
    cy.get("div.gh-member-note")
      .find("#member-note")
      .type(cy.faker.random.alphaNumeric(50));
    cy.get("div.gh-members-subscribed-checkbox")
      .find("input.ember-checkbox")
      .click({force: true});
    cy.get("header.gh-canvas-header-content")
      .find("button[type='button']")
      .click();
    cy.get("div.gh-member-details-identity").find("h3").should("have.length", 1);
    cy.get("div.gh-member-details-identity").find("h3").should("have.text", "\n                    "+name+"\n                ");
  });


  it("TEST-MEMBERS, creates a member a delete it, random", () => {
    cy.get("section.gh-canvas").find("a[href='#/members/new/']").click();
    const name = cy.faker.name.findName();
    cy.get("input[name='email']").type(cy.faker.internet.exampleEmail());
    cy.get("div.gh-cp-member-email-name").find("#member-name").type(name);
    cy.get("header.gh-canvas-header-content").find("button[type='button']").click();
    cy.get("div.gh-member-details-identity").find("h3").should("have.length", 1);
    cy.get("div.gh-member-details-identity").find("h3").should("have.text", "\n                    "+name+"\n                ");
    cy.wait(2000);
    cy.get("header.gh-canvas-header-content").find("button[type='button']").first().click();
    cy.get("header.gh-canvas-header-content span.dropdown").find("button[type='button'].mr2").last().click();
    cy.wait(2000);
    cy.get("div.fullscreen-modal").find("button.gh-btn-red").last().click({force: true});
    cy.wait(2000);
    cy.get("tbody.ember-view").contains(name).should("have.length", 0);
  });
});
