import Button from "components/Button/Button";

import { FeedbackProps } from "./types";
import {StyledFeedbackWrapper, FeedbackControl, StyledButtonWithCount, StyledFeedbackCount, Image, ImageControl} from "./styles";

function Feedback({like, onLike, dislike, onDislike, resetResults}: FeedbackProps) {
    
  return (
    <StyledFeedbackWrapper>
      <FeedbackControl>
        <StyledButtonWithCount>
          {/* <Button imgSrc={Like} name="Like" onClick={onLike} /> */}
          <Button name="Like" onClick={onLike} />
          <StyledFeedbackCount>{like}</StyledFeedbackCount>
        </StyledButtonWithCount>
        <StyledButtonWithCount>
          <Button name="Dislike" onClick={onDislike} />
          <StyledFeedbackCount>{dislike}</StyledFeedbackCount>
        </StyledButtonWithCount>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </StyledFeedbackWrapper>
  );
}

export default Feedback;