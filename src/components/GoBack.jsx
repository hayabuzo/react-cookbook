import { useHistory } from "react-router-dom"

export function GoBack() {
  const {goBack} = useHistory();
  return  <button className="btn amber accent-4 goback" onClick={goBack}>back</button>
}