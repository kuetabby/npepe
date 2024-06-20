import { useToast } from "@chakra-ui/react";

export const useCopyText = () => {
  const toast = useToast({
    containerStyle: {
      background: "#6366f1 !important",
    },
  });

  const copyContent = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      toast({
        title: `Copied!`,
        // status: "success",
      });
      /* Resolved - text copied to clipboard successfully */
    } catch (err) {
      console.error("Failed to copy: ", err);
      /* Rejected - text failed to copy to the clipboard */
    }
  };

  return [copyContent] as const;
};
