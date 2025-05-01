import {SelectablePage} from "../pageObjects/SelectablePage";


describe("MD1", () => {
  context("/selectable test", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("grid buttons", () => {
      SelectablePage.gridButton.click();

      SelectablePage.button_2.click();
      SelectablePage.button_4.click();
      SelectablePage.button_6.click();
      SelectablePage.button_8.click();

      SelectablePage.button_2.should("have.class", "active");
      SelectablePage.button_4.should("have.class", "active");
      SelectablePage.button_6.should("have.class", "active");
      SelectablePage.button_8.should("have.class", "active");

      SelectablePage.button_1.should("not.have.class", "active");
      SelectablePage.button_3.should("not.have.class", "active");
      SelectablePage.button_5.should("not.have.class", "active");
      SelectablePage.button_7.should("not.have.class", "active");
      SelectablePage.button_9.should("not.have.class", "active");
    });
  });
});
