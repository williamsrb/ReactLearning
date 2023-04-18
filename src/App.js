import "./styles.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

import SectionData from "./data/section-data";
import SectionListData from "./data/section-list-data";

export default function App() {
  const sectionData = SectionData();
  const sectionDataList = SectionListData();
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title={sectionData.games.title}
          subtitle={sectionData.games.subtitle}
          listClass={sectionData.games.listClass}
        >
          {sectionDataList.games.map((gameItem) => (
            <ListItem
              url={gameItem.url}
              imageUrl={gameItem.imageUrl}
              altText={gameItem.altText}
            />
          ))}
        </Section>

        <Section
          title={sectionData.channel.title}
          subtitle={sectionData.channel.subtitle}
          listClass={sectionData.channel.listClass}
        >
          {sectionDataList.channel.map((channelItem) => (
            <ListItem
              url={channelItem.url}
              imageUrl={channelItem.imageUrl}
              altText={channelItem.altText}
            />
          ))}
        </Section>

        <Section
          title={sectionData.social.title}
          subtitle={sectionData.social.subtitle}
          listClass={sectionData.social.listClass}
        >
          {sectionDataList.social.map((socialItem) => (
            <ListItem
              url={socialItem.url}
              imageUrl={socialItem.imageUrl}
              altText={socialItem.altText}
            />
          ))}
        </Section>
      </main>
    </div>
  );
}
