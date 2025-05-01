import {BasePage} from "./BasePage";

export class SelectablePage extends BasePage {
    static get url() {
        return "/selectable";
    }

    static get gridButton() {
        return cy.get("#demo-tab-grid");
    }

    static get button_1() {
        return SelectablePage.getButton("One");
    }

    static get button_2() {
        return SelectablePage.getButton("Two");
    }

    static get button_3() {
        return SelectablePage.getButton("Three");
    }

    static get button_4() {
        return SelectablePage.getButton("Four");
    }

    static get button_5() {
        return SelectablePage.getButton("Five");
    }

    static get button_6() {
        return SelectablePage.getButton("Six");
    }

    static get button_7() {
        return SelectablePage.getButton("Seven");
    }

    static get button_8() {
        return SelectablePage.getButton("Eight");
    }

    static get button_9() {
        return SelectablePage.getButton("Nine");
    }

    static getButton(buttonText) {
        return cy.get("#gridContainer").find("li").contains(buttonText);
    }

}
