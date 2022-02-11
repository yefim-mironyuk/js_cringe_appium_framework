function btnCreateTask() {
    return $('id=addTaskButton');
}

function btnNewTaskTitle(){
    return $('//android.widget.ListView/android.widget.TextView[last()]')
}

async function goToCreateTaskPage() {
    await (await btnCreateTask()).click()
}

async function goToTaskPage() {
    await (await btnNewTaskTitle()).click()
}

const MainPage = {
    goToCreateTaskPage,
    goToTaskPage,
    btnNewTaskTitle
}

export default  MainPage;
