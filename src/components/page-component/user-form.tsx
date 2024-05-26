import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseInput from "../ui/base-input";

const UserForm = () => {
  
  const { handleNext, handleBack, formik } = useHairContext();
  
  return (
    <>
      <h1 className="text-white text-6xl">
        HOŞ GELDİNİZ! HAİRTOPİA.2'YE ADIM ATIN
      </h1>
      <h1 className="text-white text-4xl mt-10">
        DEVAM ETMEDEN ÖNCE,DİLERSENİZ ADINIZI,SOYADINIZI VE YAŞINIZI GİREBİLİRSİNİZ
      </h1>
      <div className="w-full flex justify-center flex-col items-center gap-8 mt-14">
        <BaseInput 
          placeholder="ADINIZ"
          name="name"
          onBlur={formik?.handleBlur} 
          onChange={formik?.handleChange}
          value={formik?.values?.name}
        />
        <BaseInput 
          placeholder="SOYADINIZ"
          name="lastName"
          onBlur={formik?.handleBlur}
          onChange={formik?.handleChange}
          value={formik?.values?.lastName} 
        />
        <BaseInput 
          placeholder="YAŞINIZ"
          name="age"
          onBlur={formik?.handleBlur}
          onChange={formik?.handleChange}
          value={formik?.values.age} 
        />
        <div className="flex flex-col gap-5 mt-5 w-1/2">
          <BaseButton
            buttonText="DEVAM ET"
            additionalClassName="text-3xl"
            onClick={handleNext}
          />
          <BaseButton
            buttonText="GERİ"
            additionalClassName="text-3xl"
            onClick={handleBack}
          />
        </div>
      </div>
    </>
  );
};

export default UserForm;
