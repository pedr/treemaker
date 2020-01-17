import React from "react";

const Tree = ({ treeStructure }) => {
  

  const Treenode = ({ structure }) => {
    return (
      <ul>
        {
          structure.children ? structure.children.map(child => {
            return (
              <>
                <li>{child.name}</li>
                <Treenode structure={child} />
              </>
            );
          })
      : null}
      </ul>
    )
  }

  return (
    <div className="bg-primary m-3" style={styles.spacer}>
      <div className="bg-warning p-3" style={styles.content}>
      <ul>
      {
        treeStructure.map(tree => {
          if (tree.name) {
            return (
              <>
                <li>{tree.name}</li>
                <Treenode structure={tree}/>
              </>
            )
          }
        })
      }
      </ul>

      </div>
    </div>
  )
}

const styles = {
  spacer: {
    paddingTop: 60,
    paddingBottom: 20
  },
  content: {
    marginLeft: -30,
    paddingLeft: 10,
    marginRight: -30,
    paddingRight: 10
  }
}


export default Tree;