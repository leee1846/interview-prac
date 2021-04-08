import useSWR from 'swr';

const useLogin = () => {
  const { data, mutate } = useSWR('login', () => window.login);

  return {
    data: data || sessionStorage.getItem('user'),
  };
};

export default useLogin;
