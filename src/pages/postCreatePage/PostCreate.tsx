import React from "react";
import ThemeForm from "./components/ThemeForm";
import ReceiverInput from "./components/ReceiverInput";
import ThemeTypeSelection from "./components/ThemeTypeSelection";
import { useThemeContext } from "./hooks/useThemeContext";

const PostCreate: React.FC = () => {
  const {
    handleChange,
    themeData,
    isButtonDisabled,
    handleButtonClick,
    setIsButtonDisabled,
    setThemeData,
  } = useThemeContext();

  return (
    <>
      <main className="flex justify-center font-pretendard">
        <ThemeForm
          handleChange={handleChange}
          themeData={themeData}
          isButtonDisabled={isButtonDisabled}
          handleButtonClick={handleButtonClick}
          setThemeData={setThemeData}
        >
          <ReceiverInput handleChange={handleChange} themeData={themeData} />
          <ThemeTypeSelection
            setIsButtonDisabled={setIsButtonDisabled}
            setThemeData={setThemeData}
          />
        </ThemeForm>
      </main>
    </>
  );
};

export default PostCreate;
