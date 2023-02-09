export const headers = () => {
  const runtimeConfig = useRuntimeConfig();
  return {
    Authorization: `Bearer ${runtimeConfig.public.token}`,
  };
};

export const getServerUrl = function (path: string) {
  const runtimeConfig = useRuntimeConfig();
  return runtimeConfig.public.serverHost + "/" + path;
};
