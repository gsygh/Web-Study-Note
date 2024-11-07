// 반복되는 로직 -> custom hook 개발하여 사용
// useEffect, useReduser, useState 등의 훅을 사용하여 개발
// 

import { useState, useCallback } from "react";

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({
            ...form,
            [name]: value
        }))
    }, []);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
}
export default useInputs; 

// 해볼 것
// useState 대신 useReducer 를 사용
function reducer(state, action) {
    //Change
    // reset
}