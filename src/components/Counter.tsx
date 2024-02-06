import { FC } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

interface CounterProps {
  end: number;
  decimals?: number;
  extraClass?: string;
}

const Counter: FC<CounterProps> = ({ end, decimals, extraClass }) => {
  return (
    <CountUp
      end={end || 100}
      duration={3}
      decimals={decimals || 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span
            className={`count-text ${extraClass}`}
            data-from="0"
            data-to={end}
            ref={countUpRef}
          >
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
