function inputNewTitle() {
        return $('id=taskTitleEditText');
}

function btnSaveChanges() {
        return $('id=saveTaskButton');
}

function errorMessage() {
        return $('id=snackbar_text')
}

async function renameTask(new_title) {
        await (await inputNewTitle()).clearValue()
        await (await inputNewTitle()).setValue(new_title);
        await (await btnSaveChanges()).click();
}

async function clearTitle(){
        await (await inputNewTitle()).clearValue();
        await (await btnSaveChanges()).click();
}

const TaskPage = {
    errorMessage,
    renameTask,
    clearTitle
}

export default TaskPage;
