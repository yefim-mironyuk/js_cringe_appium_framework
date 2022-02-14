import MainPage, {MAIN_PAGE_SELECTORS} from "../pageobjects/main.page.js";
import CreateTaskPage from "../pageobjects/create.task.page.js";
import TaskPage, {TASK_PAGE_SELECTORS} from "../pageobjects/task.page.js";
import getGeneratedTask from "../utils/test-data-generator.js"



describe('Native APK tests', () => {

    beforeEach( async () => {
        await MainPage.goToCreateTaskPage();
        await CreateTaskPage.createNewTask(getGeneratedTask.generatedName, getGeneratedTask.generatedDescription);
    });

    it('should be able to create task', async () => {
        await expect($(MAIN_PAGE_SELECTORS.NEW_TASK_TITLE_BUTTON)).toBeExisting();
        await expect($(MAIN_PAGE_SELECTORS.NEW_TASK_TITLE_BUTTON)).toHaveTextContaining(getGeneratedTask.generatedName);
    });

    it('should be able to rename task', async () => {
        await MainPage.goToTaskPage();
        await TaskPage.renameTask(getGeneratedTask.newName);
        await expect($(MAIN_PAGE_SELECTORS.NEW_TASK_TITLE_BUTTON)).toBeExisting();
        await expect($(MAIN_PAGE_SELECTORS.NEW_TASK_TITLE_BUTTON)).toHaveTextContaining(getGeneratedTask.newName);
    })

    it ('should be error message when title is empty', async () =>{
        await MainPage.goToTaskPage();
        await TaskPage.clearTitle();
        await expect($(TASK_PAGE_SELECTORS.ERROR_MESSAGE)).toBeExisting()
    })

});
