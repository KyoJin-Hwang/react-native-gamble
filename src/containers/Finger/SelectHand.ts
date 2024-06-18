import {GestureResponderEvent} from 'react-native';

interface PROPS {
  event: GestureResponderEvent;
  setData: React.Dispatch<React.SetStateAction<HANDT[]>>;
  isFinal: boolean;
}

interface HANDT {
  idx: number;
  x: number;
  y: number;
}

const SelectHand = (props: PROPS) => {
  const {touches} = props.event.nativeEvent;

  const touchList = touches.map((data: any) => ({
    idx: +data.identifier,
    x: data.pageX - 50,
    y: data.pageY - 50,
  }));

  if (!props.isFinal) {
    props.setData(touchList);
  }
};

export default SelectHand;
