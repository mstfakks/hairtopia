interface BaseSelectProps {
  explainText: string;
  items: Item[];
}

interface Item {
  value: string;
  label: string;
}

const BaseSelect = ({ explainText, items }: BaseSelectProps) => {
  return (
    <>
      <h1 className="text-white text-5xl">{explainText}</h1>
      <div className="flex flex-col w-full items-center justify-center gap-3 mt-5">
        {items?.map((item) => (
          <div className="border border-white w-2/4 text-center rounded-xl py-3 text-2xl cursor-pointer">
            <input hidden value={item.value} className="w-full" />
            <label className="text-white">{item.label}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default BaseSelect;
