export const CREATE_PAGE_SELECTORS = {
    TITLE_INPUT: 'id=taskTitleEditText',
    DESCRIPTION_INPUT: 'id=taskDescriptionEditText',
    SAVE_TASK_BUTTON: 'id=saveTaskButton',
};

async function createNewTask(task) {
    const { generatedName, generatedDescription } = task;
    const { TITLE_INPUT, DESCRIPTION_INPUT, SAVE_TASK_BUTTON } = CREATE_PAGE_SELECTORS;
    await $(TITLE_INPUT).setValue(generatedName);
    await $(DESCRIPTION_INPUT).setValue(generatedDescription);
    await $(SAVE_TASK_BUTTON).click();
}

const CreateTaskPage = {
    createNewTask,
};

export default CreateTaskPage;
