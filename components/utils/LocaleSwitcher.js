import { useRouter } from 'next/router';
import Form from 'react-bootstrap/Form';

import styles from './LocaleSwitcher.module.css';

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
    <Form className={styles.pLeft}>
      <Form.Control as="select" onChange={handleLanguageChange} className={styles.selectLang} aria-label="Select language">
        <option value="en-US">English</option>
        <option value="es">Español</option>
      </Form.Control>
    </Form>
  );
};

export default LocaleSwitcher;
