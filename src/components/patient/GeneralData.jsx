import dayjs from "dayjs";
import React from "react";
import IconAndText from "./IconAndText";

export default function GeneralData({ state }) {
  return (
    <div className="columns">
      <div className="column is-5">
        <h1 className="subtitle has-text-weight-bold mb-2">DADOS PRINCIPAIS</h1>
        {state.credentials && (
          <>
            <div class="content">
              <IconAndText
                icon="fas fa-user"
                text={`${state.credentials.fName} ${state.credentials.lName}`}
              />
              <IconAndText
                icon="fas fa-address-card"
                text={`${state.credentials.idNum}`}
              />
              <IconAndText
                icon="fas fa-mars-and-venus"
                text={`${
                  state.credentials.gender === "male" ? "Masculino" : "Feminino"
                }`}
              />
              <IconAndText
                icon="fas fa-calendar"
                text={`${dayjs(state.credentials.createdAt).format(
                  "DD-MMM-YY"
                )}`}
              />
              <IconAndText
                icon="fas fa-briefcase"
                text={`${state.credentials.job}`}
              />
              <IconAndText
                icon="fas fa-flag"
                text={`${state.credentials.nationality}`}
              />
            </div>
            <h1 className="subtitle is-size-5 has-text-weight-bold m-2">
              CONTACTO DE EMERGÊNCIA
            </h1>
            <IconAndText
              icon="fas fa-user"
              text={`${state.credentials.emergencyPerson}`}
            />
            <IconAndText
              icon="fas fa-phone"
              text={`${state.credentials.emergencyPhone}`}
            />
          </>
        )}
      </div>
      <div className="column is-7">
        <article class="message is-info">
          <div class="message-body">
            {state.credentials && (
              <div class="content">
                <IconAndText
                  icon="fas fa-location-pin"
                  text={`${state.credentials.address}, ${state.credentials.municipalty}, ${state.credentials.province}.`}
                />
                <IconAndText
                  icon="fas fa-phone"
                  text={`${state.credentials.phone}`}
                />
                <IconAndText
                  icon="fas fa-envelope"
                  text={`${state.credentials.email}`}
                />
                <IconAndText
                  icon="fas fa-user"
                  text={`${dayjs(new Date()).diff(
                    state.credentials.birthDate,
                    "year"
                  )} anos`}
                />
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}
