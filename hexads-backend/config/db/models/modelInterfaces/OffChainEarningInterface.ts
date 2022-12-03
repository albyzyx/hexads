const UserPreferencesInterface = {
  address: {
    type: String,
    required: true,
    unique: true,
  },
  earningXAT: {
    type: Number,
    default: 0,
  },
};

export default UserPreferencesInterface;
