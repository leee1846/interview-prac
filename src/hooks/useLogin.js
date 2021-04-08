import useSWR from 'swr';

const useLogin = () => {
  const { data, mutate } = useSWR('login', () => window.login);

  return {
    data: data ? data : sessionStorage.getItem('user'),
    mutate: (login) => {
      window.login = login;
      mutate();
    },
  };
};

export default useLogin;
