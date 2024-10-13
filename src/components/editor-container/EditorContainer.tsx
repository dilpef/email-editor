import styles from "./EditorContainer.module.scss";
import { DescriptionLetter } from "../description-letter/DescriptionLetter";
import { EmailText } from "../email-text/EmailText";
import { EmailPanel } from "../email-panel/EmailPanel";

export function EditorContainer() {
  return (
    <>
      <div className={styles.editorContainerBody}>
        <DescriptionLetter />
        <EmailText />
        <EmailPanel />
      </div>
    </>
  );
}
