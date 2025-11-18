import { createContext, useContext, useState, type ReactNode } from "react";

interface FontSizeControllerContextTypes {
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
}
const FontSizeControllerContext =
  createContext<FontSizeControllerContextTypes | null>(null);

export const FontSizeControllerContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [size, setSize] = useState<number>(2);
  return (
    <FontSizeControllerContext.Provider value={{ size, setSize }}>
      {children}
    </FontSizeControllerContext.Provider>
  );
};

export const useFontContext = () => {
  const context = useContext(FontSizeControllerContext);
  if (!context) {
    throw new Error("Context is not setted yet!");
  }
  return context;
};
