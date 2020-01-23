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
  const deadLine = node.dead ? (
    node.gender === "male" ? (
      <hr className={classNames(styles.line)} />
    ) : (
      <hr className={classNames(styles.line, styles.lineFemale)} />
    )
  ) : (
    ""
  );

  const rootTriangle =
    node.gender === "male" ? (
      <div className={classNames(isRoot && styles.rootTriangle)} />
    ) : (
      <div
        className={classNames(
          isRoot && styles.rootTriangle,
          isRoot && styles.rootTriangleFemale
        )}
      />
    );

  let diagnosisStyle = "";
  switch (node.diagnosis) {
    case "Brain":
      diagnosisStyle = styles.brainCircle;
      break;
    case "Pancreas":
      diagnosisStyle = styles.pancreasSquare;
      break;
    case "Thyroid":
      diagnosisStyle = styles.thyroidSquare;
      break;
    case "Breast":
      diagnosisStyle = styles.breastSquare;
      break;
    case "Ovary":
      diagnosisStyle = styles.ovarySquare;
      break;
    case "Lung":
      diagnosisStyle = styles.lungSquare;
      break;
    default:
      diagnosisStyle = "";
  }

  return (
    <div className={styles.root} style={style}>
      <div
        className={classNames(
          styles.inner,
          styles[node.gender],
          isRoot && styles.isRoot
        )}
      >
        <div className={styles.root} />
        <div className={diagnosisStyle} />
      </div>
      {deadLine}
      {rootTriangle}
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
