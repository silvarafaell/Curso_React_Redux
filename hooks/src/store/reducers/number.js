export default function numberReducer(state, action) {
  // state o estado inicial, action uma ação
  // objetivo da função reducer é pegar o estado atual, e para cada ação for acontecendo você vai evoluir o estado alterando algum atributo.
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "numberMulti7":
      return { ...state, number: state.number * 7 };
    case "numberDiv25":
      return { ...state, number: state.number / 25 };
    case "numberInt":
      return { ...state, number: parseInt(state.number) };
    case "numberAddN":
      return { ...state, number: state.number + action.payload };
    default:
      return state;
  }
}
