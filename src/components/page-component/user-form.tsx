import { useHairContext } from "../../context/hair-provider";
import BaseButton from "../ui/base-button";
import BaseInput from "../ui/base-input";

const UserForm = () => {
  //@ts-ignore
  const { handleNext, handleBack } = useHairContext();
  return (
    <>
      <h1 className="text-white text-7xl">
        Hoş Geldiniz! Hairtopia.2' ye Adım Atın
      </h1>
      <h1 className="text-white text-4xl italic mt-10">
        Devam etmeden önce, dilerseniz adınızı, soyadınızı ve yaşınızı
        girebilirsiniz
      </h1>
      <div className="w-full flex justify-center flex-col items-center gap-8 mt-14">
        <BaseInput placeholder="Adınız" />
        <BaseInput placeholder="Soyadınız" />
        <BaseInput placeholder="Yaşınız" />
        <div className="flex flex-col gap-5 mt-5">
          <BaseButton
            buttonText="Devam Et"
            additionalClassName="text-3xl"
            onClick={handleNext}
          />
          <BaseButton
            buttonText="Geri"
            additionalClassName="text-3xl"
            onClick={handleBack}
          />
        </div>
      </div>
    </>
  );
};

export default UserForm;
