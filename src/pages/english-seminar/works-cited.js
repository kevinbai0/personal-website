import WorksCited from "../../english-seminar/components/WorksCited";
import getNavBar from "../../english-seminar/js/getNavBar";

const WorksCitedComponent = () => <WorksCited shouldUpdate={true} navigationBar={getNavBar(4, false)}/>;

export default WorksCitedComponent;