import { useContext } from "react";
import { RecipientsContext } from "../context/RecipientsContext.tsx";

export const useRecipients = () => {
  const context = useContext(RecipientsContext);
  if (!context) {
    throw new Error("useRecipients must be used within a RecipientsProvider");
  }
  return context;
};
