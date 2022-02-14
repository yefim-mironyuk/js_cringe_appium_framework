export const TASK_PAGE_SELECTORS = {
    TITLE_INPUT: 'id=taskTitleEditText',
    SAVE_CHANGES_BUTTON: 'id=saveTaskButton',
    ERROR_MESSAGE: 'id=snackbar_text',
};

async function renameTask(new_title) {
        await $(TASK_PAGE_SELECTORS.TITLE_INPUT).clearValue();
        await $(TASK_PAGE_SELECTORS.TITLE_INPUT).setValue(new_title);
        await $(TASK_PAGE_SELECTORS.SAVE_CHANGES_BUTTON).click();
}

async function clearTitle(){
        await $(TASK_PAGE_SELECTORS.TITLE_INPUT).clearValue();
        await $(TASK_PAGE_SELECTORS.SAVE_CHANGES_BUTTON).click();
}

const TaskPage = {
    renameTask,
    clearTitle
}

export default TaskPage;
