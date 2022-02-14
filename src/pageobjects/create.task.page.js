export const CREATE_PAGE_SELECTORS = {
        TITLE_INPUT: 'id=taskTitleEditText',
        DESCRIPTION_INPUT: 'id=taskDescriptionEditText',
        SAVE_TASK_BUTTON: 'id=saveTaskButton',
};


async function createNewTask(title, description) {
        await $(CREATE_PAGE_SELECTORS.TITLE_INPUT).setValue(title);
        await $(CREATE_PAGE_SELECTORS.DESCRIPTION_INPUT).setValue(description);
        await $(CREATE_PAGE_SELECTORS.SAVE_TASK_BUTTON).click();
}

const CreateTaskPage = {
    createNewTask,
}

export default CreateTaskPage;
