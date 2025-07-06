import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.scss';

const inputVariants = {
  hidden: { x: '-100vw', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 0.9, stiffness: 50 },
  },
};

const listVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.8,
      bounce: 0.6,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hover: {
    boxShadow: '0 0 20px rgba(245, 178, 85, 0.84)',
    borderColor: '#5c67f2',
    transition: { duration: 0.3},
  },
};

const commentVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
};

const Comments = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      const newComment = {
        id: Date.now(),
        name,
        comment,
      };
      setCommentsList([newComment, ...commentsList]);
      setName('');
      setComment('');
    }
  };

  return (
    <div className="comment-wrapper">
      <motion.div
        className="comment-input-box"
        variants={inputVariants}
        initial="hidden"
        animate="visible"
      >
        <h1>Share your feedback & valuable Insights</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Candidate Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        className="comment-list-box"
        variants={listVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className="scroll-container">
          <AnimatePresence>
            {commentsList.length === 0 ? (
              <motion.div
                className="no-comments"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <svg
                  width="140"
                  height="140"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="no-insight-svg"
                >
                  <g>
                    <path
                      d="M12 10C9.79086 10 8 11.7909 8 14V40C8 42.2091 9.79086 44 12 44H20V54L32 44H52C54.2091 44 56 42.2091 56 40V14C56 11.7909 54.2091 10 52 10H12Z"
                      stroke="#5c67f2"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <circle cx="22" cy="26" r="2" fill="#5c67f2" />
                    <circle cx="32" cy="26" r="2" fill="#5c67f2" />
                    <circle cx="42" cy="26" r="2" fill="#5c67f2" />
                  </g>
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0; 0 -4; 0 0"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </svg>
                
                <p>No comments yet. Be the first!</p>
              </motion.div>
            ) : (
              commentsList.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  className="comment-item"
                  custom={i}
                  variants={commentVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.02, backgroundColor: '#e9f0ff' }}
                  whileInView={{ backgroundColor: '#f3faff' }}
                  viewport={{ once: false, amount: 0.6 }}
                >
                  <strong>{entry.name}</strong>
                  <p>{entry.comment}</p>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Comments;
