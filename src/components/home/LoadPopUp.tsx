import { PopUp } from './PopUp'

// Defenition pour l'implementation des pop
type PopType = {
  title: string;
  text: string;
  margin: number;
  over?: boolean;
};

const pop: PopType[] = [{
  title: "test",
  text: "texte",
  margin: 0,
},{
  title: "test",
  text: "texte",
  margin: 100,
},{
  title: "test",
  text: "texte",
  margin: 120,
},{
  title: "test",
  text: "texte",
  margin: 100,
},{
  title: "test",
  text: "texte",
  margin: 50,
},{
  title: "test",
  text: "texte",
  margin: 20,
},{
  title: "test",
  text: "texte",
  margin: 10,
  over: true,
}]



export function LoadPopUp(){

    return (
        <>
            {pop.map((x, i) =>{
                if(x.over === undefined){
                    x.over = !((i%2) === 0);
                }
                return (<PopUp title={x.title} text={x.text} margin={x.margin} right={x.over}/>)
                }
            )}
        </>
    );
}
