export const ctrlWrapper = (Controller) => {
  return async (req, res, next) => {
    try {
      await Controller(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
