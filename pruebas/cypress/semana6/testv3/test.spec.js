/// <reference types="cypress" />
import gC from "./ghost.json";
context("Actions", () => {
  beforeEach(() => {
    cy.visit(gC.host + "#/signin");
    cy.get(gC.signin.selectors.email).type(gC.signin.user.email);
    cy.get(gC.signin.selectors.password).type(gC.signin.user.password);
    cy.get(gC.signin.selectors.submit ).click();
  });
    
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

it("Filtrar posts por Drafts", () => {
    cy.visit(gC.host + "#/posts?type=draft");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
   
    cy.intercept({
      method: "GET",
      url: gC.host + gC.posts.requests.all +gC.posts.requests.filterDrafs ,
    }).as("dataGetFirst");
    cy.screenshot();
    cy.wait("@dataGetFirst").should((response) => {
      cy.screenshot();
      if (response.response.body.posts.length === 0) return;
      cy.clock();
      cy.tick(2000);
      cy.get(gC.posts.selectors.listaPostsStatus)?.each(($el, index, $list) => {
        const text = $el.text();
        cy.log(text);
        cy.screenshot();
        expect(text.includes("Draft")).to.be.true;
      });
    });
  });

  it("Filtrar posts por scheduled", () => {
    cy.visit(gC.host + "#/posts?type=scheduled");
    cy.screenshot();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    let count = 0;
    cy.intercept({
      method: "GET",
      url:
        gC.host + gC.posts.requests.all +gC.posts.requests.filterSheduled,
    }).as("dataGetFirst");

    cy.wait("@dataGetFirst").should((response) => {
      cy.screenshot();
      if (response.response.body.posts.length === 0) return;
      cy.clock();
      cy.tick(2000);
      cy.get(gC.posts.selectors.listaPostsStatus).each(($el, index, $list) => {
        const text = $el.text();
        cy.log(text);
        cy.screenshot();
        expect(text.includes("Scheduled")).to.be.true;
      });
    });
  });

  it("Filtrar posts por published", () => {
    cy.visit(gC.host + "#/posts?type=published");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
 

    cy.intercept({
      method: "GET",
      url: gC.host + gC.posts.requests.all + gC.posts.requests.filterPublished,
    }).as("dataGetFirst");
    cy.screenshot();
    cy.wait("@dataGetFirst").should((response) => {
      if (response.response.body.posts.length === 0) return;
      cy.clock();
      cy.tick(2000);
      cy.screenshot();
      cy.get(gC.posts.selectors.listaPostsStatus).each(($el, index, $list) => {
        const text = $el.text();
        cy.log(text);
        cy.screenshot();
        expect(text.includes("Published")).to.be.true;
      });
    });
  }); 

  it("Filtrar posts por featured", () => {
    cy.visit(gC.host + "#/posts?type=featured");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.intercept({
      method: "GET",
      url:gC.host + gC.posts.requests.all +gC.posts.requests.filterFeatured,
    }).as("dataGetFirst");
    cy.screenshot();
    cy.wait("@dataGetFirst").should((response) => {
      if (response.response.body.posts.length === 0) return;
      cy.clock();
      cy.tick(2000);
      cy.screenshot();
      cy.get(gC.posts.selectors.listaPostsStatus).each(($el, index, $list) => {
        const text = $el.text();
        cy.log(text);
        cy.screenshot();
        expect(text.includes("Featured")).to.be.true;
      });
    });
  });


  it("Ordenar post por oldest", () => {
    cy.visit(gC.host + "#/posts?order=published_at%20asc");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
   
    cy.intercept({
      method: "GET",
      url:
        gC.host +
        gC.posts.requests.all + gC.posts.requests.filterOldest,
    }).as("dataGetFirst");
    cy.screenshot();

    cy.wait("@dataGetFirst").should((response) => {
      const fechasObtenidas = response.response.body.posts.map((e) => {
        return e.updated_at;
      });
      cy.screenshot();
      const fechasOrdenadasDesc = [...fechasObtenidas]
        .sort(function (a, b) {
          return new Date(b) - new Date(a);
        })
        .reverse();

      cy.log(JSON.stringify(fechasObtenidas));
      cy.log(JSON.stringify(fechasOrdenadasDesc));
      cy.screenshot();
      expect(fechasObtenidas.toString()).to.equal(
        fechasOrdenadasDesc.toString()
      );
    });
  });
    

  it("Ordenar post por newest", () => {
    cy.visit(gC.host + "#/posts");
    cy.screenshot();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.intercept({
      method: "GET",
      url:
        gC.host +
        gC.posts.requests.all + gC.posts.requests.filterNewest,
    }).as("dataGetFirst");

    cy.wait("@dataGetFirst").should((response) => {
      const fechasObtenidas = response.response.body.posts.map((e) => {
        return e.updated_at;
      });
      cy.screenshot();
      const fechasOrdenadasAsc = [...fechasObtenidas].sort(function (a, b) {
        return new Date(b) - new Date(a);
      });
      cy.screenshot();
      cy.log(JSON.stringify(fechasObtenidas));
      cy.log(JSON.stringify(fechasOrdenadasAsc));
      expect(fechasObtenidas.toString()).to.equal(
        fechasOrdenadasAsc.toString()
      );
    });
  });
 


  it("Crear post con video de YouTube", () => {
    cy.visit(gC.host + "#/editor");
    cy.screenshot();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    const video = "https://www.youtube.com/watch?v=fxL_8gdEWaU";
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get(gC.posts.selectors.editorPane).click();
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get(gC.posts.selectors.botonMas).click();
    cy.screenshot();
    cy.get(gC.posts.selectors.opcionYouTube).click();
    cy.screenshot();
    cy.get(gC.posts.selectors.urlInput).type(
      video
    );
    cy.screenshot();
    cy.get(gC.posts.selectors.postTitle).type(video);
    cy.screenshot();
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.visit(gC.host + "#/posts");
    cy.screenshot();
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get(gC.posts.selectors.listaPosts).contains(video);
    cy.screenshot();
  });

  it("Editar post con video de YouTube", () => {
    cy.visit(gC.host + "#/posts");
    cy.screenshot();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.screenshot();
    const video = "https://www.youtube.com/watch?v=fxL_8gdEWaU";
    const video2 = "https://www.youtube.com/watch?v=1nzykrl7kUM";
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get("h3").contains(video).click();
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get(gC.posts.selectors.videoContainer).type("{del}", { release: false });

    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get(gC.posts.selectors.botonMas).click();
    cy.screenshot();
    cy.get(gC.posts.selectors.opcionYouTube).click();
    cy.screenshot();
    cy.get(gC.posts.selectors.urlInput).type(
      video2
    );
    cy.screenshot();
    cy.get(gC.posts.selectors.postTitle).type(video2);
    cy.screenshot();
    cy.clock();
    cy.tick(2000);
    cy.visit(gC.host + "#/posts");
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get(gC.posts.selectors.listaPosts).contains(video2);
  });
 
    
  it("Agregar tag a post", () => {
    cy.visit(gC.host + "#/posts");
    cy.screenshot();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    const video = "https://www.youtube.com/watch?v=1nzykrl7kUM";

    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get("h3").contains(video).click();
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get(gC.posts.selectors.settingsButton).click();
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get(gC.posts.selectors.tagInput).click();
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get(gC.posts.selectors.tagInput).type("SimponsMovie");
    cy.screenshot();
    cy.get(gC.posts.selectors.tagOption).click();
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.visit(gC.host + "#/posts");
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get('button').contains("Leave").click();
    cy.screenshot();
  });
   
 
  it("Guardar vista posts", () => {
    cy.visit(gC.host + "#/posts?type=published&visibility=members");
    cy.screenshot();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.get(gC.posts.selectors.saveViewOption).click();
    cy.screenshot();
    cy.clock();
    cy.tick(2000);
    cy.get(gC.posts.selectors.inputNameSaveView).clear();
    cy.screenshot();
    cy.get(gC.posts.selectors.inputNameSaveView).type("Custom view");

    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get('button').contains("Save").click();
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get(gC.posts.selectors.savedOptionView).contains("Custom view");
    cy.screenshot();
  });
  
  
  it("Eliminar vista posts", () => {
    cy.visit(gC.host + "#/posts?type=published&visibility=members");
    cy.screenshot();
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.screenshot();
    cy.get(gC.posts.selectors.saveViewOption).click();
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get(gC.posts.selectors.inputNameSaveView).clear();
    cy.screenshot();
    cy.get(gC.posts.selectors.inputNameSaveView).type("Custom view");

    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get('button').contains("Save").click();
    cy.screenshot();
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    
    cy.get(gC.posts.selectors.saveViewOption).click();
    cy.screenshot();
    cy.get(gC.posts.selectors.deleteViewButton).contains("Delete").click();
    cy.clock();
    cy.tick(2000);
    cy.screenshot();
    cy.get(".gh-nav-view-list").should("not.contain", "Custom view");
    cy.screenshot();
  });

    it('PRUEBA #17 - Crear pagina nueva, crear tag, la publica y listar por tag creado', () => {

        cy.get('.gh-nav-top').contains('Pages').click()
        cy.wait(1000)
        cy.screenshot()

        cy.url().should('eq', 'http://localhost:3001/ghost/#/pages')
        cy.get('.view-actions').contains('New page').click()
        cy.wait(1000)
        cy.screenshot()

        cy.url().should('eq', 'http://localhost:3001/ghost/#/editor/page')
        const titulPagina = "pagina con tag semana 5";
        const contenidoPagina = "contenido de pagina con tag";
        cy.get('.gh-koenig-editor-pane').find('textarea').type(titulPagina)
        cy.screenshot()

        cy.get('.gh-koenig-editor-pane').get('.koenig-editor__editor-wrapper').type(contenidoPagina)
        cy.screenshot()

        cy.get('.post-settings').click()
        cy.wait(1000)
        cy.screenshot()

        cy.get('#tag-input').find('input').type(titulPagina)
        cy.screenshot()

        cy.get('.ember-power-select-option').click()
        cy.wait(1000)
        cy.screenshot()

        cy.get('.close.settings-menu-header-action').click()
        cy.wait(1000)
        cy.screenshot()

        cy.get('.gh-publishmenu-trigger').contains('Publish').click()
        cy.wait(1000)
        cy.screenshot()

        cy.get('.gh-publishmenu-dropdown').contains('Set it live now').click()
        cy.wait(1000)
        cy.screenshot()

        cy.get('.gh-publishmenu-dropdown').get('.gh-publishmenu-footer').contains('Publish').click()
        cy.wait(1000)
        cy.screenshot()

        cy.get('.gh-notification.gh-notification-passive').should('contain', 'Published')
        cy.get('.gh-notification-actions').should('contain', 'View Page')
        const titulPaginaSepareted = titulPagina.replace(/ /g,"-")
        cy.get('.gh-notification-actions').find('a').should('have.attr', 'href').and('include', titulPaginaSepareted)

        cy.get('.gh-editor-header').contains('Pages').click()
        cy.wait(1000)
        cy.screenshot()

        cy.get('.gh-canvas-header.post-header').contains('All tags').click()
        cy.wait(1000)
        cy.screenshot()

        cy.get('.ember-power-select-dropdown--active').find('ul').find('li').contains(titulPagina).click()
        cy.wait(1000)
        cy.screenshot()

        cy.url().should('eq', 'http://localhost:3001/ghost/#/pages?tag=pagina-con-tag-semana-5')

    })

    it('PRUEBA #19 - Elimina pagina con tag ', () => {

        cy.get('.gh-nav-top').contains('Pages').click()
        cy.wait(1000)
        cy.screenshot()

        cy.url().should('eq', 'http://localhost:3001/ghost/#/pages')
        cy.get('.view-actions').contains('All pages').click()
        cy.wait(1000)
        cy.screenshot()

        cy.get('#ember-basic-dropdown-wormhole').contains('Published pages').click()
        cy.wait(1000)
        cy.screenshot()
        cy.url().should('eq', 'http://localhost:3001/ghost/#/pages?type=published')

        const titulPagina = "pagina con tag semana 5";
        cy.get('.gh-contentfilter').contains('All tags').click()
        cy.wait(1000)
        cy.screenshot()

        cy.get('.ember-power-select-dropdown--active').find('ul').find('li').contains(titulPagina).click()
        cy.wait(1000)
        cy.screenshot()

        cy.get('.gh-list').find('li').get('.gh-posts-list-item.gh-list-row').contains(titulPagina).click()
        cy.wait(1000)
        cy.screenshot()
        cy.url().should('contain', 'http://localhost:3001/ghost/#/editor/page')

        cy.get('.post-settings').click()
        cy.wait(1000)
        cy.screenshot()

        cy.get('.settings-menu-content').find('form').find('button').get('.settings-menu-delete-button').click()
        cy.wait(1000)

        cy.get('.modal-content').get('.modal-footer').get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').find('span').click({ force: true })
        cy.wait(50)
        cy.screenshot()
        cy.wait(1000)
        cy.screenshot()

    })
  
  
});
