import { useTranslation } from 'react-i18next';
import useLocalStorage from '../../hooks/use-localstorage';
import i18n from '../../i18n';
import s from './index.module.css';

export default function ButtonLanguage(wd = 'auto', mg = 0, active = false) {
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'ua');

  const handleLenguageChange = () => {
    if (language === 'en') {
      i18n.changeLanguage('ua');
      setLanguage('ua');
    } else if (language === 'ua') {
      i18n.changeLanguage('en');
      setLanguage('en');
    }
  };
  return (
    <button
      type="button"
      className={active ? s.Active : s.Btn}
      style={{ width: wd, margin: mg }}
      onClick={handleLenguageChange}
    >
      {' '}
      {language === 'en' ? t('EN') : t('UA')}
    </button>
  );
}
