import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks.js";
import { increment, amountAdded } from "@/features/counter/counter-slice.js";
import { useFetchBreedsQuery } from "@/features/dogs/dogs-api-slice.js";

const HomePage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  
  const { data = [], isFetching } = useFetchBreedsQuery();
  
  function handleClick() {
    dispatch(amountAdded(20));
  }
  
  return (
    <>
      <h1>Home page</h1>
      <p>Count: { count }</p>
      <button type="button" onClick={ handleClick }>Click</button>
      
      <div>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name:</th>
              <th>Picture:</th>
            </tr>
          </thead>
          <tbody>
          {data.map((breed) => (
            <tr key={breed.id}>
              <td>{breed.name}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;