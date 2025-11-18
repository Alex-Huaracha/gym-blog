import { Router } from 'express';
import {
  getPublishedPosts,
  getPostById,
} from '../controllers/postController.js';

const router = Router();

router.get('/', getPublishedPosts);
router.get('/:id', getPostById);

export default router;
