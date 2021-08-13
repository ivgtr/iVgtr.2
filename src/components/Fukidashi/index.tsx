import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import classes from "./Fukidashi.module.scss";

type Props = {
  text: string;
  delay?: number;
};

const Speech: React.VFC<Props> = memo(({ text, delay = 100 }) => {
  const [speech, setSpeech] = useState<string>("");
  const refText = useRef<string>(text);
  const refTimer = useRef<number | undefined>(undefined);

  refText.current = speech;

  const handleSpeech = useCallback(() => {
    if (text.length > refText.current.length) {
      setSpeech(text.substring(0, refText.current.length + 1));

      refTimer.current = window.setTimeout(handleSpeech, 100);
    }
  }, [text]);

  useEffect(() => {
    setTimeout(handleSpeech, delay);
    return () => window.clearTimeout(refTimer.current);
  }, [handleSpeech, delay]);

  return <span className={classes.text}>{speech}</span>;
});

export const Fukidashi: React.VFC<{ text: string }> = ({ text }) => {
  if (!(text.length > 0)) return <></>;

  return (
    <div className={classes.box}>
      <div className="invisible px-2">
        <span className={classes.text}>{text}</span>
      </div>
      <div className="absolute top-0 left-0 px-2">
        <Speech text={text} />
      </div>
    </div>
  );
};
