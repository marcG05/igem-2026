import { ContentPage, SectionsTemplate } from "../../components/ContentRender.tsx";
import {College, Description, Engagement_Education, High_School, Regional_Expo, SherbMuseum, Vox_Pop,} from "./sections_texte.tsx";

export function Education() {
  return (
    <ContentPage>        
      <SectionsTemplate title={`Description`} left="10%" mt="4em" mb="2" align="center">
            <Description />
          </SectionsTemplate>
        


        <SectionsTemplate title={`Regional Expo-Sciences Finale in Sherbrooke`} left="10%" mt="0" mb="2">
          <Regional_Expo />
        </SectionsTemplate>
        
        <SectionsTemplate title={"Sherbrooke Science Museum stand"} left="10%" mt="0" mb="2">
          <SherbMuseum />
        </SectionsTemplate>

        <SectionsTemplate title={`Vox Pop`} left="10%" mt="0" mb="2">
          <Vox_Pop />
        </SectionsTemplate>
        
        <SectionsTemplate title={`Engagement and Education`} left="10%" mt="4em" mb="2">
          <Engagement_Education />
        </SectionsTemplate>

        <SectionsTemplate title={`High school activities`} left="10%" mt="0" mb="2">
          <High_School />
        </SectionsTemplate>

        <SectionsTemplate title={`College and professional formation center visits`} left="10%" mt="0" mb="5em">
          <College />
        </SectionsTemplate>

    </ContentPage>
  );
}
