import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form/index";

import { fetchEmployee } from "../store/employee";

export function Home() {
  const employee = useSelector((employee) => console.log("__>", employee));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployee());
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
        <Form />
      </aside>
    </div>
  );
}
