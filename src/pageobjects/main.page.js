export const MAIN_PAGE_SELECTORS = {
    CREATE_TASK_BUTTON: 'id=addTaskButton',
    NEW_TASK_TITLE_BUTTON: '//android.widget.ListView/android.widget.TextView[last()]',
};

async function goToCreateTaskPage() {
    await $(MAIN_PAGE_SELECTORS.CREATE_TASK_BUTTON).click()
}

async function goToTaskPage() {
    await $(MAIN_PAGE_SELECTORS.NEW_TASK_TITLE_BUTTON).click()
}

const MainPage = {
    goToCreateTaskPage,
    goToTaskPage
}

export default  MainPage;
