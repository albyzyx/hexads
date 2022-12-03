const TargetKeywordInterface = {
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  keyword: {
    type: String,
    required: true,
  },
};

export default TargetKeywordInterface;
