import React from "react";
import MUIDataTable from "mui-datatables";
import { archiveTableColumns } from "../../utils/patientsTableColumns";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const options = {
  filterType: "checkbox",
};

function CATable() {
  const navigate = useNavigate();
  const archive = useSelector((state) => state.archive.current);
  const { regTypes, docTypes, offices } = useSelector(
    (state) => state.settings
  );

  const data = archive.map((el) => {
    const newData = {
      regType: regTypes.filter((doc) => doc.id === el.regTypeId)[0].name,
      docType: docTypes.filter((doc) => doc.id === el.docTypeId)[0].name,
      docRef: el.docRef,
      id: el.id,
      abr: offices.filter((doc) => doc.id === el.officeId)[0].abr,
      office: offices.filter((doc) => doc.id === el.officeId)[0].name,
      subject: el.subject,
      date: dayjs(el.docDate).format("DD-MMM-YYYY"),
      createdAt: dayjs(el.createdAt).format("DD-MMM-YYYY"),
    };
    return newData;
  });

  const columns = archiveTableColumns(navigate);

  return (
    <MUIDataTable
      title={"Lista de documentos cadastrados"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default CATable;
