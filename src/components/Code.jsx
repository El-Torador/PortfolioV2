import { CopyBlock, dracula } from 'react-code-blocks';

function Code({ code, language, showLineNumbers }) {
  return (
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      theme={dracula}
    />
  );
}

export default Code;