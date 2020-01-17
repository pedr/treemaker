import React, { useState } from "react";
import { Form, Tree } from "./components/index.js"

const Treemaker = () => {

  const [rawTree, setRawTree] = useState(`Pasta 1/Filha da pasta 1/doc.docx (20kb) 
Pasta 1/Outra filha da pasta 1/doc.ppt (10kb) 
Pasta 2/Filha da pasta 2/Neta da pasta 2/script.sh (45kb) 
Pasta 2/Filha da pasta 2/Outra neta da pasta 2/Bisneta da pasta 2/picture.png (5kb) 
Pasta 2/Outra filha da pasta 2/picture.png (25kb) 
`);

  const [treeStructure, setTreeStructure] = useState([]);
  
  const createTreeStructure = (elements) => {
    let result = [];
    let level = { result };

    elements.split("\n").forEach(path => {
      path.split('/').reduce((r, name) => {
        if(!r[name]) {
          r[name] = {result: []};
          r.result.push({name, children: r[name].result})
        }
        
        return r[name];
      }, level)
    })

    return result
  };

  React.useState(() => {
    setTreeStructure(createTreeStructure(rawTree))
  }, []);

  const reRender = () => {
    setTreeStructure(createTreeStructure(rawTree))
  }


  return (
    <div>
      <h1 className="text-white m1-2 text-center">Visualizador de arquivos estilo árvore</h1>
      <Form
        inputPath={[ rawTree, setRawTree ]}
        reRender={reRender}
      />
      <Tree
        treeStructure={treeStructure}
      />
    </div>
  )
}

export default Treemaker;