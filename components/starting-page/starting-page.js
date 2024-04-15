import Sidebar from "../sidebar/sidebar";
import Suggested from "../suggested/suggested";
import classes from "./starting-page.module.css";

function StartingPageContent({userData}) {
  // Show Link to Login page if NOT auth
console.log('isi userdata', userData)
  return (
    <section className={classes.starting}>
      <Sidebar />
      <Suggested data={userData}/>
    </section>
  );
}

export default StartingPageContent;
