import React, { useEffect } from "react";
import { getCurrentDocs } from "../../api/documents";
import CATable from "./CATable";

function CurrentArchive() {
  useEffect(() => {
    getCurrentDocs().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div>
      <div className="title has-text-centered">Arquivo corrente</div>
      <div className="subtitle has-text-centered">
        O arquivo corrente engloba todos os documentos que esperam algum tipo de
        resposta ou tramite
      </div>
      <CATable />
    </div>
  );
}

export default CurrentArchive;
