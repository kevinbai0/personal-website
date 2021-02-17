import WorksCited from "../../projects/english-seminar/components/WorksCited";
import getNavBar from "../../projects/english-seminar/js/getNavBar";

const WorksCitedComponent = () => <WorksCited shouldUpdate={true} navigationBar={getNavBar(4, false)}/>;

export default WorksCitedComponent;