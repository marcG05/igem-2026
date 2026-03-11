import NavItem from './NavItem';

import './Navbar2.css'

const items = [{
    title: "Home",
    path: "/",
    icon: "https://static.igem.wiki/teams/5756/assets/images/wiki/navbar/home.svg"
},
{
    title: "project",
    path: "/project",
    icon: "https://static.igem.wiki/teams/5756/assets/images/wiki/navbar/plant.svg"
},
{
    title: "Lab",
    path: "/lab",
    icon: "https://static.igem.wiki/teams/5756/assets/images/wiki/navbar/electricity.svg"
},
{
    title: "Human practices",
    path: "/humanPractices",
    icon: "https://static.igem.wiki/teams/5756/assets/images/wiki/navbar/heart.svg"
},
{
    title: "Team",
    path: "/Team",
    icon: "https://static.igem.wiki/teams/5756/assets/images/wiki/navbar/team.svg"
},
{
    title: "Sponsor",
    path: "/sponsor",
    icon: "https://static.igem.wiki/teams/5756/assets/images/wiki/navbar/sponso.svg"
},
]


function Navbar2(){
    return (
        <div style={{
            backgroundImage: 'url("https://static.igem.wiki/teams/5756/assets/images/wiki/navbar/header.svg")',
            marginTop: "0",
            backgroundRepeat: "no-repeat, repeat",
            backgroundSize: "cover",
            height: "20vh",
            overflow: "hidden"
        }}>

            <div style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                gap: "1rem",
                position: "relative",
                top: "1rem",
            }}>
                <img src="https://static.igem.wiki/teams/5756/assets/images/wiki/navbar/logo.svg" />

                <h1 style={{color: "#FFFDF6"}}>Electrophyll</h1>
            </div>
            
            <div style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                display: "flex",
                flexDirection: "row",
                gap: "2rem",
                zIndex: 2,
            }}>
            {items.map((x) =>{
                return (<NavItem key={x.path} title={x.title} path={x.path} iconPath={x.icon}/>);
            })}
            </div>
            <div style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
                height: "20vh"
            }}>
                <img style={{
                    position: "absolute",
                    top: "0rem",
                    right: "0.2rem",
                    zIndex: 1,
                    height: "20vh",
                    overflow: "hidden"
                }} src="https://static.igem.wiki/teams/5756/assets/images/wiki/navbar/uds.svg" />
            </div>

        </div>
    );
}

export default Navbar2;