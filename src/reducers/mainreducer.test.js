import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import mainReducer, {initialState, SET_TEXT, CHECK_STRENGTH} from './mainreducer';

const dispatch = (state = initialState, action) => {
    console.log("Dispatching : " +  "\nAction : " + JSON.stringify(action))
    return mainReducer(state, action)
}

describe("Reducer",
    () => {
        test(
            "returns the initial state if action has unknown type",
            () => {
                const action = {
                    type : "NONE"
                }
                const newState = dispatch(undefined, action)
                expect(newState.passwordText).toEqual("")
                expect(newState.strength).toEqual(null)
            }
        )
        test(
            "updates state correctly",
            () => {
                let newState = dispatch(undefined, {
                    type : SET_TEXT,
                    payload : "waba"
                })
                newState = dispatch(newState, {
                    type: CHECK_STRENGTH,
                                })

                expect(newState.passwordText).toEqual("waba")
                expect(newState.strength).toEqual(0)

            }
        )

        test(
            "updates strength to 0 for a single character password",
            () => {
                let newState = dispatch(undefined, {
                    type : SET_TEXT,
                    payload : "a"
                })
                newState = dispatch(newState ,{
                    type : CHECK_STRENGTH,
                })
                expect(newState.strength).toEqual(0)
            }
        )
        test(
            "updates strength to 0 for a 2 character password",
            () => {
                let newState = dispatch(undefined, {
                    type : SET_TEXT,
                    payload : "ab"
                })
                newState = dispatch(newState ,{
                    type : CHECK_STRENGTH,
                })
                expect(newState.strength).toEqual(0)
            }
        )
        test(
            "updates strength to 0 for a 3 character password",
            () => {
                let newState = dispatch(undefined, {
                    type : SET_TEXT,
                    payload : "abc"
                })
                newState = dispatch(newState ,{
                    type : CHECK_STRENGTH,
                })
                expect(newState.strength).toEqual(0)
            }
        )
        test(
            "updates strength to 0 for a 4 character password",
            () => {
                let newState = dispatch(undefined, {
                    type : SET_TEXT,
                    payload : "abcd"
                })
                newState = dispatch(newState ,{
                    type : CHECK_STRENGTH,
                })
                expect(newState.strength).toEqual(0)
            }
        )
        test(
            "updates strength to 0 for a 5 character password",
            () => {
                let newState = dispatch(undefined, {
                    type : SET_TEXT,
                    payload : "abcde"
                })
                newState = dispatch(newState ,{
                    type : CHECK_STRENGTH,
                })
                expect(newState.strength).toEqual(0)
            }
        )
        test(
            "updates strength to a positive non zero value for a 6 character password",
            () => {
                let newState = dispatch(undefined, {
                    type : SET_TEXT,
                    payload : "abcdef"
                })
                newState = dispatch(newState ,{
                    type : CHECK_STRENGTH,
                })
                expect(newState.strength).toBeGreaterThan(0)
                
            }
        )
        
    }
)