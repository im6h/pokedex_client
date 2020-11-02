import React from 'react';
import {
  Timeline,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineItem,
  TimelineContent,
} from '@material-ui/lab';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import PaperItem from './Paper';

const WrapperTimeLine: React.FC = () => {
  const store = useSelector((state: RootState) => state.generation);
  const { generations } = store;
  const { results } = generations;

  return (
    <>
      <div>
        <Timeline align="alternate">
          {results?.map((element: any, idx: number) => {
            return (
              <TimelineItem key={idx}>
                <TimelineSeparator>
                  <TimelineDot variant={idx === 0 ? 'default' : 'outlined'} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <PaperItem idx={idx + 1} />
                </TimelineContent>
              </TimelineItem>
            );
          })}
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent></TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
};
export default WrapperTimeLine;
