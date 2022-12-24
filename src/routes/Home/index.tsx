import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import MenuConta from "../../components/MenuConta";
import { ContaDTO } from "../../moldes/conta";
import * as contaService from '../../services/conta-service';

export default function Home() {

  const [contas, setContas] = useState<ContaDTO[]>([]);
  useEffect(() => {
    contaService.findAll()
      .then(response => {
        setContas(response.data.content);
      })
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="bk-menu-contas">
          <div className="container">
            <div className="container-menu-conta">
              {
                contas.map((conta) => <MenuConta key={conta.idConta} conta={conta} />
                )
              }
            </div>
          </div>
        </section>
        <Outlet />
      </main>
    </>
  );

}