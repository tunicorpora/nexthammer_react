import {toggleMenu} from './menu';


export const thunkCreator = (action) => {

    const { types, promise, ...rest } = action
    const [ REQUESTED, RESOLVED, REJECTED ] = types
    console.log("MORO hei")

    return (dispatch) => {
        console.log("anybody...?")
        //an async call...
        dispatch({ ...rest, type: REQUESTED})

        return promise
            .then(result => {
                if(result.error) throw new Error(result.error)
                dispatch({...rest, type: RESOLVED, result})
                return result
            })
            .catch(error => {
                dispatch({...rest, type: REJECTED, error})
                throw error
            
            })
    }

}

/**
 *
 * Hide the menu and launch an action
 *
 */
export function hideAndLaunch(dispatch, name, action){
    dispatch(toggleMenu(name, "hidden"))
    action();
}

