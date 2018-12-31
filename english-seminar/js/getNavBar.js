import NavigationBar from "../components/NavigationBar";

const getNavBar = (selected, isLight) => {
    return <NavigationBar navItems={[
        { name: "Home", link: "/english-seminar" },
        { name: "Consulters", link: "/english-seminar/consulters" },
        { name: "Mediators", link: "/english-seminar/mediators"},
        { name: "Commentators", link: "/english-seminar/commentators" }
    ]}  selected={selected} lightBar={isLight}/>
}

export default getNavBar;