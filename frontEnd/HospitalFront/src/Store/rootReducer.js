import { combineReducers } from "redux";
import { persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage";
import authReducer from "./users/sliceUser"
import turnoReducer from "./turnos/turnoSlice"


const authPersistConfig = {
    key:"auth",
    storage
}

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    turno:turnoReducer
})

export default rootReducer;