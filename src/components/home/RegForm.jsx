import { Box, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function RegForm({ state, handleChange, progress, uploadFile }) {
  const { regTypes, docTypes, offices } = useSelector(
    (state) => state.settings
  );
  return (
    <Box component="form">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field is-narrow">
            <label className="label">Tipo de registro</label>
            <div class="control">
              <div class="select is-fullwidth">
                <select
                  onChange={handleChange}
                  name="regTypeId"
                  value={state.regTypeId}
                >
                  <option value="">Clique para seleccionar</option>
                  {regTypes.map((el) => (
                    <option value={el.id} key={el.id}>
                      {el.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Tipo de Documento</label>
            <div className="control">
              <div class="select is-fullwidth">
                <select
                  onChange={handleChange}
                  name="docTypeId"
                  value={state.docTypeId}
                >
                  <option value="">Clique para seleccionar</option>
                  {docTypes.map((el) => (
                    <option value={el.id} key={el.id}>
                      {el.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-body">
          <div className="field">
            <label className="label">Referência do documento</label>
            <div className="control">
              <input
                name="docRef"
                className="input"
                type="text"
                placeholder="Codigo de referencia"
                value={state.docRef}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Data do documento</label>
            <div className="control">
              <input
                name="docDate"
                className="input"
                type="datetime-local"
                placeholder="Text input"
                value={state.docDate}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div class="field is-narrow">
        <label className="label">Instituição</label>
        <div class="control">
          <div class="select is-fullwidth">
            <select
              onChange={handleChange}
              name="officeId"
              value={state.officeId}
            >
              <option>Clique para seleccionar</option>
              {offices.map((el) => (
                <option value={el.id} key={el.id}>
                  {el.abr} - {el.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Assunto</label>
        <div className="control">
          <input
            name="subject"
            className="input"
            type="text"
            placeholder="Text input"
            onChange={handleChange}
            value={state.subject}
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Espera deferimento? </label>

        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <label class="radio">
                <input
                  onChange={handleChange}
                  type="radio"
                  name="needAnswer"
                  value="yes"
                  checked={state.needAnswer === "yes"}
                />
                Sim
              </label>
              <label class="radio">
                <input
                  onChange={handleChange}
                  type="radio"
                  name="needAnswer"
                  value="no"
                  checked={state.needAnswer === "no"}
                />
                Não
              </label>
            </div>
          </div>
        </div>
      </div>
      {progress === 0 ? (
        <div class="file">
          <label class="file-label">
            <input
              onChange={uploadFile}
              class="file-input"
              type="file"
              name="file"
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">Seleccionar ficheiro…</span>
            </span>
          </label>
        </div>
      ) : (
        <>
          <progress class="progress is-info" value={progress} max="100">
            {progress}%
          </progress>
          {progress === 100 && (
            <p className="help is-info">Ficheiro carregado com sucesso</p>
          )}
        </>
      )}
    </Box>
  );
}

export default RegForm;
