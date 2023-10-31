import Job from "../models/Job.js";
import User from "../models/User.js";

/* CREATE */
export const createJob = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newJob = new Job({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newJob.save();

    const job = await Job.find();
    res.status(201).json(job);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedJobs = async (req, res) => {
  try {
    const job = await Job.find();
    res.status(200).json(job);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserJobs = async (req, res) => {
  try {
    const { userId } = req.params;
    const job = await Job.find({ userId });
    res.status(200).json(job);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likeJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const job = await Job.findById(id);
    const isLiked = job.likes.get(userId);

    if (isLiked) {
      job.likes.delete(userId);
    } else {
      job.likes.set(userId, true);
    }

    const updatedJob = await Job.findByIdAndUpdate(
      id,
      { likes: job.likes },
      { new: true }
    );

    res.status(200).json(updatedJob);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
