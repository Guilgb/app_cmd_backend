import { Router } from 'express';
import PostController from '../../app/controller/decks/PostController';

const router = Router();

router.post('/deck/:userId', PostController.post);
router.put('/deck/:deckId/user/:userId');
router.patch('/deck/:deckId/user/:userId');
router.delete('/deck/:deckId/user/:userId');

export default router;