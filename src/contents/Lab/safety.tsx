import { ContentPage, SectionsTemplate } from "../../components/ContentRender";
import { Battery_Testing, Coloration, Safety_First } from "./safetySections";

export function Safety() {
  return  (
    <ContentPage>
        <SectionsTemplate title={`Santé et sécurité`} left="10%" mt="4em" mb="2" align="center">
          <Safety_First />
        </SectionsTemplate>

        <SectionsTemplate title={`Battery testing overview`} left="10%" mt="4em" mb="2" align="center">
          <Battery_Testing />
        </SectionsTemplate>
        
        <SectionsTemplate title={`Coloration de gram`} left="10%" mt="4em" mb="2" align="center">
          <Coloration />
        </SectionsTemplate>
    </ContentPage>
  );
}