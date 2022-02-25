import {takeEvery, call, put, delay, takeLatest, select} from "redux-saga/effects";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import {getExampleTasks} from "./getExampleTasks";

function* fetchExampleTasksHandler(){
    try{
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    }catch(error){
        yield call(alert, "coś poszlo nie tak");
    }
}

function* saveTasksInLocalStorageHandler(){
   const tasks = yield select(selectTasks);
   yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga(){
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}