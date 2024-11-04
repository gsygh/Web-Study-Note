// React.memo
// 컴포넌트에서 리랜더링이 불필요할 때 
// 이전에 랜더링했던 결과를 재사용할 수 있게 하는 함수
// 컴포넌트의 리랜더링 성능 최적화에 도움
// 
// 실제 코드는 ../array/CreateUser.js, ArrayRencering.js에 있음

// React.memo로 감싼 함수형 컴포넌트의 Props값이 변경되지 않으면 해당 컴포넌트는 리랜더링 되지 않음
// 단, React.memo 자체의 메모리가 있으므로 과도한 사용은 금지.

// useCallback 과 같은 Hook의 경우, deps에 users가 들어가있어 하나의 user을 수정 시 전체 users가 리랜더링 되는 현상 존재
// => deps에서 users를 제외하고, setUsers에 함수형 업데이트(setUsers(users => ...))