import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks.js";
import { increment, amountAdded } from "@/features/counter/counter-slice.js";
import { useFetchBreedsQuery } from "@/features/dogs/dogs-api-slice.js";
import { getTest } from "@/api/test.js";
import { useTranslation } from 'react-i18next';


const  HomePage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation();
  
  const { data = [], isFetching } = useFetchBreedsQuery();
  
  const getData = async () => {
    try {
      const response = await getTest();
      
      console.info("response", response);
    } catch (e) {
    
    }
  }
  
  function handleClick() {
    dispatch(amountAdded(20));
  }
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <>
      <h1>{ t('jo') }</h1>
      <p>Count: { count }</p>
      <div className="material-symbols-outlined">
        search
      </div>
      <div className="material-symbols-outlined">
        home
      </div>
      <button onClick={ () => changeLanguage('uz') }>UZB</button>
      <button onClick={ () => changeLanguage('ru') }>Русский</button>
      <hr/>
      <button type="button" onClick={ getData }>Click</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <p>Number of dogs fetched: { data.length }</p>
        <table>
          <thead>
          <tr>
            <th>Name:</th>
            <th>Picture:</th>
          </tr>
          </thead>
          <tbody>
          { data.map((breed) => (
            <tr key={ breed.id }>
              <td>{ breed.name }</td>
            </tr>
          )) }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomePage;