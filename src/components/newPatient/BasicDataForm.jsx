import React from "react";

export default function BasicDataForm({ state, handleChange }) {
  return (
    <div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Nome</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                name="fName"
                value={state.fName}
                onChange={handleChange}
                class="input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Apelido</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                name="lName"
                value={state.lName}
                onChange={handleChange}
                class="input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Genero</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select
                  name="gender"
                  value={state.gender}
                  onChange={handleChange}
                >
                  <option value="female">Feminino</option>
                  <option value="male">Masculino</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Nascimento</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                name="birthDate"
                value={state.birthDate}
                onChange={handleChange}
                class="input"
                type="date"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Identidade (B.I)</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                name="idNum"
                value={state.idNum}
                onChange={handleChange}
                class="input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Nacionalidade</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input
                name="nationality"
                value={state.nationality}
                onChange={handleChange}
                class="input"
                type="text"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
