import style from "./EmailPanel.module.scss";

export function EmailPanel() {
  return (
    <div className={style.panelBody}>
      <button>Delete</button>
      <textarea name="enter-text" id="enter-text-id"></textarea>
      <button> Send now</button>
    </div>
  );
}
