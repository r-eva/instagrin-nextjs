import Sidebar from "../sidebar/sidebar";
import Suggested from "../suggested/suggested";
import classes from "./starting-page.module.css";

function StartingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <section className={classes.starting}>
      <Sidebar />
      <Suggested/>
    </section>
  );
}

export default StartingPageContent;
