import Sidebar from "../sidebar/sidebar";
import classes from "./starting-page.module.css";

function StartingPageContent() {
  return (
    <section className={classes.starting}>
      <Sidebar />
      <h1>Welcome on Board!</h1>
      <div>
        <p>
          <h1>ha</h1>
        </p>
      </div>
    </section>
  );
}

export default StartingPageContent;
