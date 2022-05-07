/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:2368/ghost/#/signin");
    const email = "ingeo.jhonap@gmail.com";
    const password = "password";
    cy.get("#ember7").type(email);
    cy.get("#ember9").type(password);
    cy.get("#ember11").click();
  });

  it("Filtrar posts por Drafts", () => {
    cy.visit("http://localhost:2368/ghost/#/posts?type=draft");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.intercept({
      method: "GET",
      url: "http://localhost:2368/ghost/api/admin/posts/?limit=30&page=1&filter=status%3Adraft",
    }).as("dataGetFirst");

    cy.wait("@dataGetFirst").should((response) => {
      if (response.response.body.posts.length === 0) return;
      cy.clock();
      cy.tick(2000);
      cy.get(".gh-post-list-status")?.each(($el, index, $list) => {
        const text = $el.text();
        cy.log(text);
        expect(text.includes("Draft")).to.be.true;
      });
    });
  });

  it("Filtrar posts por scheduled", () => {
    cy.visit("http://localhost:2368/ghost/#/posts?type=scheduled");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    let count = 0;
    cy.intercept({
      method: "GET",
      url: "http://localhost:2368/ghost/api/admin/posts/?limit=30&page=1&filter=status%3Ascheduled",
    }).as("dataGetFirst");

    cy.wait("@dataGetFirst").should((response) => {
      if (response.response.body.posts.length === 0) return;
      cy.clock();
      cy.tick(2000);
      cy.get(".gh-post-list-status").each(($el, index, $list) => {
        const text = $el.text();
        cy.log(text);
        expect(text.includes("Scheduled")).to.be.true;
      });
    });
  });

  it("Filtrar posts por published", () => {
    cy.visit("http://localhost:2368/ghost/#/posts?type=published");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.intercept({
      method: "GET",
      url: "http://localhost:2368/ghost/api/admin/posts/?limit=30&page=1&filter=status%3Apublished",
    }).as("dataGetFirst");

    cy.wait("@dataGetFirst").should((response) => {
      if (response.response.body.posts.length === 0) return;
      cy.clock();
      cy.tick(2000);
      cy.get(".gh-post-list-status").each(($el, index, $list) => {
        const text = $el.text();
        cy.log(text);
        expect(text.includes("Published")).to.be.true;
      });
    });
  });

  it("Filtrar posts por featured", () => {
    cy.visit("http://localhost:2368/ghost/#/posts?type=featured");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.intercept({
      method: "GET",
      url: "http://localhost:2368/ghost/api/admin/posts/?limit=30&page=1&filter=status%3A%5Bdraft%2Cscheduled%2Cpublished%2Csent%5D%2Bfeatured%3Atrue",
    }).as("dataGetFirst");

    cy.wait("@dataGetFirst").should((response) => {
      if (response.response.body.posts.length === 0) return;
      cy.clock();
      cy.tick(2000);
      cy.get(".gh-post-list-status").each(($el, index, $list) => {
        const text = $el.text();
        cy.log(text);
        expect(text.includes("Featured")).to.be.true;
      });
    });
  });

  it("Ordenar post por oldest", () => {
    cy.visit("http://localhost:2368/ghost/#/posts?order=published_at%20asc");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.intercept({
      method: "GET",
      url: "http://localhost:2368/ghost/api/admin/posts/?limit=30&page=1&filter=status%3A%5Bdraft%2Cscheduled%2Cpublished%2Csent%5D&order=published_at%20asc",
    }).as("dataGetFirst");

    cy.wait("@dataGetFirst").should((response) => {
      const fechasObtenidas = response.response.body.posts.map((e) => {
        return e.updated_at;
      });
      const fechasOrdenadasDesc = [...fechasObtenidas]
        .sort(function (a, b) {
          return new Date(b) - new Date(a);
        })
        .reverse();
      cy.log(JSON.stringify(fechasObtenidas));
      cy.log(JSON.stringify(fechasOrdenadasDesc));
      expect(fechasObtenidas.toString()).to.equal(
        fechasOrdenadasDesc.toString()
      );
    });
  });

  it("Ordenar post por newest", () => {
    cy.visit("http://localhost:2368/ghost/#/posts");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.intercept({
      method: "GET",
      url: "http://localhost:2368/ghost/api/admin/posts/?limit=30&page=1&filter=status%3A%5Bdraft%2Cscheduled%2Cpublished%2Csent%5D",
    }).as("dataGetFirst");

    cy.wait("@dataGetFirst").should((response) => {
      const fechasObtenidas = response.response.body.posts.map((e) => {
        return e.updated_at;
      });
      const fechasOrdenadasAsc = [...fechasObtenidas].sort(function (a, b) {
        return new Date(b) - new Date(a);
      });
      cy.log(JSON.stringify(fechasObtenidas));
      cy.log(JSON.stringify(fechasOrdenadasAsc));
      expect(fechasObtenidas.toString()).to.equal(
        fechasOrdenadasAsc.toString()
      );
    });
  });

  it("Crear post con video de YouTube", () => {
    cy.visit("http://localhost:2368/ghost/#/editor");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    const video = "https://www.youtube.com/watch?v=fxL_8gdEWaU";
    cy.clock();
    cy.tick(2000);
    cy.get(".gh-koenig-editor-pane").click();
    cy.clock();
    cy.tick(2000);
    cy.get(".koenig-plus-menu-button").click();
    cy.get(".middarkgrey[title=YouTube]").click();

    cy.get("input[placeholder='Paste URL to add embedded content...']").type(
      video
    );
    cy.get("textarea[placeholder='Post title']").type(video);
    cy.clock();
    cy.tick(2000);
    cy.visit("http://localhost:2368/ghost/#/posts");
    cy.clock();
    cy.tick(2000);
    cy.get(".posts-list").contains(video);
  });
  it("Editar post con video de YouTube", () => {
    cy.visit("http://localhost:2368/ghost/#/posts");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    const video = "https://www.youtube.com/watch?v=fxL_8gdEWaU";
    const video2 = "https://www.youtube.com/watch?v=1nzykrl7kUM";
    cy.clock();
    cy.tick(2000);
    cy.get("h3").contains(video).click();
    cy.clock();
    cy.tick(2000);

    cy.get(".koenig-card-click-overlay").type("{del}", { release: false });

    cy.clock();
    cy.tick(2000);

    cy.get(".koenig-plus-menu-button").click();
    cy.get(".middarkgrey[title=YouTube]").click();

    cy.get("input[placeholder='Paste URL to add embedded content...']").type(
      video2
    );
    cy.get("textarea[placeholder='Post title']").type(video2);
    cy.clock();
    cy.tick(2000);
    cy.visit("http://localhost:2368/ghost/#/posts");
    cy.clock();
    cy.tick(2000);
    cy.get(".posts-list").contains(video2);
  });
  it("Agregar tag a post", () => {
    cy.visit("http://localhost:2368/ghost/#/posts");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    const video = "https://www.youtube.com/watch?v=1nzykrl7kUM";

    cy.clock();
    cy.tick(2000);
    cy.get("h3").contains(video).click();
    cy.clock();
    cy.tick(2000);
    cy.get(".settings-menu-toggle").click();
    cy.clock();
    cy.tick(2000);
    cy.get("#tag-input").click();
    cy.clock();
    cy.tick(2000);
    cy.get("#tag-input").type("SimponsMovie");
    cy.get(".ember-power-select-option").click();
    cy.clock();
    cy.tick(2000);
    cy.visit("http://localhost:2368/ghost/#/posts");
    cy.clock();
    cy.tick(2000);
    cy.get(".gh-btn gh-btn-red[type=button]").click();
  });
  it("Guardar vista posts", () => {
    cy.visit(
      "http://localhost:2368/ghost/#/posts?type=published&visibility=members"
    );
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get(".gh-btn-save-view").click();
    cy.clock();
    cy.tick(2000);
    cy.get("#view-name").clear();
    cy.get("#view-name").type("Custom view");

    cy.clock();
    cy.tick(2000);
    cy.get(".gh-btn-black").click();
    cy.clock();
    cy.tick(2000);
    cy.get("a[title='Custom view']").contains("Custom view");
  });

  it("Eliminar vista posts", () => {
    cy.visit(
      "http://localhost:2368/ghost/#/posts?type=published&visibility=members"
    );
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get(".gh-btn-save-view").click();
    cy.clock();
    cy.tick(2000);
    cy.get("#view-name").clear();
    cy.get("#view-name").type("Custom view");

    cy.clock();
    cy.tick(2000);
    cy.get(".gh-btn-black").click();

    cy.get(".gh-btn-save-view").click();
    cy.clock();
    cy.tick(2000);

    cy.get(".gh-btn-red").click();
    cy.clock();
    cy.tick(2000);

    cy.get(".gh-nav-view-list").should("not.contain", "Custom view");
  });
});
