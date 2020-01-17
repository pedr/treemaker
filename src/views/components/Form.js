import React from "react";

const Form = ({inputPath, reRender}) => {

  const [input, setInput] = inputPath
  
  return (
    <div className="bg-warning">
      <div className="d-flex mx-5" style={{ marginBottom: -50 }}>
        <div className="input-group">
          <div className="d-flex flex-column">
            <span className="mx-3 pt-2 h3">Adicione caminhos...</span>
            <textarea
              className="form-control p-2"
              value={input}
              onChange={(e) => setInput(e.currentTarget.value)}
              cols="60"
              rows="6"
            />
          </div>
        </div>
        <button
          className="btn btn-dark ml-3 align-self-center"
          onClick={reRender}
        >Criar Árvore</button>
      </div>
    </div>
  )
}

export default Form;