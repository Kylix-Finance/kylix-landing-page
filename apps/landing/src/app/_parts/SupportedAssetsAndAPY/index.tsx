import { ReactElement } from "react";
import Section from "~/components/Section";
import { supportedAssetsData } from "~/data";
import Card from "./components/Card";

export default function SupportedAssetsAndAPY(): ReactElement {
  return (
    <Section
      heading={supportedAssetsData.heading}
      description={supportedAssetsData.description}
      id={supportedAssetsData.id}
    >
      <ul className="mx-auto grid w-full max-w-3xl grid-cols-2 gap-6">
        {supportedAssetsData.items.map((asset) => (
          <li key={asset.symbol}>
            <Card
              symbol={asset.symbol}
              isLaunched={asset.isLaunched}
              src={asset.src}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
