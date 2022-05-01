import MainPage, { MAIN_PAGE_SELECTORS } from '../pageobjects/mainPage';
import CreateTaskPage from '../pageobjects/createTaskPage';
import TaskPage, { TASK_PAGE_SELECTORS } from '../pageobjects/taskPage';
import { getGeneratedTask } from '../utils/fakeDataGenerator';

const generatedTask = getGeneratedTask();

describe('Native APK tests', () => {
    beforeEach(async () => {
        await MainPage.goToCreateTaskPage();
        await CreateTaskPage.createNewTask(generatedTask);
    });

    it('should be able to create task', async () => {
        await expect($(MAIN_PAGE_SELECTORS.NEW_TASK_TITLE_BUTTON)).toBeExisting();
        await expect($(MAIN_PAGE_SELECTORS.NEW_TASK_TITLE_BUTTON)).toHaveTextContaining(
            generatedTask.generatedName
        );
    });

    it('should be able to rename task', async () => {
        await MainPage.goToTaskPage();
        await TaskPage.renameTask(generatedTask.newName);
        await expect($(MAIN_PAGE_SELECTORS.NEW_TASK_TITLE_BUTTON)).toBeExisting();
        await expect($(MAIN_PAGE_SELECTORS.NEW_TASK_TITLE_BUTTON)).toHaveTextContaining(
            generatedTask.newName
        );
    });

    it('should be error message when title is empty', async () => {
        await MainPage.goToTaskPage();
        await TaskPage.clearTitle();
        await expect($(TASK_PAGE_SELECTORS.ERROR_MESSAGE)).toBeExisting();
    });
});
