import React, { useState } from "react";
import PinchZoomPan from "pinch-zoom-pan";
import { IFamilyNode, IFamilyExtNode } from "relatives-tree";
import ReactFamilyTree from "react-family-tree";
import FamilyNode from "../FamilyNode/FamilyNode";
import styles from "./App.module.css";

import nodes from "../../sample.json";
const myID = "kuVISwh7w";

const WIDTH = 259;
const HEIGHT = 199;

export default React.memo<{}>(function App() {
  const [rootId, setRootId] = useState<string>(myID);
  // const onResetClick = useCallback(() => setRootId(myID), []);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>FamilyTree demo</h1>
        <a href="https://github.com/SanichKotikov/react-family-tree-example">
          GitHub
        </a>
      </header>
      <PinchZoomPan
        debug
        captureWheel
        min={0.5}
        max={2.5}
        className={styles.wrapper}
      >
        <ReactFamilyTree
          nodes={nodes as IFamilyNode[]}
          rootId={rootId}
          width={WIDTH}
          height={HEIGHT}
          canvasClassName={styles.tree}
          renderNode={(node: IFamilyExtNode) => (
            <FamilyNode
              key={node.id}
              node={node}
              isRoot={node.id === rootId}
              onSubClick={setRootId}
              style={{
                width: WIDTH,
                height: HEIGHT,
                transform: `translate(${node.left * (WIDTH / 2)}px, ${node.top *
                  (HEIGHT / 2)}px)`
              }}
            />
          )}
        />
      </PinchZoomPan>
      {/* {rootId !== myID && (
        <div className={styles.reset} onClick={onResetClick}>
          Reset
        </div>
      )} */}
    </div>
  );
});
