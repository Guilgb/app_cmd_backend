import { Router } from 'express';
import PostController from '../../app/controller/decks/PostDeckController';
import UpdateDeckController from '../../app/controller/decks/UpdateDeckController';
import DeleteDeckController from '../../app/controller/decks/DeleteDeckController';
import AuthVerify from '../../app/middlewares/AuthVerify';

const router = Router();

router.post('/deck/:userId', AuthVerify, PostController.post);
router.put('/deck/:deckId/user/:userId', AuthVerify, UpdateDeckController.update);
router.delete('/deck/:deckId/user/:userId', AuthVerify, DeleteDeckController.deleteDeck);
router.patch('/deck/:deckId/user/:userId');

export default router;