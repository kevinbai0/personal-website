import CommentatorPage from "../../english-seminar/components/CommentatorPage";
import getNavBar from "../../english-seminar/js/getNavBar";

const Commentators = () => <CommentatorPage shouldUpdate={true} navigationBar={getNavBar(3, false)}/>;

export default Commentators;