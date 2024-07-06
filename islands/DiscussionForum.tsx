
import { useState } from "preact/hooks";

export default function DiscussionForum() {
  const [comments, setComments] = useState([
    { id: 1, name: "Jane Doe", comment: "I found this lesson very insightful!" },
    { id: 2, name: "John Smith", comment: "Can someone explain the last part of the video?" },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    setComments([...comments, { id: comments.length + 1, name: "You", comment: newComment }]);
    setNewComment("");
  };

  return (
    <div class="my-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4 text-green-600">Discussion Forum</h2>
      <div class="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} class="bg-gray-100 p-4 rounded-lg">
            <p class="text-gray-800 font-semibold">{comment.name}</p>
            <p class="text-gray-600">{comment.comment}</p>
          </div>
        ))}
      </div>
      <div class="mt-4">
        <input
          type="text"
          class="w-full bg-gray-100 text-gray-800 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Add a comment..."
          value={newComment}
          onInput={(e) => setNewComment(e.target.value)}
        />
        <button
          class="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
          onClick={handleCommentSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
