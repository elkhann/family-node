import React from "react";
import classNames from "classnames";
import { IFamilyExtNode } from "relatives-tree";
import styles from "./FamilyNode.module.css";

interface Props {
  node: IFamilyExtNode;
  isRoot: boolean;
  onSubClick: (id: string) => void;
  style?: React.CSSProperties;
}

export default React.memo<Props>(function FamilyNode({
  node,
  isRoot,
  // onSubClick,
  style
}) {
  console.log(node);
  return (
    <div className={classNames(styles.root)} style={style}>
      <div
        className={classNames(
          styles.inner,
          styles[node.gender],
          isRoot && styles.isRoot
        )}
      ></div>
      <div className={styles.container}>
        <div className={styles.text}>
          <div>
            {node.name} {node.surname}
          </div>
          <div>{node.diagnosis}</div>
        </div>
      </div>

      {/* {node.hasSubTree && (
        <div
          className={classNames(styles.sub, styles[node.gender])}
          onClick={() => onSubClick(node.id)}
        />
      )} */}
    </div>
  );
});
