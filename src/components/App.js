
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, sort_by_author, sort_by_title } from "../redux/actions/fetchActions";

const App = () => {

  const { data } = useSelector(state => state);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])


  console.log(data)

  return (
    <div>
      <h1>Books List</h1>
      <button onClick={() => dispatch(sort_by_author())}>sort by author</button>&nbsp;
      <button onClick={() => dispatch(sort_by_title())}>sort by title</button>

      {

        data.map(item => {
          return <><h2>{item.title}</h2>
            <p>{item.authors}</p></>
        })

      }
    </div>
  )
}

export default App