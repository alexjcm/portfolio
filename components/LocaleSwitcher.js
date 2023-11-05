import { useRouter } from 'next/router';

const LocaleSwitcher = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    router.push(pathname, asPath, { locale: language });    
    // change just the locale and maintain all other route information including href's query
   // router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  return (
    <select onChange={handleLanguageChange}>
      <option value="en-US">English</option>
      <option value="es">Español</option>
    </select>
  );
};

export default LocaleSwitcher;
