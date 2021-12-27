export default function userReducer(state, action) {
  // state o estado inicial, action uma ação
  // objetivo da função reducer é pegar o estado atual, e para cada ação for acontecendo você vai evoluir o estado alterando algum atributo.
  switch (action.type) {
    case "login":
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}
