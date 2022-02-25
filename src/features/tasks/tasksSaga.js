import {takeEvery, call, put, delay, takeLatest} from "redux-saga/effects";
import { selectOptions } from "@testing-library/user-event/dist/select-options";
import { saveTasksInLocalStorage } from "./TasksLocalStorage";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import {getExampleTasks} from "./getExampleTasks";

function* fetchExampleTasksHandler(){
    try{
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    }catch(error){
        yield call(alert, "coś poszlo nie tak");
    }
}

// function* saveTasksInLocalStorageHandler(){
//    const tasks = yield selectOptions(selectTasks);
//    yield call(saveTasksInLocalStorage, tasks);
// }

export function* watchFetchExampleTasks(){
    console.log("Saga jest podłączona")
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}