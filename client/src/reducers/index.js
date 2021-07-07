import { combineReducers } from 'redux';
import events from './eventsReducer'
import meetings from './meetingsReducer'
import profile from './profileReducer'
import members from './membersReducer'
import auth from './authReducer'

export default combineReducers({
    auth,
    events,
    meetings,
    members,
    profile
})