import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form/index";

import { fetchOffices } from "../store/data";

export function Home() {
  const offices = useSelector((office) => office.data.offices);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffices());
  }, [dispatch]);

  return (
    <div id="home-aside">
      <aside id="aside-component">
        <strong id="strong-aside">Quero uma vaga</strong>
        <p id="p-aside">
          Cadastre seus dados para tentar uma entrevista de emprego.
        </p>
      </aside>
      <aside id="main-component">
        <Form offices={offices} />
      </aside>
    </div>
  );
}
