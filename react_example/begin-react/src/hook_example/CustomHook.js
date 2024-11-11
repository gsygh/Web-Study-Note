// 반복되는 로직 -> custom hook 개발하여 사용
// useEffect, useReduser, useState 등의 훅을 사용하여 개발
// 

import { useState, useCallback, useReducer } from "react";

// UseState 버전
// function useInputs(initialForm) {
//     const [form, setForm] = useState(initialForm);
//     const onChange = useCallback(e => {
//         const { name, value } = e.target;
//         setForm(form => ({
//             ...form,
//             [name]: value
//         }))
//     }, []);
//     const reset = useCallback(() => setForm(initialForm), [initialForm]);

//     return [form, onChange, reset];
// }
// export default useInputs; 


// useReducer 버전

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value
            }

        case 'RESET':
            // return {
                // 방법 1
                // ...state,
                // username: action.initialForm.username,
                // email: action.initialForm.email
            // }

            // 방법 2
            return Object.keys(state).reduce((acc, current) => {
                acc[current] = '';
                return acc;
              }, {});

        default:
            throw new Error("unhandled error");
    }
}

function useInputs(initialForm) {
    const [form, dispatch] = useReducer(reducer, initialForm);
    const onChange = useCallback((e) => {
        const { name, value } = e.target;

        dispatch({
            type: 'CHANGE',
            name,
            value
        });
    }, []);
    const reset = useCallback(e => {
        dispatch({
            type: 'RESET',
            initialForm
        });

    }, [initialForm]);

    return [form, onChange, reset];
}
export default useInputs;

