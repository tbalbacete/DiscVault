export const dontForward = (...props: string[]) => ({
  shouldForwardProp: (prop: string) => !props.includes(prop),
});
