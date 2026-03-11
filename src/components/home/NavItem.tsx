import { useNavigate } from "react-router-dom";

function NavItem({title, path, iconPath}: {title:string, path:string, iconPath:string}){
    let nav = useNavigate();

    return (
        <div onClick={()=>{
            nav(path);
        }} style={{
            borderRadius : "15px",
            cursor : "pointer",
            color: "#FFFDF6",
            backgroundColor : "#88E788",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            alignContent: "center",
            padding: "0.2rem 0.4rem 0rem 0.2rem",
        }}>
            <img src={iconPath}/ >
            <p>{title}</p>
        </div>
    );
}


export default NavItem;