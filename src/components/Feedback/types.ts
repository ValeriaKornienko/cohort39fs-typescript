export interface FeedbackProps {
    like: number;
    onLike: () => void;
    dislike: number;
    onDislike: () => void;
    resetResults: () => void;
}