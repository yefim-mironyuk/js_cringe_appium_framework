
function inputTitle() {
        return $('id=taskTitleEditText');
}

function inputDescription() {
        return $('id=taskDescriptionEditText');
}

function btnSaveTask() {
        return $('id=saveTaskButton');
}


async function createNewTask(title, description) {
        await (await inputTitle()).setValue(title);
        await (await inputDescription()).setValue(description);
        await (await btnSaveTask()).click();
}

const CreateTaskPage = {
    createNewTask,
}

export default CreateTaskPage;
