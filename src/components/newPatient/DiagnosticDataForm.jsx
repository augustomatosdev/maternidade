import React from "react";

export default function DiagnosticDataForm({ state, handleChange }) {
  return (
    <div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Observações</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea
                class="textarea"
                rows={2}
                placeholder="Aqui você pode descrever observações como doenças crônicas, alergias, etc."
                name="observations"
                value={state.observations}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Antecedentes</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea
                class="textarea"
                rows={2}
                placeholder="Descreva a história do paciente."
                name="background"
                value={state.background}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Tratamentos</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea
                name="treatments"
                value={state.treatments}
                onChange={handleChange}
                class="textarea"
                rows={2}
                placeholder="Descrever tratamentos e/ou medicamentos tomados pelo paciente."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Cirurgias</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea
                name="surgeries"
                value={state.surgeries}
                onChange={handleChange}
                class="textarea"
                rows={2}
                placeholder="Aqui você pode descrever cirurgias anteriores."
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
