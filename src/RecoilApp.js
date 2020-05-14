import React, { useEffect } from 'react';
import { atom, useRecoilState, useRecoilValue, selector } from 'recoil';

function RecoilApp() {
  useEffect(() => {
      console.log('test');
  });
  return(
    <div>
      Recoil App
      <TextInput />
      <DifferentText />
      <CharCount />
    </div>
  );
}

const textState = atom({key: 'textState', default: ''});

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = event => {
    setText(event.target.value);
  }

  return(
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

function DifferentText() {
  const text = useRecoilValue(textState);
  return(
    <div>
      EchoDifferent: {text}
    </div>
  );
};

function CharCount() {
  const count = useRecoilValue(countState);
  return <>Charset Count: {count}</>;
}

const countState = selector({
  key: 'countState',
  get: ({get}) => {
    const text = get(textState);
    return text.length;
  },
});

export default RecoilApp;
