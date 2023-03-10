import { takeEvery, call, put, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess, selectTasks } from "../tasks/taskSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks)
        yield put(fetchExampleTasksSuccess(exampleTasks))
    } catch (error) {
        yield put(fetchExampleTasksError())
        yield call(alert, "Coś poszło nie tak!")
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks)
}

export function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler)
}
