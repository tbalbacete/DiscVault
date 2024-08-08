import { CustomProps } from "@/packages";
import { useSnackbar as useNotistackSnackbar, SnackbarMessage, VariantType } from "notistack";

export const useSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = useNotistackSnackbar();

  const createHandler = (variant: VariantType) => (message: SnackbarMessage, options?: Partial<CustomProps>) =>
    enqueueSnackbar(message, { ...options, variant });

  const snackbar = (message: SnackbarMessage, options?: Partial<CustomProps>) =>
    createHandler("default")(message, options);
  snackbar.success = createHandler("success");
  snackbar.error = createHandler("error");

  return { dismissSnackbar: closeSnackbar, snackbar };
};
