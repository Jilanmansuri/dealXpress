import express from 'express';
import {
  startNegotiation,
  sendMessage,
  submitOffer,
  respondToOffer,
  getNegotiationMessages,
  getMyNegotiations
} from '../controllers/negotiationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, startNegotiation);
router.route('/my').get(protect, getMyNegotiations);
router.route('/:id/messages').get(protect, getNegotiationMessages);
router.route('/:id/message').post(protect, sendMessage);
router.route('/:id/offer').post(protect, submitOffer);
router.route('/:id/respond').put(protect, respondToOffer);

export default router;
