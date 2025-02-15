import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import Icon from '../Icon';
import { Context } from '../../contexts/LanguageContext';

const ReportStep = ({ data, step }) => {
  const { lang } = useContext(Context);

  const title = encodeURI('[Learn]: ');
  const body = encodeURI(`
**Step Number:** \`${step}\`
**Step Name:** \`${data.title}\`
**Language:** \`${lang}\`

**User Agent:** 
\`${window.navigator.userAgent.replace(/;/g, ',')}\`

---

**What is the problem you are experiencing?**


    
`);

  return (
    <div className="report-step">
      <a
        href={`https://github.com/aykutkardas/regexlearn.com/issues/new?title=${title}&body=${body}`}
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="bell" size={10} />
        <span>
          <FormattedMessage id="general.reportStep" />
        </span>
      </a>
    </div>
  );
};

export default ReportStep;
