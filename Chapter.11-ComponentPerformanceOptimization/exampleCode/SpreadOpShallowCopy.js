const todos = [
  { id: 1, checked: true },
  { id: 2, checked: true },
];
const nextTodos = [...todos];

nextTodos[0].checked = false;
console.log(todos[0] === nextTodos[0]); // 아직까지는 똑같은 객체를 가리키므로 true

nextTodos[0] = {
  ...nextTodos[0],
  checked: false,
};

console.log(todos[0] === nextTodos[0]); // 새로운 객체를 꺼내서 할당했으므로 false

// 객체의 경우 더욱 복잡해진다.
