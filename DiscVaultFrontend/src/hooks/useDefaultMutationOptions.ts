// import { EmailSend, ResponseError } from "@/api";
// import { useDrawer, useGift, useModal, useSnackbar } from "@/hooks";
// import { queryClient, useEmailSend } from "@/data";
// import { buttonDisabledAtom, SnackbarLink } from "@/packages";
// import { useSetAtom } from "jotai";

// type Props = {
//   invalidateQueries?: Array<Array<string> | string>;
// };

// type MutateOptions = {
//   closeDrawer?: boolean;
//   closeModal?: boolean;
//   unSelectGift?: boolean;
//   emailMessage?: EmailSend;
//   link?: SnackbarLink;
//   onSuccess?: () => void;
//   onError?: (e?: unknown) => void;
// };

// export const useDefaultMutationOptions = ({ invalidateQueries }: Props) => {
//   const { closeDrawer } = useDrawer();
//   const { closeModal } = useModal();
//   const { unselectGift } = useGift();
//   const setButtonIsDisabled = useSetAtom(buttonDisabledAtom);
//   const { snackbar } = useSnackbar();
//   const emailSend = useEmailSend();
//   return (defaultErrorMessage: string, successMessage: string, options?: MutateOptions) => ({
//     onError: (e: unknown) => {
//       snackbar.error((e as ResponseError)?.message ?? defaultErrorMessage);
//       options?.onError?.(e);
//     },
//     onSuccess: () => {
//       options?.link
//         ? snackbar.success(successMessage, { link: options.link, persist: true })
//         : snackbar.success(successMessage);
//       if (options?.closeDrawer) closeDrawer();
//       if (options?.closeModal) closeModal();
//       if (options?.unSelectGift) unselectGift();
//       if (options?.emailMessage) emailSend.mutate({ emailSend: options.emailMessage });
//       options?.onSuccess?.();
//       (invalidateQueries ?? []).forEach((query) => {
//         queryClient.invalidateQueries({ queryKey: typeof query === "string" ? [query] : query });
//       });
//     },
//     onSettled: () => {
//       setButtonIsDisabled(false);
//     },
//   });
// };
