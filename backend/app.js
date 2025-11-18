import express from 'express';
import cors from 'cors';
import postsRoutes from './routes/posts.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/posts', postsRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Gym Blog API! 💪 ');
});

export default app;
