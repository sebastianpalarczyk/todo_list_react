import {takeEvery, call, put, delay, takeLatest, select} from "redux-saga/effects";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSuccess, fetchExampleTasksError} from "./tasksSlice";
import {getExampleTasks} from "./getExampleTasks";

function* fetchExampleTasksHandler(){
    try{
        yield delay(3000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    }catch(error){
        yield put (fetchExampleTasksError)
        yield call(alert, "Brak połączenia z internetem lub server nie odpowiada!");
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