import Comment from './classTest.mjs';

const firstComment = new Comment('First comment');
firstComment.upvote();
firstComment.showComment(); // Выведет: Comment: First comment, Votes: 1
