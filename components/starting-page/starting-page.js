import Sidebar from "../sidebar/sidebar";
import classes from "./starting-page.module.css";

function StartingPageContent() {
  return (
    <section className={classes.starting}>
      <Sidebar />
      <h1>Welcome on Board!</h1>
    </section>
  );
}

export default StartingPageContent;
