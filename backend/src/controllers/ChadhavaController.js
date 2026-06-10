import Chadhava from "../models/Chadhava.js";

export const createChadhava = async (req, res) => {
  try {
    req.body.totalOffering =
      Number(req.body.price || 0) * Number(req.body.bookingCount || 0);

    const data = await Chadhava.create(req.body);

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllChadhava = async (req, res) => {
  const data = await Chadhava.find();
  res.json(data);
};

export const getSingleChadhava = async (req, res) => {
  const data = await Chadhava.findById(req.params.id);
  res.json(data);
};

export const updateChadhava = async (req, res) => {
  try {
    req.body.totalOffering =
      Number(req.body.price || 0) * Number(req.body.bookingCount || 0);

    const updated = await Chadhava.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteChadhava = async (req, res) => {
  try {
    await Chadhava.findByIdAndDelete(req.params.id);

    res.json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
