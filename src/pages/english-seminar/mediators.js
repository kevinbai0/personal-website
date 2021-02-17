import MediatorPage from "../../projects/english-seminar/components/MediatorPage";
import getNavBar from "../../projects/english-seminar/js/getNavBar";

const Mediators = () => <MediatorPage shouldUpdate={true} navigationBar={getNavBar(2, false)}/>;

export default Mediators;