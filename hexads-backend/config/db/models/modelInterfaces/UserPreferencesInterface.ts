const UserPreferencesInterface = {
  address: {
    type: String,
    required: true,
    unique: true,
  },
  targetsOf: {
    type: [Number],
  },
};

export default UserPreferencesInterface;
