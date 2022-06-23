import React from "react";
import MUIDataTable from "mui-datatables";
import { patientsTableColumns } from "../../utils/patientsTableColumns";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const today = dayjs(new Date());
const options = {
  filterType: "checkbox",
};

function PatientsTable() {
  const navigate = useNavigate();
  const patients = useSelector((state) => state.patients.patients);
  const data = patients.map((el) => {
    const newData = {
      id: el.id,
      name: el.fName + " " + el.lName,
      address: el.municipalty + ", " + el.province,
      idNum: el.idNum,
      age: today.diff(el.birthDate, "year"),
      phone: el.phone,
    };
    return newData;
  });

  const columns = patientsTableColumns(navigate);

  console.log({ pacientes: data });
  return (
    <MUIDataTable
      title={"Lista de pacientes cadastrados"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default PatientsTable;
