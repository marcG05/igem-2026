import { ContentPage, SectionsTemplate } from "../../components/ContentRender.tsx";
import { IntegHum } from "./sections_texte.tsx";

export function HumanPractices() {
  return (
    <ContentPage>
        <SectionsTemplate title={`Integrated Human Practices`} left="10%" mt="5em" mb="10em">
          <IntegHum />
        </SectionsTemplate>

    </ContentPage>
  );
}
