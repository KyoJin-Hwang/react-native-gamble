import {HANDT} from '@/types/Finger/finger-type';

interface PROPS {
  handArray: HANDT[];
  timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>;
  isCount: number;
  setIsFinal: React.Dispatch<React.SetStateAction<boolean>>;
  setHandArray: React.Dispatch<React.SetStateAction<HANDT[]>>;
}

const TimingCatch = (props: PROPS) => {
  if (props.handArray.length !== props.isCount && props.handArray.length >= 2) {
    if (props.timeoutRef.current) {
      clearTimeout(props.timeoutRef.current);
    }

    props.timeoutRef.current = setTimeout(() => {
      const endPoint = props.handArray.filter((data, idx) => {
        if (data.idx === Math.floor(Math.random() * idx)) {
          props.setIsFinal(true);
          return true;
        } else {
          return false;
        }
      });
      props.setHandArray(endPoint);
    }, 3000);
  }
};

export default TimingCatch;
