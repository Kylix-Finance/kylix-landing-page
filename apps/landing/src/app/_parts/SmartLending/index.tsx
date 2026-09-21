import Section from "~/components/Section";
import Card from "./components/Card";
import { smartLendingData } from "~/data";

const SmartLending = () => {
  return (
    <Section
      heading={smartLendingData.heading}
      description={smartLendingData.description}
      id={smartLendingData.id}
    >
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {smartLendingData.items.map((item) => (
          <Card key={item.heading} {...item} />
        ))}
      </div>
    </Section>
  );
};

export default SmartLending;
