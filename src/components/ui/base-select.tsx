import { FormikProps } from "formik";

interface BaseSelectProps {
  explainText: string;
  items: Item[];
  formik: FormikProps<any>
}

export interface Item {
  value: string;
  label: string;
  name: string;
}

const BaseSelect = ({ explainText, items, formik }: BaseSelectProps) => {
  

  const handleDivClick = (value: string, name: string) => {
    formik?.setFieldValue(name, value);
  };
  
  
  return (
    <>
      <h1 className="text-white text-5xl">{explainText}</h1>
      <div className="flex flex-col w-full items-center justify-center gap-3 mt-5">
        {items?.map((item) => (
          <div
            key={item.value} 
            className={`
              border 
              border-white 
              w-2/4 
              text-center 
              rounded-xl 
              py-3 
              text-2xl 
              cursor-pointer
              ${item.value === formik.values[item.name] ? 'bg-white text-black' : 'text-white'}
            `}
            onClick={() => handleDivClick(item.value, item.name ? item.name : '')}
          >
            <input 
              type="radio" 
              hidden 
              name={item.name} 
              value={item.value} 
              onBlur={formik?.handleBlur} 
              onChange={formik?.handleChange}
              checked={formik?.values[item.name] === item.value} 
              className="w-full" 
            />
            <label>{item.label}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default BaseSelect;
