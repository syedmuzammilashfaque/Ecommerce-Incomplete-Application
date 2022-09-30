import PostMessage from '../models/postMessage.js';
import mongoose from "mongoose";

// all post get api
export const getPost = async (req, res) => {
    try {

        const post = await PostMessage.findById(id);

        res.status(200).json(post);

    } catch (err) {

        res.status(400).json({ message: err.message });
    }
};


export const getPosts = async (req, res) => {
    try {

        const postMessage = await PostMessage.find();

        res.status(200).json(postMessage);

    } catch (err) {

        res.status(400).json({ message: err.message });
    }
};






// post upload api
export const createPost = async (req, res) => {

    const post = req.body;
    const newPost = new PostMessage(post);

    try {

        await newPost.save();

        res.status(201).json(newPost);

    } catch (err) {

        res.status(400).json({ message: err.message });
    }
};


export const updatePost = async (req, res) => {
    const { id: _id } = req.params;

    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    res.json(updatedPost);

};


export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });

};