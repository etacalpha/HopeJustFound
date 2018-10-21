import { element, by, ElementFinder } from 'protractor';

export class UserContactComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-user-contact div table .btn-danger'));
    title = element.all(by.css('jhi-user-contact div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class UserContactUpdatePage {
    pageTitle = element(by.id('jhi-user-contact-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    phoneNumberInput = element(by.id('field_phoneNumber'));
    addressInput = element(by.id('field_address'));
    cityInput = element(by.id('field_city'));
    stateInput = element(by.id('field_state'));
    zipCodeInput = element(by.id('field_zipCode'));
    contactDaysInput = element(by.id('field_contactDays'));
    contactTimesInput = element(by.id('field_contactTimes'));
    userSelect = element(by.id('field_user'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setPhoneNumberInput(phoneNumber) {
        await this.phoneNumberInput.sendKeys(phoneNumber);
    }

    async getPhoneNumberInput() {
        return this.phoneNumberInput.getAttribute('value');
    }

    async setAddressInput(address) {
        await this.addressInput.sendKeys(address);
    }

    async getAddressInput() {
        return this.addressInput.getAttribute('value');
    }

    async setCityInput(city) {
        await this.cityInput.sendKeys(city);
    }

    async getCityInput() {
        return this.cityInput.getAttribute('value');
    }

    async setStateInput(state) {
        await this.stateInput.sendKeys(state);
    }

    async getStateInput() {
        return this.stateInput.getAttribute('value');
    }

    async setZipCodeInput(zipCode) {
        await this.zipCodeInput.sendKeys(zipCode);
    }

    async getZipCodeInput() {
        return this.zipCodeInput.getAttribute('value');
    }

    async setContactDaysInput(contactDays) {
        await this.contactDaysInput.sendKeys(contactDays);
    }

    async getContactDaysInput() {
        return this.contactDaysInput.getAttribute('value');
    }

    async setContactTimesInput(contactTimes) {
        await this.contactTimesInput.sendKeys(contactTimes);
    }

    async getContactTimesInput() {
        return this.contactTimesInput.getAttribute('value');
    }

    async userSelectLastOption() {
        await this.userSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async userSelectOption(option) {
        await this.userSelect.sendKeys(option);
    }

    getUserSelect(): ElementFinder {
        return this.userSelect;
    }

    async getUserSelectedOption() {
        return this.userSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class UserContactDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-userContact-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-userContact'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}